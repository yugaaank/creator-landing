import Link from "next/link";
import { RoundButton } from "@/components";
import { motion } from "framer-motion";

const labelClass =
	"font-NeueMontreal font-normal text-[#0C0C0C] text-[28px] leading-[1.4] tracking-[-0.4px] sm:text-[26px] sm:leading-[1.35]";
const inputClass =
	"paragraph w-full font-NeueMontreal font-normal text-[#0C0C0C] bg-[#FFF8F0] border-b border-[#4B2E2B55] focus:border-[#0C0C0C] outline-none focus:ring-0 text-left mt-[12px] transition duration-200 ease-in-out";
const listVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const splitFields = [
	{
		label: "What role are you leading inside the campaign team?",
		placeholder: "Enter your name*",
	},
	{
		label: "Which brand or product are you asking Katalyst to amplify?",
		placeholder: "Company name type here*",
	},
];

const singleFields = [
	{
		label: "What growth moment do you need Katalyst to engineer?",
		placeholder: "Your goal type here*",
	},
	{
		label: "What timeline keeps your launch or campaign on pace?",
		placeholder: "Date*",
	},
	{
		label: "What investment range feels comfortable for this funnel?",
		placeholder: "Select*",
	},
	{
		label: "How should Katalyst strategists reach you?",
		placeholder: "name@example.com",
		helper: "Let’s align on the first action items together.",
	},
	{
		label: "Optionally, tell us more so Katalyst can tailor the brief:",
		placeholder: "Product details type here...",
	},
];

export default function Form() {
	return (
		<section className="w-full padding-x padding-y">
			<motion.div
				className="w-full max-w-[1200px] mx-auto flex flex-col gap-[50px]"
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
				variants={listVariants}>
				<motion.div
					className="grid grid-cols-2 gap-[40px] sm:grid-cols-1"
					variants={listVariants}>
					{splitFields.map((field) => (
						<motion.div key={field.label} className="flex flex-col gap-[16px]" variants={itemVariants}>
							<h2 className={labelClass}>{field.label}</h2>
							<input type="text" placeholder={field.placeholder} className={inputClass} />
						</motion.div>
					))}
				</motion.div>

				<motion.div className="flex flex-col gap-[30px]" variants={listVariants}>
					{singleFields.map(({ label, placeholder, helper }) => (
						<motion.div key={label} className="flex flex-col gap-[12px]" variants={itemVariants}>
							<h2 className={labelClass}>{label}</h2>
							<input type="text" placeholder={placeholder} className={inputClass} />
							{helper && (
								<p className="paragraph font-NeueMontreal text-[#0C0C0C] max-w-[440px]">{helper}</p>
							)}
						</motion.div>
					))}
				</motion.div>

				<div className="w-full flex items-center justify-end sm:justify-start pt-[25px]">
					<Link
						href="#home"
						className="group flex items-center gap-[10px] rounded-full px-[28px] py-[12px] bg-gradient-to-r from-[#F2613F] to-[#D63F1E] text-white uppercase tracking-[0.3em] font-semibold shadow-[0_15px_40px_rgba(242,97,63,0.45)] transition duration-200 transform hover:-translate-y-0.5 hover:scale-105">
						<span className="tracking-[0.35em]">Send inquiry</span>
						<span className="h-[32px] w-[32px] flex items-center justify-center rounded-full bg-white text-[#F2613F] text-[18px] transition duration-200 group-hover:bg-[#0C0C0C] group-hover:text-white">
							→
						</span>
					</Link>
				</div>
			</motion.div>
		</section>
	);
}
