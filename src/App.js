import { Header } from './layout/Header'
import { Hero } from './layout/Hero'
import './styles/app.scss'
import { Button } from './ui/Button'
import { Cards } from './ui/Cards'

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
    </div>
  )
}
