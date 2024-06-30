import { useThemeMode } from '../../hooks/useThemeMode'
import {
  ArrowUpIcon,
  DarkModeIcon,
  GithubIcon,
  GmailIcon,
  LightModeIcon,
  LinkedInIcon
} from '../Icons/Icons'

export function SideBar() {
  const { darkMode, handleThemeMode } = useThemeMode()
  return (
    <aside className='fixed top-56 left-5'>
      <ul className='w-full h-full flex flex-col gap-10 items-center  bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-lg p-2'>
        <div className='flex flex-col gap-5'>
          <li className='w-[24px] h-[24px] relative group'>
            <a
              href='https://github.com/SanchezEnzo'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GithubIcon className='group-hover:opacity-0 transition-opacity ' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100   group-hover:-translate-y-1 transition-all' />
            </a>
          </li>
          <li className='w-[24px] h-[24px] relative group'>
            <a
              href='https://www.linkedin.com/in/sanchezenzo/'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <LinkedInIcon className='group-hover:opacity-0 transition-opacity ' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100   group-hover:-translate-y-1 transition-all' />
            </a>
          </li>
          <li className='w-[24px] h-[24px] relative group'>
            <a
              href=''
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GmailIcon className='group-hover:opacity-0 transition-opacity duration-100' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100   group-hover:-translate-y-1 transition-all' />
            </a>
          </li>
        </div>
        <div className='flex flex-col gap-5'>
          <li
            className='transition-transform -rotate-90'
            onClick={handleThemeMode}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </li>
        </div>
      </ul>
    </aside>
  )
}
