import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import './style.css'
 const Loggin = ({data:{email, password}}) =>{
     const [showMsg, setShowMsg] = useState(false)
     const [showMsgError, setShowMsgError] = useState(false)
     const {register, handleSubmit} = useForm()
     const handleClick = (dataForm) =>{
         console.log(dataForm)
         if(email === dataForm.email && password === dataForm.password){
             console.log("a")
             setShowMsg(true)
             setShowMsgError(false)
         }else{
             setShowMsgError(true)
             setShowMsg(false)
         }
     }
     return (
        <>
            <form className='cadastro' onSubmit={handleSubmit(handleClick)}>
                <h1>Logar</h1>
                <input type='text' placeholder='Email *' {...register('email')} />
                <input type='password' placeholder='Senha'{...register('password')} />
                <button type='submit'>Enviar</button>
            </form>
            {showMsg &&
                <div className='msg-logged'>
                    <p>Você está logado</p>
                    <Link to='/'>Home</Link>
                </div>
            }
            {showMsgError &&
                <div className='msg-logged'>
                    <p>Senha ou Email não correspondem.</p>
                    <Link to='/'>Home</Link>
                </div>
            }
        </>
     )
 }
 export default Loggin