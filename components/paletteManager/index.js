import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Palette from '../palette'

const newPalette = [
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
]

const PaletteManager = () => {
  const [ palettes, setPalettes ] = useState([])

  const createPalette = () => {
    setPalettes([...palettes, [...newPalette]])
  }

  return (
    <div className={"paletteManager"}>
      <button onClick={createPalette}>{"Create Palette"}</button>
      {palettes.map(palette => {
        return <Palette key={uuidv4()} palette={palette} />
      })}
    </div>
  )
}

export default PaletteManager