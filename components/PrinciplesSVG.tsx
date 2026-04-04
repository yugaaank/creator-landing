"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AuditPillarSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const scanX = useTransform(scrollYProgress, [0, 1], [-20, 120]);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const lensX = useTransform(scrollYProgress, [0, 1], [-10, 10]);

	// Move useTransform out of the map loop
	const dataPointOpacities = [
		useTransform(scrollYProgress, [0, 0.2 + 0 * 0.1], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + 1 * 0.1], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + 2 * 0.1], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + 3 * 0.1], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + 4 * 0.1], [0, 1]),
	];

	return (
		<div ref={ref} className="w-full h-[300px] bg-[#0C0C0C] rounded-[20px] flex items-center justify-center relative overflow-hidden group border border-[#F2613F]/10">
			{/* Grid Background */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="w-full h-full grid grid-cols-10 grid-rows-6">
					{[...Array(60)].map((_, i) => (
						<div key={i} className="border-[0.5px] border-[#F2613F]" />
					))}
				</div>
			</div>

			<svg viewBox="0 0 100 100" className="w-48 h-48 z-10">
				{/* The "Lens" */}
				<motion.g style={{ x: lensX }}>
					<circle cx="50" cy="50" r="30" stroke="#F2613F" strokeWidth="0.5" fill="none" />
					<motion.circle 
						cx="50" cy="50" r="25" 
						stroke="#FFF8F0" strokeWidth="2" fill="none"
						style={{ pathLength: scrollYProgress }}
					/>
					<motion.path 
						d="M70 70 L90 90" 
						stroke="#F2613F" strokeWidth="4" strokeLinecap="round" 
					/>
				</motion.g>

				{/* Scanning Line */}
				<motion.line 
					x1={scanX} y1="20" x2={scanX} y2="80" 
					stroke="#F2613F" strokeWidth="2" strokeOpacity="0.5"
				/>

				{/* Data Points */}
				{[...Array(5)].map((_, i) => (
					<motion.circle
						key={i}
						cx={20 + i * 15}
						cy={30 + (i % 3) * 20}
						r="2"
						fill="#F2613F"
						style={{ opacity: dataPointOpacities[i] }}
					/>
				))}
			</svg>
			
			<div className="absolute bottom-4 left-6">
				<span className="text-[10px] font-bold font-NeueMontreal uppercase tracking-[4px] text-[#F2613F]">Forensic Audit</span>
			</div>
		</div>
	);
};

export const EcosystemPillarSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

	// Move useTransform out of the map loop
	const particleY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
	const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

	return (
		<div ref={ref} className="w-full h-[300px] bg-[#FFF8F0] rounded-[20px] flex items-center justify-center relative overflow-hidden group border border-[#0C0C0C]/5 shadow-inner">
			<svg viewBox="0 0 100 100" className="w-48 h-48">
				{/* Funnel Concept */}
				<motion.path 
					d="M20 20 L80 20 L60 50 L60 80 L40 80 L40 50 Z" 
					stroke="#0C0C0C" strokeWidth="1.5" fill="none"
					style={{ pathLength }}
				/>
				
				{/* Internal Flow */}
				<motion.path 
					d="M50 25 V75" 
					stroke="#F2613F" strokeWidth="2" strokeDasharray="5 5"
					style={{ pathLength }}
				/>

				{/* Conversion Particles */}
				{[0, 1, 2].map((i) => (
					<motion.circle
						key={i}
						cx="50"
						cy={30 + i * 20}
						r="3"
						fill="#F2613F"
						style={{ 
							y: particleY,
							opacity: particleOpacity
						}}
					/>
				))}

				{/* Gear/Engine Element */}
				<motion.g style={{ rotate, x: 50, y: 80, originX: "50px", originY: "80px" }}>
					<rect x="42" y="72" width="16" height="16" rx="2" stroke="#0C0C0C" strokeWidth="1" fill="white" />
					<circle cx="50" cy="80" r="3" fill="#F2613F" />
				</motion.g>
			</svg>

			<div className="absolute bottom-4 left-6">
				<span className="text-[10px] font-bold font-NeueMontreal uppercase tracking-[4px] text-[#0C0C0C]/40">Growth Strategy</span>
			</div>
		</div>
	);
};
