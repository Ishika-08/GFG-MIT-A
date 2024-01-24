import React from 'react'

export default function Hero() {
  return (
    <section className='flex justify-center flex-wrap items-center max-w-6xl mx-auto'>
      <div className='lg:w-[55%]'>
      <h1 className='font-bold py-5 text-3xl text-white'>
          WELCOME TO<br/>
          <span className='text-green-500'>GEEKSFORGEEKS</span> STUDENT<br/>
          CHAPTER<br/>
          OF MIT CH.SAMBHAJINAGAR
      </h1>
      <div>
        <button type="button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transform skew-x-12 mr-2">
        JOIN OUR COMMUNITY
        </button>
        <button type="button" 
        className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-500 hover:border-transparent rounded transform skew-x-12'>
        REGISTER FOR EVENT
        </button>
      </div>
      </div>

      <div className='lg:w-[35%]'>
        <img src="/hero.png" alt="profile" className='w-full'/>
      </div>
    </section>
  )
}
