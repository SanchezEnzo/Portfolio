import { useThemeMode } from '../../hooks/useThemeMode'

// Header.jsx
export function Navbar() {
  const { darkMode } = useThemeMode()
  const sections = [
    { title: 'Proyectos', url: '#proyects' },
    { title: 'Experiencia', url: '#experience' },
    { title: 'Contacto', url: '#contact' }
  ]

  return (
    <header
      className={`text-xl w-[1280px] flex justify-center timeline-scroll-header ${darkMode ? ' animate-enhance-header-dark' : 'animate-enhance-header-light'}  sticky top-0 z-50 pt-2`}
    >
      <nav>
        <ul className='flex justify-around font-semibold min-w-[512px] text-[--text-light-mode] dark:text-[--text-dark-mode] p-4 rounded-lg bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline expand-header timeline-scroll-header'>
          {sections.map(section => (
            <li key={section.title}>
              <a
                href={section.url}
                className='hover:text-[--title-light-mode] dark:hover:text-[--title-dark-mode]'
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
