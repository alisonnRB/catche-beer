import Header from "@/components/header";
import Capa from "@/components/capa";
import Menu from "@/components/footerMenu";
import CardDrink from "@/components/cardDrink";
import drinks from "@/script/drinks";


export default function Category({ params }) {

    const DrinkType = () => {
        const list = [];

        for (let i = 0; i < drinks[params.tipo].length; i++) {
            let drink = drinks[params.tipo][i];
            let item = <CardDrink
                key={drink.nome}
                name={drink.nome}
                ml={drink.ml}
                src={drink.src}
                price={drink.price}
            />

            list.push(item);
        }

        return list;
    };

    return (
        <main className="relative z-10 self-center">
            <Header />
            <Capa />
            <div className="w-full flex flex-col mt-[8em]">
                <h1 className="text-white font-semibold text-[2.5em] self-center my-28">{(params.tipo).toUpperCase()}</h1>

                <div className="w-[100%] flex justify-center items-center flex-wrap self-center gap-[5vw]">
                    {DrinkType()}
                </div>

            </div>
            <Menu />
        </main>
    );
}
