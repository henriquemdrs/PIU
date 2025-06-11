function Props({ nome, votos, votar }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Votos: {votos}</p>
      <button onClick={votar}>Votar</button>
    </div>
  );
}

export default Props;
