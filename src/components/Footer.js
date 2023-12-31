import React from 'react'
import Logo from '../Assets/Logo.svg'
import Button from './Button'

const Footer = () => {
  return (
    <div>
        <div className='footer-container flex lg:pl-28 pr-8 pl-8 py-8 flex-col lg:flex-row '>
            <div className='footer--links flex flex-col basis-1/2'>
                <div className='logo--holder mb-4'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='links--table flex space-x-16 lg:space-x-20'>
                    <div className='table--one'>
                        <ul>
                            <li className='font-bold mb-3'><a href='#'>Product</a></li>
                            <li className='mb-2'><a href='#'>Homepage</a></li>
                            <li className='mb-2'><a href='#'>Pricing</a></li>
                            <li><a href='#'>Features</a></li>
                        </ul>
                    </div>
                    <div className='table--two'>
                        <ul>
                            <li className='font-bold mb-3'><a href='#'>Help</a></li>
                            <li className='mb-2'><a href='#'>Live Chat</a></li>
                            <li className='mb-2'><a href='#'>Send Email</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className='table--three'>
                        <ul>
                            <li className='font-bold mb-3'><a href='#'>Company</a></li>
                            <li className='mb-2'><a href='#'>About</a></li>
                            <li className='mb-2'><a href='#'>Customers</a></li>
                            <li><a href='#'>Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='reach--us basis-1/2 pt-16'>
                <h1 className='mb-4 font-bold'>Try TweetNow</h1>
                <div className='relative'>
                    <div className='absolute mt-1 left-56'>
                    <button className="bg-blue-900 hover:bg-blue-950 lg:p-3 rounded mr-6 font-semibold text-white">
                    <a href="#" className='lg:text-base text-xs'>Start Scheduling</a>
                    </button>
                    </div>
                    <input type='text' placeholder='Email Address' className='rounded-md p-4 ring-1 ring-gray-300 lg:w-96 w-80' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer