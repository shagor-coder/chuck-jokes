import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Single } from './pages/Single'
import { Category } from './pages/Category'

import './styles/App.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Hero />
        <main className='main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/:category' element={<Category />} />
            <Route exact path='/:category/:id' element={<Single />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
