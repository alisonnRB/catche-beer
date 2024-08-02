import Link from "next/link";


import { AuthProvider } from "@/script/authContext";

import Categories from "./categories";
import ProfileAuth from "./profileAuth";
import CartIcon from "./cartIcon";

export default function Menu() {
    return (
        <AuthProvider>
            <footer className="w-full h-[10dvh] mt-[20dvh] z-20 bg-subMotion flex justify-center items-center gap-[20%] self-center">

                <Categories />

                <Link href={'/cart'} className="h-full">
                    <CartIcon />
                </Link>

                <Link href={'/auth/login'} className="h-full flex justify-center items-center">
                    <ProfileAuth />
                </Link>

            </footer>
        </AuthProvider>
    );
}