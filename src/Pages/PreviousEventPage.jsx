import React from 'react'
import Carousel from "../components/LandingPage/Carasousel";

export default function PreviousEventPage() {
  return (
    <div className='mt-[100px] max-w-6xl mx-auto'>
      <Carousel/>
      <div className='mt-[30px] text-center'>
        <h1 className='text-white font-bold text-6xl'>Event name</h1>
        <div className='text-white mt-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

    </div>
  )
}
