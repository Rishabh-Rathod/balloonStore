import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"products"} />
		<Helmet>
			<title>
				Balloon Store | Products
			</title>
			<meta name={"description"} content={"Check out the list of best products for your events at the balloon store."} />
			<meta property={"og:title"} content={"Balloon Store | Products"} />
			<meta property={"og:description"} content={"Check out the list of best products for your events at the balloon store."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header transition="all --transitionDuration-fastest ease-in 0.5s" />
		<Section sm-padding="40px 0" font="--base" color="--dark" height="auto">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Our Services
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				Checkout list of our products for all sort of events.
			</Text>
			<Section margin="60px 0 0 0">
				<Override slot="SectionContent" align-items="center" />
				<Input
					width="50%"
					border-radius="20px"
					placeholder="Search Products"
					type="search"
					required={false}
					name="search"
				/>
			</Section>
			<Section padding="32px 0 32px 0" sm-padding="40px 0" font="--base" color="--dark">
				<Override slot="SectionContent" align-items="center" justify-content="center" height="100% border-box" />
				<Components.ProductStack margin="40px 0px -16px 0px">
					<Override slot="productItem" width="292px">
						<Override
							slot="text1"
							display="flex"
							text-overflow="ellipsis"
							overflow-y="hidden"
							font="normal 300 14px/1.5 --fontFamily-sans"
						/>
						<Override slot="text" font="normal 600 16px/1.5 --fontFamily-sans" />
					</Override>
				</Components.ProductStack>
			</Section>
		</Section>
		<Components.Footer position="static" transition="all --transitionDuration-fastest ease-in 0.5s" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});