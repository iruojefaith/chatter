import {HiOutlinePencil} from 'react-icons/hi'
import PostPreview from './PostPreview'
import {useContext} from 'react'
import { Context } from './Context'
import { Link } from 'react-router-dom'

const Feed = () => {
  const { users, posts }: any = useContext(Context);

  console.log(posts, '**')
  return (
    <div className='w-[90%] mx-auto py-6'>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <h3>FEED</h3>
                    <p>Explore different content you’d love </p>
                </div>

                <button className="btn-pry w-fit flex gap-2 items-center p-4 "><HiOutlinePencil/> <span>Post a content</span></button>
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