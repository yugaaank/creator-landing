import Link from "next/link";
export default function Footer() {
	return (
		<footer className="w-full py-[40px] bg-[#FFF8F0] flex flex-col items-center gap-[8px] border-t border-[#4B2E2B55]">
			<Link
				href={"#home"}
				className="uppercase text-[20px] font-FoundersGrotesk tracking-[0.6em] text-[#0C0C0C]">
				Katalyst Growth
			</Link>
			<p className="paragraph font-NeueMontreal text-[#0C0C0C] opacity-60">
				Katalyst / Market Growth Studio
			</p>
			<span className="paragraph font-NeueMontreal text-[#0C0C0C] opacity-40 text-center">
				© 2026 Katalyst All rights reserved.
			</span>
		</footer>
	);
}
