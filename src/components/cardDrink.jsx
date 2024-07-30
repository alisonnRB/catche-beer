import Image from "next/image";

export default function CardDrink({ name, ml, src, price }) {
    return (
        <div className="bg-motion flex card gap-1">

            <span className="h-full flex justify-center items-center w-max-[30%] min-w-[30%]">
                <Image
                    src={src}
                    className="h-[80%] w-full object-contain"
                    width={100}
                    height={150}
                />
            </span>

            <span className="h-full w-full">
                <span className=" flex items-center h-[40%] gap-3">
                    <h3 className="font-semibold text-white name">{name}</h3>
                    <p className="ml font-semibold text-white ">- {ml}</p>
                </span>

                <h4 className="font-semibold text-greenCustom price">R$ {" " + price}</h4>

                <button className="bg-white font-semibold butonC cursor-pointer">ADICIONAR AO CARRINHO</button>
            </span>

        </div>
    );
}