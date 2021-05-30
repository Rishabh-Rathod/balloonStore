import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "25%",
	"lg-width": "50%",
	"sm-width": "100%",
	"quarkly-title": "ServiceItem"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"border-radius": "10px",
			"box-shadow": "0 2.8px 2.2px rgba(0, 0, 0, 0.02),   0 6.7px 5.3px rgba(0, 0, 0, 0.028),   0 12.5px 10px rgba(0, 0, 0, 0.035),   0 22.3px 17.9px rgba(0, 0, 0, 0.042),   0 41.8px 33.4px rgba(0, 0, 0, 0.05),   0 100px 80px rgba(0, 0, 0, 0.07) ;",
			"margin": "0 0 0px 0",
			"padding": "8px 14px 8px 14px",
			"height": "auto"
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
			"children": "Service Description -- This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides."
		}
	}
};

const ServiceItemComp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" />
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</StackItem>;
};

Object.assign(ServiceItemComp, { ...StackItem,
	defaultProps,
	overrides
});
export default ServiceItemComp;