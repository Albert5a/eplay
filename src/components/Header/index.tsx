import { HeaderContent, LinkCart, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

export const Header = () => {
  return (
    <HeaderContent>
      <div>
        <img src={logo} alt="EPLAY" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#">Categorias</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={cart} />
      </LinkCart>
    </HeaderContent>
  )
}
