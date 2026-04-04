import Link from "next/link";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import KatalystLogo from "./KatalystLogo";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden">
        <div className="w-[33%]">
          <Link href={"#home"} className="w-fit flex items-center">
            <KatalystLogo className="h-[40px] w-auto" />
          </Link>
        </div>
        <div className="w-[33%] flex justify-center">
          <a
            href="https://calendly.com/kompanykatalyst/discovery-call"
            className="uiverse-talk-btn"
          >
            <svg
              className="uiverse-highlight"
              viewBox="0 0 144.75738 77.18431"
              preserveAspectRatio="none"
            >
              <g transform="translate(-171.52826,-126.11624)">
                <g
                  fill="none"
                  strokeWidth="17"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                >
                  <path d="M180.02826,169.45123c0,0 12.65228,-25.55115 24.2441,-25.66863c6.39271,-0.06479 -5.89143,46.12943 4.90937,50.63857c10.22345,4.2681 24.14292,-52.38336 37.86455,-59.80493c3.31715,-1.79413 -5.35094,45.88889 -0.78872,58.34589c5.19371,14.18125 33.36934,-58.38221 36.43049,-56.91633c4.67078,2.23667 -0.06338,44.42744 5.22574,47.53647c6.04041,3.55065 19.87185,-20.77286 19.87185,-20.77286"></path>
                </g>
              </g>
            </svg>
            Book an Appointment
          </a>
        </div>
        <div className="flex gap-x-[20px] w-[33%] justify-end">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className="w-fit paragraph font-medium font-NeueMontreal text-[#0C0C0C] capitalize flex flex-col hover"
              href={item.href}
            >
              <TextHover titile1={item.title} titile2={item.title} />
            </Link>
          ))}
        </div>
      </nav>
      <MobileNav />
    </>
  );
}
