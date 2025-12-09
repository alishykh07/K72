// import { useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//     { role: "Account executive", name: "Sophie Auger", img: "/images/per1.jpg" },
//     { role: "Business Lead", name: "Carl Godbout", img: "/images/per2.jpg" },
//     { role: "Copywriter", name: "Camille Brière", img: "/images/per3.jpg" },
//     { role: "Account Manager", name: "Claire Robert", img: "/images/per4.jpg" },
//     { role: "EVP & Managing Director", name: "Pierre-Luc Paiement", img: "/images/per5.jpg" },
//     { role: "Director of Strategy", name: "Michèle Riendeau", img: "/images/per7.jpg" },
//     { role: "Account Director", name: "Meggie Lavoie", img: "/images/per8.jpg" },
//     { role: "Art Director", name: "Alex Sauvageau", img: "/images/per9.jpg" },
//     { role: "Account Manager", name: "Philippe Perreault", img: "/images/per10.jpg" },
//     { role: "Strategist", name: "Béatrice Roussin", img: "/images/per11.jpg" },
//     { role: "Account Manager", name: "Lou Gravel-Jean", img: "/images/per12.jpg" },
//     { role: "Planificateur stratégique principal", name: "Olivier Roeyaerts", img: "/images/per13.jpg" },
//     { role: "Account Manager", name: "Hélène Conti", img: "/images/per14.jpg" },
//     { role: "Account Coordinator", name: "Lawrence Meunier", img: "/images/per9.jpg" },
//     { role: "Graphic Designer", name: "Olivier Duclos", img: "/images/per10.jpg" },
//     { role: "Associate Creative Director", name: "Joël Letarte", img: "/images/per11.jpg" },
//     { role: "Creative Director", name: "Chantal Gobeil", img: "/images/per12.jpg" },
//     { role: "Associate Creative Director  ", name: "Sébastien Roy", img: "/images/per13.jpg" },
// ];

// const Team = () => {
//     const containerRef = useRef(null);
//     const imgRef = useRef(null);
//     const [hoveredImg, setHoveredImg] = useState(null);

//     useGSAP(() => {
//         const img = imgRef.current;
//         gsap.to(".main", {
//             scrollTrigger: {
//                 trigger: img,
//                 start: "top 10%",
//                 end: "top -180%",
//                 scrub: true,
//                 pin: true,
//                 // markers: true,
//             },
//         });
//     });

//     return (
//         <div
//             className="w-screen pt-[30vh] relative overflow-x-hidden"
//             ref={containerRef}
//         >
//             <div className="w-full flex flex-col main pb-[50vh] font-[font1]">
//                 {teamMembers.map((member, index) => (
//                     <div
//                         key={index}
//                         className="child flex justify-between items-center px-4 pb-2 pt-3 text-white border-b border-white first:border-t-1 hover:bg-[#d3fd51] hover:text-black transition-all duration-500 ease-in-out cursor-pointer"
//                         onMouseEnter={() => setHoveredImg(member.img)}
//                         onMouseLeave={() => setHoveredImg(null)}
//                     >
//                         <h6 className="text-[15px] -mt-3">{member.role}</h6>
//                         <h2 className="text-[40px] uppercase font-bold">{member.name}</h2>
//                     </div>
//                 ))}

//                 <div
//                     ref={imgRef}
//                     className={`absolute top-16 w-[24vw] left-[20vw] h-[76vh] rounded-2xl overflow-hidden transition-opacity duration-500 ease-in-out ${hoveredImg ? "opacity-100" : "opacity-0"
//                         }`}
//                 >
//                     {hoveredImg && (
//                         <img
//                             src={hoveredImg}
//                             alt="team member"
//                             className="object-cover w-full h-full"
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Team;


import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { role: "Account executive", name: "Sophie Auger", img: "/images/per1.jpg" },
  { role: "Business Lead", name: "Carl Godbout", img: "/images/per2.jpg" },
  { role: "Copywriter", name: "Camille Brière", img: "/images/per3.jpg" },
  { role: "Account Manager", name: "Claire Robert", img: "/images/per4.jpg" },
  { role: "EVP & Managing Director", name: "Pierre-Luc Paiement", img: "/images/per5.jpg" },
  { role: "Director of Strategy", name: "Michèle Riendeau", img: "/images/per7.jpg" },
  { role: "Account Director", name: "Meggie Lavoie", img: "/images/per8.jpg" },
  { role: "Art Director", name: "Alex Sauvageau", img: "/images/per9.jpg" },
  { role: "Account Manager", name: "Philippe Perreault", img: "/images/per10.jpg" },
  { role: "Strategist", name: "Béatrice Roussin", img: "/images/per11.jpg" },
  { role: "Account Manager", name: "Lou Gravel-Jean", img: "/images/per12.jpg" },
  { role: "Planificateur stratégique principal", name: "Olivier Roeyaerts", img: "/images/per13.jpg" },
  { role: "Account Manager", name: "Hélène Conti", img: "/images/per14.jpg" },
  { role: "Account Coordinator", name: "Lawrence Meunier", img: "/images/per9.jpg" },
  { role: "Graphic Designer", name: "Olivier Duclos", img: "/images/per10.jpg" },
  { role: "Associate Creative Director", name: "Joël Letarte", img: "/images/per11.jpg" },
  { role: "Creative Director", name: "Chantal Gobeil", img: "/images/per12.jpg" },
  { role: "Associate Creative Director", name: "Sébastien Roy", img: "/images/per13.jpg" },
];

const Team = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [hoveredImg, setHoveredImg] = useState(null);

  useGSAP(() => {
    const img = imgRef.current;
    gsap.to(".main", {
      scrollTrigger: {
        trigger: img,
        start: "top 10%",
        end: "top -180%",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div
      className="w-full pt-[25vh] relative bg-black"
      ref={containerRef}
    > 
    
      <div className="w-full flex flex-col main pb-[30vh] font-[font1]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="child relative flex justify-between items-center px-4 pb-2 pt-3 text-white border-b border-white first:border-t-1 transition-all duration-500 ease-in-out cursor-pointer group"
            onMouseEnter={() => setHoveredImg(member.img)}
            onMouseLeave={() => setHoveredImg(null)}
          >
            <span className="absolute inset-0 bg-[#d3fd51] scale-y-0 origin-top transition-transform duration-500 ease-out group-hover:scale-y-100"></span>

            <div className="relative z-10 flex justify-between w-full items-center hover:text-black">
              <h6 className="text-[15px] -mt-3 ">{member.role}</h6>
              <h2 className="text-[40px] uppercase font-bold">{member.name}</h2>
            </div>
          </div>
        ))}

        <div
          ref={imgRef}
          className={`absolute top-16 lg:w-[24vw] md:[35vw] w-[55vw] left-[20vw] lg:h-[76vh] h-[50vh] rounded-2xl overflow-hidden transition-opacity duration-500 ease-in-out ${
            hoveredImg ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoveredImg && (
            <img
              src={hoveredImg}
              alt="team member"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
