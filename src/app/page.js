import Header from "@/components/header";
import Capa from "@/components/capa";
import Menu from "@/components/footerMenu";
import CardDrink from "@/components/cardDrink";
import drinks from "@/script/drinks";

const BestSellers = () => {
  return Object.keys(drinks).map(category => {
    const item = drinks[category][0];
    return (
      <CardDrink
        key={item.nome}
        name={item.nome}
        ml={item.ml}
        src={item.src}
        price={item.price} // Certifique-se de que `price` está definido
      />
    );
  });
};

export default function Home() {
  return (
    <main className="relative z-10 self-center">
      <Header />
      <Capa />
      <div className="w-full flex flex-col mt-[8em]">
        <div className="w-[100%] flex justify-center items-center flex-wrap self-center gap-[5vw]">
          <BestSellers />
        </div>
      </div>
      <Menu />
    </main>
  );
}
