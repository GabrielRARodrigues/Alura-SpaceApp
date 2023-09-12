import styled from 'styled-components'

const ContainerEstilizado = styled.div`
  width: 602px;
  height: 56px;

  display: flex;
  align-items: center;

  position: relative;
`

const InputEstilizado = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 12px 16px;

  border-radius: 10px;
  border: 2px solid #c98cf1;

  background-color: transparent;

  color: #d9d9d9;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;

  &::placeholder {
    color: #d9d9d9;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    font-family: GandhiSansRegular;
  }
`

const IconLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
`

const CampoTexto = () => (
  <ContainerEstilizado>
    <InputEstilizado type="text" placeholder="O que você procura?" />
    <IconLupa src="/icones/lupa.png" alt="ícone de lupa" />
  </ContainerEstilizado>
)

export default CampoTexto
