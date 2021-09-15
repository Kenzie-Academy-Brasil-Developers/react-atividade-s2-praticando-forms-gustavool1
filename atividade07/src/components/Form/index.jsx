import './style.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory, Link } from 'react-router-dom'
const Form = ({ data,setData}) =>{
    const history = useHistory()
    const formScheme = yup.object().shape({
        name: 
            yup.string()
            .required("Nome obrigatório"),
        fullName: 
            yup.string()
            .required('Nome completo obrigatório'),
        email: 
            yup.string()
            .required('Email obrigatório')
            .email("Email inválido"),
        confirmEmail: 
            yup.string()
            .required('Confirmação de email obrigatória')
            .email('Confirmação de email inválida'),
        password: 
            yup.string()
            .required('Senha obrigatória')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/, 'Sua senha não é forte'),
        confirmPassword: 
            yup.string()
            .required("Confirmação de senha obrigatória")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/, 'Sua senha não é forte'),
        birthday: 
            yup.string()
            .required("Data de nascimento obrigatória"),
        state:
            yup.string()
            .required("Insira seu estado"),
        city:
        yup.string()
        .required("Insira sua cidade")

    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formScheme)
    })
    const handleClickSubmit = (formData)=>{
        if(formData.password === formData.confirmPassword && formData.fullName.length <=18){
            setData(formData)
            history.push("/logado/")
        }
        
    }
   return(
       <form className='cadastro'onSubmit={handleSubmit(handleClickSubmit)}>
           <h1>Cadastra-se</h1>
           {errors.name && <p className='form-paragraph'>{errors.name.message}</p>}
                <input placeholder='Nome *' {...register('name')}/>
           {errors.fullName && <p className='form-paragraph'>{errors.fullName.message}</p>}
                <input type='text' placeholder='Nome completo *' {...register("fullName")}/>
           {errors.email && <p className='form-paragraph'>{errors.email.message}</p>}
                <input type='text' placeholder='Email *' {...register('email')}/>
           {errors.confirmEmail && <p className='form-paragraph'>{ errors.confirmEmail.message}</p>}
                <input type='text' placeholder='Confirme seu Email *'{...register('confirmEmail')}/>
           {errors.password && <p className='form-paragraph'>{errors.password.message}</p>}
                <input  type='password' placeholder='Senha *' {...register('password')}/>
           {errors.confirmPassword && <p className='form-paragraph'>{errors.confirmPassword.message}</p>}
                <input  type='password' placeholder='Confirme sua senha *'{...register('confirmPassword')}/>
           {errors.birthday && <p className='form-paragraph'>{errors.birthday.message}</p>}
                <input type='date' {...register('birthday')}/>
            {errors.state  &&  <p className='form-paragraph'>{errors.state.message}</p>} 
                <input type='text' placeholder='Estado' {...register("state")}/>
            {errors.city && <p className='form-paragraph'>{errors.city.message}</p>}
                <input type='text' placeholder='Cidade'{...register('city')}/>
            <p className='form-conta'>Ja possui uma conta ? <Link to='/logar'>Acesse já</Link></p>
           <button type='submit'>Enviar</button>
       </form>

   )
}

export default Form