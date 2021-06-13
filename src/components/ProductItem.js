import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
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

const ProductItem = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" width="100%" />
		{children}
	</StackItem>;
};

Object.assign(ProductItem, { ...StackItem,
	defaultProps,
	overrides
});
export default ProductItem;