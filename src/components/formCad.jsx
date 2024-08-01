


'use client';

import { useState } from "react";

export default function FormCad() {
    const [erro, setErro] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const ddd = e.target.ddd.value;
        const phone = e.target.phone.value;
        const nome = e.target.name.value;
        const endereco = e.target.endereco.value;
        const number = e.target.number.value;
        const complemento = e.target.complemento.value;

        if (!ddd) {
            setErro("O campo de ddd está vazio");
        } else if (!phone) {
            setErro("O campo de telefone está vazio");
        } else if (parseInt(ddd)) {
            setErro("O campo de ddd deve conter apenas números");
        } else if (parseInt(phone)) {
            setErro("O campo de telefone deve conter apenas números");
        } else if (nome) {
            setErro("O campo de nome está vazio");
        } else if (endereco) {
            setErro("O campo de endereço está vazio");
        } else if (number) {
            setErro("O campo de número está vazio");
        }

        const infos = { phone: ddd + " " + phone, nome: nome, endereco: endereco, number: number, complemento: complemento }
        Cadastrar(infos);
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => { handleSubmit(e) }}>

            <span className="flex flex-col gap-1">
                <label for="phone">Número de celular</label>
                <span className="flex justify-between" id="phone">
                    <input type="text" name="ddd" placeholder="(51)" className="px-[.2em] w-[20%] text-center num" />
                    <input type="text" name="phone" placeholder="999999999" className="px-[.2em] text-center w-[79%]" />
                </span>
            </span>


            <span className="flex flex-col gap-1">
                <label for="nome">Nome</label>
                <span>
                    <input type="text" name="name" id="nome" className="px-[.2em] w-full" />
                </span>
            </span>

            <span className="flex flex-col gap-1">
                <label for="endereco">Endereço</label>
                <span>
                    <input type="text" id="endereco" name="endereco" className="px-[.2em] w-full" />
                </span>
            </span>

            <span className="flex justify-between">
                <span className="flex flex-col gap-1  w-[30%]">
                    <label for="number">Número</label>
                    <input type="text" id="number" name="number" className="px-[.2em] w-full" />
                </span>

                <span className="flex flex-col gap-1 w-[65%]">
                    <label for="complemento">Complemento (opcional)</label>
                    <input type="text" id="complemento" name="complemento" className="px-[.2em] w-full " />
                </span>
            </span>

            <span className="flex flex-col gap-1 justify-center">
                <p className="text-center text-redCustom text-wrap">{erro}</p>

                <button type="submit" className={"bg-subMotion hover:bg-motion text-white mt-[1em] py-[.5em] text-[1.2em] font-semibold"}>CADASTRAR</button>
            </span>


        </form>
    );
}



