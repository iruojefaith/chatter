import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search';
import BlogPost from '../components/Content'


const MainApp = () => {

  return (
    <div className='h-screen overflow-hidden'>
            <Sidebar />
            <Search />
            <BlogPost />

    </div>
  )
}

export default MainApp;