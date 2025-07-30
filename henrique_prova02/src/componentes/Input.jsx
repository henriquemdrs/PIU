

import { useState, useEffect } from 'react';

export default function Input() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text == 1) {document.body.style.backgroundColor = '#1caf80'}
    if (text == 2) {document.body.style.backgroundColor = '#2caf70'}
    if (text == 3) {document.body.style.backgroundColor = '#3caf50'}
    if (text == 4) {document.body.style.backgroundColor = '#4caf40'}
    if (text == 5) {document.body.style.backgroundColor = '#5caf20'}
    if (text == 6) {document.body.style.backgroundColor = '#6caf30'}
    
  }, [text]);


  return (
    <div style={{ padding: '50px', height: '200px',  }}>


<br />
      <input type="Email" placeholder="Digite seu email"/>
      <br />

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite algum número."/>
      <br />
      <br />

      <button onClick={(e) => setText(e.target.value)}>enviar</button>

    </div>
  );
}


