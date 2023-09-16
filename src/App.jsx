import styled from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'
import Galeria from './componentes/Galeria'
import fotos from './fotos.json'
import { useState } from 'react'
import ModalZoom from './componentes/ModalZoom'

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

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFecharFotoSelecionada={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  )
}

export default App
