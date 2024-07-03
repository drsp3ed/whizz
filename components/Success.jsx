import Link from "next/link"

const Success = ({successTitle}) => {
  return (
    <div className="w-[320px] flex flex-col overflow-x-hidden">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div className="items-center justify-center text-center"> 
        <h1 className="text-center text-5xl text-white text-bold bg-[#615efc] justify-center items-center rounded-full w-14 h-50 pb-2">
            <span class="material-symbols-outlined">check</span>
        </h1>
        <h1 className="text-center text-1xl font-bold pt-6">{successTitle}</h1>
        </div>
        
    </div>
  )
}

export default Success
