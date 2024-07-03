import Link from 'next/link'
 
const NotFound = () => {
  return (
    <div className="w-[320px] flex flex-col overflow-x-hidden items-center justify-center border-black">
        <h1 className='font-bold text-9xl'>404</h1>
        <h2 className='font-bold text-center text-2xl pb-8 pt-5'>Tələb olunan mənbəni tapmaq mümkün olmadı</h2>
        <Link href="/">
        <h4 className='w-full bg-[#615efc] text-white items-center rounded-3xl px-28 py-2 h-15 mt-4 font-bold text-center'>
            Geri qayıt</h4>
        </Link>
    </div>
  )
}

export default NotFound;