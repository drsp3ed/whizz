"use client";
import Back from "@/components/Back";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibilityText, setPasswordVisibilityText] = useState("Show");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordVisibilityText = () => {
    setPasswordVisibilityText(
      passwordVisibilityText === "Show" ? "Hide" : "Show"
    );
  };

  return (
    <div className="w-[320px] flex flex-col justify-between">
      <div>
        <Back status="active" backdirectory="/" />

        <div className="my-6">
          <h1 className="text-2xl font-semibold">Welcome back!</h1>
          <p className="text-[#00000080]">Please, log into your account...</p>
        </div>

        <form className="grid gap-4">
          <div className="grid gap-y-2">
            <input
              type="text"
              id="email"
              placeholder="Email address"
              onChange={handleEmailChange}
              value={email}
              className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
            />
            <span className="bg-[#F4F4F4] rounded-md flex items-center pr-3">
              <input
                type="password"
                id="password"
                placeholder="Password"
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
              Log in
            </button>
            <button className="py-3 text-[#615EFC] font-medium">
              Forgot your password?
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex justify-center pb-8">
        <div>
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#615EFC]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
