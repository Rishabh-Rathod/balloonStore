import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Link, Section } from "@quarkly/widgets";
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
	"link": {
		"kind": "Link",
		"props": {
			"href": "mailto:hello@company.com",
			"text-decoration-line": "none",
			"variant": "--base",
			"color": "--grey",
			"hover-color": "--primary",
			"children": "hello@company.com"
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
		<Link {...override("link")} />
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;