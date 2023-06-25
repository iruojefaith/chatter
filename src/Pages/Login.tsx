import React from 'react'
import PageLeft from '../Components/Login/PageLeft'
import PageRight from '../Components/Login/PageRight'

const Login = () => {
  return (
    <div className='flex h-[100vh]'>
      <PageLeft />
      <PageRight />
    </div>
  )
}

export default Login