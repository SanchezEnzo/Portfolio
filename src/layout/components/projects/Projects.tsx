import { Title } from '../../../shared/components/Title'
import {
  BentoCard,
  BentoGrid
} from '../../../shared/components/magicui/BentoGrid'
import { BellIcon } from '@radix-ui/react-icons'

export function Projects() {
  const features = [
    {
      name: 'Save your files',
      description: 'We automatically save your files as you type.',
      href: '/',
      cta: 'Learn more',
      background: (
        <img className='opacity-80 ' src='/imgs/projects/EasyTurnosEdit.png' />
      ),
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2'
    },
    {
      name: 'Full text search',
      description: 'Search through all your files in one place.',
      href: '/',
      cta: 'Learn more',
      background: <img className='opacity-60' />,
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2'
    },
    {
      name: 'Full text search',
      description: 'Search through all your files in one place.',
      href: '/',
      cta: 'Learn more',
      background: <img className='opacity-60' />,
      className: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3'
    },

    {
      Icon: BellIcon,
      name: 'Notifications',
      description:
        'Get notified when someone shares a file or mentions you in a comment.',
      href: '/',
      cta: 'Learn more',
      background: <img className='opacity-60' />,
      className: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3'
    }
  ]
  return (
    <section className='max-w-[1024px] flex flex-col gap-10'>
      <header>
        <Title param={'Proyectos'} />
      </header>
      <BentoGrid className='lg:grid-rows-2 max-lg:px-10'>
        {features.map(feature => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      <div className=''>
        <a
          href='https://github.com/SanchezEnzo?tab=repositories'
          target='_blank'
          className='dark:text-[--text-dark-mode] text-[--text-light-mode]'
        >
          Ver más proyectos
        </a>
      </div>
    </section>
  )
}
