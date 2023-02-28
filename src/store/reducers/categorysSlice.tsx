import { AiOutlineCar } from 'react-icons/ai'

import type { ICategoryState } from '@/interfaces/category'
import {
  BackpackIcon,
  DesktopIcon,
  MixIcon,
  SpeakerLoudIcon,
} from '@radix-ui/react-icons'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ICategoryState[] = [
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    thumbnail: 'eletronicosThumb',
    icon: <DesktopIcon />,
    path: '/category/electronics',
    description:
      'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
  },
  {
    id: 'automotivos',
    name: 'Automotivo',
    thumbnail: 'automotivoThumb',
    icon: <AiOutlineCar />,
    path: '/category/automotive',
    description:
      'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
  },
  {
    id: 'jogos',
    name: 'Jogos',
    thumbnail: 'jogosThumb',
    icon: <MixIcon />,
    path: '/category/games',
    description: 'Adquira os consoles e jogos mais atuais do mercado !',
  },
  {
    id: 'escritorio',
    name: 'Escritório',
    thumbnail: 'escritorioThumb',
    icon: <BackpackIcon />,
    path: '/category/office',
    description: 'Tudo para o que escritório ficar incrível!',
  },
  {
    id: 'som',
    name: 'Som e imagem',
    thumbnail: 'somThumb',
    icon: <SpeakerLoudIcon />,
    path: '/category/sound-and-image',
    description: 'Curta suas músicas e seus filmes com a melhor qualidade!',
  },
]

const categorysSlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {},
})

export default categorysSlice.reducer
