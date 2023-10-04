import styled from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'
import Galeria from './componentes/Galeria'
import fotos from './fotos.json'
import { useEffect, useState } from 'react'
import ModalZoom from './componentes/ModalZoom'
import Rodape from './componentes/Rodape'

const FundoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  box-sizing: border-box;
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [tagSelecionadaId, setTagSelecionadaId] = useState(0)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    let fotosFiltradas = fotos
    if (tagSelecionadaId && filtro) {
      fotosFiltradas = fotos.filter(
        foto =>
          foto.tagId === tagSelecionadaId &&
          foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      )
    } else if (tagSelecionadaId && !filtro) {
      fotosFiltradas = fotos.filter(foto => foto.tagId === tagSelecionadaId)
    } else if (!tagSelecionadaId && filtro) {
      fotosFiltradas = fotos.filter(foto =>
        foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      )
    }
    setFotosDaGaleria(fotosFiltradas)
  }, [tagSelecionadaId, filtro])
  const aoAlternarFavorito = foto => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(
      fotosDaGaleria.map(fotoDaGaleria => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita
        }
      })
    )
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho busca={filtro} aoBuscar={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              aoSelecionarTag={tagId => setTagSelecionadaId(tagId)}
              tagSelecionadaId={tagSelecionadaId}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFecharFotoSelecionada={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
