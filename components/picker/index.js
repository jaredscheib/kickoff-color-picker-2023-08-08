import { useState } from 'react'

import s from './styles.module.css'

const Picker = () => {
  const [ rColor, setRColor ] = useState(0);
  const [ gColor, setGColor ] = useState(0);
  const [ bColor, setBColor ] = useState(0);

  return (
    <div className={s.pickerContainer}>
      <div className={s.inputContainer}>
        <input className={s.rgbInput} type={"number"} defaultValue={0} onChange={e => setRColor(e.target.value)} />
        <input className={s.rgbInput} type={"number"} defaultValue={0} onChange={e => setGColor(e.target.value)} />
        <input className={s.rgbInput} type={"number"} defaultValue={0} onChange={e => setBColor(e.target.value)} />
      </div>
      <div className={s.rgbColor} style={{backgroundColor: `rgb(${rColor},${gColor},${bColor})`}} />
    </div>
  )
}

export default Picker