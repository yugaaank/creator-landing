"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import KatalystLogo from "./KatalystLogo";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="w-full fixed top-0 left-0 z-50 backdrop-blur-[7px] hidden justify-between items-center h-[8vh] padding-x sm:flex xm:flex md:flex">
				<Link
					href={"#home"}
					className="w-fit flex items-center">
					<KatalystLogo className="h-[30px] w-auto" />
				</Link>
				<div className="flex items-center gap-[15px]">
					<a
						href="https://calendly.com/kompanykatalyst/discovery-call"
						className="flex items-center justify-between gap-[10px] rounded-[50px] px-[15px] py-[6px] text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FFF8F0] bg-[#F2613F]">
						<span>LET'S TALK</span>
					</a>
					<HiOutlineMenuAlt4
						onClick={() => setToggle(true)}
						className="text-3xl cursor-pointer text-black"
					/>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
						className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex justify-between items-end flex-col bg-[#0C0C0C]">
						<div className="w-full flex justify-between items-center h-[8vh] border-b border-[#FFF8F055] padding-x">
							<Link
								href={"#home"}
								className="w-fit flex items-center">
								<KatalystLogo className="h-[35px] w-auto" textColor="#FFF8F0" />
							</Link>
							<IoMdClose
								onClick={() => setToggle(false)}
								className="text-3xl cursor-pointer text-[#FFF8F0]"
							/>
						</div>
						<ul className="w-full flex justify-center text-left flex-col gap-[10px] padding-x pt-[50px]">
							{footernavbarItems.map((item) => (
								<Link
									href={item.href}
									key={item.id}
									onClick={() => setToggle(false)}
									className="text-[80px] leading-[67px] font-FoundersGrotesk uppercase font-bold tracking-[-.9] text-[#FFF8F0]">
									{item.title}
								</Link>
							))}
						</ul>
						<div className="w-full padding-x pb-[50px]">
							<a
								href="https://calendly.com/kompanykatalyst/discovery-call"
								className="flex items-center justify-between gap-[20px] rounded-[50px] px-[30px] py-[15px] text-[18px] font-semibold tracking-[0.3em] uppercase text-[#FFF8F0] bg-[#F2613F] w-full">
								<span>LET'S TALK</span>
								<span className="h-[40px] w-[40px] rounded-full bg-[#FFF8F0] flex items-center justify-center text-[#F2613F] text-[20px]">→</span>
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
