////
import { useState } from 'react';

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ usuario: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do login:", loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="usuario" type="text" onChange={handleChange} placeholder="Usuário" />
      <input name="senha" type="password" onChange={handleChange} placeholder="Senha" />
      <button type="submit">Entrar</button>
    </form>
  );
}
