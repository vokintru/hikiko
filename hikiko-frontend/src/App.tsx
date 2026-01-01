import { Header } from "./components/Header"
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      {/* Остальной контент */}
      <main className="pt-24">
        <h1 className="text-white text-2xl">Привет, мир!</h1>
      </main>
    </div>
  )
}


export default App
