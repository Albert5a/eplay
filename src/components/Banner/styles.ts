import styled from 'styled-components'
import { TagContent } from '../Tag/styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .Container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContent} {
    position: absolute;
    top: 32px;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
