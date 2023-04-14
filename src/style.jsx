import styled from "styled-components";
import Fundo from './assets/Retangulo.png'

export const Pagina = styled.body`
background: #F8F8FE;
`;

export const Principal = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    
`;

export const Navegacao = styled.nav`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 65px;
`;

export const Logo = styled.nav`
    margin-right: 730px;
  img {
    width:136px;
    height:39px;
    cursor: pointer;
  }
`;
export const Menu = styled.div`

    a { 
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #07043B;
        margin-left: 70px;
        cursor: pointer;
        text-decoration: none;
    }

    a:hover{
        color: blueviolet;
    }
`;

export const Conteudo = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
`;

export const ConteudoTexto = styled.div`
    width: 627px;
    height: 120px;
    margin-top: 163.68px;
    h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: #07043B;
        margin-bottom: 15px;
    }
    input {
        height: 45px;
        width: 320px;
        border-radius: 3.125px;
        border: 0.625px solid #07043B;
        box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
        border-radius: 3.125px;
        font-family: Open Sans;
        letter-spacing: 0.43555548787117004px;
        font-family: Open Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0.46666669845581055px;
        text-align: left;
        padding: 21px;
        outline: none;

    }
    button {
        margin-top: 25px;
        height: 45px;
        width: 200px;
        border-radius: 3.125px;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: white;
        background: #2F65F8;
        box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
        border: none;
        cursor: pointer;
        margin-left: 16px;
    }
    button:hover {
        background: #6C9BFF;
        transition: 1s;
        box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.15925);
    }
`;
export const ConteudoImagem = styled.div`
    `;

export const Informacao = styled.div`
        background-image: url(${Fundo});
        background-size: cover;
        height: 90vh;
        position: relative;
        top: -130px;
        z-index: 1;
    `;

export const ContainerInformacao = styled.div`
        position: relative;
        top: 300px; 
        display: flex;
        justify-content: space-around;
    `;

export const InformacaoTexto = styled.div`

    `;

export const CaixaOne = styled.div`
        h1 {
            font-weight: 700;
            font-size: 40px;
            line-height: 47px;
            color: #07043B;
            margin-bottom: 38px;
        }
        p {
            height: 48px;
            width: 529px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #07043B;
            margin-bottom: 15px;
        }
        img {
            position: relative;
            top: 3px;
            text-decoration: underline;
        }
        a {
            color: #3DA08F;
            text-decoration: underline;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }
        a:hover {
            opacity: 0.7;
        }
        
    `;
export const CaixaTwo = styled.div`
        background: #FFFFFF;
        box-shadow: 0px 0px 10px 5px rgba(56, 56, 56, 0.0458843);
        border-radius: 5px;
        margin-top: 100px;
        height: 265px;
        width: 436px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 33px;
        p {
            font-family: Open Sans;
            font-size: 13px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            font-family: Open Sans;
            font-size: 15px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0.5px;
            text-align: left;

            height: 92px;
            width: 349px;
        }
   `;

export const CaixaTwoImg = styled.div`
        height: 70px;
        img {
            display: flex;
            height: 12px;
            margin-left: -175px;
            margin-bottom: 17px;
            margin-top: 12px;
        }
   `;
export const ContainerPerson = styled.div`
        display: flex;
        margin-top: 32px;
        position: relative;
        left: -100px;
        img {
            align-items: start;
            margin-right: 12px;
            height: 23px;
        }
`;
export const ContainerPersonTXT = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    
`;
export const InformacaoImagem = styled.div`
        img {
            height: 409px;
            width: 542px;
        }
    `;

export const PegarProduto = styled.div`
      background: #575988;
      height: 370px;
      position: relative;

`;
export const ContainerProduto = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const PegarProdutoTexto = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    width: 440px;
    color: #FFFFFF;
    margin-top: 130px;

    p{
        margin-top: 17px;
    }
`;
export const PegarProdutoInput = styled.div`
    display: flex;
    flex-direction: column;
    input {
        margin-top: 130px;
        background: #FFFFFF;
        box-shadow: 2px 3px 6px rgba(7, 4, 59, 0.157043);
        border-radius: 3.125px;
        height: 48px;
        width: 480px;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: left;
        border-radius: 3.125px;
        outline: none;
        padding: 22px;
        margin-bottom: 16px;
    }
    button {
        background: #2F65F8;
        box-shadow: 2px 3px 6px rgba(7, 4, 59, 0.157043);
        border-radius: 3.125px;
        border: none;
        color: white;
        height: 48px;
        width: 200px;
        left: 0px;
        top: 0px;
        border-radius: 3.125px;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.7;
    }
    button:active{
        background-color: #205bfc;
    }
`;
export const Footer = styled.footer`
        height: 391px;
        background: #07043B;
        color: white;
        padding: 80px;

`;

export const FooterContainer = styled.footer`
    margin-top: 37px;
    margin-left: 80px;
    margin-right: 370px;
    display: flex;
    justify-content: space-between;

    
`;
export const FooterContainer1 = styled.footer`
    margin-left: -80px;
    display: flex;
    flex-direction: column;
    
    a {
        text-decoration: none;
        color: white;
        margin-top: 16px;
    }
    a:hover {
        color: violet;
    }
`;

export const Telefone = styled.div `
margin-top: 16px;
    img {
        height: 18px;
        width: 18px;
        margin-right: 10px;
        position: relative;
        top: 5px;
    }
`;
export const Email = styled.div `
    img {
        height: 18px;
        width: 18px;
        margin-right: 10px;
        position: relative;
        top: 5px;
        margin-top: 16px;
    }    
`;
export const FooterContainer2 = styled.footer`
    display: flex;
    color: white;
    flex-direction: column;
    text-decoration: none;
    a {
        text-decoration: none;
        color: white;
        margin-top: 16px;
    }
    a:hover {
        color: violet;
    }
`;
export const FooterContainer3 = styled.footer`
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
        color: white;
        margin-top: 16px;
    }
    a:hover {
        color: violet;
    }
`;
export const FooterContainer4 = styled.footer`
    display: flex;
    gap: 10px;
    
`;

export const Facebook = styled.footer`
    cursor: pointer;

    img:hover {
        filter: grayscale(1)
    }
`;
export const Twitter = styled.footer`
    cursor: pointer;
`;
export const Instagram = styled.footer`
    cursor: pointer;

`;
