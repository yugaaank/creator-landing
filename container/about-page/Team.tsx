import Image from "next/image";
import { Team1, logo } from "@/public";
import { Marquee } from "@/components";

export default function Team() {
	return (
		<section className="w-full bg-[#481E14] min-h-screen rounded-t-[20px]">
			<div className="w-full bg-[#481E14] z-10 relative rounded-t-[20px] padding-y">
				<Marquee
					title="the team core of"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full bg-[#481E14] flex items-center justify-center pb-[50px]">
				<div className="w-[80%] p-[20px] bg-[#FFF8F0] rounded-[20px] sm:w-full  xm:w-full">
					<div className="w-full flex flex-col justify-between gap-[20px] py-[10px]">
						<div className="flex justify-between sm:flex-col xm:flex-col gap-[20px]">
							<div>
								<Image
									src={logo}
									alt="ochi-logo"
									width={50}
									height={50}
								/>
							</div>
							<div>
								<Image
									src={Team1}
									alt="ochi-logo"
									width={300}
									height={300}
									className="rounded-[10px] sm:w-full xm:w-full"
								/>
								<p className="paragraph font-NeueMontreal font-normal text-[#0C0C0C] py-[10px]">
									Founder and CEO
								</p>
							</div>
						</div>
						<div className="flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start">
							<div>
								<h1 className="heading font-bold font-FoundersGrotesk text-[#0C0C0C]">
									IHOR <br /> HULYAHRODSKYY
								</h1>
							</div>
							<div>
								<h1 className="heading font-bold font-FoundersGrotesk text-[#0C0C0C]">
									1 / 4
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
