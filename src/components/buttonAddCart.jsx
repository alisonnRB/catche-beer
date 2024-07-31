'use client';

import { useCart } from "@/script/cartContext";

export default function ButtonAddCart({item}) {
    const { addItemToCart } = useCart();

    return (
        <button onClick={()=>{addItemToCart(item)}} className="bg-white font-semibold butonC cursor-pointer">ADICIONAR AO CARRINHO</button>
    );
}