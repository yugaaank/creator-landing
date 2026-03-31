import { motion } from "framer-motion";
import { KatalystLogo } from "@/components";

export default function Hero() {
	const heroVariants = {
		hidden: { opacity: 0, y: 40 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<motion.div
					className="w-full margin"
					variants={heroVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.3 }}>
					<h1 className="heading tracking-[-1.3px] text-[#0C0C0C] font-semibold font-FoundersGrotesk uppercase">
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
								LET’S START <br />
							</h1>
						</div>
						A PROJECT TOGETHER
					</h1>
				</motion.div>
				<div className="w-full pb-[15px]">
					<h3 className="paragraph font-medium text-[#0C0C0C] font-NeueMontreal">
						Fill the form below:
					</h3>
				</div>
			</div>
		</section>
	);
}
