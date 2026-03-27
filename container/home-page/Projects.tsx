import { projectItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";

export default function Projects() {
	return (
		<section className="w-full rounded-t-[20px]">
			<Heading
				title="Client Results"
				className="padding-x padding-y pb-[50px] border-b border-[#4B2E2B55]"
			/>
			<div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
				{projectItem.map((item) => (
					<div
						className="w-[49%] sm:w-full xm:w-full"
						key={item.id}>
						<div className="flex gap-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-[#0C0C0C]" />
							<h1 className="small-text uppercase font-medium font-NeueMontreal text-[#0C0C0C]">
								{item.title}
							</h1>
						</div>
						<ProjectCard
							item={item}
							key={item.id}
						/>
						<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
							{item.links.map((link) => (
								<Tags
									className="hover:text-white"
									bgcolor="#0C0C0C"
									item={link}
									key={link.id}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center">
				<div className="flex items-center justify-between bg-[#0C0C0C] cursor-pointer rounded-full group">
					<RoundButton
						href="#work"
						title="view all results"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
		</section>
	);
}
