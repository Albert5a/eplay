import {
  FooterContent,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './styles'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterContent>
      <div className="Container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>AÇÃO</Link>
            </li>
            <li>
              <Link>AVENTURA</Link>
            </li>
            <li>
              <Link>ESPORTES</Link>
            </li>
            <li>
              <Link>SIMULAÇÃO</Link>
            </li>
            <li>
              <Link>ESTRATÉGIA</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <div>{currentYear}- &copy; E-PLAY Todos os direitos reservados </div>
      </div>
    </FooterContent>
  )
}
