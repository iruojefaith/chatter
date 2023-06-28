import React from 'react'
import PageLeft from '../components/Login/PageLeft'
import PageRight from '../components/Login/PageRight'

const Login = () => {
  return (
    <div className='md:flex h-[100vh]'>
      <PageLeft />
      <PageRight />
    </div>
  )
}

export default Login