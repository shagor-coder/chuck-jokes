import React from 'react'
import { Dropdown } from '../ui/Dropdown'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <ul className='menus'>
            <li className='menu-items'>
              <a href='#' className='menu-link'>
                SO FUNKTIONIERTS
              </a>
            </li>
            <li className='menu-items'>
              <a href='#' className='menu-link'>
                SONDERANGEBOTE
              </a>
            </li>
            <li className='menu-items'>
              <Dropdown text='MEIN BEREICH' className='menu-link'>
                <a href='#' className='dropdown-items'>
                  My published jokes
                </a>
                <a href='#' className='dropdown-items'>
                  My saved jokes
                </a>
                <a href='#' className='dropdown-items'>
                  Account Information
                </a>
                <a href='#' className='dropdown-items'>
                  Publish new joke
                </a>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
