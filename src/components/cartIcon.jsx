'use client';

import cart from "../assets/cart.png";
import Image from "next/image";
import { useCart } from "@/script/cartContext";

export default function CartIcon() {
    const { getTotalItemsCount } = useCart();
    return (
        <>
            <Image
                src={cart}
                className="h-[130%] object-contain relative bottom-[40%] cursor-pointer"
            />

            {getTotalItemsCount() > 0 ? <div className={`w-6 h-6 p-4 rounded-full relative mt-[-6em] bottom-[70%] left-[60%] bg-greenCustom text-white flex justify-center items-center`}>{getTotalItemsCount()}</div> : null}
        </>
    );
}