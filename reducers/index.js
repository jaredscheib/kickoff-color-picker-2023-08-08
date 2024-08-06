import { defaultAppState } from "../constants"

export const initAppState = () => {
  return { ...defaultAppState}
}

const appReducer = (state, action) => {
  switch (action.type) {
    case 'createPalette': {
      return {
        palettes: [
          ...state.palettes,
          ...action.payload.newPalette,
        ]
      }
    }
    case 'updatePalette': {
      const { targetPaletteClientId, nextColors } = action.payload
      const nextPalettes = state.palettes.map(palette => {
        return palette.clientId === targetPaletteClientId ?
          {
            ...palette,
            colors: palette.colors.map(colors => {
              return colors.clientId === nextColors.clientId ?
                nextColors
                : colors
            })
          }
          : palette
        }
      )
      return {
        palettes: nextPalettes
      }
    }
    default: {
      return state
    }
  }
}

export default appReducer