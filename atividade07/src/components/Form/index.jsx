
import Formulario from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
const Form = ({ data,setData, scheme, setScheme}) =>{
    const history = useHistory()
    const formScheme = yup.object().shape({
        name: 
            yup.string()
            .required("Nome obrigatório"),
        fullName: 
            yup.string()
            .required('Nome completo obrigatório')
            .max(18,'Nome completo pode ter até 18 digitos'),
        email: 
            yup.string()
            .required('Email obrigatório')
            .email("Email inválido"),
        confirmEmail: 
            yup.string()
            .oneOf([yup.ref('email')], 'Os emails não iguais').required("Confirmação de email obrigatório"),
        password: 
            yup.string()
            .required('Senha obrigatória')
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])/, 'Sua senha não é forte'),
        confirmPassword: 
            yup.string()
            .oneOf([yup.ref('password')], 'As senhas não são iguais'),
        age: 
            yup.number()
            .required("Data de nascimento obrigatória")
            .min(1, 'Novo demais :p')
            .max(50, 'Ta velho demais'),
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
        setData(formData)
        setScheme(formScheme)
        history.push("/logado/")
    }
   return(
       <Formulario className='cadastro'onSubmit={handleSubmit(handleClickSubmit)}>
           <h1>Cadastra-se</h1>
           {errors.name && <p className='form-paragraph'>{errors.name.message}</p>}
                <input placeholder='Nome *' {...register('name')}/>
            {errors.fullName && <p className='form-paragraph'>{errors.fullName.message}</p>}
                <input type='text'  placeholder='Nome completo *' {...register("fullName")}/>
           {errors.email && <p className='form-paragraph'>{errors.email.message}</p>}
                <input type='text' placeholder='Email *' {...register('email')}/>
            {errors.confirmEmail && <p className='form-paragraph'>{ errors.confirmEmail.message}</p>}
                <input type='text' placeholder='Confirme seu Email *'{...register('confirmEmail')}/>
           {errors.password && <p className='form-paragraph'>{errors.password.message}</p>}
                <input  type='password' placeholder='Senha *' {...register('password')}/>
            {errors.confirmPassword && <p className='form-paragraph'>{errors.confirmPassword.message}</p>}
                <input  type='password' placeholder='Confirme sua senha *'{...register('confirmPassword')}/>
           {errors.age && <p className='form-paragraph'>{errors.age.message}</p>}
                <input type='text'placeholder='Idade *' {...register('age')}/>
            {errors.state  &&  <p className='form-paragraph'>{errors.state.message}</p>} 
                <input type='text' placeholder='Estado * ' {...register("state")}/>
            {errors.city && <p className='form-paragraph'>{errors.city.message}</p>}
                <input type='text' placeholder='Cidade * '{...register('city')}/>
            {/* <p className='form-conta'>Ja possui uma conta ? <Link to='/logar'>Acesse já</Link></p> */}
           <button type='submit'>Enviar</button>
       </Formulario>

   )
}

export default Form