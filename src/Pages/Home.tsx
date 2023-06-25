import React from 'react'
import Header from '../Components/Home/Header'
import About from '../Components/Home/About'
import Join from '../Components/Home/Join'
import ChatterSection from '../Components/Home/ChatterSection'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Navbar/Navbar'


const Home = () => {
  return (
    <>
       <Nav />
        <Header />
        <About />
        <Join />
        <ChatterSection />
        <Footer />
    </>
  )
}

export default Home