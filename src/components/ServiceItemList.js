import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
import ServiceItemComp from "./ServiceItemComp";
const defaultProps = {
	"margin-top": "40px"
};
const services = [{
	title: 'ONE',
	desc: 'desc ONE'
}, {
	title: 'TWO',
	desc: 'desc ONE'
}, {
	title: 'ONE',
	desc: 'desc ONE'
}];
const overrides = {
	"serviceItemComp": {
		"kind": "ServiceItemComp",
		"props": {}
	}
};

const ServiceItemList = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		{services.map(service => {
			return <ServiceItemComp {...override("serviceItemComp")} title={service.title} desc={service.desc} />;
		})}
		{children}
	</Stack>;
};

Object.assign(ServiceItemList, { ...Stack,
	defaultProps,
	overrides
});
export default ServiceItemList;