import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
import ServiceItemComp from "./ServiceItemComp";
const defaultProps = {};
const overrides = {};
const products = [{
	title: 'Birthday Foil Balloons',
	desc: 'Foil balloons for birthday'
}, {
	title: '21st Birthday Balloon',
	desc: 'Foil balloon for 21st birthday'
}];

const ProductsListComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{products.map(product => {
			return <ServiceItemComp {...override("serviceItemComp")} title={product.title} desc={product.desc} />;
		})}
		{children}
	</Stack>;
};

Object.assign(ProductsListComp, { ...ServiceItemComp,
	defaultProps,
	overrides
});
export default ProductsListComp;