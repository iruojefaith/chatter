import BGIMG from '../../Assets/signup-bg.png'

const PageLeft = () => {
  return (
    <div className='hidden lg:block w-[45%] ' style={{backgroundImage: `url(${BGIMG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center left' }}>
        <div className="w-full flex flex-col justify-center h-full bg-[#00000060] text-white p-8">
            <h1 className='text-center'>CHATTER</h1>
            <br />
            <p className='text-base mx-auto md:text-lg w-[90%]'>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
        </div>
    </div>
  )
}

export default PageLeft