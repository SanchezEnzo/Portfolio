import { Header } from '../components/header/Header'
import { Presentation } from '../components/presentation/Presentation'
import { Proyects } from '../components/proyects/Proyects'

export function Layout() {
  return (
    <div className='bg-[--bg-dark-mode] min-h-screen flex flex-col gap-20'>
      <div className='animate-progress-grow timeline-scroll fixed bottom-0 w-[0%] bg-[--small-text-dark-mode] h-1'></div>
      <Header />
      <Presentation />
      <Proyects />
    </div>
  )
}
