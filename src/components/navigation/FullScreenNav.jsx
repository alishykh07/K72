// import React, { useRef } from "react";
// import { useGSAP } from '@gsap/react'
// import { Link } from 'react-router-dom'
// import gsap from "gsap";
// import { useNav } from '../../context/navContext'

// const menuItems = [
//   {
//     title: "work",
//     path: "/project",
//     slides: [
//       {
//         text: "see everything",
//         img: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
//       },
//       {
//         text: "see everything",
//         img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
//       },
//     ],
//   },
//   {
//     title: "agency",
//     path: "/agency",
//     slides: [
//       {
//         text: "know us",
//         img: "https://picsum.photos/300/120?random=1",
//       },
//       {
//         text: "know us",
//         img: "https://picsum.photos/300/120?random=2",
//       },
//     ],
//   },
//   {
//     title: "contact",
//     path: "/contact",
//     slides: [
//       {
//         text: "send us a fax",
//         img: "https://picsum.photos/300/120?random=3",
//       },
//       {
//         text: "send us a fax",
//         img: "https://picsum.photos/300/120?random=4",
//       },
//     ],
//   },
//   {
//     title: "blog",
//     path: "/blog",
//     slides: [
//       {
//         text: "read articles",
//         img: "https://picsum.photos/300/120?random=5",
//       },
//       {
//         text: "read articles",
//         img: "https://picsum.photos/300/120?random=6",
//       },
//     ],
//   },
// ];

// const FullScreenNav = () => {
//   const navLinkRef = useRef(null);
//   const { navOpen, setNavOpen } = useNav(); 

//   useGSAP(function() {
//     if (!navOpen) return;
    
//     const tl = gsap.timeline()
//     tl.from('.stairing',{
//       delay:0.5,
//       height:0,
//       stagger:{
//         amount:-0.2
//       }
//     })
//     tl.from(navLinkRef.current,{
//       opacity:0,
//       duration: 0.3
//     })
//     tl.from('.link',{
//       opacity:0,
//       rotateX:90,
//       stagger:{
//         amount:0.2
//       },
//       duration: 0.4
//     })
//   }, [navOpen])

//   const handleClose = () => {
//     const closeTl = gsap.timeline()
//     closeTl.to('.link', {
//       opacity: 0,
//       rotateX: -90,
//       stagger: {
//         amount: 0.15
//       },
//       duration: 0.3
//     })
//     .to(navLinkRef.current, {
//       opacity: 0,
//       duration: 0.2
//     })
//     .to('.stairing', {
//       height: 0,
//       stagger: {
//         amount: -0.15
//       },
//       duration: 0.3,
//       onComplete: () => setNavOpen(false)
//     })
//   }

//   const handleNavigation = (path) => {
//     handleClose();
//   }

//   if (!navOpen) return null; 

//   return (
//     <div className="fixed top-0 left-0 overflow-x-hidden text-white bg-black h-screen w-full z-[60]">
//       {/* Background stairs animation */}
//       <div className="h-screen w-full fixed">
//         <div className="h-full w-full flex">
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//           <div className="stairing h-full w-1/5 bg-black"></div>
//         </div>
//       </div>

//       {/* Header with logo and close button */}
//       <div className="flex pt-3 px-4 pb-4 items-center justify-between relative z-10">
//         <Link to="/" onClick={handleNavigation} className="block">
//           <div className="w-32 h-[68px] cursor-pointer">
//             <svg
//               className="w-full h-full"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 103 44"
//             >
//               <path
//                 fill="white"
//                 fillRule="evenodd"
//                 d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
//               />
//             </svg>
//           </div>
//         </Link>
        
//         <div 
//           onClick={handleClose}
//           className="h-18 w-18 relative cursor-pointer group"
//         >
//           <div className="h-25 w-0.5 -rotate-45 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center group-hover:bg-[#d3fd51] transition-colors"></div>
//           <div className="h-25 w-0.5 rotate-45 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center group-hover:bg-[#d3fd51] transition-colors"></div>
//         </div>
//       </div>
      
//       {/* Navigation Links */}
//       <div ref={navLinkRef} className="relative z-10">
//         {menuItems.map((item, i) => (
//           <Link 
//             key={i} 
//             to={item.path} 
//             onClick={() => handleNavigation(item.path)}
//             className="block group"
//           >
//             <div className="relative border-y border-white/30 link overflow-hidden origin-top group-hover:bg-white/5 transition-colors">
//               <h1 className="font-[font2] uppercase text-[6.5vw] leading-[1] py-4 text-center group-hover:text-[#d3fd51] transition-colors">
//                 {item.title}
//               </h1>

//               {/* Animated background strip */}
//               <div className="absolute top-0 left-0 w-full h-full flex bg-[#d3fd51] text-black moveLink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {[...Array(2)].map((_, j) => (
//                   <div
//                     key={j}
//                     className="flex items-center move-x gap-6 px-6 shrink-0 animate-pulse"
//                   >
//                     {item.slides.map((slide, k) => (
//                       <React.Fragment key={k}>
//                         <h2 className="whitespace-nowrap font-[font2] uppercase text-[6.5vw] leading-[1] py-4">
//                           {slide.text}
//                         </h2>
//                         <img
//                           className="h-20 w-48 shrink-0 rounded-full object-cover"
//                           src={slide.img}
//                           alt={slide.text}
//                         />
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FullScreenNav;


import React, { useRef } from "react";
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useNav } from '../../context/navContext'

const menuItems = [
  {
    title: "work",
    path: "/project",
    slides: [
      {
        text: "see everything",
        img: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
      },
      {
        text: "see everything",
        img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
      },
    ],
  },
  {
    title: "agency",
    path: "/agency",
    slides: [
      {
        text: "know us",
        img: "https://picsum.photos/300/120?random=1",
      },
      {
        text: "know us",
        img: "https://picsum.photos/300/120?random=2",
      },
    ],
  },
  {
    title: "contact",
    path: "/contact",
    slides: [
      {
        text: "send us a fax",
        img: "https://picsum.photos/300/120?random=3",
      },
      {
        text: "send us a fax",
        img: "https://picsum.photos/300/120?random=4",
      },
    ],
  },
  {
    title: "blog",
    path: "/blog",
    slides: [
      {
        text: "read articles",
        img: "https://picsum.photos/300/120?random=5",
      },
      {
        text: "read articles",
        img: "https://picsum.photos/300/120?random=6",
      },
    ],
  },
];

const FullScreenNav = () => {
  const navLinkRef = useRef(null);
  const { navOpen, setNavOpen } = useNav(); 

  useGSAP(() => {
    if (!navOpen) return;

    const tl = gsap.timeline();

    tl.from('.stairing', {
      scaleY: 0,
      transformOrigin: "top",
      stagger: {
        amount: -0.2
      },
      duration: 0.3,
      ease: "power2.out"
    });

    tl.from(navLinkRef.current, {
      opacity: 0,
      duration: 0.3
    });

    tl.from('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2
      },
      duration: 0.4,
      ease: "power2.out"
    });

  }, [navOpen]);

  const handleClose = () => {
    const closeTl = gsap.timeline();

    closeTl.to('.link', {
      opacity: 0,
      rotateX: -90,
      stagger: {
        amount: 0.15
      },
      duration: 0.3
    })
    .to(navLinkRef.current, {
      opacity: 0,
      duration: 0.2
    })
    .to('.stairing', {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: {
        amount: -0.15
      },
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setNavOpen(false)
    });
  };

  const handleNavigation = () => {
    handleClose();
  };

  if (!navOpen) return null;

  return (
    <div className="fixed top-0 left-0 overflow-x-hidden text-white bg-black h-screen w-full z-[60]">
      <div className="h-screen w-full fixed flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="stairing flex-1 bg-black"></div>
        ))}
      </div>

      <div className="flex pt-3 px-4 pb-4 items-center justify-between relative z-10">
        <Link to="/" onClick={handleNavigation} className="block">
          <div className="w-32 h-[68px] cursor-pointer">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              />
            </svg>
          </div>
        </Link>
        
        <div 
          onClick={handleClose}
          className="h-18 w-18 relative cursor-pointer group"
        >
          <div className="h-25 w-0.5 -rotate-45 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center group-hover:bg-[#d3fd51] transition-colors"></div>
          <div className="h-25 w-0.5 rotate-45 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center group-hover:bg-[#d3fd51] transition-colors"></div>
        </div>
      </div>
      
      <div ref={navLinkRef} className="relative z-10">
        {menuItems.map((item, i) => (
          <Link 
            key={i} 
            to={item.path} 
            onClick={() => handleNavigation(item.path)}
            className="block group"
          >
            <div className="relative border-y border-white/30 link overflow-hidden origin-top group-hover:bg-white/5 transition-colors">
              <h1 className="font-[font2] uppercase text-[6.5vw] leading-[1] py-4 text-center group-hover:text-[#d3fd51] transition-colors">
                {item.title}
              </h1>

              <div className="absolute top-0 left-0 w-full h-full flex bg-[#d3fd51] text-black moveLink opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(2)].map((_, j) => (
                  <div
                    key={j}
                    className="flex items-center move-x gap-6 px-6 shrink-0 animate-pulse"
                  >
                    {item.slides.map((slide, k) => (
                      <React.Fragment key={k}>
                        <h2 className="whitespace-nowrap font-[font2] uppercase text-[6.5vw] leading-[1] py-4">
                          {slide.text}
                        </h2>
                        <img
                          className="h-20 w-48 shrink-0 rounded-full object-cover"
                          src={slide.img}
                          alt={slide.text}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FullScreenNav;
