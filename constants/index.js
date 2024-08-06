import { v4 as uuidv4 } from 'uuid'

export const defaultAppState = {
  palettes: []
}

export const defaultNewPalette = () => ({
  clientId: uuidv4(),
  colors: [
    {
      clientId: uuidv4(),
      r: 0,
      g: 0,
      b: 0,
    },
    {
      clientId: uuidv4(),
      r: 0,
      g: 0,
      b: 0,
    },
    {
      clientId: uuidv4(),
      r: 0,
      g: 0,
      b: 0,
    },
    {
      clientId: uuidv4(),
      r: 0,
      g: 0,
      b: 0,
    },
    {
      clientId: uuidv4(),
      r: 0,
      g: 0,
      b: 0,
    },
  ]
})