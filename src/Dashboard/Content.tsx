import { useState, useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Feed from "./Feed"
import Footer from "../Components/Footer/Footer"
import Analytics from '../pages/Analytics';
import PostDetails from '../pages/PostDetails';
import { useContext } from 'react';
import { Context } from './Context';
import Post from '../pages/Post'

type articleProps = {
  postId: any
}
const Content = () => {
  const { posts, users } = useContext(Context) as { posts: any[], users: any[] };
  const [author, setAuthor] = useState([]);
  const [post, setPost] = useState([]);
  const location =  useLocation();
  const postPath = location.pathname.slice(6);

 useEffect(()=>{
    if (posts.length === 0) {
      return
    }

     const selectedPost = posts.find((post: any) => post.id === postPath);
    setPost(selectedPost);
    setAuthor(users.find((user: any) => user.id === selectedPost?.data?.author));

  })


  return (
    <div className='absolute border overflow-scroll left-12 w-[85%] md:left-[25%] lg:left-[20%] md:w-[70%] lg:w-[75%] md:mx-[2.5%] mt-20'>
        <Routes>
            <Route path="feed" element={<Feed/>} />
            <Route path="analytics" element={<Analytics/>} />
            <Route path={`post/${location.pathname}`} element={<PostDetails postId={postPath} post={post} author={author}/>} />
            <Route path={`${location.pathname}`} element={<Post/>}/>

        </Routes>

        <Footer />
    </div>
  )
}

export default Content;