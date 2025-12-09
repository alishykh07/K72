import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ExpertiseSection from '../components/agency/ExpertiseSection'
import Team from '../components/agency/Team'
import AnimateSection from '../components/agency/AnimateSection'
import Last from '../components/agency/Last'

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "/images/per1.jpg",
    "/images/per2.jpg",
    "/images/per3.jpg",
    "/images/per4.jpg",
    "/images/per5.jpg",
    "/images/per6.jpg",
    "/images/per7.jpg",
    "/images/per8.jpg",
    "/images/per9.jpg",
    "/images/per10.jpg",
    "/images/per11.jpg",
    "/images/per12.jpg",
    "/images/per13.jpg",
    "/images/per14.jpg",
  ];

  // 🔹 Image scroll animation
  useGSAP(() => {
    imageRef.current.src = imageArray[0];

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 19%",
        end: "top -170%",
        pin: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[index];
        },
      },
    });
  });

  return (
    <div className="bg-black text-white">
      <div className='section1 relative'>
        <div ref={imageDivRef} className='absolute lg:top-30 lg:left-[30vw] lg:w-[15vw] w-[40vw] left-[25vw] md:w-[32vw] md:left-[20vw] rounded-2xl overflow-hidden'>
          <img
            ref={imageRef}
            className='w-full h-full object-cover'
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className='relative py-1'>
          <div className='font-[font2] mt-[45vh] relative'>
            <h1 className='text-[20vw] text-center leading-[38vh]'>SEVEN7Y <br />TWO</h1>
          </div>
          <div className='pl-[40%]'>
            <p className='lg:text-[56px] text-4xl lg:leading-15 font-semibold'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. 
              A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve 
              short-term success, but not influence that goes the distance. We bring that perspective to every 
              brand story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div className='pt-[25vh]'>
        <ExpertiseSection />
      </div>

      <>
        <AnimateSection />
      </>

      {/* <>
        <Team />
      </> */}

      <>
      <Last/>
      </>
    </div>
  )
}

export default Agency
