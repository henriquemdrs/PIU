import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Butao from './componentes/Butao'
import Card from './componentes/Card'
import dados_carros from './componentes/dados_carro'

function App() {
   const carros = [
  {id: 0,
  modelo: 'ford',
  cor: 'vermelho',
  ano: 1998},
  {id: 1,
  modelo: 'renault',
  cor: 'preto',
  ano: 2020},
  {id: 2,
  modelo: 'audi',
  cor: 'azul',
  ano: 2016},
  {id: 3,
  modelo: 'chevrolet',
  cor: 'vermelho',
  ano: 2022},
  {id: 4,
  modelo: 'jeep',
  cor: 'vermelho',
  ano: 2023},
  {id: 5,
  modelo: 'ram',
  cor: 'verde',
  ano: 2015},
  {id: 6,
  modelo: 'fiat',
  cor: 'preto',
  ano: 2018},
  {id: 7,
  modelo: 'byd',
  cor: 'vermelho',
  ano: 2024},
];
{/**/}
const vermelho =carros.filter(card=>card.cor>="vermelho")

return (
  <div className="card-container">
          {/* retorno de uma função para colocar as informações de modelo e ano dentro de uma div*/}

    {dados_carros.map((card, index) => (
      <Card
        key={index}
        ano={card.ano}
        modelo={card.modelo}
        cor={card.cor}
      />
    ))}
  </div>
  
);
}

export default App
