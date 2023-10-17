import { styled } from 'styled-components'
import { Colors } from '../../styles'

import { IList } from '.'
import { Card } from '../Product/styles'

export const ProductsListContent = styled.section<
  Omit<IList, 'title' | 'games'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'grayDark' ? Colors.grayDark : Colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? Colors.grayDark : Colors.gray};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
