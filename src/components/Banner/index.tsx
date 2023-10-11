import { BannerImg, Price, Title } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'

export const Banner = () => {
  return (
    <BannerImg style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="Container">
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Price>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90{' '}
        </Price>
      </div>
    </BannerImg>
  )
}
