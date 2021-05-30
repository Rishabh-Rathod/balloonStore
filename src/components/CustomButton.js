import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"flex": "1 1 auto",
	"children": "Button"
};
const overrides = {};

const CustomButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(CustomButton, { ...Button,
	defaultProps,
	overrides
});
export default CustomButton;