'use client';

import { useState } from "react";
import { useAuth } from "@/script/authContext";

export default function FormLogin() {
    const [erro, setErro] = useState('')
    const { Login, isAuthenticated } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ddd = e.target.ddd.value;
        const phone = e.target.phone.value;

        if (!ddd) {
            setErro("O campo de ddd está vazio");
        } else if (!phone) {
            setErro("O campo de telefone está vazio");
        } else if (!parseInt(ddd)) {
            setErro("O campo de ddd deve conter apenas números");
        } else if (!parseInt(phone)) {
            setErro("O campo de telefone deve conter apenas números");
        }

        const Phone = ddd + " " + phone;
        Login(Phone)
        if (isAuthenticated) {
            alert('Logado com sucesso!')
            window.location.href = '/cart';
        } else {
            setErro("informações não encontradas");
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => { handleSubmit(e) }}>

            <span className="flex flex-col gap-1">
                <label htmlFor="phone">Número de celular</label>
                <span className="flex justify-between" id="phone">
                    <input type="text" name="ddd" placeholder="(51)" className="px-[.2em] w-[20%] text-center num" />
                    <input type="text" name="phone" placeholder="999999999" className="px-[.2em] text-center w-[79%]" />
                </span>
            </span>

            <span className="flex flex-col gap-1 justify-center">
                <p className="text-center text-redCustom text-wrap">{erro}</p>

                <button type="submit" className={"bg-subMotion hover:bg-motion text-white mt-[1em] py-[.5em] text-[1.2em] font-semibold"}>LOGIN</button>
            </span>


        </form>
    );
}



