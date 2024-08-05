import { v4 as uuidv4 } from 'uuid';

import Picker from '../picker'

import s from './styles.module.css'

const Palette = ({palette}) => {
  return (
    <div className={s.palette}>
      <div className={s.paletteRow}>
        {palette.map(rgb => <Picker key={uuidv4()} {...rgb} />)}
      </div>
    </div>
  )
}

export default Palette