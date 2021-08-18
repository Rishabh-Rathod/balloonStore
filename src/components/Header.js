import React from "react";
import { useOverrides, Override, Menu } from "@quarkly/components";
import { Image, Box, Section } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "180px",
			"height": "32px",
			"src": "https://uploads.quarkly.io/60b3dbd28139c3001e127033/images/BalloonStore.svg?v=2021-05-30T19:47:13.285Z"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--dark",
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
			"padding": "6px"
		}
	}
};

if (typeof window !== "undefined") {
	window.parent && window.parent.postMessage("HELLO FROM BALLOON STORE (window.parent)", "*");
	window.postMessage("HELLO FROM BALLOON STORE (window.postMessage)", "*");
}

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;