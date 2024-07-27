import Image from "next/image";
import capa from "../assets/capa.jpg";

export default function Capa() {

    return (
        <div className="flex w-full justify-around">

            <div className="w-1/2 flex ">
                <h3 className="font-sans text-white font-bold mt-[2em] h-[60%] max-h-[60%] max-w-[65%] w-[65%] ml-8 title">
                    ENTREGA DE BEBIDAS PARA QUEM QUER APROVEITAR SEU DIA DA MELHOR MANEIRA
                </h3>
            </div>

            <div className="h-full w-1/2 flex justify-end">
                <Image
                    src={capa}
                    className="max-h-[100dvh]"
                />
            </div>

        </div>
    );
}