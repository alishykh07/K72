import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'
import ProjectFooter from '../common/projectFooter'

const Last = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to('.parent', {
            scrollTrigger: {
                trigger: '.childs',
                start: 'top 10%',
                end: 'top 100%',
                scrub: true,
                // markers: true,
            }
        })
    })

    return (
        <>
            <div className='parent'>
                <div className="childs sticky top-0  w-[100%] h-screen text-center flex flex-col rounded-tl-[40px] rounded-tr-[40px] overflow-hidden cursor-pointer">
                    <img src="../../../public/images/img10.jpg" alt="" className='w-full object-cover scale-0.9 hover:scale-[1.1] transition-transform duration-300' />
                    <a href="/project" className='absolute top-1 left-1/2 -translate-x-1/2  text-2xl pt-1 text-amber-50 uppercase hover:text-[#010100] hover:underline transition-all duration-300'>
                        veiw all projects
                    </a>
                    <a href="/project" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem]  font-[font2] text-amber-50 text-nowrap hover:underline transition-all duration-300 '>
                        Lamajeure
                    </a>

                </div>
                <div className="childs sticky top-0  w-[100%] h-screen text-center flex flex-col rounded-tl-[40px] rounded-tr-[40px] overflow-hidden cursor-pointer">
                    <img src="../../../public/images/img13.jpg" alt="" className='w-full object-cover scale-0.9 hover:scale-[1.1] transition-transform duration-300' />
                    <a href="/project" className='absolute top-1 left-1/2 -translate-x-1/2  text-2xl pt-1 text-amber-50 uppercase hover:text-[#010100] hover:underline transition-all duration-300'>
                        veiw all projects
                    </a>
                    <a href="/project" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-[font2] text-amber-50 hover:underline transition-all duration-300 text-nowrap'>
                        Crisis24
                    </a>
                </div>
                <div className="childs sticky top-0  w-[100%] h-screen text-center flex flex-col rounded-tl-[40px] rounded-tr-[40px] overflow-hidden cursor-pointer">
                    <img src="../../../public/images/img16.jpg" alt="" className='w-full object-cover scale-0.9 hover:scale-[1.1] transition-transform duration-300' />
                    <a href="/project" className='absolute top-1 left-1/2 -translate-x-1/2  text-2xl pt-1 text-amber-50 uppercase hover:text-[#010100] hover:underline transition-all duration-300'>
                        veiw all projects
                    </a>
                    <a href="/project" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] font-[font2] text-amber-50 text-nowrap hover:underline transition-all duration-300 '>
                        Fruité
                    </a>

                </div>

                <div className="sticky top-[50vh]">
                    <ProjectFooter />
                </div>
            </div>

        </>
    )
}

export default Last

