import { styled } from 'styled-components'
import Titulo from '../Titulo'
import Populares from './Populares'
import Tags from './Tags'
import Imagem from './Imagem'

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`
const SecaoFluida = styled.section`
  flex-grow: 1;
`
const ListaFotos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const Galeria = ({
  fotos = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
  aoSelecionarTag,
  tagSelecionadaId
}) => (
  <>
    <Tags
      aoFiltrarPorTag={aoSelecionarTag}
      tagSelecionadaId={tagSelecionadaId}
    />
    <GaleriaContainer>
      <SecaoFluida>
        <Titulo>Navegue pela galeria</Titulo>
        <ListaFotos>
          {fotos.map(foto => (
            <li key={foto.id}>
              <Imagem
                foto={foto}
                favoritado={foto.favorita}
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            </li>
          ))}
        </ListaFotos>
      </SecaoFluida>
      <Populares />
    </GaleriaContainer>
  </>
)

export default Galeria
