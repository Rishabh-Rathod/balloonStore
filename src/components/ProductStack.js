import React from "react";
import { useOverrides, Override, Stack } from "@quarkly/components";
import ProductItem from "./ProductItem"; // --------------

const fetchProducts = () => {
	return fetch("https://spreadsheets.google.com/feeds/cells/1Mh8yK1fpeQQtRNQznKY4JXxi4i2pOzAY5huR9-hmf04/1/public/full?alt=json", {
		"body": null,
		"method": "GET"
	}).then(resp => resp.body).then(rb => {
		const reader = rb.getReader();
		return new ReadableStream({
			start(controller) {
				// The following function handles each data chunk
				function push() {
					// "done" is a Boolean and value a "Uint8Array"
					reader.read().then(({
						done,
						value
					}) => {
						// If there is no more data to read
						if (done) {
							controller.close();
							return;
						} // Get the data and send it to the browser via the controller


						controller.enqueue(value); // Check chunks by logging to the console

						push();
					});
				}

				push();
			}

		});
	}).then(stream => {
		// Respond with our stream
		return new Response(stream, {
			headers: {
				"Content-Type": "application/json"
			}
		}).json();
	}).then(result => {
		// Do things with result
		const products = [];

		if (result.feed) {
			const detailsKeyColIndexMap = {};
			const {
				feed = {}
			} = result;
			const {
				entry = []
			} = feed;
			const lastElement = entry[entry.length - 1];
			const {
				row,
				col
			} = lastElement["gs$cell"];
			const rowCount = Number(row);
			const colCount = Number(col);

			for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
				const product = {};

				for (let colIndex = 0; colIndex < colCount; colIndex++) {
					const cell = entry[colCount * rowIndex + colIndex];

					if (cell) {
						if (rowIndex < 1) {
							const {
								inputValue
							} = cell["gs$cell"] || {};
							detailsKeyColIndexMap[colIndex] = inputValue;
						} else {
							const {
								inputValue = ""
							} = cell["gs$cell"] || {};
							product[detailsKeyColIndexMap[colIndex]] = inputValue;
						}
					}
				}

				if (rowIndex > 0) {
					products.push(product);
				}
			}
		}

		return products;
	});
}; // --------------


const defaultProps = {
	"margin-top": "40px",
	"justify-content": "center"
};
const overrides = {
	"productItem": {
		"kind": "ProductItem",
		"props": {
			"margin": "10px 10px"
		}
	},
	"image": {
		"kind": "Override",
		"props": {
			"slot": "image",
			"src": "https://uploads.quarkly.io/60b3dbd28139c3001e127033/images/Untitled%20design.png?v=2021-06-11T20:09:55.567Z"
		}
	},
	"name": {
		"kind": "Override",
		"props": {
			"slot": "name",
			"text-overflow": "ellipsis",
			"height": "100px",
			"font": "--base"
		}
	},
	"desc": {
		"kind": "Override",
		"props": {
			"slot": "desc",
			"font": "--lead",
			"height": "100px",
			"overflow-y": "hidden"
		}
	}
};

const ProductStack = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [products, setProducts] = React.useState([]);
	React.useEffect(() => {
		const fetchProduct = async () => {
			const newProducts = await fetchProducts();
			setProducts(newProducts);
		};

		fetchProduct();
	}, [setProducts]);
	return <Stack {...rest}>
		{products.map(productObj => {
			return <ProductItem key={productObj.id} {...override("productItem")} product={{
				imageSrc: productObj.product_img_link,
				name: productObj.product_name,
				desc: productObj.product_desp
			}}></ProductItem>;
		})}
	</Stack>;
};

Object.assign(ProductStack, { ...Stack,
	defaultProps,
	overrides
});
export default ProductStack;