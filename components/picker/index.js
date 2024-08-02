import { useState } from 'react'

import s from './styles.module.css'

const Picker = ({r, g, b}) => {
  const [ rColor, setRColor ] = useState(r);
  const [ gColor, setGColor ] = useState(g);
  const [ bColor, setBColor ] = useState(b);

  return (
    <div className={s.pickerContainer}>
      <div className={s.inputContainer}>
        <input className={s.rgbInput} type={"number"} onChange={e => setRColor(e.target.value)} value={rColor} />
        <input className={s.rgbInput} type={"number"} onChange={e => setGColor(e.target.value)} value={gColor} />
        <input className={s.rgbInput} type={"number"} onChange={e => setBColor(e.target.value)} value={bColor} />
      </div>
      <div className={s.rgbColor} style={{backgroundColor: `rgb(${rColor},${gColor},${bColor})`}} />
    </div>
  )
}

export default Picker