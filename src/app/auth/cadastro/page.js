import Link from "next/link";
import FormCad from "@/components/formCad";  

export default function Cadastro() {


    return (
        <main className="h-[100vh] w-[100vw] bg-bg z-20 relative flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between items-center h-[90%]">

                <span className="flex justify-around w-full">
                    <Link href={'/auth/login'} className="text-subText font-semibold text-[1.3em]">
                        LOGIN
                    </Link>

                    <Link href={'/auth/cadastro'} className="text-white font-semibold text-[1.3em]">
                        CADASTRE-SE
                    </Link>
                </span>

                <FormCad />

                <p className=" text-white text-center">
                    O uso de seus dados pela CATCH BEER é criptografado e seguro, usado apenas<br /> para facilitar o seu processo de compra
                </p>

            </div>
        </main>
    );
}
