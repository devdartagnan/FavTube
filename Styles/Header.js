import Styled from 'styled-components'

const StyledHeader = Styled.section`
    display:flex;
    flex-direction:column;
    font-family: Arial, Helvetica, sans-serif;
    width:100%;
    .Banner{
        height:430px;
        margin-bottom:70px;
    }
    .Banner__img{
        background-image: url("../Static/Banner.jpg");
        background-color: #cccccc; 
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
        width:100%;
        height:500px;
}
.Profile{
    display:flex;
    margin:24px;
}
.Profile__img{
    border-radius:50%;
    height: 150px;
    margin-right:1rem;
    width:150px;
}
h1{
    margin-top:50px;
    font-size:24px;
    font-weight:700;
}
h2{
    color:#666666;
    margin-top:10px;
    font-size:16px;
    font-weight:400;
}
`

export default StyledHeader