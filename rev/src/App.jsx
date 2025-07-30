import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './componentes/Tema.jsx'
import InputBackgroundChanger from './componentes/Input.jsx'
import LoginForm from './componentes/Console.jsx'
import ListaUsuarios from './componentes/Api.jsx'
import Tarefas from './componentes/Tarefa.jsx'
import ListaNomes from './Lista.jsx'
import ContadorComFundo from './componentes/Contador.jsx'

function App() {
  

  return (
    <>
      <ContadorComFundo />
    </>
  )
}

export default App
