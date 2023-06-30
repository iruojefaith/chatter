import {Link} from 'react-router-dom'
import {CgFeed} from 'react-icons/cg'
import {BsBookmarks} from 'react-icons/bs'
import {FaRegUser, FaBars, FaWindowClose} from 'react-icons/fa'
import {LuUsers} from 'react-icons/lu'
import {MdOutlineDrafts,MdOutlineAnalytics,MdOutlineNotificationsNone} from 'react-icons/md'
import { useState } from 'react'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleSidebar() { setIsOpen(!isOpen) }

    const sideBarMenuItems : {
        icon?: any,
        name: string,
        path: string
    }[] = [
        {
            icon: <CgFeed/>,
            name: 'Feed',
            path: 'feed'
        },
        {
            icon: <BsBookmarks/>,
            name: 'Bookmarks',
            path: 'bookmarks'
        },
        {
            icon: <LuUsers/>,
            name: 'Team Blog',
            path: 'team-blogs'
        },
        {
            icon: <MdOutlineDrafts/>,
            name: 'Drafts',
            path: 'drafts'
        },
        {
            icon: <MdOutlineAnalytics/>,
            name: 'Analytics',
            path: 'analytics'
        }
    ]
  return (
    <aside className={`border bg-white w-[${isOpen ? '40%' : '50px'}] md:w-[25%] lg:w-[20%] overflow-y-scroll fixed top-0 left-0 p-2 md:px-4 lg:py-8 lg:px-10 z-[10000] h-screen`}>
       <div className={`${isOpen ? 'hidden' : 'block'} md:hidden mt-4`} onClick={toggleSidebar} ><FaBars/></div>
       <div className={`${!isOpen ? 'hidden' : 'block'} md:block`}>
            <div className='flex justify-between items-center'>
                    <h3 className='text-[#543EE0] font-medium'>CHATTER</h3>
                    <h4 onClick={toggleSidebar} className='block text-red-600 md:hidden'><FaWindowClose/></h4>
            </div>
            <br />
            <div>
                <h5>Overview</h5>
                <br />
                <menu className='flex flex-col menu-items '>
                    {sideBarMenuItems.map((menuItem) =>
                    <Link to={menuItem.path} className='flex items-center gap-2 hover:ml-2 mb-4'><span>{menuItem.icon}</span> <h6>{menuItem.name}</h6> </Link>
                    )}
                </menu>
                <br />
                <h5>Trending Tags</h5>
                <br />
                <menu className='flex flex-col menu-items'>
                    <a href='#' className='mb-4 '> Programming </a>
                    <a href='#' className='mb-4 '> Data Science</a>
                    <a href='#' className='mb-4 '> Technology </a>
                    <a href='#' className='mb-4 '> Machine Learning</a>
                    <a href='#' className='mb-4 '> Politics </a>
                    <a href='#' className='mb-4 '> See All </a>
                </menu>
                <br />
                <h5>Personal</h5>
                <br />
                <menu className='flex flex-col menu-items'>
                    <Link to='#' className='flex gap-2 items-center'><span> {<FaRegUser/>} </span> <h6>Account</h6></Link>
                    <Link to='#' className='flex gap-2 items-center'><span> <MdOutlineNotificationsNone/> </span> <h6>Notifications</h6></Link>
                </menu>
                <br />
                <h5>Log out</h5>
            </div>
       </div>
    </aside>
  )
}

export default SideBar;