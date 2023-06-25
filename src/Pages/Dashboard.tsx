import React,{ useState } from 'react'
import Sidebar from '../Dashboard/sidebar'
import Search from '../Dashboard/search';
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