import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<ReactLenis root>
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			<Footer />
			<svg
				height="0"
				width="0"
				style={{ position: "absolute" }}>
...
				<filter id="handDrawnNoise">
					<feTurbulence
						result="noise"
						numOctaves="8"
						baseFrequency="0.1"
						type="fractalNoise"></feTurbulence>
					<feDisplacementMap
						yChannelSelector="G"
						xChannelSelector="R"
						scale="3"
						in2="noise"
						in="SourceGraphic"></feDisplacementMap>
				</filter>
				<filter id="handDrawnNoise2">
					<feTurbulence
						result="noise"
						numOctaves="8"
						baseFrequency="0.1"
						seed="1010"
						type="fractalNoise"></feTurbulence>
					<feDisplacementMap
						yChannelSelector="G"
						xChannelSelector="R"
						scale="3"
						in2="noise"
						in="SourceGraphic"></feDisplacementMap>
				</filter>

				<filter id="handDrawnNoiset">
					<feTurbulence
						result="noise"
						numOctaves="8"
						baseFrequency="0.1"
						type="fractalNoise"></feTurbulence>
					<feDisplacementMap
						yChannelSelector="G"
						xChannelSelector="R"
						scale="6"
						in2="noise"
						in="SourceGraphic"></feDisplacementMap>
				</filter>
				<filter id="handDrawnNoiset2">
					<feTurbulence
						result="noise"
						numOctaves="8"
						baseFrequency="0.1"
						seed="1010"
						type="fractalNoise"></feTurbulence>
					<feDisplacementMap
						yChannelSelector="G"
						xChannelSelector="R"
						scale="6"
						in2="noise"
						in="SourceGraphic"></feDisplacementMap>
				</filter>
			</svg>
		</ReactLenis>
	);
}
