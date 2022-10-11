import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { JokesProvider } from './context/JokesContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <JokesProvider>
    <App />
  </JokesProvider>
)
