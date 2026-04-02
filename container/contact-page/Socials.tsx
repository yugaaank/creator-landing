"use client";
import Link from "next/link";
import { TextMask } from "@/animation";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Eyes } from "@/components";

export default function Socials() {
  const [rotate, setRotate] = useState(0);
  const phrase = ["INSTAGRAM"];
  const instagramUrl = "https://www.instagram.com/kompanykatalyst/";
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 280);
    });
  }, []);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);
  return (
    <section
      className="w-full h-[30vh] overflow-hidden bg-[#F2613F] relative"
      ref={container}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center padding-x">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-[980px]"
        >
          <h1 className="w-full text-[210px] leading-[165px] lg:text-[190px] lg:leading-[145px] md:text-[140px] md:leading-[120px] sm:text-[84px] sm:leading-[78px] xm:text-[72px] xm:leading-[58px] text-left font-bold font-FoundersGrotesk text-[#0C0C0C] uppercase">
            <span className="underline-grow block max-w-fit">
              <TextMask>{phrase}</TextMask>
            </span>
          </h1>
        </Link>
        <div className="mt-[20px] ml-[10px] flex items-center gap-[40px]">
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
            LET'S TALK
          </a>
          <div className="flex items-center gap-2 mb-10">
            <svg 
              width="100" 
              height="50" 
              viewBox="0 0 100 50" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-[-20deg]"
            >
              <path 
                d="M5 45C20 30 40 10 70 5" 
                stroke="#0C0C0C" 
                strokeWidth="3" 
                strokeLinecap="round"
                style={{ filter: "url(#handDrawnNoise)" }}
              />
              <path 
                d="M65 15L70 5L60 3" 
                stroke="#0C0C0C" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ filter: "url(#handDrawnNoise)" }}
              />
            </svg>
            <span className="font-NeueMontreal font-bold text-[#0C0C0C] text-xl rotate-[-5deg]">
              Click here
            </span>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-[65%] right-[6%] flex gap-[30px] -translate-y-1/2"
        style={{ y: mq }}
      >
        <Eyes className="w-[230px] h-[230px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px]" />
      </motion.div>
    </section>
  );
}
