import styled from 'styled-components'

const Botao = styled.button`
  border-radius: 10px;
  border: 2px solid #c98cf1;

  max-width: 100%;
  width: 208px;
  padding: 14px 28px;

  background: transparent;

  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: GandhiSansBold;
  line-height: 28px;

  cursor: pointer;
  &:hover {
    border: 2px solid transparent;

    background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  }
`

export default Botao
