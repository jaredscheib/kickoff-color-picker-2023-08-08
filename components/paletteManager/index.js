import { useState } from 'react'

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

  console.log('palettes', palettes)

  const createPalette = () => {
    setPalettes([...palettes, [...newPalette]])
  }

  return (
    <div className={"paletteManager"}>
      <button onClick={createPalette}>{"Create Palette"}</button>
      {palettes.map(palette => {
        return <Palette palette={palette} />
      })}
    </div>
  )
}

export default PaletteManager