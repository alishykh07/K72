import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectCard from "../components/project/ProjectCard";
import ProjectFooter from "../components/common/projectFooter";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    { image1: "/images/img1.jpg", image2: "/images/img2.jpg" },
    { image1: "/images/img3.jpg", image2: "/images/img4.jpg" },
    { image1: "/images/img5.jpg", image2: "/images/img6.jpg" },
    { image1: "/images/img7.jpg", image2: "/images/img8.jpg" },
    { image1: "/images/img9.jpg", image2: "/images/img10.jpg" },
    { image1: "/images/img11.jpg", image2: "/images/img12.jpg" },
    { image1: "/images/img13.jpg", image2: "/images/img14.jpg" },
    { image1: "/images/img15.jpg", image2: "/images/img16.jpg" },
  ];

  const heroRefs = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      heroRefs.current.forEach((elem, index) => {
        if (!elem) return;

        gsap.fromTo(
          elem,
          { height: 100 },
          {
            height: 500,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%", 
              end: "top 15%",
              scrub: 1,
             
              id: `project-${index}`,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="lg:px-4 px-1" ref={containerRef}>
        <div className="pt-[50vh]">
          <h2 className="font-[font2] lg:text-[9.5vw] text-7xl uppercase">
            Projets
          </h2>
        </div>

        <div>
          {projects.map((elem, idx) => (
            <div
              key={idx}
              ref={(el) => (heroRefs.current[idx] = el)}
              className="w-full mb-[3vh] flex flex-row lg:gap-4 gap-2 overflow-hidden"
              style={{ height: "100px" }}
            >
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>
      </div>
      <ProjectFooter />
    </>
  );
};

export default Projects;
