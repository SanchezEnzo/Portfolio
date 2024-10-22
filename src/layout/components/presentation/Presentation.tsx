import { useThemeMode } from '../../hooks/useThemeMode'

export function Presentation() {
	const { darkMode } = useThemeMode()
	
  return (
    <main className='h-full w-full flex justify-center'>
      <div className='max-w-[1280px] flex items-center gap-20'>
        <div className='dark:text-[--text-dark-mode] text-[--text-light-mode] font-semibold flex flex-col gap-1'>
          <h2 className='text-4xl'>Hola, soy</h2>
          <h1 className='text-7xl dark:text-[--title-dark-mode] text-[--title-light-mode] font-extrabold '>
            Enzo Sanchez
          </h1>
          <span className='text-3xl pt-2'>Desarrollador Front-end</span>
          <div className=' items-center  bg-[--bg-card-light-mode] dark:bg-[--bg-card-dark-mode] border-[rgba(255,255,255,1)] dark:border-[rgba(255,255,255,0.1)] border outline-[--outline-light-mode] dark:outline-[--outline-dark-mode] outline rounded-lg p-1 flex max-w-[190px] gap-2 mt-2'>
            <div className='relative h-2 w-2 inline-flex justify-center'>
              <span className='bg-[#A3E635] animate-ping rounded-full h-2 w-2 opacity-75 absolute '></span>
              <span className='h-2 w-2 bg-[#A3E635] rounded-full relative top-0 bottom-0  right-0 left-0 my-0 mx-auto'></span>
            </div>
            <span className='text-[--small-text-light-mode] dark:text-[--small-text-dark-mode] text-[14px]'>
              Disponible para trabajar
            </span>
          </div>
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
