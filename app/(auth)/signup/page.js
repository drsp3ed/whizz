"use client";
import Back from "@/components/Back";
import { useState } from "react";

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
    setPasswordVisibilityText(passwordVisibilityText === "Show" ? "Hide" : "Show");
  }



  return (
    <div className="w-[320px] flex flex-col">
      <Back status="active" backdirectory="/" />

      <div>
        <h1 className="text-2xl font-semibold">Welcome back!</h1>
        <p className="text-[#00000080]">Plase, log into your account...</p>
      </div>

      <form className="grid gap-y-2">
        <input
          type="text"
          id="email"
          placeholder="Email address"
          onChange={handleEmailChange}
          value={email}
          className="p-3 bg-[#F4F4F4] rounded-md"
        />
        <span className="bg-[#F4F4F4] rounded-md flex items-center pr-3">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            className="p-3 bg-[#F4F4F4] rounded-md"
          />
          <div className="w-full flex justify-end text-sm text-[#615EFCx]"><p className="text-[#615EFC]" onClick={handlePasswordVisibilityText}>{passwordVisibilityText}</p></div>
        </span>
      </form>
    </div>
  );
};

export default page;
