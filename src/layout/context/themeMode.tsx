import { createContext, useState } from 'react'
interface ThemeModeInterface {
  darkMode: boolean
  handleThemeMode(): void
}

const initialValue: ThemeModeInterface = {
  darkMode: false,
  handleThemeMode: () => null
}
export const ThemeModeContext = createContext(initialValue)

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  const handleThemeMode = () => setDarkMode(!darkMode)
  return (
    <ThemeModeContext.Provider value={{ darkMode, handleThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}
