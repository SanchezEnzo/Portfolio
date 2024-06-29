export function Presentation() {
  return (
    <section className='h-full w-full flex justify-center'>
      <div className='max-w-[1280px] flex items-center gap-20'>
        <div className='text-[--title-dark-mode] font-semibold flex flex-col gap-1'>
          <h2 className='text-4xl'>Hola, soy</h2>
          <h1 className='text-5xl font-extrabold'>Enzo Sanchez</h1>
          <span className='text-2xl'>Desarrollador Front-end</span>
        </div>
        <img
          className='rounded-full outline outline-[--outline-dark-mode] border border-[rgba(255,255,255,0.1)]'
          src='./img/ProfilePhotoDarkMode.png'
          alt='Foto Enzo Sanchez'
        />
      </div>
    </section>
  )
}
