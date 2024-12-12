"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div>
          <h2 className="lg:text-[36px] max-sm:text-[24px] max-lg:text-[28px] font-medium">Welcome to</h2>
          <h2 className="lg:text-[46px] max-sm:text-[28px] max-lg:text-[36px] font-black text-indigo-600 mb-4">Unstop</h2>
        </div>
        <div className="border-[1px] border-[#E2E2E2] py-5 px-12 mt-16 shadow flex flex-col items-center rounded-[20px]">
          <img src="/assets/Frame1116607307.png" alt="" />
          <h4 className="font-bold text-[#6358DC] mt-2">{user?.displayName || "User"}</h4>
          <h4 className="text-[12px] font-medium text-[#383838]">{user?.email || "example@gmail.com"}</h4>
          <h6 className="text-[12px] font-medium text-[#383838]">{user?.gender || "Not specified"}</h6>
          <button
            onClick={handleLogout}
            className="bg-[#6358DC] text-white text-[12px] font-bold h-[48px] w-[137px] flex justify-center items-center rounded-2xl mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
