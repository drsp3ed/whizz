"use client";
import Back from "@/components/Back";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  if (
    localStorage.getItem("email") &&
    localStorage.getItem("password") &&
    localStorage.getItem("type") === "parent"
  )
    router.push("/p/dashboard/");
  if (
    localStorage.getItem("email") &&
    localStorage.getItem("password") &&
    localStorage.getItem("type") === "child"
  )
    router.push("/c/");

  const [clickability, setClickability] = useState(false);
  const [selectedOption, setSelectedOption] = useState("child");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [number, setNumber] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibilityText, setPasswordVisibilityText] =
    useState("Göstər");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [
    confirmationPasswordVisibilityText,
    setConfirmationPasswordVisibilityText,
  ] = useState("Göstər");

  const toggleClickability = () => {
    setClickability(clickability === false ? true : false);
  };

  const submitButtonStyle =
    clickability === false
      ? "bg-[#0000004d] cursor-not-allowed"
      : "bg-[#615EFC]";

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmationPasswordChange = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const handlePasswordVisibilityText = () => {
    setPasswordVisibilityText(
      passwordVisibilityText === "Göstər" ? "Gizlə" : "Göstər"
    );
  };

  const handleConfirmationPasswordVisibilityText = () => {
    setConfirmationPasswordVisibilityText(
      confirmationPasswordVisibilityText === "Göstər" ? "Gizlə" : "Göstər"
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      firstname != "" &&
      lastname != "" &&
      email != "" &&
      password != "" &&
      confirmationPassword != "" &&
      clickability === true &&
      password === confirmationPassword
    ) {
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("lastname", lastname);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      const dayDifference = today.getDate() - birthDate.getDate();

      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }
      localStorage.setItem("age", age);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("type", selectedOption);
      setClickability(false);
      router.push("/p/dashboard");
    }
  };

  return (
    <div className="w-[320px] flex flex-col justify-between py-2">
      <div>
        <Back status="active" backdirectory="/" />

        <div className="my-6">
          <h1 className="text-2xl font-semibold">Xoş gəlmisiniz!</h1>
          <p className="text-[#00000080]">Xahiş olunur, hesab yaradın...</p>
        </div>

        <form className="grid gap-4" onSubmit={handleFormSubmit}>
          <div className="grid gap-y-2">
            <div className="grid grid-cols-2 mb-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="child"
                  value="child"
                  checked={selectedOption === "child"}
                  className="mr-2"
                  onChange={handleOptionChange}
                />
                Uşaq
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="parent"
                  value="parent"
                  checked={selectedOption === "parent"}
                  className="mr-2"
                  onChange={handleOptionChange}
                />
                Valideyn
              </div>
            </div>

            {selectedOption === "parent" && (
              <>
                <div className="grid grid-cols-2 gap-x-2">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Ad"
                    onChange={handleFirstnameChange}
                    value={firstname}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Soyad"
                    onChange={handleLastnameChange}
                    value={lastname}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                </div>

                <input
                  type="tel"
                  id="number"
                  placeholder="Əlaqə nömrəsi"
                  maxLength={28}
                  onChange={handleNumberChange}
                  value={number}
                  className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none w-full"
                />

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
                    type={
                      passwordVisibilityText === "Göstər" ? "password" : "text"
                    }
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

                <span className="bg-[#F4F4F4] rounded-md flex items-center pr-3">
                  <input
                    type={
                      confirmationPasswordVisibilityText === "Göstər"
                        ? "password"
                        : "text"
                    }
                    id="password"
                    placeholder="Şifrəni təsdiqlə"
                    onChange={handleConfirmationPasswordChange}
                    value={confirmationPassword}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                  <div className="w-full flex justify-end text-sm text-[#615EFCx]">
                    <p
                      className="text-[#615EFC] cursor-pointer"
                      onClick={handleConfirmationPasswordVisibilityText}
                    >
                      {confirmationPasswordVisibilityText}
                    </p>
                  </div>
                </span>
              </>
            )}

            {selectedOption === "child" && (
              <>
                <span className="grid grid-cols-2 gap-x-2">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Ad"
                    onChange={handleFirstnameChange}
                    value={firstname}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Soyad"
                    onChange={handleLastnameChange}
                    value={lastname}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                </span>

                <span className="">
                  <p>Doğum tarixi</p>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      id="day"
                      placeholder="GG"
                      maxLength={2}
                      onChange={handleDayChange}
                      value={day}
                      className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                    />
                    <input
                      type="text"
                      id="month"
                      placeholder="AA"
                      maxLength={2}
                      onChange={handleMonthChange}
                      value={month}
                      className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                    />
                    <input
                      type="text"
                      id="year"
                      placeholder="İİİİ"
                      maxLength={4}
                      onChange={handleYearChange}
                      value={year}
                      className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                    />
                  </div>
                </span>

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
                    type={
                      passwordVisibilityText === "Göstər" ? "password" : "text"
                    }
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

                <span className="bg-[#F4F4F4] rounded-md flex items-center pr-3">
                  <input
                    type={
                      confirmationPasswordVisibilityText === "Göstər"
                        ? "password"
                        : "text"
                    }
                    id="password"
                    placeholder="Şifrəni təsdiqlə"
                    onChange={handleConfirmationPasswordChange}
                    value={confirmationPassword}
                    className="p-3 bg-[#F4F4F4] rounded-md focus:outline-none"
                  />
                  <div className="w-full flex justify-end text-sm text-[#615EFCx]">
                    <p
                      className="text-[#615EFC] cursor-pointer"
                      onClick={handleConfirmationPasswordVisibilityText}
                    >
                      {confirmationPasswordVisibilityText}
                    </p>
                  </div>
                </span>
              </>
            )}
          </div>

          <div className="grid gap-2 mt-2">
            <span className="font-medium">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer h-[11px]"
                onClick={toggleClickability}
              />
              Tətbiqin{" "}
              <span className="text-[#615EFC] cursor-pointer">
                İstifadə Qaydaları
              </span>{" "}
              ilə tanışam və qəbul edirəm.
            </span>
            <button
              className={`py-3 text-white rounded-full ${submitButtonStyle} font-medium`}
              onClick={handleFormSubmit}
            >
              Hesab yaradın
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex justify-center">
        <div>
          <p className="font-medium">
            Artıq hesabınız var?{" "}
            <Link href="/login" className="text-[#615EFC]">
              Giriş edin!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
