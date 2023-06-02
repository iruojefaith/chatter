import React from 'react'
import AboutImg from '../Assets/about-bg.png'

const About = () => {
  return (
    <section className='section w-full h-full md:h-[25rem] '>
        <div className='w-11/12 md:flex m-auto gap-6 '>
            <div className='md:w-7/12 mt-4 '>
            <h2>About Chatter</h2>
            <p className='text-[18px] font-normal leading-[27px]'>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
        </div>
        <div className='md:w-5/12 flex justify-end'>
            <img src={AboutImg} alt="about img" />
        </div>
        </div>

    </section>
  )
}

export default About