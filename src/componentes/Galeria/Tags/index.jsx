import { styled } from 'styled-components'
import tags from './tags.json'

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`
const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;

  margin-top: 56px;
`

const Tag = styled.button`
  width: fit-content;

  border: 2px solid transparent;
  border-radius: 10px;

  padding: 10px 8px;

  color: #fff;
  font-size: 24px;

  background: rgba(217, 217, 217, 0.3);

  cursor: pointer;

  transition: border-color 0.3s ease;
  border-color: ${props => (props.$tagSelecionada ? '#c98cf1' : 'transparent')};
  &:hover {
    border-color: #c98cf1;
  }
`

const ListaTagsEstilizada = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
`

const Tags = ({ aoFiltrarPorTag, tagSelecionadaId }) => (
  <TagsContainer>
    <TagTitulo>Buque por tags:</TagTitulo>
    <ListaTagsEstilizada>
      {tags.map(tag => (
        <li key={tag.id}>
          <Tag
            $tagSelecionada={tagSelecionadaId === tag.tag}
            onClick={() => aoFiltrarPorTag(tag.tag)}
          >
            {tag.titulo}
          </Tag>
        </li>
      ))}
    </ListaTagsEstilizada>
  </TagsContainer>
)

export default Tags
