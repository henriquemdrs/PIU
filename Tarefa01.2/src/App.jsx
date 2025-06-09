import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './componentes/Props'
import BotaoTema from './componentes/BotaoTema'; 

function App() {

  const [temaDark, setTemaDark] = useState(false);


  const pessoas = [
    { nome: "João", idade: 20, foto: "vite.svg" },
    { nome: "Maria", idade: 25, foto: "vite.svg" },
    { nome: "Pedro", idade: 30, foto: "vite.svg" }
  ];


  const alternarTema = () => setTemaDark(!temaDark);
  
  {/* useState para usar a lógica do selecionado */}
  const [selecionado, setSelecionado] = useState(null); 

  
  return (
    <>
         
  <div className={temaDark ? 'app dark' : 'app light'}>
    <BotaoTema temaDark={temaDark} alternarTema={alternarTema} />

    <div className="box">
      {pessoas.map((pessoa, index) => (
        <div
          key={index}
          className={`item-pessoa ${selecionado === index ? 'selecionado' : ''}`}
          onClick={() => setSelecionado(index)}
        >
          <Props
            nome={pessoa.nome}
            idade={pessoa.idade}
            foto={pessoa.foto}
          />
        </div>
      ))}
    </div>

    {selecionado !== null && (
      <div className="detalhes">
        <h2>Detalhes de: {pessoas[selecionado].nome}</h2>
        <p>Idade: {pessoas[selecionado].idade}</p>
        <img src={pessoas[selecionado].foto} alt="Detalhe" />
        <button onClick={() => setSelecionado(null)}>Fechar</button>
      </div>
    )}
  </div>


    </>
  );
}

export default App;
