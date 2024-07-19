import React from 'react'
import NavBar from './Components/NavBar'
import Main from './Components/Main'
import Courses from './Components/Courses'
import Instructors from './Components/Instructors'
import Last from './Components/Last'
import Footer from './Components/Footer'
import Why from './Components/Why'

const App = () => {
  return (
    <div className=''>
      <NavBar/>
      <Main/>
      <Courses/>
      <Instructors/>
      <Why/>
      <Last/>
      <Footer/>
    </div>
  )
}

export default App
