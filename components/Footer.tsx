import { KatalystLogo } from "@/components";
import Link from "next/link";
export default function Footer() {
	return (
		<footer className="w-full py-[40px] bg-[#0C0C0C] flex flex-col items-center gap-[8px] border-t border-white/10">
			<Link
				href={"#home"}
				className="w-fit flex items-center">
				<KatalystLogo className="h-[30px] w-auto" textColor="#FFF8F0" />
			</Link>
			<p className="paragraph font-NeueMontreal text-[#FFF8F0] opacity-60">
				Katalyst / Market Growth Studio
			</p>
			<span className="paragraph font-NeueMontreal text-[#FFF8F0] opacity-40 text-center">
				© 2026 Katalyst All rights reserved.
			</span>
		</footer>
	);
}
