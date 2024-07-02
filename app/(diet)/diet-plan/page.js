import Back from "@/components/Back";

const page = () => {
  return (
    <div className="w-[320px] flex flex-col">
        <Back status="active" backdirectory="/" />

        <h1 class="text-2xl font-extrabold dark:text-black">Build the perfect diet for your child.</h1>
        <p class="my-1 text-lg text-gray-500">Fill in all of the following fields copletely.</p>
    </div>
  )
}

export default page