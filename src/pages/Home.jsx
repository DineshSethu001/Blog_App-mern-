import React from 'react'
import {Navbar, Header, BlogList} from '../components'
import Newsletter from './Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <>
      <Navbar/>
      <Header/>
      <BlogList />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home