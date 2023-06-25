import {Route, Routes, useLocation} from 'react-router-dom'
import Feed from "./Feed"
import Footer from "../Components/Footer/Footer"
import Analytics from '../Pages/Analytics';
import PostDetails from '../Pages/PostDetails';
import { useContext } from 'react'
import { Context } from '../Dashboard/Context'


const Content = () => {
  const {posts, users} = useContext(Context)
  const location =  useLocation()
  return (
    <div className='absolute border overflow-scroll left-12 w-[85%] md:left-[25%] lg:left-[20%] md:w-[70%] lg:w-[75%] md:mx-[2.5%] mt-20'>
        <Routes>
            <Route path="feed" element={<Feed/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path={`post/${location.pathname}`} element={<PostDetails/>} />
        </Routes>

        <Footer />
    </div>
  )
}

export default Content