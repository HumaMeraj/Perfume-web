"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import burger1 from '@/app/public/image.png'
import burger2 from '@/app/public/image copy 2.png'
import burger3 from '@/app/public/image copy.png'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }}
const Hero = () => {
  return (<Carousel additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={3000} centerMode={false} infinite responsive={responsive} itemClass='Class' showDots={false}>
    <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path'>
  <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx:auto'>
    {/*Image*/}
    <Image src={burger1} alt="burger" className='hidden md:block'/>
    {/*information*/}
    <div>
      <h1 className='text-[40px] font-semibold text-red-600'>Elegant Perfumes</h1>
      <h1 className='text-[90px] leading-[5rem] uppercase text-white from-neutral-500'>Best <br/>Choices</h1>
      <button className='mt-[2rem]  px-8 py-3 text-[16px] bg-yellow-600 tranistion-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
  <span className='font-bold'>Order Now</span>
</button>
    </div>
  </div>
</div>
<div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path'>
  <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx:auto'>
    {/*Image*/}
    <Image src={burger2} alt="burger" className='hidden md:block'/>
    {/*information*/}
    <div>
      <h1 className='text-[40px] font-semibold text-red-600'>Elegant Perfumes</h1>
      <h1 className='text-[90px] leading-[5rem] uppercase text-white from-neutral-500'>Best <br/>Choices</h1>
      <button className='mt-[2rem]  px-8 py-3 text-[16px] bg-yellow-600 tranistion-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
  <span className='font-bold'>Order Now</span>
</button>
    </div>
  </div>
</div>
<div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path'>
  <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx:auto'>
    {/*Image*/}
    <Image src={burger3} alt="burger" className='hidden md:block'/>
    {/*information*/}
    <div>
      <h1 className='text-[40px] font-semibold text-red-600'>Elegant Perfumes</h1>
      <h1 className='text-[90px] leading-[5rem] uppercase text-white from-neutral-500'>Best <br/>Choices</h1>
      <button className='mt-[2rem]  px-8 py-3 text-[16px] bg-red-700 tranistion-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
  <span className='font-bold'>Order Now</span>
</button>
    </div>
  </div>
</div>
  </Carousel>
    
  )
}

export default Hero