import React, {useState} from 'react'
import Register from './Register'
import Login from './Signin';


const PageRight = () => {
const [toggle, setToggle]=useState(1);
function updateToggle(id: React.SetStateAction<number>) {
    setToggle(id)
}
  return (
    <div className='md:w-[55%] py-8'>
        <div className="w-[80%] mx-auto">
            <ul className="flex w-full justify-between list-none">
                <li onClick={()=>updateToggle(1)} className=' cursor-pointer  '>REGISTER</li>
                <li onClick={()=>updateToggle(2)} className=' cursor-pointer'>LOGIN</li>
            </ul>
        </div>
        <br />
        <div className="w-[80%] mx-auto">
            <Login name={toggle} />
            <Register name={toggle}/>
        </div>
    </div>
  )
}

export default PageRight