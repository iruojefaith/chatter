import React from 'react'

interface props {
    name: number;
}

const Signin = ( {name}:props) => {
  return (
    <div className={name === 2 ? "show-content" :'login-form content '}>
      <div className='flex justify-end'>
        <hr className='w-[50%] border-t-4 border-[#543EE0] mb-6 -mt-2  '/>
      </div>

        <br />
        <h4 className='text-center'>Welcome back</h4>
        <br />
        <form action="">
            <div className='w-full'>
                <label htmlFor="user">Email address</label>
                <div className="h-2"></div>
                <input type="email" id='user' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <br />
            <div className='w-full'>
                <label htmlFor="pword">Password</label>
                <div className="h-2"></div>
                <input type="email" id='pword' className='border-2 rounded-lg p-2 w-full' />
            </div>
            <br />
            <button className="btn-pry w-full">Log in</button>
        </form>
    </div>
  )
}

export default Signin;