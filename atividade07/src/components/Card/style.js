import styled from 'styled-components'

const CardCss = styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    margin: 30px;
    max-height: 600px;
    width:50%;
    
h1{
    font-size: 20px;
}

a {
    text-decoration: none;
    margin-top: 10px;
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
    width: 100px;
    margin: 30px;
    
 }
 
a:hover{
     box-shadow: 1px 1px #555b6894;
 }

 @media screen and (min-width:768px){
     width: 30%;
    h1{
        font-size: 25px;
    }
    p{
        font-size: 20px;
    }
 }
` 
export default CardCss