import { Title } from '../../../shared/components/Title'

export function Experience() {
  return (
    <section className='max-w-[1024px] flex flex-col gap-10'>
      <header>
        <Title param={'Experience'} />
      </header>
      <article className='flex items-center gap-20'>
        <img
          src='/imgs/experience/nocountry.jpg'
          alt='No country simulaciones'
          className='h-[150px] w-[150px]'
        />
        <div>
          <header>
            <h3 className='text-2xl font-semibold'>
              Frontend Developer | No Country
            </h3>
          </header>
          <span>Marzo 2024 - Junio 2024</span>
          <p className='pt-2 pb-1'>
            Durante mi práctica laboral en No Country, me centré en el
            desarrollo de WebApps, Creando componentes dinamicos, realizando
            integraciones de API REST y la implementación de diseños
            responsivos. Participé activamente en metodologías ágiles como
            SCRUM, asistiendo a Daily Meets y practicando Pair Programming.
            Además, utilicé herramientas como Jira y Trello para la gestion de
            tareas.
          </p>
          <span>Tecnologías: React TypeScript Tailwind Git Github</span>
        </div>
      </article>
    </section>
  )
}
