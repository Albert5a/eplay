import { Tag } from '../Tag'
import { Card, Description, Info, Title } from './styles'

interface IProduct {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: IProduct) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Info>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Info>
      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}
