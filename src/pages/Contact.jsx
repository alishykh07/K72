import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

const Contact = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(".min", {
            rotate: 7,
            scrollTrigger: {
                trigger: ".min",
                start: "top 30%",
                end: "bottom 60%",
                scrub: 3, 
                // markers: true, 
            },
        });
    });

    return (
        <div className="flex justify-center pt-3 bg-black text-white flex-col min-h-screen">
            <>
                <h2 className="text-[10vw] font-[font1] uppercase text-center leading-28">
                    To talk <br />
                    about <br />
                    your<br />
                    project<br />
                </h2>

                <div className="flex justify-between text-center items-end w-[90vw] mx-auto lg:-mt-24">
                    <p className="text-[18px] font-semibold">
                        Onscreen or in an office.<br />
                        Here. There.<br />
                        Anywhere.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#d3fd51] transition-all hover:underline text-[18px] font-semibold"
                    >
                        525 Av. Viger O - Suite 400<br />
                        Montréal, QC H2Z 1G6 →
                    </a>
                </div>
            </>

            <div className="min-h-[50vh] overflow-hidden">
                <div className="min overflow-hidden whitespace-nowrap bg-[#d3fd51] text-black my-[30vh] max-h-[25vh]">
                    <div className="inline-block animate-marquee p-0 font-[font2] uppercase py-0">
                        <span className="text-[9vw] mr-16 -mt-5">hello@k72.ca</span>
                        <span className="text-[9vw] mr-16 -mt-5">Follow us.ca</span>
                        <span className="text-[9vw] mr-16 -mt-5">hello@k72.ca</span>
                        <span className="text-[9vw] mr-16 -mt-5">Follow us.ca</span>
                        <span className="text-[9vw] mr-16 -mt-5">Follow us.ca</span>
                        <span className="text-[9vw] mr-16 -mt-5">hello@k72.ca</span>
                    </div>
                </div>
            </div>

            <div className="text-center pb-10">
                <h6 className='uppercase text-xl'>Follow us</h6>
                <ul className='flex gap-5 justify-center mt-5'>
                    <li className='border-2 border-white rounded-full lg:pt-[8px] pt-[4px] hover:border-[#d3fd51]'><a href="" className='lg:text-7xl md:text-7xl text-3xl font-[font2] lg:px-6 px-3.5 md:px-6 hover:text-[#d3fd51] transition-all'>FB</a></li>
                    <li className='border-2 border-white rounded-full lg:pt-[8px] pt-[4px] hover:border-[#d3fd51]'><a href="" className='lg:text-7xl md:text-7xl text-3xl font-[font2] lg:px-6 px-3.5 md:px-6 hover:text-[#d3fd51] transition-all'>IG</a></li>
                    <li className='border-2 border-white rounded-full lg:pt-[8px] pt-[4px] hover:border-[#d3fd51]'><a href="" className='lg:text-7xl md:text-7xl text-3xl font-[font2] lg:px-6 px-3.5 md:px-6 hover:text-[#d3fd51] transition-all'>IN</a></li>
                    <li className='border-2 border-white rounded-full lg:pt-[8px] pt-[4px] hover:border-[#d3fd51]'><a href="" className='lg:text-7xl md:text-7xl text-3xl font-[font2] lg:px-6 px-3.5 md:px-6 hover:text-[#d3fd51] transition-all'>BE</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;


// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import React, { useEffect, useRef } from 'react';

// const Contact = () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const scrollRef = useRef(null);

//     useEffect(() => {
//         const container = scrollRef.current;
//         const scrollHeight = container.scrollHeight;
//         const body = document.body;

//         // jab scroll end par pohchta hai to scroll position reset kar do
//         const handleScroll = () => {
//             if (window.scrollY + window.innerHeight >= scrollHeight - 2) {
//                 window.scrollTo({
//                     top: 0,
//                     behavior: "smooth"
//                 });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useGSAP(() => {
//         gsap.to(".min", {
//             rotate: 7,
//             scrollTrigger: {
//                 trigger: ".min",
//                 start: "top 30%",
//                 end: "bottom 60%",
//                 scrub: 3,
//             },
//         });
//     });

//     return (
//         <div ref={scrollRef} className="flex justify-center pt-3 bg-black text-white flex-col min-h-screen">
//             {/* === Original Content === */}
//             <section className="content">
//                 <h2 className="text-[10vw] font-[font1] uppercase text-center leading-28">
//                     To talk <br /> about <br /> your<br /> project<br />
//                 </h2>

//                 <div className="flex justify-between text-center items-end w-[90vw] mx-auto -mt-24">
//                     <p className="text-[18px] font-semibold">
//                         Onscreen or in an office.<br />
//                         Here. There.<br />
//                         Anywhere.
//                     </p>

//                     <a
//                         href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-[#d3fd51] transition-all hover:underline text-[18px] font-semibold"
//                     >
//                         525 Av. Viger O - Suite 400<br />
//                         Montréal, QC H2Z 1G6 →
//                     </a>
//                 </div>

//                 <div className="min-h-[50vh] overflow-hidden">
//                     <div className="min overflow-hidden whitespace-nowrap bg-red-300 my-[30vh] max-h-[25vh]">
//                         <div className="inline-block animate-marquee p-0 font-[font2] uppercase py-0">
//                             <span className="text-[9vw] mr-16 -mt-5">hello@k72.ca</span>
//                             <span className="text-[9vw] mr-16 -mt-5">Follow us.ca</span>
//                             <span className="text-[9vw] mr-16 -mt-5">hello@k72.ca</span>
//                             <span className="text-[9vw] mr-16 -mt-5">Follow us.ca</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="text-center pb-[30vh]">
//                     <h6 className='uppercase text-xl'>Follow us</h6>
//                     <ul className='flex gap-5 justify-center mt-5'>
//                         {['FB', 'IG', 'IN', 'BE'].map((item) => (
//                             <li key={item} className='border-2 border-white rounded-full pt-[8px] hover:border-[#d3fd51]'>
//                                 <a href="#" className='text-7xl font-[font2] px-6 hover:text-[#d3fd51] transition-all'>
//                                     {item}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             {/* === Duplicate Content for Loop Effect === */}
//             <section className="content duplicate">
//                 <h2 className="text-[10vw] font-[font1] uppercase text-center leading-28 opacity-50">
//                     To talk <br /> about <br /> your<br /> project<br />
//                 </h2>
//             </section>
//         </div>
//     );
// };

// export default Contact;
