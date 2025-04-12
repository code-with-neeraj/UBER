import React from 'react'
import '../pages/Start.scss'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYWZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex justify-between flex-col w-full">
        <img className='w-16 ml-8 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white  pb-7  py-4 px-4'>
            <h2 className='text-[30px] font-bold '>Get Started with Uber</h2>
            <Link to='/login' className='continue-btn'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
