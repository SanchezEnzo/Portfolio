import { DemoIcon, GithubIcon } from '../Icons/Icons'

interface CardProjectProps {
  title: string
  text: string
  img: string
  github: string
  demo?: string
}

export function CardProject({
  title,
  text,
  img,
  github,
  demo
}: CardProjectProps) {
  return (
    <article className='flex gap-10'>
      <img
        src={img}
        alt='Imagen de EasyTurnos app'
        className='max-h-[350px] max-w-[500px]  border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-lg'
      />
      <div className='flex flex-col gap-5 h-[350px]'>
        <header>
          <h3 className='text-3xl '>{title}</h3>
        </header>
        <p>{text}</p>
        <div className='flex gap-10'>
          <a
            href={github}
            className='flex gap-2 py-4 px-14 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-xl text-[18px] duration-300 ease-out hover:-translate-y-1 hover:duration-700 '
            target='_blank'
          >
            <DemoIcon /> Demo
          </a>
          <a
            href={demo}
            className='flex gap-2 py-4 px-14 bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-xl text-[18px] duration-300 ease-out hover:-translate-y-1 hover:duration-700'
            target='_blank'
          >
            <GithubIcon className='' /> Code
          </a>
        </div>
      </div>
    </article>
  )
}
