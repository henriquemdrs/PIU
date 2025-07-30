import { useState } from 'react';

export default function ListaNomes() {
  const nomesOriginais = ["Ana", "João", "Carlos", "Amanda", "Júlia"];
  const [filtro, setFiltro] = useState('');

  const nomesFiltrados = nomesOriginais.filter(nome =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar nomes"
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}
