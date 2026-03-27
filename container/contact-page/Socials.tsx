"use client";
import Link from "next/link";
import { TextMask } from "@/animation";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Eyes } from "@/components";

export default function Socials() {
	const [rotate, setRotate] = useState(0);
	const phrase = ["INSTAGRAM"];
	const instagramUrl = "https://www.instagram.com/katalyst/";
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 280);
		});
	}, []);
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);
	return (
		<section
			className="w-full h-[30vh] overflow-hidden bg-[#F2613F] relative"
			ref={container}>
			<div className="absolute inset-0 flex items-center justify-start">
					<Link
						href={instagramUrl}
						target="_blank"
						rel="noreferrer"
						className="w-full max-w-[980px] px-[20px]">
						<h1 className="w-full text-[210px] leading-[165px] lg:text-[190px] lg:leading-[145px] md:text-[140px] md:leading-[120px] sm:text-[84px] sm:leading-[78px] xm:text-[72px] xm:leading-[58px] text-left font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase">
							<span className="underline-grow block max-w-fit">
								<TextMask>{phrase}</TextMask>
							</span>
						</h1>
					</Link>
				</div>
			<motion.div
				className="absolute top-[65%] right-[6%] flex gap-[30px] -translate-y-1/2"
				style={{ y: mq }}>
				<Eyes className="w-[230px] h-[230px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px]" />
			</motion.div>
		</section>
	);
}
