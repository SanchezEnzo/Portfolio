import { useThemeMode } from '../../hooks/useThemeMode'

export function Presentation() {
  const { darkMode } = useThemeMode()
  console.log('DarkMode: ', darkMode)
  return (
    <main className='h-full w-full flex justify-center'>
      <div className='max-w-[1280px] flex items-center gap-20'>
        <div className='dark:text-[--text-dark-mode] text-[--text-light-mode] font-semibold flex flex-col gap-1'>
          <h2 className='text-4xl'>Hola, soy</h2>
          <h1 className='text-7xl dark:text-[--title-dark-mode] text-[--title-light-mode] font-extrabold '>
            Enzo Sanchez
          </h1>
          <span className='text-3xl pt-2'>Desarrollador Front-end</span>
        </div>
        {darkMode ? (
          <img
            className='rounded-full outline outline-[--outline-dark-mode] border border-[rgba(255,255,255,0.1)]'
            src='./imgs/presentation/ProfilePhotoDarkMode2.png'
            alt='Foto de Enzo Sanchez'
          />
        ) : (
          <img
            className='rounded-full outline outline-[--outline-light-mode] border border-[rgba(255,255,255,1)]'
            src='./imgs/presentation/ProfilePhotoLightMode2.png'
            alt='Foto de Enzo Sanchez'
          />
        )}
      </div>
    </main>
  )
}
