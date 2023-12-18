import React from 'react'
import mobile from '../assets/Lava-Blaze-2-5G-1-1-1024x1024.webp'
import Banner from '../Banner/Banner'
function AboutUs() {
  return (
    <div>
      <Banner />
      <div className='bg-red-400 w-full flex items-center justify-center gap-3'>
        <div className='bg-red-300 mt-5 w-1/2'>
          <img src={mobile} alt="" className='bg-cover w-full rounded-md,' />
        </div>
        <div className=' w-96 flex flex-col items-center justify-center'>
          <div className=' p-5 w-96 flex items-center justify-center'>
            <h1 className='text-white text-4 font-bold  text-4xl'>Latest Release</h1>
          </div>
          <div className=' w-96 flex flex-col items-center justify-center'>
            <p className='text-white font-mono'>"Lava Blaze 2 5G mobile was launched on 2nd November 2023. The phone comes with a 90 Hz refresh rate 6.56-inch touchscreen display offering a resolution of 720x1600 pixels (HD+). Lava Blaze 2 5G is powered by an octa-core MediaTek Dimensity 6020 processor..</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default AboutUs
