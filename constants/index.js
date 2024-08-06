import { v4 as uuidv4 } from 'uuid'

export const defaultAppState = {
  palettes: []
}

export const emptyNewPaletteFlat = {
  rgb0: '0-0-0',
  rgb1: '0-0-0',
  rgb2: '0-0-0',
  rgb3: '0-0-0',
  rgb4: '0-0-0',
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