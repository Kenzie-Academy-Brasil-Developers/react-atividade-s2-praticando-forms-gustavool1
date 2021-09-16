
import CardCss from './style'
import { Link, useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
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
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                transition={{duration:3}}

            >
            <h1>Nome completo: {fullName}</h1>
            <p>Nome: <strong>{name}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Senha: <strong>{password}</strong></p>
            <p>Idade: <strong>{age}</strong></p>
            <p>Estado: <strong>{state}</strong></p>
            <p>Cidade: <strong>{city}</strong></p>
            <Link to='/'>Sair</Link>    
            </motion.div>
        </CardCss>
    )
}
export default Card