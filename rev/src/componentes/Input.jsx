
///
import { useState, useEffect } from 'react';

export default function InputBackgroundChanger() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const hash = text.length * 20;
    const colorCode = `hsl(${hash % 360}, 70%, 80%)`;
    setColor(colorCode);
  }, [text]);

  return (
    <div style={{ backgroundColor: color, padding: '50px', height: '100vh' }}>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}
