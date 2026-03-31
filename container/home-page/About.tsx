"use client";
import { useState } from "react";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { ApproachSVG, Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-[#F2613F] padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-[#0C0C0C]">
					Katalyst is a strategic marketing partner
					<br className="sm:hidden xm:hidden" /> designed to scale&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						your business,
					</span>
					&nbsp;handling <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						brand growth,
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						complex campaigns.
					</span>
				</h2>
			</div>
			<div className="w-full border-y border-[#4B2E2B55] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-[#0C0C0C] font-NeueMontreal">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] tracking-wide">
									Every Campaign Feels Handcrafted. Because it is.
									We analyze your audience, market bottlenecks, and digital presence to identify growth opportunities.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] pt-[30px] tracking-wide">
									We build and integrate marketing strategies that capture leads, maximize conversions, and continuously improve ROI.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px] w-[50%] sm:w-full xm:w-full">
					<div className="flex flex-col gap-[10px]">
						<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] opacity-50 uppercase tracking-wider">
							Our approach
						</p>
						<h3 className="sub-heading font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase leading-none">
							Strategic Scaling + <br /> Market Growth
						</h3>
					</div>
					<div className="flex flex-col gap-[25px] mt-[10px]">
						<div className="flex flex-col gap-[5px]">
							<h4 className="paragraph font-bold font-NeueMontreal text-[#0C0C0C] uppercase tracking-tight">
								01. Growth Audit
							</h4>
							<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] opacity-80 max-w-[400px]">
								Analyze your current digital strategies, market bottlenecks, and online presence to identify hidden growth opportunities.
							</p>
						</div>
						<div className="flex flex-col gap-[5px]">
							<h4 className="paragraph font-bold font-NeueMontreal text-[#0C0C0C] uppercase tracking-tight">
								02. Strategic Funnels
							</h4>
							<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] opacity-80 max-w-[400px]">
								Build the foundational marketing systems required to capture high-quality leads and maximize customer conversion.
							</p>
						</div>
						<div className="flex flex-col gap-[5px]">
							<h4 className="paragraph font-bold font-NeueMontreal text-[#0C0C0C] uppercase tracking-tight">
								03. Performance Scaling
							</h4>
							<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] opacity-80 max-w-[400px]">
								Seamlessly connect your CRM, ad channels, and performance tracking into a unified growth engine.
							</p>
						</div>
						<div className="flex flex-col gap-[5px]">
							<h4 className="paragraph font-bold font-NeueMontreal text-[#0C0C0C] uppercase tracking-tight">
								04. Sustainable Growth
							</h4>
							<p className="sub-paragraph font-medium font-NeueMontreal text-[#0C0C0C] opacity-80 max-w-[400px]">
								Deliver long-term results through data-driven marketing strategies that evolve with your business.
							</p>
						</div>
					</div>
				</div>
				<div
					className="w-[50%] sm:w-full xm:w-full min-h-[500px]"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					<ApproachSVG />
				</div>
			</div>
		</section>
	);
}
