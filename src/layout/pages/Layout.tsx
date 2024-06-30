import { Header } from '../components/header/Header'
import { Presentation } from '../components/presentation/Presentation'
import { Proyects } from '../components/proyects/Proyects'
import { SideBar } from '../components/sidebar/SideBard'
import { useThemeMode } from '../hooks/useThemeMode'

export function Layout() {
  const { darkMode } = useThemeMode()

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='min-h-screen flex flex-col gap-20 bg-[--bg-light-mode] dark:bg-[--bg-dark-mode]'>
        <div className=' animate-progress-grow timeline-scroll fixed bottom-0 w-[0%] bg-[--text-light-mode] dark:bg-[--text-dark-mode] h-1'></div>
        <Header />
        <SideBar />
        <Presentation />
        <Proyects />
      </div>
    </div>
  )
}
