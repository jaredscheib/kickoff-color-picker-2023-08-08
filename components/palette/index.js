import Picker from '../picker'

import s from './styles.module.css'

const Palette = ({palette}) => {
  return (
    <div className={s.palette}>
      <div className={s.paletteRow}>
        {palette.map(rgb => <Picker {...rgb} />)}
      </div>
    </div>
  )
}

export default Palette