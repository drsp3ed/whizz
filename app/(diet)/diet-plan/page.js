import Back from "@/components/Back";
import NumberSelector from "@/components/NumberSelector";
import Link from 'next/link';


const page = () => {
  return (
    <div className="w-[320px] flex flex-col overflow-x-hidden">
        <Back status="active" backdirectory="/" />

        <main>
        <div className="py-6">
        <h1 className="text-2xl font-extrabold dark:text-black my-1">Uşağınız üçün mükəmməl pəhriz qurun.</h1>
        <p className="text-lg text-gray-500">Aşağıdakı sahələrin hamısını tamamilə doldurun.</p>
        </div>
        
        <span className='text-base items-center text-[#615efc] font-bold justify-center'>Boy (sm):</span>
        <NumberSelector upperLimit = {250} lowerLimit = {50} />
        <span className='text-base items-center text-[#615efc] font-bold justify-center'>Ağırlıq (kq):</span>
        <NumberSelector upperLimit = {300} lowerLimit = {3} />
        <span className='text-base items-center text-[#615efc] font-bold justify-center'>Yaş:</span>
        <NumberSelector upperLimit = {25} lowerLimit = {1} />

        <Link href="/diet-plan/survey">
        <h4 className='w-full bg-[#615efc] text-white items-center rounded-3xl px-28 justify-center h-15 mt-4 font-bold text-center'>
            Saxla və davam et</h4>
        </Link>

      </main>
    </div>
  )
}

export default page