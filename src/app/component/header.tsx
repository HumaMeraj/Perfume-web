import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className='h-[12vh] bg-white'>
       <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>
       
       
       
<ul className='flex items-center justify-center space-x-12 uppercase font-bold'>
    <li className='text-black hover:text-yellow-700'>
        <Link href={"/"}>Home</Link></li>
        <li className='text-black hover:text-yellow-700'>
        <Link href={"/"}>About</Link></li>
        <li className='text-black hover:text-yellow-700'>
        <Link href={"/"}>Review</Link></li>
        <li className='text-black hover:text-yellow-700'>
        <Link href={"/"}>Contact</Link></li>
</ul>
</div>
</div>
  )
}

export default Header