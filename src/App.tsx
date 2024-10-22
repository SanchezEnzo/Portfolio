import { ThemeModeProvider } from './layout/context/themeMode'
import { Layout } from './layout/pages/Layout'

export function App () {

  return (
    <ThemeModeProvider>
      <Layout />
    </ThemeModeProvider>
  )
}
