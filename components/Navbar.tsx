import Link from "next/link";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import KatalystLogo from "./KatalystLogo";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
				animate={hidden ? "hidden" : "vissible"}>
				<div className="w-[33%]">
					<Link
						href={"#home"}
						className="w-fit flex items-center">
						<KatalystLogo className="h-[40px] w-auto" />
					</Link>
				</div>
				<div className="flex gap-x-[20px] w-[33%] justify-center">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className="w-fit paragraph font-medium font-NeueMontreal text-[#0C0C0C] capitalize flex flex-col hover"
							href={item.href}>
							<TextHover
								titile1={item.title}
								titile2={item.title}
							/>
						</Link>
					))}
				</div>
				<div className="w-[33%] flex justify-end">
					<a
						href="https://calendly.com/kompanykatalyst/discovery-call"
						className="flex items-center justify-between gap-[10px] rounded-[50px] px-[20px] py-[8px] text-[12px] font-semibold tracking-[0.2em] uppercase text-[#FFF8F0] bg-[#F2613F] transition-all duration-300 hover:bg-[#0C0C0C]">
						<span>LET'S TALK</span>
						<span className="h-[24px] w-[24px] rounded-full bg-[#FFF8F0] flex items-center justify-center text-[#F2613F] text-[14px]">→</span>
					</a>
				</div>
			</motion.nav>
			<MobileNav />
		</>
	);
}
