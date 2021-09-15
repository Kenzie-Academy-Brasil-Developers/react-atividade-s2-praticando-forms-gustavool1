import './style.css'
import { Link } from 'react-router-dom'
const Card = ({data:{name, fullName,email,password, birthday,state, city}})=>{
    return (
        <div className='card'>
            <h1>Nome completo: {fullName}</h1>
            <p>Nome: <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Senha: <strong>{password}</strong></p>
            <p>Aniversário: <strong>{birthday}</strong></p>
            <p>Estado: <strong>{state}</strong></p>
            <p>Cidade: <strong>{city}</strong></p>
            <Link to='/'>Voltar</Link>
        </div>
    )
}
export default Card