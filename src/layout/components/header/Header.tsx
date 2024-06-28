export function Header() {
  const sections = [
    { title: 'Proyectos', url: '#proyects' },
    { title: 'Experiencia', url: '#experience' },
    { title: 'Contacto', url: '#contact' }
  ]

  return (
    <header className='bg-white'>
      <ul className='flex justify-around font-semibold'>
        {sections.map(section => (
          <li key={section.title}>
            <a href={section.url}>{section.title}</a>
          </li>
        ))}
      </ul>
    </header>
  )
}
