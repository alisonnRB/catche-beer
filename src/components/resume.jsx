'use client';

import { useCart } from "@/script/cartContext";
import { useAuth } from "@/script/authContext";
import { useState } from "react";
import Link from "next/link";

export default function Resume() {
    const { total } = useCart();
    const { isAuthenticated } = useAuth();
    const [open, setOpen] = useState(false);

    const loginVerify = () => {
        if(total < 11){

        }else if (!isAuthenticated) {
            setOpen(true);
        } else {
            window.location.href = "/cart/deal";
        }
    }


    return (
        <footer className="bg-subMotion portrait:bottom-0 fixed landscape:top-5 landscape:right-5 flex flex-col p-[1em] pb-[2em] w-[25%] portrait:w-full font-semibold gap-[1em]">

            {open ?
                <div className="fixed bottom-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(36, 36, 36, 0.5)]">

                    <div className="flex flex-col items-center gap-2 bg-bg p-[2em]">

                        <p className="text-center text-white font-semibold mb-[1.3em]">Você não está logado!<br />Deseja logar para uma compra mais rapida?</p>

                        <Link href="/auth/login" className="w-full cursor-pointer">
                            <button className="bg-white w-full py-[.3em] font-semibold">LOGIN</button>
                        </Link>

                        <Link href="/cart/deal"  className="w-full cursor-pointer">
                            <button className="bg-white w-full py-[.3em] font-semibold">CONTINUAR SEM LOGIN</button>
                        </Link>

                        <Link href="/auth/cadastro">
                            <p className="text-center text-white underline cursor-pointer mt-[1em]">Criar uma conta</p>
                        </Link>

                    </div>

                </div>
                : null}


            <span className="flex justify-between text-subText text-[1.2em]">
                <p>Sub total:</p>
                <p>R$ {" " + ((parseInt(total)).toFixed(2)).replace('.', ',')}</p>
            </span>

            <span className="flex justify-between text-subText text-[1.2em]">
                <p>Entrega</p>
                <p>R$ 10,50</p>
            </span>

            <span className="flex justify-between text-white text-[1.7em]">
                <p>TOTAL</p>
                <p className="text-greenCustom">R$ {" " + ((parseInt(total) + 10.50).toFixed(2)).replace('.', ',')}</p>
            </span>

            <span className="flex flex-col gap-[1em] w-full text-[1.7em]">
                <button className="text-black bg-white py-[.5em] cursor-pointer" onClick={() => { loginVerify() }}>FINALIZAR COMPRA</button>
                <Link href={'/'} className="h-full w-full">
                    <button className="text-black bg-white py-[.5em] w-full cursor-pointer">CONTINUAR COMPRANDO</button>
                </Link>
            </span>

        </footer>
    );
}