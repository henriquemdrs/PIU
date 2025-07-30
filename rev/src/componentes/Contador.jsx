import { useState, useEffect } from 'react';

export default function ContadorComFundo() {
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    if (cliques >= 10) {
      document.body.style.backgroundColor = '#4caf50'; // verde
    } else {
      document.body.style.backgroundColor = '#ffffff'; // branco
    }
  }, [cliques]); // roda toda vez que 'cliques' mudar

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Você clicou {cliques} vezes</h1>
      <button onClick={() => setCliques(cliques + 1)}>
        Clicar
      </button>
    </div>
  );
}
