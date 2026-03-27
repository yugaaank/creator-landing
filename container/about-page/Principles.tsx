"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AuditPillarSVG, EcosystemPillarSVG } from "@/components";

export default function Principles() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

	return (
		<section ref={containerRef} className="w-full padding-y rounded-t-[30px] bg-[#FFF8F0] z-30 relative shadow-2xl overflow-hidden">
			{/* Decorative background number */}
			<div className="absolute top-[20%] right-[-5%] opacity-[0.02] pointer-events-none select-none">
				<h1 className="text-[600px] font-bold font-FoundersGrotesk leading-none text-[#0C0C0C]">02</h1>
			</div>

			<div className="padding-x mb-[80px] relative z-10">
				<motion.p 
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 0.5, x: 0 }}
					className="paragraph font-NeueMontreal uppercase tracking-[4px] mb-[20px]">
					The Foundation of Scale
				</motion.p>
				<h1 className="heading font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase leading-none">
					Two pillars we <br /> stand behind:
				</h1>
			</div>

			<div className="w-full border-t border-[#0C0C0C]/10 relative z-10">
				<div className="w-full padding-x mt-[80px] flex justify-between gap-[60px] sm:flex-col xm:flex-col items-start">
					
					{/* Pillar 01 */}
					<motion.div 
						style={{ y: y1 }}
						className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[40px] group">
						<AuditPillarSVG />
						<div className="flex flex-col gap-[25px]">
							<div className="flex items-center gap-[15px]">
								<span className="text-[14px] font-bold font-NeueMontreal text-[#F2613F] border border-[#F2613F] px-[10px] py-[2px] rounded-full">01</span>
								<h3 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase tracking-tight">
									Insight-Driven Audit
								</h3>
							</div>
							<p className="paragraph font-NeueMontreal text-[#0C0C0C] opacity-70 leading-relaxed max-w-[450px]">
								We surgically re-align audience perception using raw data and psychological insights. 
								Every strategy starts with a deep forensic audit of market bottlenecks.
							</p>
							<div className="w-full h-[1px] bg-[#0C0C0C]/10 group-hover:bg-[#F2613F] transition-colors duration-500" />
						</div>
					</motion.div>

					{/* Pillar 02 */}
					<motion.div 
						style={{ y: y2 }}
						className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[40px] mt-[120px] sm:mt-0 xm:mt-0 group">
						<EcosystemPillarSVG />
						<div className="flex flex-col gap-[25px]">
							<div className="flex items-center gap-[15px]">
								<span className="text-[14px] font-bold font-NeueMontreal text-[#F2613F] border border-[#F2613F] px-[10px] py-[2px] rounded-full">02</span>
								<h3 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase tracking-tight">
									Conversion Ecosystems
								</h3>
							</div>
							<p className="paragraph font-NeueMontreal text-[#0C0C0C] opacity-70 leading-relaxed max-w-[450px]">
								Infrastructure built to capture attention and never let go. Through precision 
								technical integration, we focus your audience exactly where ROI is generated.
							</p>
							<div className="w-full h-[1px] bg-[#0C0C0C]/10 group-hover:bg-[#F2613F] transition-colors duration-500" />
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
