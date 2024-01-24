import React from 'react'

export default function Navbar() {
    return (
        <section className='bg-[#D9D9D9]/40 fixed top-6 flex items-center justify-center w-full h-24 p-6 px-14'>
            <div className="flex flex-row justify-start items-center">
                <img src='/logo.png' width={108} height={85} alt='logo' className='px-3 justify-start' />
                <div className='w-full flex items-center justify-center px-14'>
                    <ul className='hidden md:flex  gap-x-9'>
                        <li>
                            <p> HOME </p>
                        </li>
                        <li>
                            <p> EVENTS </p>
                        </li>
                        <li>
                            <p> OUR TEAM </p>
                        </li>
                        <li>
                            <p> BLOGS/NEWS </p>
                        </li>
                        <li>
                            <p> ABOUT US </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type='button' className='bg-[#4eff3f] hover:bg-green-700 rounded w-64 h-12'>
                        JOIN OUR COMMUNITY
                    </button>
                </div>
            </div>
        </section>
    )
}
