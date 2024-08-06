import axios from 'axios'

import { emptyNewPaletteFlat } from "../../constants"

export const createEmptyPaletteAction = () => async (dispatch) => {
  const { status, data } = await axios.post('/api/palettes', { ...emptyNewPaletteFlat })
  console.log('status, data', status, data)
  if (status === 200) {
    dispatch({ type: 'createPalette', payload: { newPalette: data } })
  } else {
    // TODO: handle error case
  }
}

// export const deletePaletteAction = (paletteId) => async (dispatch) => {
//   const { status } = await axios.delete('/api/palettes', { id: paletteId })
//   console.log(status)
//   if (status === 200) {
//     dispatch({ type: 'DELETE_PALETTE_SUCCESS', payload: { paletteId } })
//   } else {
//     // TODO: handle error case
//   }
// }

export const fetchPalettesAction = () => async (dispatch) => {
  const { status, data } = await axios.get('/api/palettes')
  console.log('status, data', status, data)
  if (status === 200) {
    dispatch({ type: 'FETCH_PALETTES_SUCCESS', payload: { palettes: data } })
  } else {
    // TODO: handle error case
  }
}

export const updatePaletteAction = (targetPaletteClientId, nextColors) => async (dispatch) => {
  // TODO: transform colors to match db format
  // const colorsFlat = nextColors
  const { status, data } = await axios.put('/api/palettes')
    .where({ id: targetPaletteClientId})
    .put({ colorsFlat })
  if (status === 204) {
    dispatch({ type: 'updatePalette', payload: { nextColors, targetPaletteClientId }} )
  } else {
    // TODO: handle error case
  }
}