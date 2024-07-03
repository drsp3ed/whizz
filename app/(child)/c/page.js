'use client'
import {useRouter} from 'next/navigation'

const page = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      localStorage.getItem("email") &&
      localStorage.getItem("password") &&
      localStorage.getItem("type") === "parent"
    ) {
      router.push("/p/dashboard/");
    } else if (
      localStorage.getItem("email") &&
      localStorage.getItem("password") &&
      localStorage.getItem("type") === "child"
    ) {
      router.push("/c/");
    }
  }, [router]);
  return (
    <div>page</div>
  )
}

export default page