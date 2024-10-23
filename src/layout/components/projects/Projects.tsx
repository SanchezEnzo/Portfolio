import { Title } from '../../../shared/components/Title'
import { BellIcon } from '@radix-ui/react-icons'
import { CardProject } from './CardProject'

export function Projects() {
  const projects = [
    {
      name: 'Save your files',
      description: 'We automatically save your files as you type.',
      github: '/',
      demo: 'Learn more',
      img: '/imgs/projects/EasyTurnosEdit.png'
    },
    {
      name: 'Full text search',
      description: 'Search through all your files in one place.',
      github: '/',
      demo: 'Learn more',
      img: '/imgs/projects/EasyTurnosEdit.png'
    },
    {
      name: 'Full text search',
      description: 'Search through all your files in one place.',
      github: '/',
      demo: 'Learn more',
      img: '/imgs/projects/EasyTurnosEdit.png'
    },

    {
      Icon: BellIcon,
      name: 'Notifications',
      description:
        'Get notified when someone shares a file or mentions you in a comment.',
      github: '/',
      demo: 'Learn more',
      img: '/imgs/projects/EasyTurnosEdit.png'
    }
  ]

  return (
    <section className='flex flex-col gap-10'>
      <header>
        <Title param={'Proyectos'} />
      </header>
      <section
        className='h-[500vh] overflow-visible w-full relative
			scroll-projects'
      >
        <div className='max-w-[1024px]  sticky top-0 w-screen overflow-x-hidden '>
          <div className='scroll-wrap h-screen flex gap-96  items-center '>
            {projects.map(project => {
              const { name, description, img, github, demo } = project
              return (
                <CardProject
                  key={name}
                  title={name}
                  text={description}
                  img={img}
                  github={github}
                  demo={demo}
                />
              )
            })}
          </div>
        </div>
      </section>
    </section>
  )
}
