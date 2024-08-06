import { createContext, useReducer } from 'react'

import Palette from '../palette'
import appReducer, { initAppState } from '../../reducers';

export const AppContext = createContext(null)

const PaletteManager = () => {
  const [ state, dispatch ] = useReducer(appReducer, null, initAppState)

  const handleCreatePalette = () => {
    dispatch({ type: 'createPalette' })
  }

  const handleUpdatePalette = (nextColors, targetPaletteClientId) => {
    dispatch({ type: 'updatePalette', payload: { nextColors, targetPaletteClientId }} )
  }

  return (
    <AppContext.Provider value={state}>
      <div className={"paletteManager"}>
        <button onClick={handleCreatePalette}>{"Create Palette"}</button>
        {state.palettes.length ?
          state.palettes.map(palette => {
            return <Palette key={palette.clientId} paletteId={palette.clientId} onUpdatePalette={handleUpdatePalette} />
          })
          : null}
      </div>
    </AppContext.Provider>
  )
}

export default PaletteManager