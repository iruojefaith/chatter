import React,{ useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Search from '../Dashboard/Search';
import BlogPost from '../Dashboard/Content'


const Dashboard = () => {

  return (
    <div className='h-screen overflow-hidden'>
            <Sidebar />
            <Search />
            <BlogPost />

    </div>
  )
}

export default Dashboard;