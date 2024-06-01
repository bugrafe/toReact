import React from 'react'
import Mobilemenu from './mobile-menu'
import Avatar from './avatar'

const Header = () => {
  return (
    <header className='header pull-left'>
        <Mobilemenu/>
        <Avatar/>
    </header>
  )
}

export default Header