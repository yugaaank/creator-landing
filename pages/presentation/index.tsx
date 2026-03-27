"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

export default function Campaign() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#FFF8F0"}>
				<Heropresentation />
				<Projectspresentation />
				<Publication />
				<Ready />
			</Curve>
		</>
	);
}
