import { createContext, useEffect } from 'react'

import { useReducerWithThunk } from '../../helpers/customHooks';
import appReducer, { initAppState } from '../../reducers';
import { createEmptyPaletteAction, deletePaletteAction, fetchPalettesAction } from '../../actions';
import Palette from '../palette'

export const AppContext = createContext(null)

const PaletteManager = () => {
  const [ state, dispatch ] = useReducerWithThunk(appReducer, null, initAppState)

  const handleCreateEmptyPalette = () => {
    dispatch(createEmptyPaletteAction())
  }

  // const handleDeletePalette = (targetPaletteId) => {
  //   dispatch(createEmptyPaletteAction(targetPaletteId))
  // }

  // TODO: target by server id, not client id
  const handleUpdatePalette = (targetPaletteClientId, nextColors) => {
    dispatch(updatePaletteAction(targetPaletteClientId, nextColors))
  }

  useEffect(() => {
    dispatch(fetchPalettesAction())
  }, [])

  return (
    <AppContext.Provider value={state}>
      <div className={"paletteManager"}>
        <button onClick={handleCreateEmptyPalette}>{"Create Palette"}</button>
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