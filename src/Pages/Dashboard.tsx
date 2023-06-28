import React,{ useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import Search from '../dashboard/Search';
import BlogPost from '../dashboard/Content'


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