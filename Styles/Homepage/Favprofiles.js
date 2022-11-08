import Styled from 'styled-components'

const StyledFav = Styled.section`
display:flex;
flex-direction:column;
padding:16px;
h3{
    padding:16px;
}
.favoritos{
    display:flex;
    flex-direction:row;
    padding:16px;
    .perfil{
        display: flex;
        flex-direction: column;
        gap:8px;
            img{
                border-radius:50%;
                align-self:center;
                height:100px;
                width:100px;
        }span{
            margin-right:16px;
        }
    }
}
`
export default StyledFav