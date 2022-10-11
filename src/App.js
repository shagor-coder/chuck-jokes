import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Main } from './components/Main'
import { SingleJokes } from './components/SingleJokes'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/app.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Hero />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/:id' element={<SingleJokes />} />
          <Route exact path='/about' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
