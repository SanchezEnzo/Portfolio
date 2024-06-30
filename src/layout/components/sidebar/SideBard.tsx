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
  const { handleThemeMode } = useThemeMode()
  return (
    <aside className='fixed top-56 left-10'>
      <ul className='w-full h-full flex flex-col gap-10 items-center outline outline-[--outline-light-mode] rounded-lg p-2'>
        <div className='flex flex-col gap-5'>
          <li className='w-[24px] h-[24px]'>
            <a
              href='https://github.com/SanchezEnzo'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GithubIcon />
              <ArrowUpIcon />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/sanchezenzo/'
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <LinkedInIcon />
              <ArrowUpIcon />
            </a>
          </li>
          <li>
            <a
              href=''
              className='relative w-full h-full z-10'
              target='_blanket'
            >
              <GmailIcon />
              <ArrowUpIcon />
            </a>
          </li>
        </div>
        <div className='flex flex-col gap-5'>
          <li className='transition-transform' onClick={handleThemeMode}>
            <LightModeIcon />
            <DarkModeIcon />
          </li>
        </div>
      </ul>
    </aside>
  )
}
