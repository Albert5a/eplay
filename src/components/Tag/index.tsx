import { TagContent } from './styles'

export interface ITag {
  size?: 'small' | 'big'
  children: string
}

export const Tag = ({ size = 'small', children }: ITag) => {
  return <TagContent size={size}>{children}</TagContent>
}
