export function Header() {
  const sections = [
    { title: 'Proyectos', url: '#proyects' },
    { title: 'Experiencia', url: '#experience' },
    { title: 'Contacto', url: '#contact' }
  ]

  return (
    <header className='max-w-[1280px]'>
      <ul className='flex justify-around font-semibold text-[--primary]'>
        {sections.map(section => (
          <li key={section.title}>
            <a href={section.url}>{section.title}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}
