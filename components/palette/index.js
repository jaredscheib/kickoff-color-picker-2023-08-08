import { useContext } from 'react'

import Picker from '../picker'
import { AppContext } from '../paletteManager'

import s from './styles.module.css'

const Palette = ({paletteId, onUpdatePalette}) => {
  const { palettes } = useContext(AppContext)

  const handleUpdateColors = (nextColors) => {
    onUpdatePalette(paletteId, nextColors)
  }

  const palette = palettes.find(palette => palette.clientId === paletteId)

  return (
    <div className={s.palette}>
      <div className={s.paletteRow}>
        {palette ?
          palette.colors.map(({clientId, r, g, b}) =>
            <Picker
              key={clientId}
              colorsClientId={clientId}
              r={r}
              g={g}
              b={b}
              onUpdateColors={handleUpdateColors}
            />)
          : null
        }
      </div>
    </div>
  )
}

export default Palette