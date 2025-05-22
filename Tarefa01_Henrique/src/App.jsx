import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Props from './componentes/Props'
import Card from './componentes/Card'
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';

function App() {
  const cards = [
    { title: 'Card 1', description: 'Descrição do Card 1', imageUrl: img1 },
    { title: 'Card 2', description: 'Descrição do Card 2', imageUrl: img2 },
    { title: 'Card 3', description: 'Descrição do Card 3', imageUrl: img3 },
    { title: 'Card 4', description: 'Descrição do Card 4', imageUrl: img4 },
    { title: 'Card 5', description: 'Descrição do Card 5', imageUrl: img5 },
    { title: 'Card 6', description: 'Descrição do Card 6', imageUrl: img6 },
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;