"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CardWrapper = ({ children, title, scrollYProgress }: { children: React.ReactNode; title: string; scrollYProgress: any }) => {
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

	return (
		<motion.div 
			style={{ opacity, scale }}
			className="w-full h-full bg-[#FFF8F0] rounded-[20px] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col items-center justify-center border border-[#0C0C0C]/5 relative overflow-hidden group">
			
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none">
				<div className="w-full h-full grid grid-cols-6 grid-rows-6">
					{[...Array(36)].map((_, i) => (
						<div key={i} className="border-[0.5px] border-[#000]" />
					))}
				</div>
			</div>

			<div className="z-10 w-full h-full flex items-center justify-center">
				{children}
			</div>

			<div className="absolute bottom-5 left-0 w-full text-center">
				<motion.span 
					className="text-[12px] font-bold font-FoundersGrotesk uppercase tracking-[3px] text-[#0C0C0C]">
					{title}
				</motion.span>
			</div>
			
			{/* Corner Decorative Element */}
			<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#F2613F]/20" />
		</motion.div>
	);
};

export const AuditSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const dashOffset = useTransform(scrollYProgress, [0, 1], [400, 0]);

	return (
		<CardWrapper title="01. Operational Audit" scrollYProgress={scrollYProgress}>
			<svg ref={ref} viewBox="0 0 200 200" className="w-40 h-40">
				<defs>
					<radialGradient id="grad1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#F2613F" stopOpacity="0.2" />
						<stop offset="100%" stopColor="#F2613F" stopOpacity="0" />
					</radialGradient>
				</defs>
				<circle cx="100" cy="100" r="80" fill="url(#grad1)" />
				<motion.circle 
					cx="100" cy="100" r="70" 
					stroke="#F2613F" strokeWidth="0.5" strokeDasharray="10 10" 
					style={{ rotate }}
				/>
				<motion.circle 
					cx="100" cy="100" r="50" 
					stroke="#0C0C0C" strokeWidth="2"
					style={{ pathLength: scrollYProgress }}
				/>
				<motion.g style={{ rotate }}>
					<line x1="100" y1="30" x2="100" y2="50" stroke="#F2613F" strokeWidth="3" strokeLinecap="round" />
					<circle cx="100" cy="100" r="10" fill="#0C0C0C" />
				</motion.g>
			</svg>
		</CardWrapper>
	);
};

export const GrowthSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
	const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
	const scanY = useTransform(scrollYProgress, [0, 1], [40, 160]);

	// Move useTransform out of the map loop
	const ringScales = [
		useTransform(scrollYProgress, [0, 0.2 + (0 * 0.1)], [0.5, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (1 * 0.1)], [0.5, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (2 * 0.1)], [0.5, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (3 * 0.1)], [0.5, 1]),
	];

	return (
		<CardWrapper title="02. Growth Infra" scrollYProgress={scrollYProgress}>
			<svg ref={ref} viewBox="0 0 200 200" className="w-40 h-40">
				<defs>
					<linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#F2613F" stopOpacity="0" />
						<stop offset="50%" stopColor="#F2613F" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#F2613F" stopOpacity="0" />
					</linearGradient>
				</defs>

				{/* Concentric Scaling Rings with Continuous Rotation */}
				{[75, 60, 45, 30].map((r, i) => (
					<motion.circle
						key={r}
						cx="100"
						cy="100"
						r={r}
						stroke="#F2613F"
						strokeWidth="0.5"
						fill="none"
						strokeDasharray={i % 2 === 0 ? "8 4" : "4 8"}
						animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
						transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
						style={{ 
							scale: ringScales[i],
						}}
					/>
				))}
				
				{/* Scanning Beam */}
				<motion.rect
					x="25"
					y={scanY}
					width="150"
					height="2"
					fill="url(#scanGradient)"
					animate={{ opacity: [0.2, 0.5, 0.2] }}
					transition={{ duration: 2, repeat: Infinity }}
				/>

				{/* Outward Growth Paths - Reactive to Scroll */}
				<motion.g style={{ opacity: pathLength }}>
					{[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
						<motion.line
							key={angle}
							x1="100"
							y1="100"
							x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
							y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
							stroke="#F2613F"
							strokeWidth="0.75"
							strokeDasharray="2 2"
							style={{ pathLength }}
						/>
					))}
				</motion.g>

				{/* Central "Engine" with Pulse */}
				<motion.g style={{ scale }}>
					<motion.circle
						cx="100"
						cy="100"
						r="25"
						fill="#0C0C0C"
						animate={{ scale: [1, 1.05, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>
					<motion.path
						d="M90 100 L110 100 M100 90 L100 110"
						stroke="#F2613F"
						strokeWidth="2"
						strokeLinecap="round"
						animate={{ rotate: 360 }}
						transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
					/>
					<circle cx="100" cy="100" r="3" fill="#FFF8F0" />
				</motion.g>
			</svg>
		</CardWrapper>
	);
};

export const EcosystemSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const orbitRotate = useTransform(scrollYProgress, [0, 1], [360, 0]);
	const coreHexScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

	// Move useTransform out of the map loop
	const nodeRotations = [
		useTransform(scrollYProgress, [0, 1], [0, 360]),
		useTransform(scrollYProgress, [0, 1], [120, 120 + 360]),
		useTransform(scrollYProgress, [0, 1], [240, 240 + 360]),
	];

	return (
		<CardWrapper title="03. Ecosystem" scrollYProgress={scrollYProgress}>
			<svg ref={ref} viewBox="0 0 200 200" className="w-40 h-40">
				{/* Orbiting Paths */}
				<motion.circle
					cx="100"
					cy="100"
					r="65"
					stroke="#0C0C0C"
					strokeWidth="0.5"
					strokeDasharray="10 5"
					style={{ rotate: orbitRotate }}
				/>
				<motion.circle
					cx="100"
					cy="100"
					r="40"
					stroke="#F2613F"
					strokeWidth="0.5"
					style={{ pathLength: scrollYProgress }}
				/>

				{/* Core Hexagon */}
				<motion.path
					d="M100 75 L121.65 87.5 L121.65 112.5 L100 125 L78.35 112.5 L78.35 87.5 Z"
					fill="#0C0C0C"
					style={{ rotate, scale: coreHexScale }}
				/>

				{/* Orbiting Nodes */}
				{[0, 120, 240].map((angle, i) => (
					<motion.g
						key={angle}
						style={{ 
							rotate: nodeRotations[i],
							originX: "100px",
							originY: "100px"
						}}
					>
						<motion.circle
							cx="100"
							cy="35"
							r="6"
							fill={i === 0 ? "#F2613F" : "#0C0C0C"}
							animate={{ scale: [1, 1.2, 1] }}
							transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
						/>
						<motion.line
							x1="100"
							y1="35"
							x2="100"
							y2="75"
							stroke="#F2613F"
							strokeWidth="1"
							style={{ pathLength: scrollYProgress }}
						/>
					</motion.g>
				))}

				{/* Pulsing Aura */}
				<motion.circle
					cx="100"
					cy="100"
					r="30"
					fill="#F2613F"
					initial={{ opacity: 0.1 }}
					animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
					transition={{ duration: 3, repeat: Infinity }}
				/>
			</svg>
		</CardWrapper>
	);
};

export const ImpactSVG = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
	
	const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

	// Move useTransform out of the map loop
	const pointOpacities = [
		useTransform(scrollYProgress, [0, 0.2 + (0 * 0.15)], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (1 * 0.15)], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (2 * 0.15)], [0, 1]),
		useTransform(scrollYProgress, [0, 0.2 + (3 * 0.15)], [0, 1]),
	];

	return (
		<CardWrapper title="04. Scalable Impact" scrollYProgress={scrollYProgress}>
			<svg ref={ref} viewBox="0 0 200 200" className="w-40 h-40">
				<motion.path 
					d="M20 160 Q 60 160 100 100 T 180 20" 
					stroke="#F2613F" strokeWidth="6" fill="none" strokeLinecap="round"
					style={{ pathLength }}
				/>
				<motion.line 
					x1="20" y1="160" x2="180" y2="160" 
					stroke="#0C0C0C" strokeWidth="1" opacity="0.2"
				/>
				<motion.line 
					x1="20" y1="160" x2="20" y2="20" 
					stroke="#0C0C0C" strokeWidth="1" opacity="0.2"
				/>
				{/* Growth Points */}
				{[40, 80, 120, 160].map((x, i) => (
					<motion.circle 
						key={x}
						cx={x} 
						cy={160 - (i * 35)} 
						r="4" 
						fill="#0C0C0C"
						style={{ opacity: pointOpacities[i] }}
					/>
				))}
			</svg>
		</CardWrapper>
	);
};

export default function ApproachSVG() {
	return (
		<div className="grid grid-cols-2 gap-6 w-full h-full p-4 lg:p-8">
			<AuditSVG />
			<GrowthSVG />
			<EcosystemSVG />
			<ImpactSVG />
		</div>
	);
}
