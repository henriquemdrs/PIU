// componentes/BotaoTema.jsx
export default function BotaoTema({ temaDark, alternarTema }) {
  return (
    <button onClick={alternarTema} className="botao-tema">
      Mudar para {temaDark ? 'Tema Claro' : 'Tema Escuro'}
    </button>
  );
}
