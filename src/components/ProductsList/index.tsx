import { Product } from '../Product'
import { List, ProductsListContent, Title } from './styles'

export interface IList {
  title: string
  background: 'gray' | 'grayDark'
}

export const ProductsList = ({ title, background }: IList) => {
  return (
    <ProductsListContent>
      <div className="Container">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </ProductsListContent>
  )
}
