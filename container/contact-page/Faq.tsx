"use client";
import { useState } from "react";
import { FaqItems, clientsItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y mt-[-10px] bg-[#FFF8F0] z-30 relative rounded-t-[20px]">
			<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-[#0C0C0C] pb-[50px]">
				A few things you <br />
				may want to ask us:
			</h1>
			{FaqItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#4B2E2B55]"
							: "border-b border-[#4B2E2B55]"
					}`}>
					<div className="w-full flex items-center justify-between sm:gap-[15px] xm:gap-[15px] py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h1 className="paragraph font-normal font-NeueMontreal text-[#0C0C0C]">
								{item.question}
							</h1>
						</div>
						<div className="w-[50%] sm:w-full xm:w-full flex items-center justify-between">
							<div>
								<h3 className="paragraph font-normal font-NeueMontreal text-[#0C0C0C]">
									{item.title}
								</h3>
							</div>
							<div className="flex items-end justify-end">
								<button
									className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
										activeAccordion === item.id
											? "text-gray-300"
											: "text-[#0C0C0C] link-flash"
									}`}
									onClick={() => toggleAccordion(item.id)}>
									{activeAccordion === item.id ? "read" : "read"}
								</button>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-between padding-x">
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[50%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="">
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-[#0C0C0C]">
													{item.description}
												</p>
											</div>
											{item.links.map((link) => (
												<div
													key={link.id}
													className="flex pt-[20px] sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] justify-between gap-[80px]">
													<span className="paragraph tracking-wider font-normal font-NeueMontreal text-[#0C0C0C]">
														{link.title}
													</span>
													<p className="paragraph tracking-wider font-normal font-NeueMontreal text-[#0C0C0C]">
														{link.description}
													</p>
												</div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}
