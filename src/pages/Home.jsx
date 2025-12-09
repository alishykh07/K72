import React from 'react'
import Video from '../components/home/Video'
import TopText from '../components/home/TopText'
import BottomText from '../components/home/BottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <TopText />
        <BottomText />
        <div className='
             absolute 
             bottom-40 md:bottom-28 
             right-4 sm:right-6 md:right-3 md:leading-5 lg:leading-7
             text-sm sm:text-base md:text-lg 
             font-[font1] text-white 
             w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/4'>
          <p>K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
