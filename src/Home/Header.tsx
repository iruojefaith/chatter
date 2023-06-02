import React from 'react'


const Header = () => {
  return (
    <div className="bg-[url('/src/Assets/header-bg.png')]  w-full h-full">
        <div className='bg-[#0000008c] h-[30rem] flex  '>
            <div className='w-10/12 m-auto  '>
                <h1>Welcome to Chatter: A Haven for Text- <br></br>Based Content</h1>
            <p className='text-white text-lg '>Unleash the Power of Words, Connect with Like-minded Readers<br /> and Writers</p>
            <button className="border-[3px] border-blue-500 rounded-lg w-[157px] h-14 text-white bg-blue-500 font-bold mt-4 ">Get started</button>
            </div>

        </div>
    </div>
  )
}

export default Header