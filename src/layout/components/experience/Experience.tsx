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
            <h3 className='text-2xl font-semibold text-neutral-700 dark:text-neutral-300'>
              Frontend Developer | No Country
            </h3>
          </header>
          <span className='font-semibold text-[--small-text-light-mode] dark:text-[--small-text-dark-mode]'>
            Marzo 2024 - Junio 2024
          </span>
          <div className='pt-3 pb-2'>
            <p className=' text-[--text-light-mode] dark:text-neutral-400 font-sans'>
              Durante mi práctica en No Country, me enfoqué en el desarrollo de
              aplicaciones web, donde:
            </p>
            <ul className='text-[--text-light-mode] dark:text-neutral-400 font-sans list-disc pl-5'>
              <li>
                <p>
                  Creé componentes interactivos que mejoran la experiencia del
                  usuario.
                </p>
              </li>
              <li>
                <p>
                  Integré API REST para intercambiar datos y funcionalidades con
                  servicios externos.
                </p>
              </li>
              <li>
                <p>
                  Implementé diseños responsivos para asegurar una experiencia
                  óptima en dispositivos móviles y de escritorio.
                </p>
              </li>
            </ul>
          </div>
          <span className=' text-[--text-light-mode] dark:text-neutral-400 font-sans '>
            Tecnologías: React TypeScript Tailwind Git Github
          </span>
        </div>
      </article>
    </section>
  )
}
