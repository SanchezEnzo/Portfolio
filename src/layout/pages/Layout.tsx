import { Header } from '../components/header/Header'
import { Presentation } from '../components/presentation/Presentation'

export function Layout() {
  return (
    <div className='bg-[--bg-dark-mode] min-h-screen flex flex-col gap-40'>
      <Header />
      <Presentation />
    </div>
  )
}
