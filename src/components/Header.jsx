import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '../ui/Dropdown'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <ul className='menus'>
            <li className='menu-items'>
              <Link to='/' className='menu-link'>
                SO FUNKTIONIERTS
              </Link>
            </li>
            <li className='menu-items'>
              <Link to='/' className='menu-link'>
                SONDERANGEBOTE
              </Link>
            </li>
            <li className='menu-items'>
              <Dropdown text='MEIN BEREICH' className='menu-link'>
                <Link to='/' className='dropdown-items'>
                  My published jokes
                </Link>
                <Link to='/' className='dropdown-items'>
                  My saved jokes
                </Link>
                <Link to='/' className='dropdown-items'>
                  Account Information
                </Link>
                <Link to='/' className='dropdown-items'>
                  Publish new joke
                </Link>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
