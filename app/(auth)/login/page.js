"use client";
import Back from "@/components/Back";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibilityText, setPasswordVisibilityText] =
    useState("Göstər");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibilityText = () => {
    setPasswordVisibilityText(
      passwordVisibilityText === "Göstər" ? "Gizlət" : "Göstər"
    );
  };

  return (
    <div className="w-[320px] flex flex-col justify-between">
      <div>
        <Back status="active" backdirectory="/" />

        <div className="my-6">
          <h1 className="text-2xl font-semibold">Xoş gəlmisiniz!</h1>
          <p className="text-[#00000080]">
            Xahiş edirik, hesabınıza daxil olun...
          </p>
        </div>

        <form className="grid gap-4">
          <div className="grid gap-y-2">
            <input
              type="email"
              id="email"
              placeholder="Elektron poçt"
              onChange={handleEmailChange}
              value={email}
              className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            <span className="bg-[#F4F4F4] rounded-md flex items-center pr-3">
              <input
                type={passwordVisibilityText === "Göstər" ? "password" : "text"}
                id="password"
                placeholder="Şifrə"
                onChange={handlePasswordChange}
                value={password}
                className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
              />
              <div className="w-full flex justify-end text-sm text-[#615EFCx]">
                <p
                  className="text-[#615EFC] cursor-pointer"
                  onClick={handlePasswordVisibilityText}
                >
                  {passwordVisibilityText}
                </p>
              </div>
            </span>
          </div>

          <div className="grid gap-2">
            <button className="py-3 text-white rounded-full bg-[#615EFC] font-medium">
              Daxil ol
            </button>
            <button className="py-3 text-[#615EFC] font-medium">
              Şifrəni unutmusunuz?
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex justify-center pb-8">
        <div>
          <p>
            Hesabınız yoxdur?{" "}
            <Link href="/signup" className="text-[#615EFC]">
              Hesab yaradın!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
