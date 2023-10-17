import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import { Game } from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promotions: Game[] = [
  {
    id: 1,
    category: 'Aventura',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${starWars}`
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${resident}`
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${diablo}`
  },
  {
    id: 4,
    category: 'RPG',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Zelda',
    system: 'Switch',
    infos: ['10%', 'R$ 250,00'],
    image: `${zelda}`
  }
]

const shortly: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${starWars}`
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${resident}`
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: `${diablo}`
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'O jogo mais desejado pela comunidade game. Com muita ação e aventura o jogo promete a todos o gamers do mundo muita dopamina e diversão.',
    title: 'Zelda',
    system: 'Switch',
    infos: ['10%', 'R$ 250,00'],
    image: `${zelda}`
  }
]

export const Home = () => (
  <>
    <Banner />
    <ProductsList games={promotions} title="Promoções" background="gray" />
    <ProductsList games={shortly} title="Em breve" background="grayDark" />
  </>
)
