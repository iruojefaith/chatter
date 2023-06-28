import React from 'react'
import Header from '../Components/home/Header'
import About from '../Components/home/About'
import Join from '../Components/home/Join'
import ChatterSection from '../Components/home/ChatterSection'
import Footer from '../Components/footer/Footer'
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