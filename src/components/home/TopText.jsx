import React from 'react'
import Video from './Video'

const TopText = () => {
    return (
        <div className='font-[font1] text-white text-center pt-3 md:mt-14 mt-32 lg:mt-0'>
            <div className='lg:text-[8vw] text-[11vw] md:text-[10vw] uppercase lg:leading-[8vw] leading-[11vw] flex justify-center items-center'>
                The spark for
            </div>
            <div className='lg:text-[8vw] text-[11vw] md:text-[10vw] uppercase lg:leading-[8vw] leading-[11vw] flex justify-center items-center'>
                all
                <div className='lg:h-[13vh] lg:w-[14vw] md:w-[18vw] w-[20vw] sm:h[9vh] sm:w-[35vw] lg:-mt-3 rounded-full overflow-hidden'>
                    <Video/>
                </div>
                things
            </div>
            <div className='lg:text-[8vw] text-[11vw] md:text-[10vw] uppercase lg:leading-[8vw] leading-[11vw] flex justify-center items-center'>
                creative
            </div>
        </div>
    )
}

export default TopText


// import React from 'react'
// import Video from './Video'

// const TopText = () => {
//   return (
//     <div className="font-[font1] text-white text-center pt-4 sm:pt-6 md:pt-8">
//       {/* Line 1 */}
//       <div className="uppercase flex justify-center items-center 
//                       text-[10vw] leading-[10vw] 
//                       sm:text-[8vw] sm:leading-[8vw] 
//                       md:text-[6vw] md:leading-[6vw] 
//                       lg:text-[5vw] lg:leading-[5vw]">
//         The spark for
//       </div>

//       {/* Line 2 with video inside */}
//       <div className="uppercase flex justify-center items-center gap-2
//                       text-[10vw] leading-[10vw] 
//                       sm:text-[8vw] sm:leading-[8vw] 
//                       md:text-[6vw] md:leading-[6vw] 
//                       lg:text-[5vw] lg:leading-[5vw]">
//         all
//         <div className="rounded-full overflow-hidden 
//                         h-[8vh] w-[20vw] 
//                         sm:h-[10vh] sm:w-[15vw] 
//                         md:h-[12vh] md:w-[12vw] 
//                         lg:h-[13vh] lg:w-[10vw] 
//                         -mt-2 sm:-mt-3">
//           <Video />
//         </div>
//         things
//       </div>

//       {/* Line 3 */}
//       <div className="uppercase flex justify-center items-center
//                       text-[10vw] leading-[10vw] 
//                       sm:text-[8vw] sm:leading-[8vw] 
//                       md:text-[6vw] md:leading-[6vw] 
//                       lg:text-[5vw] lg:leading-[5vw]">
//         creative
//       </div>
//     </div>
//   )
// }

// export default TopText
