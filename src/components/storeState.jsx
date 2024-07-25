"use client";

import { useEffect, useState } from 'react';

export default function StoreStatus() {
    const [isStoreOpen, setIsStoreOpen] = useState(false);

    const fetchStoreStatus = async () => {
        const response = await fetch('/api/storeState');
        const data = await response.json();
        setIsStoreOpen(data.isStoreOpen);
    };

    useEffect(() => {
        fetchStoreStatus();

        const intervalId = setInterval(() => {
            fetchStoreStatus();
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className={`rounded-full h-5 w-5 ${isStoreOpen ? 'bg-openGreen' : 'bg-redCustom'}`}></div>
            <p className="text-subText">{isStoreOpen ? "Aberto" : "Fechado"}</p>
        </>
    );
}