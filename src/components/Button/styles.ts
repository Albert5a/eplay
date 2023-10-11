import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContent = styled.button`
  background-color: transparent;
  border: 2px solid ${Colors.grayLight};
  color: ${Colors.grayLight};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${Colors.grayLight};
  color: ${Colors.grayLight};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
