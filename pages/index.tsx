"use client";
import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import {
	About,
	Clients,
	Hero,
	Projects,
	VideoHome,
	Heroservices,
	Process,
	Capibilyties,
	Clientsservices,
	Archive,
	Expectations,
	Heropresentation,
	Projectspresentation,
	Publication,
	Heroabout,
	Aboutabout,
	Team,
	Principles,
	Partners,
	Insights,
	Heroinsights,
	Publicationinsights,
	Herocontact,
	Form,
	FAQ,
	Socials,
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	// Set to true to show projects, false to hide
	const showProjects = false;

	return (
		<>
			<Curve backgroundColor={"#FFF8F0"}>
				<div id="home">
					<Hero />
					<div className="w-full bg-[#481E14] z-10 relative rounded-t-[20px] padding-y">
						<Marquee
							title="YOUR BRAND GROWTH, SCALED DIGITALLY"
							className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
						/>
					</div>
					<About />
					{showProjects && <Projects />}
					{showProjects && <Clients />}
				</div>

				<div id="services" />
				{showProjects && (
					<div id="services">
						<Heroservices />
						<Process />
						<Capibilyties />
						<Clientsservices />
						<Archive />
						<Expectations />
					</div>
				)}

				<div id="work" />
				{showProjects && (
					<div id="work">
						<Heropresentation />
						<Projectspresentation />
						<Publication />
						<Heroworkiz />
						<Aboutworkiz />
						<Chelenge />
						<VideoWorkiz />
						<Result />
						<Credit />
						<Works />
					</div>
				)}

				<div id="about">
					{showProjects && <Heroabout />}
					{showProjects && <Aboutabout />}
					<Team />
					<Principles />
					{showProjects && <Partners />}
					{showProjects && <Insights />}
				</div>

				<div id="insights" />
				{showProjects && (
					<div id="insights">
						<Heroinsights />
						<Publicationinsights />
					</div>
				)}

				<div id="contact">
					{/* <Herocontact /> */}
					{/* <Form /> */}
					<Socials />
					<FAQ />
				</div>

				{/* <Ready /> */}
			</Curve>
		</>
	);
}
