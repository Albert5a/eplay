import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContent } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${Colors.gray};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  ${TagContent} {
    margin-right: 8px;
  }
`

export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
