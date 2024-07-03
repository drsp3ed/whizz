import Link from "next/link"

const Error = ({ errorTitle }) => {
  return (
    <div className="w-[320px] flex flex-col overflow-x-hidden">
        <div className="items-center justify-center text-center"> 
        <h1 className="text-center text-5xl text-white text-bold bg-[#615efc] justify-center items-center rounded-full w-14 h-50 pb-2">x</h1>
        <h1 className="text-center text-1xl font-bold pt-6">Oops! Nəsə xəta baş verdi. Səhv: <span className="text-[#ff0000]">{ errorTitle }</span>. Zəhmət olmasa bir daha cəhd edin.</h1>
        </div>
        
    </div>
  )
}
export default Error