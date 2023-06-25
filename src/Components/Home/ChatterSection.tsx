import React from 'react'
import ChatterBg from '../../Assets/join.png';
import Lady from '../../Assets/lady.png';
import Guy from '../../Assets/guy.png';
import GuyonGlass from '../../Assets/guyonglass.png';

const ChatterSection = () => {
  return (
    <>
    <section className='section flex w-full bg-[#FFEDCC]'>
            <div className='flex flex-row m-auto w-11/12'>
                <div className='w-3/12'>
                   <img className="rounded-full " src={ChatterBg} alt='man on black'/>
                </div>
                <div className='w-8/12'>
                        <p className='flow-root '>"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform,
                            I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in
                            thoughtful discussions.”
                        </p>
                        <p className=' mt-8 '><span className='font-bold '>Adebobola Muhydeen,</span> Software developer at Apple </p>
                        <button>Join Chatter</button>
                </div>

            </div>
    </section>
    <section className='section flex w-full'>
            <div className='flex md:flex-row m-auto w-11/12 gap-8 '>
                <div className='md:w-3/12  '>
                    <div><img className="rounded-full " src={Lady} alt='man on black'/></div>
                    <div className='flex justify-end'><img className="rounded-full  " src={Guy} alt='man on black'/></div>
                    <div><img className="rounded-full " src={GuyonGlass} alt='man on black'/></div>
                </div>
                <div className='md:w-7/12 md:ml-8 md:mt-8'>
                    <h2>Write, read and connect </h2>
                        <h2>with great minds on chatter</h2>

                        <p>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals
                        </p>

                        <button >Get Started</button>
                </div>

            </div>
    </section>
    </>
  )
}

export default ChatterSection