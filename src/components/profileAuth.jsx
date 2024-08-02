'use client';

import Image from "next/image";
import profile from "../assets/profile.png";
import { useAuth } from "@/script/authContext";

export default function ProfileAuth() {
    const {isAuthenticated} = useAuth();

    return (
        <>
            <Image
                src={profile}
                className="h-[50%] w-max-[50%] object-contain cursor-pointer"
            />

            <div className={`w-4 h-4 rounded-full absolute mb-[2em] ml-[2em] ${isAuthenticated ? "bg-greenCustom" : "bg-redCustom"}`}></div>
        </>
    );
}