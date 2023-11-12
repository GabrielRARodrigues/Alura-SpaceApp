import styled from 'styled-components'

import twitter from '/imagens/sociais/twitter.svg'
import instagram from '/imagens/sociais/instagram.svg'
import facebook from '/imagens/sociais/facebook.svg'

const FooterEstilizado = styled.footer`
  padding: 25px 45px;
  margin-top: 72px;

  background-color: #04244f;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;

    list-style: none;

    display: flex;
    align-items: center;
    gap: 33px;

    li {
      margin: 0;
      padding: 0;
      img {
      }
    }
  }

  p {
    margin: 0;

    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 20px;
  }
`

const Rodape = () => {
  return (
    <FooterEstilizado>
      <ul>
        <li>
          <a href="">
            <img src={facebook} alt="ícone do facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twitter} alt="ícone do twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instagram} alt="ícone do instagram" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Alura.</p>
    </FooterEstilizado>
  )
}

export default Rodape
