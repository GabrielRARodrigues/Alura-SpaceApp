import styled from 'styled-components'

const Botao = styled.button`
  border-radius: 10px;
  border: 2px solid transparent;

  max-width: 100%;
  width: 208px;
  padding: 14px 28px;

  background: transparent;

  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: GandhiSansBold;
  line-height: 28px;

  position: relative;

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 2px;
    background: linear-gradient(45deg, #c98cf1, #7b78e5);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
    background-repeat: no-repeat;
  }
`

export default Botao
