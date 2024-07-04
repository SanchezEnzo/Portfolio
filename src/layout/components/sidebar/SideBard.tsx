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
          <li className='w-[24px] h-[24px] relative group cursor-pointer'>
            <a
              href='https://github.com/SanchezEnzo'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GithubIcon className='group-hover:opacity-0 transition-opacity ' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full  group-hover:opacity-100 group-hover:-translate-y-1 transition-all' />
            </a>
            <div className='rounded text-xs text-[14px] dark:text-[--text-dark-mode] absolute opacity-0 top-0 bottom-0 right-0 left-0 group-hover:opacity-100 group-hover:translate-x-7 group-hover:-translate-y-2  z-50 duration-500 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] '>
              <span className='border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-md p-1'>
                Github
              </span>
            </div>
          </li>
          <li className='w-[24px] h-[24px] relative group cursor-pointer'>
            <a
              href='https://www.linkedin.com/in/sanchezenzo/'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <LinkedInIcon className='group-hover:opacity-0 transition-opacity ' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full  group-hover:opacity-100 group-hover:-translate-y-1 transition-all' />
            </a>
            <div className='rounded text-xs text-[14px] dark:text-[--text-dark-mode] absolute opacity-0 top-0 bottom-0 right-0 left-0 group-hover:opacity-100 group-hover:translate-x-7 group-hover:-translate-y-2  z-50 duration-500 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] '>
              <span className='border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-md p-1'>
                LinkedIn
              </span>
            </div>
          </li>
          <li className='w-[24px] h-[24px] relative group cursor-pointer'>
            <a
              href=''
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GmailIcon className='group-hover:opacity-0 transition-opacity duration-100' />
              <ArrowUpIcon className='absolute top-0 left-0 w-full h-full  group-hover:opacity-100   group-hover:-translate-y-1 transition-all' />
            </a>
            <div className='rounded text-xs text-[14px] dark:text-[--text-dark-mode] absolute opacity-0 top-0 bottom-0 right-0 left-0 group-hover:opacity-100 group-hover:translate-x-7 group-hover:-translate-y-2  z-50 duration-500 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] '>
              <span className='border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-md p-1'>
                Email
              </span>
            </div>
          </li>
        </div>
        <div className='flex flex-col gap-5'>
          <li
            className='transition-transform -rotate-90 cursor-pointer relative group'
            onClick={handleThemeMode}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            <div className='rounded text-xs text-[14px] dark:text-[--text-dark-mode] absolute opacity-0 top-0 bottom-0 right-0 left-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:translate-y-7  z-50 duration-500 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] rotate-90'>
              <span className='border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-md p-1'>
                Tema
              </span>
            </div>
          </li>
        </div>
      </ul>
    </aside>
  )
}
