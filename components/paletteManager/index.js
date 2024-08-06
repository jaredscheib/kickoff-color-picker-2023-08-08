import { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

import Palette from '../palette'
import appReducer, { initAppState } from '../../reducers';
import { emptyNewPaletteFlat } from "../../constants"

export const AppContext = createContext(null)

const PaletteManager = () => {
  const [ state, dispatch ] = useReducer(appReducer, null, initAppState)

  const handleCreateEmptyPalette = async () => {
    const { status, data } = await axios.post('/api/palettes', { ...emptyNewPaletteFlat })
    dispatch({ type: 'createPalette', payload: { newPalette: data } })
  }

  const handleUpdatePalette = (nextColors, targetPaletteClientId) => {
    dispatch({ type: 'updatePalette', payload: { nextColors, targetPaletteClientId }} )
  }

  useEffect(() => {
    const fetchPalettes = async () => {
      const { status, data } = await axios.get('/api/palettes')
      console.log('status, data', status, data)
    }
    fetchPalettes()
    // const deletePalette = async () => {
    //   const { status } = await axios.delete('/api/palettes', { id: 1 })
    //   // dispatch remove from state
    // }
    // deletePalette()
  }, [axios])

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