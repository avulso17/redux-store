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
    id: 'electronics',
    name: 'Eletrônicos',
    thumbnail: 'eletronicosThumb',
    icon: <DesktopIcon />,
    description:
      'Os melhores e mais atuais dispositivos eletrônicos estão aqui!',
  },
  {
    id: 'automotive',
    name: 'Automotivo',
    thumbnail: 'automotivoThumb',
    icon: <AiOutlineCar />,
    description:
      'Encontre aqui equipamentos para deixar seu carro com a sua cara!',
  },
  {
    id: 'games',
    name: 'Jogos',
    thumbnail: 'jogosThumb',
    icon: <MixIcon />,
    description: 'Adquira os consoles e jogos mais atuais do mercado !',
  },
  {
    id: 'office',
    name: 'Escritório',
    thumbnail: 'escritorioThumb',
    icon: <BackpackIcon />,
    description: 'Tudo para o que escritório ficar incrível!',
  },
  {
    id: 'sound-and-image',
    name: 'Som e imagem',
    thumbnail: 'somThumb',
    icon: <SpeakerLoudIcon />,
    description: 'Curta suas músicas e seus filmes com a melhor qualidade!',
  },
]

const categorysSlice = createSlice({
  name: 'categorys',
  initialState,
  reducers: {},
})

export default categorysSlice.reducer
