import { useContext } from 'react'
import { ThemeModeContext } from '../context/themeMode'

export function useThemeMode() {
  const context = useContext(ThemeModeContext)

  if (context === undefined)
    throw new Error('ThemeModeContext is not within ThemeModeProvider')

  return context
}
