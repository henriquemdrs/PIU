
///
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  return (
    <div>
      <h1>{darkMode ? 'Modo Escuro' : 'Modo Claro'}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Alternar Tema
      </button>
    </div>
  );
}
