import { styled } from 'styled-components'

const ImagensContainer = styled.figure`
  max-width: 100%;
  width: ${props => (props.$expandida ? '90%' : '460px')};
  min-height: 256px;

  display: flex;
  flex-direction: column;

  margin: 0;
`
const ImagemEstilizada = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;

  object-fit: cover;
`
const ImagemLegenda = styled.figcaption`
  border-radius: 0px 0px 20px 20px;

  padding: 16px;

  background: #001634;

  display: flex;
  flex-direction: column;
`
const ImagemTitle = styled.h3`
  color: #fff;
  font-size: 20px;
  font-family: GandhiSansBold;

  margin: 0;
`

const ImagemRodape = styled.footer`
  display: flex;
  justify-content: space-between;

  align-items: center;
`
const ImagemFonte = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0;
`
const BotoesContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`
const BotaoImagem = styled.button`
  background: transparent;
  border: none;

  cursor: pointer;
`

const Imagem = ({
  foto,
  expandida = false,
  favoritado = false,
  aoZoomSolicitado
}) => (
  <ImagensContainer $expandida={expandida}>
    <ImagemEstilizada src={foto.path} alt={foto.titulo} />
    <ImagemLegenda>
      <ImagemTitle>{foto.titulo}</ImagemTitle>
      <ImagemRodape>
        <ImagemFonte>{`fonte/${foto.fonte}`}</ImagemFonte>
        <BotoesContainer>
          <BotaoImagem>
            {favoritado ? (
              <img
                src="/icones/favorito-ativo.png"
                alt="ícone de coração preenchido"
              ></img>
            ) : (
              <img
                src="/icones/favorito.png"
                alt="ícone de coração sem preenchemento"
              />
            )}
          </BotaoImagem>
          {!expandida && (
            <BotaoImagem aria-hidden={expandida}>
              <img
                src="/icones/expandir.png"
                alt="ícone de expandir"
                onClick={() => {
                  aoZoomSolicitado(foto)
                  window.scroll(0, 147)
                }}
              />
            </BotaoImagem>
          )}
        </BotoesContainer>
      </ImagemRodape>
    </ImagemLegenda>
  </ImagensContainer>
)

export default Imagem
