import { createGlobalStyle, styled } from 'styled-components'

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  grayDark: '#111111',
  gray: '#333333',
  grayLight: '#EEEEEE',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Colors.grayDark};
    color: ${Colors.grayLight};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
