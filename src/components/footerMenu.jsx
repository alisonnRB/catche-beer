import Image from "next/image";
import Link from "next/link";

import categories from "../assets/categories.png";
import cart from "../assets/cart.png";
import profile from "../assets/profile.png";

export default function Menu() {
    return (
        <footer className="w-full h-[10dvh] mt-[20dvh] z-20 bg-subMotion flex justify-center items-center gap-[20%] self-center">

            <Link href={'/cart'} className="h-full flex justify-center items-center">
                <Image
                    src={categories}
                    className="h-[50%] object-contain cursor-pointer"
                />
            </Link>

            <Link href={'/cart'} className="h-full">

                <Image
                    src={cart}
                    className="h-[130%] object-contain relative bottom-[40%] cursor-pointer"
                />
            </Link>

            <Link href={'/cart'} className="h-full flex justify-center items-center">
                <Image
                    src={profile}
                    className="h-[50%] w-max-[50%] object-contain cursor-pointer"
                />
            </Link>
        </footer>
    );
}