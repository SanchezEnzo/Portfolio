import { Header } from '../components/header/Header'
import { Presentation } from '../components/presentation/Presentation'
import { Proyects } from '../components/proyects/Proyects'
import { SideBar } from '../components/sidebar/SideBard'
import { useThemeMode } from '../hooks/useThemeMode'

export function Layout() {
  const { darkMode } = useThemeMode()

  return (
    <div
      className={`min-h-screen flex flex-col gap-20 ${darkMode ? 'dark' : ''}`}
    >
      <div className='animate-progress-grow timeline-scroll fixed bottom-0 w-[0%] bg-[--small-text-dark-mode] h-1'></div>
      <Header />
      <SideBar />
      <Presentation />
      <Proyects />
      <div className='fixed bottom-1 right-40'>
        <span className='text-xl text-black font-semibold'>
          ModeDark: {darkMode.toString()}
        </span>
      </div>
    </div>
  )
}
