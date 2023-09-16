import styled from 'styled-components'
import Imagem from '../Galeria/Imagem'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;

  display: flex;
  justify-content: center;

  max-width: 1440px;
  width: 100%;
  padding: 0;

  background-color: transparent;

  border: none;
`
const ButaoFecharDialog = styled.button`
  border: none;

  background-color: transparent;
  background-image: url('/icones/fechar.png');
  background-position: center;
  background-repeat: no-repeat;

  width: 32px;
  height: 32px;
  padding: 0;

  position: absolute;
  top: 24px;
  right: 96px;

  cursor: pointer;
`

const ModalZoom = ({ foto, aoFecharFotoSelecionada }) => (
  <>
    {foto && (
      <>
        <Overlay />
        <DialogEstilizado
          open={!!foto}
          autoFocus
        >
          <Imagem foto={foto} expandida={true} />
          <form method="dialog">
            <ButaoFecharDialog
              aria-label="Fechar modal"
              onClick={aoFecharFotoSelecionada}
            ></ButaoFecharDialog>
          </form>
        </DialogEstilizado>
      </>
    )}
  </>
)

export default ModalZoom
