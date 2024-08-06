// import { isNumRGB } from '../../helpers'

import s from './styles.module.css'

const Picker = ({ onUpdateColors, colorsClientId, r, g, b }) => {
  const handleUpdateColors = (key, nextVal) => {
    // TODO: display error if value not between 0 and 255
    // if (!isNumRGB(nextVal) || nextVal === '') {
    //   return console.error('Value must be between 0 and 255')
    // }
    const nextColors = {
      clientId: colorsClientId,
      r,
      g,
      b,
      [key]: Number(nextVal)
    }
    return onUpdateColors(nextColors)
  }
  return (
    <div className={s.pickerContainer}>
      <div className={s.inputContainer}>
        <input className={s.rgbInput} type={"number"} onChange={e => handleUpdateColors('r', e.target.value)} value={r} />
        <input className={s.rgbInput} type={"number"} onChange={e => handleUpdateColors('g', e.target.value)} value={g} />
        <input className={s.rgbInput} type={"number"} onChange={e => handleUpdateColors('b', e.target.value)} value={b} />
      </div>
      <div className={s.rgbColor} style={{backgroundColor: `rgb(${r},${g},${b})`}} />
    </div>
  )
}

export default Picker