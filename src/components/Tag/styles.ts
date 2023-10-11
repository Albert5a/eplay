import styled from 'styled-components'
import { Colors } from '../../styles'

import { ITag } from '.'

export const TagContent = styled.div<ITag>`
  background-color: ${Colors.green};
  color: ${Colors.grayLight};
  font-size: ${(ITag) => (ITag.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(ITag) => (ITag.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
