import { ButtonContent, ButtonLink } from './styles'

interface IButton {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const Button = ({ type, title, to, onClick, children }: IButton) => {
  if (type === 'button') {
    return (
      <ButtonContent type={type} title={title} onClick={onClick}>
        {children}
      </ButtonContent>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
