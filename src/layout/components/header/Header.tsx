export function Header() {
  const sections = [
    { title: 'Proyectos', url: '#proyects' },
    { title: 'Experiencia', url: '#experience' },
    { title: 'Contacto', url: '#contact' }
  ]

  return (
    <header className='flex justify-center pt-2 timeline-scroll-header animate-enhance-header sticky top-0'>
      <ul className='flex justify-around font-semibold min-w-[512px]  text-[--text-dark-mode] p-4 rounded-lg bg-[--bg-card-dark-mode] border-[rgba(255,255,255,0.1)] border outline-[--outline-dark-mode] outline'>
        {sections.map(section => (
          <li key={section.title}>
            <a href={section.url} className='hover:text-[--title-dark-mode]'>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
