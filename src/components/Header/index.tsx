import { Link, useNavigate } from 'react-router-dom'
import { HeaderContent, LinkCart, LinkItem, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

export const Header = () => {
  // const navigate = useNavigate()
  return (
    <HeaderContent>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/news">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/promotions">Promoções</Link>
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
