import { Header } from "./components/Header"
import './App.css'
import projectLogo from './assets/header-logo.svg'
import iconMag from './assets/icons/mag.svg'
import iconClose from './assets/icons/close.svg'



const App = () => {
  return (
    <div>
      <Header projectLogo={projectLogo} iconMag={iconMag} iconClose={iconClose} />
      {/* Остальной контент */}
      <main className="pt-24">
        <h1 className="text-white text-2xl">Привет, мир!</h1>
      </main>
    </div>
  )
}


export default App
