import styled from 'styled-components'

import banner from '../../assets/banner.png'

const BannerContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 328px;

  padding: 84px 64px;
  border-radius: 20px;

  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const BannerTitle = styled.h1`
  color: #ffffff;
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;

  max-width: 300px;
`

const Banner = () => (
  <BannerContainer>
    <BannerTitle>A galeria mais completa de fotos do espaço!</BannerTitle>
  </BannerContainer>
)

export default Banner
