import styled from 'styled-components'

const Formulario = styled.form`
    color:white;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
p{
    margin: 2px;
}
i{
    color:white;
    
}

.form-conta a{
    text-decoration: none;
    font-size: 20px;
    color: darkgrey ;
    transition: 1s;
}
.form-conta a:hover{
    margin: 1px;
    color: white;
    text-decoration:darkgrey;
}
.form-conta p{
    font-size: 20px;
    margin: 0px;
}
.form-check p{
    width: 80%;
    color: darkgrey;
}
.form-check input{
    cursor: pointer;
    width: 10%;
}
input{
        
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background-color: #282c34;
    color: white;
    border: 2px solid rgb(112, 109, 109);
    height: 25px;
    font-size: 18px;
    padding: 10px;
    margin: 2px;
}
 button{
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: none;
    border: none;
    font-size: 22px; 
    background-color: #4c515e ;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 5px 5px #98a3b994;
    cursor: pointer;
    transition: 1s;
    width: 100%;
 }
 button:hover{
     box-shadow: 1px 1px #555b6894;
 }

 
input:focus{
    box-shadow: 0 0 0 0;
    border: 2px solid rgb(167, 153, 153) ;
    outline: 0;
}
 @media screen and (min-width:768px){
    input{
        height: 30px;
    }
    .form-conta a{
        font-size: 25px;
    }
    .form-conta a:hover{
        margin: 2px;
        color: white;
        text-decoration:darkgrey;
    }
    a:visited{
    color: white;
}
 }
`;

export default Formulario