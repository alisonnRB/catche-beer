'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuth } from "@/script/authContext";


export default function Deal() {
    const [erro, setErro] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [documento, setDocumento] = useState('sem');

    const { isAuthenticated, auth } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            try {
                setEndereco(auth.endereco + ', ' + auth.number);
            }catch {
                return;
            }
        }
    }, [isAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!endereco){
            setErro('O campo de endereço está vazio');
        }

        
    }

    return (
        <div className="h-screen w-[100%] z-20 fixed bottom-0 left-0 flex justify-center items-center bg-bg">

            <span className="h-[90%] landscape:min-w-[400px] max-w-[90vw] flex flex-col justify-around portrait:items-center">


                <h1 className="text-white text-[2em]">FINALIZANDO PEDIDO</h1>

                <form className="flex flex-col gap-4 font-semibold" onSubmit={(e)=>{handleSubmit(e)}}>

                    <span className="flex flex-col gap-1">
                        <label htmlFor="endereco">ENDEREÇO</label>
                        <input id="endereco" type="text" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
                    </span>

                    <span className="flex flex-col gap-1">
                        <label htmlFor="pagamento">OPÇÃO DE PAGAMENTO</label>
                        <select name="" id="pagamento" value={pagamento} onChange={(e) => { setPagamento(e.target.value) }}>
                            <option value="credito">Cartão de crédito</option>
                            <option value="pix">Pix</option>
                            <option value="debito">Cartão de débito</option>
                            <option value="fisico">Físico</option>
                        </select>
                    </span>

                    <span className="flex flex-col gap-1">
                        <label htmlFor="documento">DOCUMENTO NA NOTA</label>
                        <select name="" id="documento" value={documento} onChange={(e) => { setDocumento(e.target.value) }}>
                            <option value="cpf">CPF</option>
                            <option value="cnpj">CNPJ</option>
                            <option value="sem">SEM</option>
                        </select>
                    </span>

                    <p className="text-white mt-[1em]">TEMPO DE ESPERA (~ 20 MIN)</p>

                    <p className="text-redCustom">{erro}</p>
                    <button type="submit" className={"bg-white w-full hover:bg-motion py-[.5em] text-[1.2em] font-semibold"}>FINALIZAR</button>
                    <Link href={'./cart'}>
                        <button className={"bg-white w-full hover:bg-motion py-[.5em] text-[1.2em] font-semibold"}>VOLTAR AO CARRINHO</button>
                    </Link>

                </form>

                <p className="text-white self-center">Você será redirecionado ao nosso WhatsApp.</p>

            </span>
        </div>
    );
}