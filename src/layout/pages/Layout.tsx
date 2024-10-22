// Layout.jsx
import { Contact } from '../components/contact/Contact'
import { Experience } from '../components/experience/Experience'
import { Navbar } from '../components/navbar/Navbar'
import { Presentation } from '../components/presentation/Presentation'
import { Projects } from '../components/projects/Projects'
import { SideBar } from '../components/sidebar/SideBar'
import { useThemeMode } from '../hooks/useThemeMode'

export function Layout() {
	const { darkMode } = useThemeMode()
	
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='min-h-screen flex flex-col gap-40 bg-[--bg-light-mode] dark:bg-[--bg-dark-mode] items-center'>
        <div className='animate-progress-grow timeline-scroll fixed bottom-0 left-0 w-[0%] bg-[--text-light-mode] dark:bg-[--text-dark-mode] h-1 z-50'></div>
        <Navbar />
        <SideBar />
        <Presentation />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}
