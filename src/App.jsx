import React from 'react'
import { Home,Blog } from './pages'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
  <div className="">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
    </Routes>
  </div>
  )
}

export default App