import { useState } from 'react'
import Props from './componentes/Props'
import './App.css'

function App() {
  const [votos, setVotos] = useState([
    { nome: "joao", votos: 0 },
    { nome: "pedro", votos: 0 },
    { nome: "maria", votos: 0 }
  ]);

  function votar(index) {
    const novosVotos = [...votos];
    novosVotos[index].votos += 1;
    setVotos(novosVotos);
  }

  return (
    <div className='box'>
      {votos.map((candidato, index) => (
        <Props
          key={index}
          nome={candidato.nome}
          votos={candidato.votos}
          votar={() => votar(index)}
        />
      ))}
    </div>
  );
}

export default App;
