import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  grayDark: '#111111',
  gray: '#333333',
  grayLight: '#EEEEEE',
  grayMid: '#A3A3A3',
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

  .Container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
