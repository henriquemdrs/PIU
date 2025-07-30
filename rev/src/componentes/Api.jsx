////
import { useEffect, useState } from 'react';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const filtrados = usuarios.filter(user =>
    user.name.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Filtrar por nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {filtrados.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
