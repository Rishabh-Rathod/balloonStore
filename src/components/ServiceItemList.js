import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
import ServiceItemComp from "./ServiceItemComp";
const defaultProps = {
	"margin-top": "40px"
};
const services = [{}, {}, {}];
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
		{services.map(() => {
			return <ServiceItemComp {...override("serviceItemComp")} />;
		})}
		{children}
	</Stack>;
};

Object.assign(ServiceItemList, { ...Stack,
	defaultProps,
	overrides
});
export default ServiceItemList;