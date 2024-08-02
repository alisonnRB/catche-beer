'use client';

import { useCart } from "@/script/cartContext";
import { useState } from "react";

export default function ButtonAddCart({ item }) {
    const { addItemToCart } = useCart();
    const [inAnimation, setAnimation] = useState(false);

    const animationCardForAddItem = async (item) => {
        if (inAnimation) {
            return;
        }

        setAnimation(true);
        addItemToCart(item);

        await delay(1000);

        setAnimation(false);

    }

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <button onClick={() => { animationCardForAddItem(item) }} className={`bg-white font-semibold butonC cursor-pointer overflow-hidden ${!inAnimation ? "px-[5px]" : null}`}>
            {!inAnimation ? "ADICIONAR AO CARRINHO" : null}

            {inAnimation ? <div className={`bg-greenCustom h-full w-full relative ${inAnimation ? "cardAnimation" : null} px-[5px] flex justify-center items-center text-white`}>ADICIONADO</div> : null}
        </button>
    );
}