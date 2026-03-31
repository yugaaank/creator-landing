"use client";
import Image from "next/image";
import { logo } from "@/public";
import { Marquee } from "@/components";
import { motion } from "framer-motion";

const techStack = [
	{ name: "GOOGLE ADS", category: "Search" },
	{ name: "SEO", category: "Growth" },
	{ name: "META ADS", category: "Social" },
	{ name: "INSTAGRAM", category: "Social" },
	{ name: "LINKEDIN", category: "Social" },
	{ name: "GOOGLE ANALYTICS", category: "Data" },
];

export default function GrowthEngine() {
	return (
		<section className="w-full bg-[#481E14] min-h-screen rounded-t-[20px]">
			<div className="w-full bg-[#481E14] z-10 relative rounded-t-[20px] padding-y">
				<Marquee
					title="the growth engine"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full bg-[#481E14] flex items-center justify-center pb-[100px] padding-x">
				<div className="w-full max-w-[1200px] p-[40px] bg-[#FFF8F0] rounded-[30px] shadow-2xl overflow-hidden relative">
					{/* Decorative Grid Overlay */}
					<div className="absolute inset-0 opacity-[0.03] pointer-events-none">
						<div className="w-full h-full grid grid-cols-12 grid-rows-12">
							{[...Array(144)].map((_, i) => (
								<div key={i} className="border-[0.5px] border-[#0C0C0C]" />
							))}
						</div>
					</div>

					<div className="w-full flex flex-col gap-[40px] relative z-10">
						<div className="flex justify-between items-start sm:flex-col xm:flex-col gap-[20px]">
							<div className="flex flex-col gap-[10px]">
								<h1 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C] lowercase leading-none">
									katalyst
								</h1>
								<h2 className="paragraph font-NeueMontreal font-bold text-[#F2613F] uppercase tracking-[2px]">
									Selected Growth Stack
								</h2>
							</div>
							<div className="max-w-[400px]">
								<p className="paragraph font-NeueMontreal font-normal text-[#0C0C0C] opacity-70">
									We integrate high-performance marketing tools to build the foundational strategy required for sustainable online growth.
								</p>
							</div>
						</div>

						{/* Tech Grid */}
						<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-1 gap-[20px] mt-[20px]">
							{techStack.map((tech, i) => (
								<motion.div
									key={tech.name}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ 
										scale: 1.05, 
										y: -10,
										backgroundColor: "#0C0C0C",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
									transition={{ delay: i * 0.05 }}
									viewport={{ once: true }}
									className="aspect-square p-[40px] bg-white rounded-[25px] border border-[#0C0C0C]/5 shadow-sm hover:shadow-[0_20px_50px_rgba(242,97,63,0.3)] transition-all group flex flex-col justify-between cursor-pointer relative overflow-hidden">
									
									{/* Hover Background Glow */}
									<motion.div 
										className="absolute inset-0 bg-gradient-to-br from-[#F2613F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
									/>

									<div className="w-[12px] h-[12px] rounded-full bg-[#F2613F] group-hover:scale-[1.5] transition-transform relative z-10" />
									
									<div className="relative z-10">
										<h4 className="text-[55px] lg:text-[45px] md:text-[40px] sm:text-[35px] leading-[0.9] font-bold font-FoundersGrotesk text-[#0C0C0C] group-hover:text-white uppercase tracking-tighter transition-colors break-words">
											{tech.name}
										</h4>
										<p className="text-[16px] font-NeueMontreal text-[#0C0C0C]/40 group-hover:text-[#F2613F] uppercase tracking-[2px] transition-colors mt-[15px]">
											{tech.category}
										</p>
									</div>

									{/* Decorative Icon or Arrow that appears on hover */}
									<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7 17L17 7M17 7H7M17 7V17" stroke="#F2613F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</motion.div>
							))}
						</div>

						<div className="flex justify-between items-end border-t border-[#0C0C0C]/10 pt-[40px] sm:flex-col xm:flex-col sm:items-start xm:items-start sm:gap-[20px] xm:gap-[20px]">
							<div>
								<h1 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase leading-none">
									Unified Growth <br /> Strategy
								</h1>
							</div>
							<div className="flex flex-col items-end sm:items-start">
								<span className="text-[14px] font-bold font-NeueMontreal text-[#F2613F] uppercase tracking-[3px]">
									Growth Engine v1.0
								</span>
								<h1 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C]">
									2026
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
