import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimateSection = () => {
  useGSAP(() => {
    gsap.to(".par", {
      scrollTrigger: {
        trigger: ".chil",
        start: "top 0%",
        end: "top 100%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(".marquee-section-1", {
      opacity: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 50%",
        toggleActions: "play none none reverse", 
      },
    });
  });

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen par pt-[40vh] pb-[10vh]">
      <div className="section-1 w-full h-screen flex flex-col justify-center items-center sticky top-0 overflow-hidden">
        <div className="marquee-section-1 w-screen">
          <div className="absolute top-[15%] w-full overflow-hidden">
            <div className="flex animate-marqueeLeft whitespace-nowrap text-[10vw] font-[font2] font-bold">
              <span className="min-w-screen text-[#d3fd51]">SÉBASTIEN</span>
              <span className="min-w-screen text-[#d3fd51]">SÉBASTIEN</span>
              <span className="min-w-screen text-[#d3fd51]">SÉBASTIEN</span>
            </div>
          </div>

          <div className="absolute top-[50%] w-full overflow-hidden z-50">
            <div className="flex animate-marqueeRight whitespace-nowrap text-[10vw] font-[font2] font-bold">
              <span className="min-w-screen text-[#d3fd51]">
                GODBOUT{" "}
                <span className="text-[3.5vw] ms-7 text-white/95">Business Lead</span>
              </span>
              <span className="min-w-screen text-[#d3fd51]">
                GODBOUT{" "}
                <span className="text-[3.5vw] ms-7 text-white/95">Business Lead</span>
              </span>
              <span className="min-w-screen text-[#d3fd51]">
                GODBOUT{" "}
                <span className="text-[3.5vw] ms-7 text-white/95">Business Lead</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative lg:w-[30vw] md:w-[50vw] w-[80vw] h-[100vh] chil rounded-2xl overflow-hidden">
          <img
            src="../../../public/images/per1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="section-2 w-full h-screen flex flex-col justify-center items-center sticky top-0 overflow-hidden">
        <div className="absolute top-[15%] w-full overflow-hidden">
          <div className="flex animate-marqueeLeft whitespace-nowrap text-[10vw] font-[font2] font-bold">
            <span className="min-w-screen text-[#d3fd51]">MEGGIE</span>
            <span className="min-w-screen text-[#d3fd51]">MEGGIE</span>
            <span className="min-w-screen text-[#d3fd51]">MEGGIE</span>
          </div>
        </div>

        <div className="absolute top-[50%] w-full overflow-hidden z-50">
          <div className="flex animate-marqueeRight whitespace-nowrap text-[10vw] font-[font2] font-bold">
            <span className="min-w-screen text-[#d3fd51]">
              LAVOIE{" "}
              <span className="text-[4vw] ms-7 text-white/95">Account Director</span>
            </span>
            <span className="min-w-screen text-[#d3fd51]">
              LAVOIE{" "}
              <span className="text-[4vw] ms-7 text-white/95">Account Director</span>
            </span>
            <span className="min-w-screen text-[#d3fd51]">
              LAVOIE{" "}
              <span className="text-[4vw] ms-7 text-white/95">Account Director</span>
            </span>
          </div>
        </div>

        <div className="relative lg:w-[30vw] h-[100vh] md:w-[50vw] w-[80vw] chil rounded-2xl overflow-hidden">
          <img
            src="../../../public/images/per2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimateSection;


