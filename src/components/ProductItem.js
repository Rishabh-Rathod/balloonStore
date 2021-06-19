import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"border-radius": "10px",
	"box-shadow": "0 2.8px 2.2px rgba(0, 0, 0, 0.02),   0 6.7px 5.3px rgba(0, 0, 0, 0.028),   0 12.5px 10px rgba(0, 0, 0, 0.035),   0 22.3px 17.9px rgba(0, 0, 0, 0.042),   0 41.8px 33.4px rgba(0, 0, 0, 0.05),   0 100px 80px rgba(0, 0, 0, 0.07) ;",
	"margin": "0 0 0px 0",
	"padding": "8px 14px 8px 14px",
	"height": "auto"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"height": "300px",
			"width": "100%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "20px 0 20px 0",
			"quarkly-title": "ServiceItemName",
			"children": "Service Name"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"quarkly-title": "ServiceItemDesp",
			"children": "Service Description -- This space is 100% editable. Use it to introduce a team member, describe their work experience and rol"
		}
	}
};

const ProductItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		product = {}
	} = props;
	const {
		name,
		desc,
		imageSrc
	} = product;
	console.log({
		product
	});
	const namePropsParent = override("text");
	namePropsParent.props = { ...namePropsParent.props
	};
	const descPropsParent = override("text1");
	descPropsParent.props = { ...descPropsParent.props
	};
	return <Box {...rest}>
		<Image {...override("image")} src={imageSrc} />
		<Text {...namePropsParent}>
			{name}
		</Text>
		<Text {...descPropsParent}>
			{desc}
		</Text>
		{children}
	</Box>;
};

Object.assign(ProductItem, { ...Box,
	defaultProps,
	overrides
});
export default ProductItem;