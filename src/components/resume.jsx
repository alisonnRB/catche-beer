'use client';

import { useCart } from "@/script/cartContext";
import Link from "next/link";

export default function Resume() {
    const {total} = useCart();

    

    return (
        <footer className="bg-subMotion portrait:bottom-0 fixed landscape:top-5 landscape:right-5 flex flex-col p-[1em] pb-[2em] w-[25%] portrait:w-full font-semibold gap-[1em]">
            <span className="flex justify-between text-subText text-[1.2em]">
                <p>Sub total:</p>
                <p>R$ {" " + ((parseInt(total)).toFixed(2)).replace('.',',')}</p>
            </span>

            <span className="flex justify-between text-subText text-[1.2em]">
                <p>Entrega</p>
                <p>R$ 10,50</p>
            </span>

            <span className="flex justify-between text-white text-[1.7em]">
                <p>TOTAL</p>
                <p className="text-greenCustom">R$ {" " + ((parseInt(total) + 10.50).toFixed(2)).replace('.',',')}</p>
            </span>

            <span className="flex flex-col gap-[1em] w-full text-[1.7em]">
                <button className="text-black bg-white py-[.5em] cursor-pointer">FINALIZAR COMPRA</button>
                <Link href={'/'} className="h-full w-full">
                    <button className="text-black bg-white py-[.5em] w-full cursor-pointer">CONTINUAR COMPRANDO</button>
                </Link>
            </span>

        </footer>
    );
}