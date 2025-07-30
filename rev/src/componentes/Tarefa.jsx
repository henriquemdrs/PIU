
///
import { useState, useEffect } from 'react';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: 'Estudar React', concluida: false },
    { id: 2, nome: 'Ler documentação', concluida: true },
  ]);

  useEffect(() => {
    document.title = `${tarefas.filter(t => !t.concluida).length} tarefas pendentes`;
  }, [tarefas]);

  const toggleConclusao = (id) => {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  };

  return (
    <ul>
      {tarefas.map(tarefa => (
        <li
          key={tarefa.id}
          onClick={() => toggleConclusao(tarefa.id)}
          style={{
            textDecoration: tarefa.concluida ? 'line-through' : 'none',
            color: tarefa.concluida ? 'gray' : 'black',
          }}
        >
          {tarefa.nome}
        </li>
      ))}
    </ul>
  );
}
