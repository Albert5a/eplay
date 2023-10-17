import { Game } from '../../models/Game'
import { Product } from '../Product'
import { List, ProductsListContent, Title } from './styles'

export interface IList {
  title: string
  background: 'gray' | 'grayDark'
  games: Game[]
}

export const ProductsList = ({ title, background, games }: IList) => {
  return (
    <ProductsListContent background={background}>
      <div className="Container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </ProductsListContent>
  )
}
