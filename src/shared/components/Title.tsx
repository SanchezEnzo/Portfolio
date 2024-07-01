export function Title({ param }: { param: string }) {
  return (
    <div className='w-full flex '>
      <h2 className='text-4xl text-[--title-light-mode] dark:text-[--title-dark-mode] font-semibold'>
        {param}
      </h2>
      {/* <hr className='text-[--title-light-mode] dark:text-[--title-dark-mode] h-1 opacity-50 w-full min-w-[768px]' /> */}
    </div>
  )
}
