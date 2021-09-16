
import CardCss from './style'
import { Link, useHistory} from 'react-router-dom'
import { useEffect } from 'react'
const Card = ({data, setData, accounts})=>{
    const history = useHistory();
    useEffect(()=>{
        if(!data){
            history.push('/')
        }
    })
    const {name, fullName,email,password, age,state, city} = data
    return (
        <CardCss className='card'>
            <h1>Nome completo: {fullName}</h1>
            <p>Nome: <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Senha: <strong>{password}</strong></p>
            <p>Idade: <strong>{age}</strong></p>
            <p>Estado: <strong>{state}</strong></p>
            <p>Cidade: <strong>{city}</strong></p>
            <Link to='/'>Sair</Link>    
        </CardCss>
    )
}
export default Card