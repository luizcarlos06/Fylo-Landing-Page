import React from "react"
import { Pagina, Principal, Navegacao, Logo, Menu, Conteudo, ConteudoTexto, ConteudoImagem, Informacao, ContainerInformacao, InformacaoTexto, CaixaOne, CaixaTwo, CaixaTwoImg, ContainerPerson, ContainerPersonTXT, InformacaoImagem, ContainerProduto, PegarProduto, PegarProdutoTexto, PegarProdutoInput, Footer, FooterContainer, FooterContainer1, Telefone, Email, FooterContainer2, FooterContainer3, FooterContainer4, Facebook, Twitter, Instagram } from './style'
import LogoImage from './assets/LogoImage.png'
import LogoBranco from './assets/LogoWhite.png'
import PessoaPasta from './assets/PessoaPasta.png'
import Reuniao from './assets/Reuniao.png'
import DecoraTexto from './assets/“.png'
import PersonTXT from './assets/Cliente.png'
import TelefoneImg from './assets/Telefone.png'
import EmailImg from './assets/Email.png'
import FacebookImg from './assets/Facebook.png'
import InstagramImg from './assets/Instagram.png'
import TwitterImg from './assets/Twiiter.png'
import Seta from './assets/seta.png'

function App() {
  return (
    <Pagina>
      <Principal>

        <Navegacao>
          <Logo>
            <img src={LogoImage} alt="Logo-Image" />
          </Logo>
          <Menu>
            <a href="">Features</a>
            <a href="">Team</a>
            <a href="">Sign in</a>
          </Menu>
        </Navegacao>
        <Conteudo>
          <ConteudoTexto>
            <h1>All your files in one secure <br /> location, accessible anywhere.</h1>
            <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <input type="email" placeholder="Enter your email…" />
            <button>Get Started</button>
          </ConteudoTexto>
          <ConteudoImagem>
            <img src={PessoaPasta} alt="Pessoa-Pasta" />
          </ConteudoImagem>
        </Conteudo>
      </Principal>


      <Informacao>
        <ContainerInformacao>
          <InformacaoTexto>
            <CaixaOne>
              <h1>Stay Productive, wherever your are</h1>
              <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
              <a href="">See how Fylo works<img src={Seta} alt="Seta" /></a> 
            </CaixaOne>
            <CaixaTwo>
              <CaixaTwoImg>
                <img src={DecoraTexto} alt="" />
              </CaixaTwoImg>

              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <ContainerPerson>
                <img src={PersonTXT} alt="" />
                <ContainerPersonTXT>
                  <h4>Kyle Burton</h4>
                  Founder & CEO, Huddle
                </ContainerPersonTXT>
              </ContainerPerson>
            </CaixaTwo>
          </InformacaoTexto>
          <InformacaoImagem>
            <img src={Reuniao} alt="Reuniao-Conversas" />
          </InformacaoImagem>
        </ContainerInformacao>
      </Informacao>

      <PegarProduto>
        <ContainerProduto>
          <PegarProdutoTexto>
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
          </PegarProdutoTexto>
          <PegarProdutoInput>
            <input type="text" placeholder="email@example.com" />
            <button>Get Started For Free</button>
          </PegarProdutoInput>
        </ContainerProduto>
      </PegarProduto>

      <Footer>
        <img src={LogoBranco} alt="Logo-Fylo" />
        <FooterContainer>
          <FooterContainer1>
            <Telefone>
              <img src={TelefoneImg} alt="" />
              <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
            </Telefone>
            <Email>
              <img src={EmailImg} alt="" />
              <a href="mailto:example@fylo.com">example@fylo.com</a>
            </Email>

          </FooterContainer1>
          <FooterContainer2>
            <a href="">About Us</a>
            <a href="">Jobs</a>
            <a href="">Press</a>
            <a href="">Blog</a>
          </FooterContainer2>
          <FooterContainer3>
            <a href="">Contact Us</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
          </FooterContainer3>
          <FooterContainer4>
            <Facebook>
              <img src={FacebookImg} alt="" />
            </Facebook>
            <Twitter>
              <img src={TwitterImg} alt="" />
            </Twitter>
            <Instagram>
              <img src={InstagramImg} alt="" />
            </Instagram>
          </FooterContainer4>
        </FooterContainer>

      </Footer>

    </Pagina>
  )
}

export default App
