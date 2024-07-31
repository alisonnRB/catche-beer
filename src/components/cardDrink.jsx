import Image from "next/image";
import ButtonAddCart from "./buttonAddCart";

export default function CardDrink({ item }) {

    return (
        <div className="bg-motion flex card gap-1">

            <span className="h-full flex justify-center items-center w-max-[30%] min-w-[30%]">
                <Image
                    src={item.src}
                    className="h-[80%] w-full object-contain"
                    width={100}
                    height={150}
                />
            </span>

            <span className="h-full w-full">
                <span className=" flex items-center h-[40%] gap-3">
                    <h3 className="font-semibold text-white name">{item.nome}</h3>
                    <p className="ml font-semibold text-white ">- {item.ml}</p>
                </span>

                <h4 className="font-semibold text-greenCustom price">R$ {" " + item.price}</h4>

                <ButtonAddCart item={item} />
            </span>

        </div>
    );
}