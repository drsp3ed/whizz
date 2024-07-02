"use client";

import Back from "@/components/Back";
import Link from "next/link";

const page = () => {
  let firstname = localStorage.getItem("firstname");
  return (
    <div className="w-[320px] flex flex-col justify-between py-2">
      <div>
        <Back status="inactive" backdirectory="/dashboard" />
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Salam, {firstname}!</h1>
          <p className="text-[#00000080]">
            Siz buradan uşaqlarınızın sağlamlığını təqib edə, onlara günlük
            tapşırıqlar verə, ailəni və digər tənzimləmələri idarə edə
            bilərsiniz...
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-white font-medium">
          <Link href="/dashboard/manage-family">
            <div className="w-full bg-sky-500 px-6 py-6 rounded-md cursor-pointer ">
              Ailəni tənzimləyin
            </div>
          </Link>

          <Link href="dashboard/monitor-health">
            <div className="w-full bg-blue-500 px-6 py-6 rounded-md cursor-pointer ">
              Sağlamlığı izləyin
            </div>
          </Link>

          <Link href="dashboard/add-task">
            <div className="w-full bg-green-500 px-6 py-6 rounded-md cursor-pointer ">
              Tapşırıq təyin edin
            </div>
          </Link>

          <Link href="dashboard/profile-settings">
            <div className="w-full bg-indigo-500 px-6 py-6 rounded-md cursor-pointer ">
              Profili tənzimləyin
            </div>
          </Link>

          <Link href="dashboard/support">
            <div className="w-full bg-purple-500 px-6 py-6 rounded-md cursor-pointer ">
              Dəstək və resurslar
            </div>
          </Link>

          <Link href="">
            <div className="w-full bg-violet-500 px-6 py-6 rounded-md cursor-pointer ">
              Qidalanma rejimi yaradın
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
