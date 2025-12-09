import React from 'react'
import { Link } from 'react-router-dom'

const BottomText = () => {
    return (
        <div className='font-[font2] flex justify-center items-center gap-3 text-white pb-5'>
            <div className='border-3 lg:h-22 px-5 border-[#fff] rounded-full uppercase hover:border-[#d3fd50] hover:text-[#d3fd50] transition all'>
                <Link className='lg:text-[4.3vw] md:text-[5vw] text-[7.3vw] lg:mt-6' to='/project'>
                    projects
                </Link>
            </div>
            <div className='border-3 lg:h-22 px-5 border-[#fff] rounded-full uppercase hover:border-[#d3fd50] hover:text-[#d3fd50] transition all'>
                <Link className='lg:text-[4.3vw] md:text-[5vw] text-[7.3vw] lg:mt-6' to='/agency'>
                    agency
                </Link>
            </div>
        </div>
    )
}

export default BottomText

// import React from 'react'
// import { Link } from 'react-router-dom'

// const BottomText = () => {
//   return (
//     <div className="font-[font2] flex flex-wrap justify-center items-center gap-3 text-white pb-5">
//       {/* Projects Button */}
//       <div className="border border-white rounded-full uppercase transition-all duration-300 
//                       hover:border-[#d3fd50] hover:text-[#d3fd50] 
//                       px-3 py-2 sm:px-5 sm:py-3">
//         <Link
//           className="text-sm sm:text-base md:text-lg lg:text-[4.3vw]"
//           to="/project"
//         >
//           projects
//         </Link>
//       </div>

//       {/* Agency Button */}
//       <div className="border border-white rounded-full uppercase transition-all duration-300 
//                       hover:border-[#d3fd50] hover:text-[#d3fd50] 
//                       px-3 py-2 sm:px-5 sm:py-3">
//         <Link
//           className="text-sm sm:text-base md:text-lg lg:text-[4.3vw]"
//           to="/agency"
//         >
//           agency
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default BottomText

