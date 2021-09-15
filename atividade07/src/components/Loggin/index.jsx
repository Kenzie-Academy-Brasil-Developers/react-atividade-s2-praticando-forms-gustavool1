import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './style.css'
 const Loggin = ({data:{email, password}}) =>{
     const history = useHistory()
     const [showMsgError, setShowMsgError] = useState(false)
     const formScheme = yup.object().shape({
         email:
            yup.string()
            .required("Email obrigatório").email("Digite um email válido"),
         password: 
            yup.string()
            .required("Senha obrigatória")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/, 'Sua senha não é forte', 'Sua senha não é forte')
     })
     const {register, handleSubmit, formState:{ errors }} = useForm({
         resolver: yupResolver(formScheme)
     })
     const handleClick = (dataForm) =>{
         if(email === dataForm.email && password === dataForm.password){
            history.push("/logado/")
         }else{
             setShowMsgError(true)
         }
     }
     return (
        <>
            <div className='goback'>
                <Link to='/'><i className="fas fa-arrow-left"></i></Link>
            </div>
            <form className='cadastro' onSubmit={handleSubmit(handleClick)}>
                <h1>Logar</h1>
                <input type='text' placeholder='Email *' {...register('email')} />
                {errors.email && <p>{errors.email.message}</p>}
                <input type='password' placeholder='Senha *'{...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
                <button type='submit'>Enviar</button>
            </form>
            {showMsgError &&
                <div className='msg-logged'>
                    <p>Senha ou Email não correspondem.</p>
                </div>
            }
        </>
     )
 }
 export default Loggin