import { useState } from 'react'
import './App.css'
import Header from './Components/Headers/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex p-5 mx-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
