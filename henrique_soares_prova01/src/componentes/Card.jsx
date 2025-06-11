export default function Card({ cor, modelo, ano }) {
      {/* Componente usado para passar as informações de de cada carro, modelo e ano. */}

    return (
      <div className="card">

        <h3>{ano}</h3>
        <p className="card-description">{modelo}</p>
      </div>
    );
  }


  