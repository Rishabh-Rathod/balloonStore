import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section quarkly-title="HeroSection">
			<Section>
				<Override slot="SectionContent" flex-direction="row" margin="0px 0px 0px 0px" width="100% border-box" />
				<Section padding="24px 0 24px 0" margin="64px 0 0 0">
					<Override slot="SectionContent" margin="0px 24px 0px 24px" />
					<Text font="--headline2">
						Exclusive events, priceless{" "}
						<Span
							color="#F6B93B"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							memories.
						</Span>
					</Text>
					<Text font="normal 300 16px/1.5 --fontFamily-sans">
						We aim to provide you with the best experience within your budget. Our creativity and timely promised work makes us the best choice.
					</Text>
					<Section>
						<Override slot="SectionContent" flex-direction="row" margin="0px 0px 0px 0px" width="max-content" />
						<Components.CustomButton border-radius="20px" height="50px" max-width="180px">
							Book Now
						</Components.CustomButton>
					</Section>
				</Section>
				<Section>
					<Image height="400px" src="https://uploads.quarkly.io/60b3dbd28139c3001e127033/images/undraw_happy_feeling_slmw%20(1)%201.svg?v=2021-05-30T20:03:05.912Z" />
				</Section>
			</Section>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			quarkly-title="ServicesSection"
		>
			<Text
				as="h1"
				font="--headline2"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				Our Services
			</Text>
			<Stack margin-top="40px">
				<Components.ServiceItemComp />
			</Stack>
		</Section>
		<Section />
		<Components.Footer />
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