'use client';

import { useCart } from "@/script/cartContext";

export default function ButtonAddCart({item}) {
    const { addItemToCart } = useCart();

    return (
        <button onClick={()=>{addItemToCart(item)}} className="bg-white font-semibold butonC cursor-pointer hover:bg-subText hover:text-white">ADICIONAR AO CARRINHO</button>
    );
}