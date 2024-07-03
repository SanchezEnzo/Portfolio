export const GithubIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      color='white'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`dark:group-hover:text-outline-300 h-6 w-6 stroke-[1.5px] text-neutral-900 outline-zinc-900 transition group-hover:text-neutral-900 group-hover:outline-zinc-900 dark:text-[--text-dark-mode] dark:outline-[--text-dark-mode] dark:group-hover:text-zinc-300 z-10 relative ${className}`}
    >
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
      <path d='M9 18c-4.51 2-5-2-7-2'></path>
    </svg>
  )
}

export const LinkedInIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`lucide lucide-linkedin dark:group-hover:text-outline-300 h-6 w-6 stroke-[1.5px] text-neutral-900 outline-zinc-900 transition group-hover:text-neutral-900 group-hover:outline-zinc-900 dark:text-[--text-dark-mode] dark:outline-[--text-dark-mode] dark:group-hover:text-zinc-300 hover:opacity-0 z-10 relative ${className}`}
    >
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
      <rect width='4' height='12' x='2' y='9'></rect>
      <circle cx='4' cy='4' r='2'></circle>
    </svg>
  )
}

export const GmailIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`lucide lucide-mail dark:group-hover:text-outline-300 h-6 w-6 stroke-[1.5px] text-neutral-900 outline-zinc-900 transition group-hover:text-neutral-900 group-hover:outline-zinc-900 dark:text-[--text-dark-mode] dark:outline-[--text-dark-mode] dark:group-hover:text-zinc-300 hover:opacity-0 z-10 relative ${className}`}
    >
      <rect width='20' height='16' x='2' y='4' rx='2'></rect>
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
    </svg>
  )
}

export const ArrowUpIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`lucide lucide-arrow-up-right w-6 h-6 transition-all absolute top-0 -z-10 dark:text-[--text-dark-mode] opacity-0 hover:opacity-100 ${className}`}
    >
      <path d='M7 7h10v10' />
      <path d='M7 17 17 7' />
    </svg>
  )
}

export const DarkModeIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className='lucide lucide-moon h-6 w-6 stroke-neutral-800  animate-spin-once '
    >
      <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
    </svg>
  )
}

export const LightModeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    className='lucide lucide-sun h-6 w-6 stroke-[--text-dark-mode] animate-spin-once '
  >
    <circle cx='12' cy='12' r='4'></circle>
    <path d='M12 2v2'></path>
    <path d='M12 20v2'></path>
    <path d='m4.93 4.93 1.41 1.41'></path>
    <path d='m17.66 17.66 1.41 1.41'></path>
    <path d='M2 12h2'></path>
    <path d='M20 12h2'></path>
    <path d='m6.34 17.66-1.41 1.41'></path>
    <path d='m19.07 4.93-1.41 1.41'></path>
  </svg>
)

export const DemoIcon = () => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='#000000'
      className='dark:group-hover:text-outline-300 h-6 w-6 stroke-[1.5px] text-neutral-900 outline-zinc-900 transition group-hover:text-neutral-900 group-hover:outline-zinc-900 dark:text-[--text-dark-mode] dark:outline-[--text-dark-mode] dark:group-hover:text-zinc-300 z-10 relative'
    >
      <path
        d='M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z'
        stroke='#000000'
        stroke-width='1.5'
      ></path>
      <path
        d='M2 7L22 7'
        stroke='#000000'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
      <path
        d='M5 5.01L5.01 4.99889'
        stroke='#000000'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
      <path
        d='M8 5.01L8.01 4.99889'
        stroke='#000000'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
      <path
        d='M11 5.01L11.01 4.99889'
        stroke='#000000'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
    </svg>
  )
}
