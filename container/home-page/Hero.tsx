"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Target, Rocket, Megaphone, Zap, Sparkles, BarChart, Lightbulb, Award, Activity, CheckCircle, ThumbsUp, Star, Heart, Smile, Compass, Coffee, CloudLightning, Globe, Sun } from "lucide-react";
import { katalystSide } from "@/public";

export default function Hero() {
	const stickers = [
		{ id: 1, Icon: TrendingUp, top: "18%", right: "15%", color: "#0C0C0C", bg: "#F2613F", rotate: 12, delay: 0.1 },
		{ id: 2, Icon: Target, top: "45%", right: "8%", color: "#FFF8F0", bg: "#0C0C0C", rotate: -15, delay: 0.2 },
		{ id: 3, Icon: Rocket, bottom: "30%", left: "5%", color: "#0C0C0C", bg: "#F2613F", rotate: 25, delay: 0.3 },
		{ id: 4, Icon: Megaphone, bottom: "25%", right: "25%", color: "#FFF8F0", bg: "#0C0C0C", rotate: -10, delay: 0.4 },
		{ id: 5, Icon: Zap, top: "12%", left: "10%", color: "#0C0C0C", bg: "#F2613F", rotate: -20, delay: 0.5 },
		{ id: 6, Icon: Sparkles, top: "8%", left: "45%", color: "#FFF8F0", bg: "#0C0C0C", rotate: 15, delay: 0.6 },
		{ id: 7, Icon: BarChart, top: "12%", right: "35%", color: "#0C0C0C", bg: "#F2613F", rotate: -5, delay: 0.7 },
		{ id: 8, Icon: Lightbulb, bottom: "15%", left: "20%", color: "#FFF8F0", bg: "#0C0C0C", rotate: 30, delay: 0.8 },
		{ id: 9, Icon: Award, bottom: "45%", right: "22%", color: "#0C0C0C", bg: "#F2613F", rotate: -25, delay: 0.9 },
		{ id: 10, Icon: Activity, bottom: "18%", right: "8%", color: "#FFF8F0", bg: "#0C0C0C", rotate: 10, delay: 1.0 },
		{ id: 11, Icon: CheckCircle, top: "5%", left: "3%", color: "#0C0C0C", bg: "#F2613F", rotate: -5, delay: 1.1 },
		{ id: 12, Icon: ThumbsUp, top: "5%", right: "5%", color: "#FFF8F0", bg: "#0C0C0C", rotate: 20, delay: 1.2 },
		{ id: 13, Icon: Star, top: "6%", left: "30%", color: "#0C0C0C", bg: "#F2613F", rotate: -15, delay: 1.3 },
		{ id: 14, Icon: Heart, top: "30%", right: "40%", color: "#FFF8F0", bg: "#0C0C0C", rotate: 10, delay: 1.4 },
		{ id: 15, Icon: Smile, top: "50%", left: "2%", color: "#0C0C0C", bg: "#F2613F", rotate: 5, delay: 1.5 },
		{ id: 16, Icon: Compass, top: "65%", right: "2%", color: "#FFF8F0", bg: "#0C0C0C", rotate: -25, delay: 1.6 },
		{ id: 17, Icon: Coffee, bottom: "5%", left: "10%", color: "#0C0C0C", bg: "#F2613F", rotate: 18, delay: 1.7 },
		{ id: 18, Icon: CloudLightning, bottom: "10%", right: "45%", color: "#FFF8F0", bg: "#0C0C0C", rotate: -12, delay: 1.8 },
		{ id: 19, Icon: Globe, top: "70%", left: "50%", color: "#0C0C0C", bg: "#F2613F", rotate: 22, delay: 1.9 },
		{ id: 20, Icon: Sun, bottom: "35%", right: "35%", color: "#FFF8F0", bg: "#0C0C0C", rotate: -8, delay: 2.0 },
	];

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative"
			data-scroll
			data-scroll-speed="-.3">
			{stickers
				.filter((st) => !st.bottom)
				.map((st) => (
				<motion.div
					key={st.id}
					initial={{ scale: 0, opacity: 0, rotate: 0 }}
					animate={{ scale: 1, opacity: 1, rotate: st.rotate }}
					whileHover={{ scale: 1.15, rotate: 0 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
						delay: 1.5 + st.delay,
					}}
					className="absolute z-10 hidden md:flex lg:flex xl:flex w-[70px] h-[70px] rounded-full items-center justify-center shadow-xl cursor-pointer"
					style={{
						top: st.top,
						bottom: st.bottom,
						left: st.left,
						right: st.right,
						backgroundColor: st.bg,
						color: st.color,
					}}>
					<st.Icon size={35} strokeWidth={1.5} />
				</motion.div>
			))}
			<div className="w-full h-full flex flex-col justify-between relative z-20">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#0C0C0C] font-semibold font-FoundersGrotesk uppercase">
								Digital Marketing <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										<Image
											width={120}
											height={50}
											src={katalystSide}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#0C0C0C] font-semibold font-FoundersGrotesk uppercase">
										& Growth
									</h1>
								</div>
								Strategy
							</h1>
						</div>

					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#4B2E2B55] bg-[#3A1B0D] p-[20px] sm:mb-[80px] xm:mb-[80px] gap-[25px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] sm:w-full">
								<p className="paragraph font-NeueMontreal font-semibold text-[#FFEDE0]">
									For Scalable Businesses
								</p>
								<p className="paragraph font-NeueMontreal text-[#FFEDE0]">
									From high-performance ad campaigns to conversion-optimized funnels that drive measurable ROI.
								</p>
							</div>
							<div className="flex gap-[10px]">
								<div className="w-10 h-10 bg-[#F2613F] rounded-full flex items-center justify-center text-[#FFF8F0] text-[18px]">
									✦
								</div>
								<div className="w-10 h-10 bg-[#FFEDE0] rounded-full flex items-center justify-center text-[#7C3E1A] text-[18px]">
									✓
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between padding-x">
							<a
								href="https://calendly.com/kompanykatalyst/discovery-call"
								className="flex items-center justify-between gap-[8px] rounded-[50px] px-[30px] py-[12px] text-[14px] font-semibold tracking-[0.3em] uppercase text-[#FFF8F0] bg-[#F2613F] shadow-[0_15px_40px_rgba(242,97,63,0.35)] transition-all duration-300 hover:bg-[#FFF8F0] hover:text-[#F2613F]"
								style={{ minWidth: "220px" }}>
								<span>LET'S TALK</span>
								<span className="h-[32px] w-[32px] rounded-full bg-[#FFF8F0] flex items-center justify-center text-[#F2613F] text-[18px]">→</span>
							</a>
							<span className="text-[14px] tracking-[0.4em] text-[#FFEDE0] uppercase">Live now</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
