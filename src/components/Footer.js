import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Icon, Box, Section } from "@quarkly/widgets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const defaultProps = {
	"background-color": "--dark",
	"text-align": "center",
	"padding": "32px 0"
};
const overrides = {
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--lead",
			"font-weight": "700",
			"margin": "-6px 0 16px",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--light",
			"padding": "6px 12px"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px 0px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"align-self": "center",
			"display": "flex"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebookF,
			"width": "48px",
			"height": "48px",
			"size": "24px",
			"margin-right": "16px",
			"background": "--color-primary",
			"border-radius": "50%",
			"align-self": "auto"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaLinkedinIn,
			"width": "48px",
			"height": "48px",
			"size": "24px",
			"margin-right": "16px",
			"background": "--color-primary",
			"border-radius": "50%",
			"align-self": "auto"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitter,
			"width": "48px",
			"height": "48px",
			"size": "24px",
			"margin-right": "16px",
			"background": "--color-primary",
			"border-radius": "50%",
			"align-self": "auto"
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Menu {...override("menu")}>
			<Override {...override("menuOverride")} />
			<Override {...override("menuOverride1")} />
			<Override {...override("menuOverride2")} />
		</Menu>
		<Box {...override("box")}>
			<Icon {...override("icon")} />
			<Icon {...override("icon1")} />
			<Icon {...override("icon2")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;