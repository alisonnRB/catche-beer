import drink from "../assets/heiniken.png";
import Image from "next/image";

export default function CardDrink() {
    return (
        <div className="bg-motion flex card gap-1">

            <span className="h-full flex justify-center items-center w-max-[30%]">
                <Image
                    src={drink}
                    className="h-[80%] w-full object-contain"
                />
            </span>

            <span className="h-full">
                <span className=" flex justify-center items-center h-[40%] gap-3">
                    <h3 className="font-semibold text-white name">Cerveja Heineken</h3>
                    <p className="ml font-semibold text-white relative top-[0.2em]">- 600ml</p>
                </span>

                <h4 className="font-semibold text-greenCustom price">R$ 14,00</h4>

                <button className="bg-white font-semibold butonC cursor-pointer">ADICIONAR AO CARRINHO</button>
            </span>

        </div>
    );
}