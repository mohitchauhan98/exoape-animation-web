import React from 'react'
import video1 from '../assets/video1.mp4'

const Story = () => {
  return (
    <div className='w-full h-[full] bg-[#070707] text-[#e0ccbb] py-[7rem]'>
        <div className='w-full flex justify-center items-center'>
            <div className='w-[32%] px-[10rem]'>
                <div className='texts'>
                    <p className='text text-[12rem] leading-none'>Our</p>
                    <p className='text text-[12rem] leading-none'>Story</p>
                </div>
            </div>
            <div className='w-[70%]'>
                <video className='w-full' autoPlay loop muted src = {video1} />
            </div>
        </div>
        <p className='text text-[2rem] px-[10rem] w-[50%]'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        <div className='divider h-[1px] bg-[#e0ccbb] opacity-40' style={{ width: 'calc(100% - 20rem)' , margin : '80px auto'  }}></div>
        <footer>
            <div className='flex w-[50%] justify-between px-[10rem] text-[1.5rem] opacity-70'>
                <div className='cursor-pointer'>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Willem || Singel 8</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>6041 HS, Roermond</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>The Netherlands</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>hello@exoape.com</p>
                </div>
                <div className='cursor-pointer'>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Work</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Studio</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>News</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Contact</p>
                </div>
                <div className='cursor-pointer'>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Behance</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Dribble</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Twitter</p>
                    <p className='mb-2 pb-1 border-b-2 border-transparent hover:border-current'>Instagram</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Story

//<p className='text text-[2rem] mt-[4rem]'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>