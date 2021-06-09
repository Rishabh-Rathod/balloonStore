import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
import ServiceItemComp from "./ServiceItemComp";
const defaultProps = {};
const overrides = {};
const products = [{}, {}];

const ProductsListComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{products.map(() => {
			return <ServiceItemComp {...override("serviceItemComp")} />;
		})}
		{children}
	</Stack>;
};

Object.assign(ProductsListComp, { ...ServiceItemComp,
	defaultProps,
	overrides
});
export default ProductsListComp;