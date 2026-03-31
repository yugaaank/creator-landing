"use client";
import Link from "next/link";
import Image from "next/image";
import { Eyes, KatalystLogo } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#0C0C0C] font-semibold font-FoundersGrotesk uppercase">
								WE ARE <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="overflow-hidden flex items-center">
										<KatalystLogo className="h-[95px] lg:h-[70px] md:h-[60px] sm:h-[45px] xm:h-[40px] w-auto" />
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#0C0C0C] font-semibold font-FoundersGrotesk uppercase">
										KATALYST
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#4B2E2B55] pt-[20px]">
						<div className="w-full flex justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[10%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-[#0C0C0C] font-NeueMontreal">
									About us:
								</h3>
							</div>
							<div className="w-[48%] flex justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-[#0C0C0C]">
											At Katalyst Growth we treat every brief
											<br /> as an opportunity to see what others
											<br /> miss, because visuals and flow often
											<br /> explain more than words ever could.
										</p>
									</div>
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-[#0C0C0C]">
											We believe a great campaign evokes
											<br />
											interest and drives business results far
											<br /> better than any saying can. Hence, we
											<br />
											founded Katalyst Growth to help you persuade
											<br /> colleagues and clients by creating eye-
											<br />
											opening campaigns.
										</p>
									</div>
								</div>
								<div className="flex w-fit h-fit gap-[5px] group">
									<div className="rounded-[50px] border border-[#8C5A3C99] group-hover:bg-[#0C0C0C]  py-[3px] px-[12px] cursor-pointer">
										<Link
											href="#work"
											className="paragraph font-NeueMontreal text-[#0C0C0C] uppercase group-hover:text-[#FFF8F0] transition-all duration-200 ease-in">
											Our Work
										</Link>
									</div>
									<div className="w-[35px] flex items-center justify-center h-[35px] border border-[#8C5A3C99] rounded-[50px] p-[12px]  group-hover:bg-[#0C0C0C] transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
										<p className="paragraph font-normal text-[#0C0C0C] group-hover:text-[#FFF8F0]">
											<ArrowUpRight strokeWidth={1.25} />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="padding-y"
				data-scroll
				data-scroll-speed="-.1">
				<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</div>
			<div className="padding-x">
				<h1 className="sub-heading font-medium font-NeueMontreal text-[#0C0C0C]">
					We save businesses from ugly and
					<br className="sm:hidden xm:hidden" /> ineffective campaigns.
				</h1>
			</div>
		</section>
	);
}
