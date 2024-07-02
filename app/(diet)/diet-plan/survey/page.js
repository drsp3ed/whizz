"use client";   
import Back from "@/components/Back";


const page = () => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        // You can access and process the input value here
        return (inputValue)
      };

    return (
        <div className="w-[320px] flex flex-col">
            <Back status="active" backdirectory="/diet-plan" />

            <div className="py-6">
            <h1 class="text-2xl font-extrabold dark:text-black my-1">Uşağınız üçün mükəmməl pəhriz qurun.</h1>
            <p class="text-lg text-gray-500">Aşağıdakı sahələrin hamısını tamamilə doldurun.</p>
            </div>

            <div>
            <h1>put the entrys here</h1>
            </div>
        </div>
    )
}

export default page