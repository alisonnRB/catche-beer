"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import categories from "../assets/categories.png";

import arrow from "../assets/Arrow.png";

export default function Categories() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Image
                src={categories}
                className="h-[50%] object-contain cursor-pointer"
                onClick={() => { setOpen(true) }}
            />

            {open ? <div className="fixed h-screen w-screen bg-[rgba(36, 36, 36, 0.5)] top-0 left-0 z-20 flex justify-center items-center">

                <div className="bg-subMotion h-[90%] w-[80%] max-h-[800px] max-w-[1000px] flex flex-col justify-between py-[1.5em]">
                    <span className="flex justify-between items-center px-[2em]">
                        <h6 className="text-white font-semibold">CATEGORIAS</h6>
                        <h6 className="text-redCustom font-semibold text-[1.3em] cursor-pointer">X</h6>
                    </span>

                    <div className="flex flex-col gap-4 px-[2em]">

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>

                        <Link href={'/categoria/vinhos'} className="bg-motion text-white font-semibold p-[1.2em] flex justify-between items-center">
                            VINHOS

                            <Image 
                                src={arrow}
                                objectFit="contain"
                                className="max-h-[20px] max-w-[30px]"
                            />
                        </Link>



                    </div>
                </div>

            </div> : null}
        </>

    );
}