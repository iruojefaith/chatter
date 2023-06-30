import React from 'react'
import Search from '../components/Search';
import Sidebar from '../components/Sidebar'
import BlogPost from '../components/Content'


const MainApp = () => {

  return (
    <div className='h-screen overflow-hidden'>
            <Search />
            <Sidebar />
            <BlogPost />

    </div>
  )
}

export default MainApp;