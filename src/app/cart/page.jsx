'use client';

import { useEffect, useState } from "react";

import CardCartManager from "@/components/cardCartManager";
import { useCart } from "@/script/cartContext";
import Resume from "@/components/resume";

export default function Cart() {
  const { cart, removeItemFromCart } = useCart();

  const cartItens = () => {
    const list = [];

    for (let i = 0; i < cart.length; i++) {
      let item = <CardCartManager item={cart[i]} />
      list.push(item);
    }

    return list;
  }

  return (
    <main className="relative z-10 self-center flex flex-col items-center min-h-screen portrait:pb-[50dvh] pb-5">

      <div className="flex flex-col items-center flex-wrap gap-8 w-full mt-12">
        
        <h1 className="text-white font-semibold text-[2em]">CARRINHO</h1>

        {cartItens()}
      </div>

      <Resume />

    </main>
  );
};