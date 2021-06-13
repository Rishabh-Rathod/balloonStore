import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Image, Text } from "@quarkly/widgets";
const defaultProps = {
	"lg-width": "50%",
	"sm-width": "100%",
	"background": "#ffffff",
	"border-radius": "30px",
	"box-shadow": "--l",
	"min-height": "450px",
	"max-height": "450px",
	"padding": "0px 0px 0px 0px",
	"width": "25%"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"height": "fit-content",
			"min-height": "200px",
			"border-radius": "30px 30px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "--headline3",
			"margin": "15px 0 5px 0",
			"children": "Nathan K. Joe"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "5px 0 5px 0",
			"children": "This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides."
		}
	}
};

const ProductItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" width="100%" />
		<Image {...override("image")} />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</StackItem>;
};

Object.assign(ProductItem, { ...StackItem,
	defaultProps,
	overrides
});
export default ProductItem;