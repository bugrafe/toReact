import React from 'react'
import Mobilemenu from './mobile-menu'
import Avatar from './avatar'
import "./index.css"
import Name from './name'
import Socialicons from './social-icons'
import Navigationbar from './main-nav'
import Copyright from './copyright'

const Header = () => {
  return (
    <header className='header pull-left'>
        <Mobilemenu/>
        <Avatar/>
        <Name/>
        <Socialicons/>
        <Navigationbar/>
        <Copyright/>
    </header>
  )
}

export default Header