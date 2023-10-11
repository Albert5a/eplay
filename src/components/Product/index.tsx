import { Tag } from '../Tag'
import { Card, Description, Title } from './styles'

export const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" />
      <Title>Nome</Title>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        repellat tempore, et impedit pariatur saepe facere delectus qui sapient
        error iure distinctio.
      </Description>
    </Card>
  )
}
