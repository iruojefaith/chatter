import React,{ useState, useCallback } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {BsFillImageFill} from 'react-icons/bs';
import {BsCameraVideo} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import { useModal } from 'react-hooks-use-modal';


const Post = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
  });
  return (
    <div className="border p-4 md:p-8">
       <div className="border justify-between items-center px-4 py-6 rounded-lg h-[35rem] text-[#D0D0D0] ">
        <div className='w-full flex justify-end '>
          <button className="items-center px-6 text-white"> Publish</button>
        </div>
        <div className='flex gap-4 items-center md:ml-8 mt-16'>
          <AiOutlinePlusCircle onClick={open} className='text-[3rem] cursor-pointer fill-[#D0D0D0]'/>
          <Modal>
        <div className='flex gap-5'>
          <button className='border rounded-full p-2 w-[3rem] h-[3rem] border-[#543ee0ad] items-center flex justify-center cursor-pointer bg-transparent text-transparent' onClick={close}><GrClose className='fill-[#543ee0ad]'/></button>
          <div className='border rounded-full p-2 w-[3rem] h-[3rem] border-[#543ee0ad] items-center flex justify-center cursor-pointer'><BsFillImageFill className='fill-[#543ee0ad]'/></div>
          <div className='border rounded-full p-2 w-[3rem] h-[3rem] border-[#543ee0ad] items-center flex justify-center cursor-pointer '><BsCameraVideo className='fill-[#543ee0ad]'/></div>

        </div>
      </Modal>
          <div className=' flex flex-col'>
             <input placeholder='Title' className='outline-none border-0 text-[2rem] bg-transparent font-bold'/>
             <input placeholder='Write a post....' className='outline-none border-0 text-[1.2rem] bg-transparent font-semibold mt-2'/>
          </div>
        </div>

            </div>
      </div>
  )
}
export default Post;