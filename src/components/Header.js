import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import SerchBar from './header-components/Serch'
import Navbar from './header-components/Navbar'
import './header.css'

export default function Header({setMain}) {
  return (
    <div className='header'>
      <SerchBar setMain={setMain}/>
      <Navbar/>
    </div>
  )
}
