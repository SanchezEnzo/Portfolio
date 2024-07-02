import { Button } from '../ui/button'
import { cn } from '../../../utils/utils'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

const BentoGrid = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-2 gap-5',
        className
      )}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta
}: {
  name: string
  className: string
  background: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description: string
  href: string
  cta: string
}) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl outline border transform-gpu',
      // light styles
      ' bg-[--bg-card-light-mode] border-[rgba(255,255,255,1)]  outline-[--outline-light-mode] backdrop-blur-xl',
      // dark styles
      ' dark:bg-[--bg-card-dark-mode]  dark:border-[rgba(255,255,255,0.1)] dark:backdrop-blur-xl dark:outline-[--outline-dark-mode]',
      className
    )}
  >
    <div>{background}</div>
    <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
      <h3 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
        {name}
      </h3>
      <p className='max-w-lg text-neutral-400'>{description}</p>
    </div>

    <div
      className={cn(
        'pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
      )}
    >
      <Button variant='ghost' asChild size='sm' className='pointer-events-auto'>
        <a href={href}>
          {cta}
          <ArrowRightIcon className='ml-2 h-4 w-4' />
        </a>
      </Button>
    </div>
    <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
  </div>
)

export { BentoCard, BentoGrid }
