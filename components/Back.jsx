import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

const Back = ({ backdirectory, status }) => {
  const statuscss = status === "active" ? "text-[#615EFC]" : "text-[#00000033]";
  return (
    <div>
      <Link href={backdirectory} className={`${statuscss} flex items-center h-12 font-medium`}>
        <FaChevronLeft className="scale-75"/>
        Geri
      </Link>
    </div>
  );
};

export default Back;
