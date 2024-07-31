'use client';

import { useCart } from "@/script/cartContext";
import Image from "next/image";


export default function CardCartManager({ item }) {
    const {addItemToCart, removeItemFromCart, removeItemAllFromCart} = useCart();
    return (
        <div className="bg-motion flex card">

            <span className="h-full flex justify-center items-center w-max-[30%] min-w-[30%]">
                <Image
                    src={item.src}
                    className="h-[80%] w-full object-contain"
                    width={100}
                    height={150}
                />
            </span>

            <span className="h-full w-full">
                <span className=" flex items-center h-[35%] gap-3 ">
                    <h3 className="font-semibold text-white name">{item.nome}</h3>
                    <p className="ml font-semibold text-white ">- {item.ml}</p>
                </span>

                <span className="flex h-[30%] text-white pt-2 gap-2">
                    <p>Quantidade:</p>

                    <span className="flex bg-bg h-[1.6em] items-center justify-between p-[0.5em] gap-2">
                        <div className="cursor-pointer" onClick={()=>{removeItemFromCart(item)}}>-</div>
                        <div>{item.quantity}</div>
                        <div className="cursor-pointer" onClick={()=>{addItemToCart(item)}}>+</div>
                    </span>
                </span>

                <span className="flex justify-between">
                    <button className="px-[1em] font-semibold bg-white cursor-pointer" onClick={()=>{removeItemAllFromCart(item)}}>ABANDONAR</button>
                    <h4 className="font-semibold text-greenCustom price scale-125">R$ {" " + ((parseInt(item.price) * item.quantity).toFixed(2)).replace('.',',')}</h4>
                </span>


            </span>

        </div>
    );
}