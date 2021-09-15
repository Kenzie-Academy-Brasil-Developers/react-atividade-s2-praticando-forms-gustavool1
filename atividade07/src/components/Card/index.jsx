import './style.css'
import { Link, useHistory} from 'react-router-dom'
import { useEffect } from 'react'
const Card = ({data, setData, accounts})=>{
    const history = useHistory();
    useEffect(()=>{
        if(!data){
            history.push('/')
        }
    })
    const {name, fullName,email,password, birthday,state, city} = data
    return (
        <div className='card'>
            <h1>Nome completo: {fullName}</h1>
            <p>Nome: <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Senha: <strong>{password}</strong></p>
            <p>Aniversário: <strong>{birthday}</strong></p>
            <p>Estado: <strong>{state}</strong></p>
            <p>Cidade: <strong>{city}</strong></p>
            <Link to='/'>Sair</Link>    
        </div>
    )
}
export default Card