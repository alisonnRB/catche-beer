import CardDrink from "@/components/cardDrink";

export default function Home() {
  return (
    <div className="w-full flex flex-col mt-[8em]">

      <div className="w-[100%] flex justify-center items-center flex-wrap self-center gap-[5vw]">
        <CardDrink />
        <CardDrink />

        <CardDrink />
        <CardDrink />

        <CardDrink />
        <CardDrink />
      </div>
    </div>
  );
}
