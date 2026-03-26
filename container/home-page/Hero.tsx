"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Target, Rocket, Megaphone, Zap, Sparkles, BarChart, Lightbulb, Award, Activity, CheckCircle, ThumbsUp, Star, Heart, Smile, Compass, Coffee, CloudLightning, Globe, Sun } from "lucide-react";
import { awwwards, ochiside } from "@/public";

export default function Hero() {
	const stickers = [
		{ id: 1, Icon: TrendingUp, top: "18%", right: "15%", color: "#212121", bg: "#CDEA68", rotate: 12, delay: 0.1 },
		{ id: 2, Icon: Target, top: "45%", right: "8%", color: "#f1f1f1", bg: "#212121", rotate: -15, delay: 0.2 },
		{ id: 3, Icon: Rocket, bottom: "30%", left: "5%", color: "#212121", bg: "#CDEA68", rotate: 25, delay: 0.3 },
		{ id: 4, Icon: Megaphone, bottom: "25%", right: "25%", color: "#f1f1f1", bg: "#212121", rotate: -10, delay: 0.4 },
		{ id: 5, Icon: Zap, top: "12%", left: "10%", color: "#212121", bg: "#CDEA68", rotate: -20, delay: 0.5 },
		{ id: 6, Icon: Sparkles, top: "8%", left: "45%", color: "#f1f1f1", bg: "#212121", rotate: 15, delay: 0.6 },
		{ id: 7, Icon: BarChart, top: "12%", right: "35%", color: "#212121", bg: "#CDEA68", rotate: -5, delay: 0.7 },
		{ id: 8, Icon: Lightbulb, bottom: "15%", left: "20%", color: "#f1f1f1", bg: "#212121", rotate: 30, delay: 0.8 },
		{ id: 9, Icon: Award, bottom: "45%", right: "22%", color: "#212121", bg: "#CDEA68", rotate: -25, delay: 0.9 },
		{ id: 10, Icon: Activity, bottom: "18%", right: "8%", color: "#f1f1f1", bg: "#212121", rotate: 10, delay: 1.0 },
		{ id: 11, Icon: CheckCircle, top: "5%", left: "3%", color: "#212121", bg: "#CDEA68", rotate: -5, delay: 1.1 },
		{ id: 12, Icon: ThumbsUp, top: "5%", right: "5%", color: "#f1f1f1", bg: "#212121", rotate: 20, delay: 1.2 },
		{ id: 13, Icon: Star, top: "6%", left: "30%", color: "#212121", bg: "#CDEA68", rotate: -15, delay: 1.3 },
		{ id: 14, Icon: Heart, top: "30%", right: "40%", color: "#f1f1f1", bg: "#212121", rotate: 10, delay: 1.4 },
		{ id: 15, Icon: Smile, top: "50%", left: "2%", color: "#212121", bg: "#CDEA68", rotate: 5, delay: 1.5 },
		{ id: 16, Icon: Compass, top: "65%", right: "2%", color: "#f1f1f1", bg: "#212121", rotate: -25, delay: 1.6 },
		{ id: 17, Icon: Coffee, bottom: "5%", left: "10%", color: "#212121", bg: "#CDEA68", rotate: 18, delay: 1.7 },
		{ id: 18, Icon: CloudLightning, bottom: "10%", right: "45%", color: "#f1f1f1", bg: "#212121", rotate: -12, delay: 1.8 },
		{ id: 19, Icon: Globe, top: "70%", left: "50%", color: "#212121", bg: "#CDEA68", rotate: 22, delay: 1.9 },
		{ id: 20, Icon: Sun, bottom: "35%", right: "35%", color: "#f1f1f1", bg: "#212121", rotate: -8, delay: 2.0 },
	];

	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px] relative"
			data-scroll
			data-scroll-speed="-.3">
			{stickers.map((st) => (
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
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
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
											src={ochiside}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-cover xl:mt-[15px] mt-[10px] rounded-[10px]"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										& Growth
									</h1>
								</div>
								Infrastructure
							</h1>
						</div>
						<div>
							<Image
								src={awwwards}
								alt="awwwards"
								width={60}
								height={60}
								className="xm:hidden sm:hidden"
							/>
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									For Scalable Businesses
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
										From SEO to high-performance ad campaigns
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="https://calendly.com/kompanykatalyst/discovery-call">
											Let's Talk
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
