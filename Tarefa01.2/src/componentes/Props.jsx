import './Props.css'
export default function Props({ nome, idade, foto }) {
    return (
        <div>
            <h1>Teste de Props</h1>
            <h2>Seu Nome: {nome}</h2>
            <h2>Sua Idade: {idade}</h2>
            <img src={foto} alt="Foto" width={100} />
        </div>
    )
}
