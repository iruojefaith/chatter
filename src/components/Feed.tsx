import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {HiOutlinePencil} from 'react-icons/hi'
import PostPreview from './PostPreview';
import { Context } from '../context/Context'


const Feed = () => {
  const { users, posts }: any = useContext(Context);

  return (
    <div className='w-[90%] mx-auto py-6'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
                <div>
                    <h3>FEED</h3>
                    <p>Explore different content you’d love </p>
                </div>

              <Link to="createpost">  <button className="btn-pry w-fit flex gap-2 items-center p-4  "><HiOutlinePencil/> <span className='text-white'>Post a content</span></button></Link>
            </div>
            <br /> <br />
            <div className="border flex justify-between items-center px-4 py-6 rounded-lg">
                <h5 className='font-bold'>For you</h5>
                <h5 className='font-bold'>Featured</h5>
                <h5 className='font-bold'>Recent</h5>
            </div>
            {posts.map((post: any) => (
              <PostPreview post={post} key={post.id} />
            ))}
    </div>
  )
}

export default Feed