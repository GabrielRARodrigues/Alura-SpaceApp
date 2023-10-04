import styled from 'styled-components'
import CampoTexto from '../CampoTexto'

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
  }
`

const Cabecalho = ({ busca, aoBuscar }) => (
  <HeaderEstilizado>
    <img src="/imagens/logo.png" alt="" />
    <CampoTexto busca={busca} aoBuscar={aoBuscar} />
  </HeaderEstilizado>
)

export default Cabecalho
