import React from 'react'
import { Dropdown } from '../ui/Dropdown'

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <div className='logo'>
            <a href='#'>Logo</a>
          </div>
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
                  SONDERANGEBOTE
                </a>
                <a href='#' className='dropdown-items'>
                  SONDERANGEBOTE
                </a>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
