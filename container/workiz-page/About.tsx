import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h2 className="sub-heading padding-x font-medium font-NeueMontreal text-[#0C0C0C] pb-[50px]">
					Compony
				</h2>
				<div className="w-full border-t border-[#4B2E2B55] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-[#0C0C0C] font-NeueMontreal">
								About:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
							<div>
								<p className="paragraph font-NeueMontreal text-[#0C0C0C]">
									Built by home service professionals on a
									<br className="sm:hidden xm:hidden" /> mission to make your
									“work easy,” <br className="sm:hidden xm:hidden" />
									Workiz empowers service businesses to get more
									<br className="sm:hidden xm:hidden" /> jobs done, work easier,
									and grow smarter.
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px]">
								<div>
									<p className="paragraph font-NeueMontreal text-[#0C0C0C] underline">
										Industry:
									</p>
									<p className="paragraph font-NeueMontreal text-[#0C0C0C]">
										Service Management Software
									</p>
								</div>
								<div>
									<p className="paragraph font-NeueMontreal text-[#0C0C0C] underline">
										Company Size:
									</p>
									<p className="paragraph font-NeueMontreal text-[#0C0C0C]">
										100+ People
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={welcome} />
			</div>
		</section>
	);
}
