import React from 'react'
import Nav from '../components/Navbar/Navbar'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Join from '../components/Home/Join'
import ChatterSection from '../components/Home/ChatterSection'
import Footer from '../components/Footer/Footer'



const Home = () => {
  return (
    <div>
       <Nav />
        <Header />
        <About />
        <Join />
        <ChatterSection />
        <Footer />
    </div>
  )
}

export default Home;