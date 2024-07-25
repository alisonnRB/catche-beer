import StoreStatus from "./storeState";

export default function Header() {

    return (
        <header className="px-[2em]">
            <h1 className="font-semibold text-subText text-[2em]">CATCHE BEER</h1>
            <span className="flex items-center gap-3">
                <StoreStatus />
            </span>
        </header>
    );
}