import styled from 'styled-components'
import Botao from '../../Botao'
import Titulo from '../../Titulo'
import fotosPopulares from './fotos-populares.json'

const ListaDeFotos = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`
const ImagemContainer = styled.li`
  max-width: 212px;
  width: 100%;
  height: 158px;
`

const ImagemEstilizada = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;

  object-fit: cover;
`

const Populares = () => (
  <section>
    <Titulo $alinhamento="center">Populares</Titulo>
    <ListaDeFotos>
      {fotosPopulares.map(foto => (
        <ImagemContainer key={foto.id}>
          <ImagemEstilizada src={foto.path} />
        </ImagemContainer>
      ))}
    </ListaDeFotos>
    <Botao>Ver mais</Botao>
  </section>
)
export default Populares
