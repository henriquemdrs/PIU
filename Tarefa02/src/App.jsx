import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drops from './componentes/Drop'

function App() {

  const [mostrarDrop, setMostrarDrop] = useState(false);

  return (
    <>
      <button onClick={()=>setMostrarDrop(!mostrarDrop)}>TesteS</button>
       {mostrarDrop && <Drops />}
      
    </>
  )
}

export default App
