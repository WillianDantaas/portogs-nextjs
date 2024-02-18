'use client'

import Image from "next/image"
import Button from "../button"

import { ArrowCircleDown } from "@phosphor-icons/react"

export default function Section01() {

    return (
        <>

            {/* Mobile */}
            <div className="lg:hidden container mx-auto flex justify-between items-center">
                <div className="mx-auto">

                    {/* Mobile 320px */}
                    <div className="sm:hidden mt-10 w-72">
                        <h1 className=" text-indigo9 font-bold text-xl text-center mx-auto">
                            Procurando alguém para desenvolver sua aplicação WEB?
                        </h1>
                        <p className="sm:hidden text-gray-600 font-medium w-72 text-center mt-6 mx-auto">Desenvolvemos e projetamos 100% da sua aplicação WEB, desde o design até a hospedagem de seu projeto.</p>
                    </div>

                    {/* Mobile 2 */}
                    <div className="hidden sm:block w-[592px] mt-10">
                        <h1 className="text-indigo9 font-black text-6xl text-center mx-auto">
                            Procurando alguém para desenvolver sua aplicação WEB?
                        </h1>
                        <p className="hidden sm:block text-2xl text-gray-600 w-[572px] text-center mt-6 mx-auto">Desenvolvemos e projetamos 100% da sua aplicação WEB, desde o design até a hospedagem de seu projeto.</p>
                    </div>

                </div>

                <div className="hidden lg:block">
                    <Image
                        src="/logotipo-grande.svg"
                        width={486}
                        height={388}
                        alt="Logotipo PORTOGS Desenvolvimento WEB"
                    />
                </div>
            </div>

            {/* Desktop */}
            <div className="container mx-auto flex flex-col mt-10">

                <div className="hidden lg:flex items-center justify-between">
                    <div className="max-w-[592px] h-[389px]">
                        {/* text */}
                        <h1 className=" text-indigo9 font-black text-6xl">
                            Procurando alguém para desenvolver sua aplicação WEB?
                        </h1>
                        <p className="mt-8 leading-8 text-2xl text-gray-600">
                            Desenvolvemos e projetamos 100% da sua aplicação WEB, desde o design até a hospedagem de seu projeto.</p>

                        {/* Botão Desktop */}
                        <div>
                            <div className="mt-12">
                                <div className="w-72 h-14 text-xl">
                                    <Button text={'Conhecer Ofertas'} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <Image
                            src="/logotipo-grande.svg"
                            width={714}
                            height={620}
                            alt="Logotipo PORTOGS Desenvolvimento WEB"
                        />
                    </div>

                </div>

                {/* <div className="hidden mt-24 lg:flex items-center text-indigo9 cursor-pointer">
                    <span><ArrowCircleDown size={32} weight="light" /></span>
                    <p className="text-lg text-indigo9 font-medium mx-3">Continue explorando</p>
                </div> */}

                <div>
                    <a href="#" className="hidden mt-24 lg:flex items-center text-indigo9 cursor-pointer">
                        <span><ArrowCircleDown size={32} weight="light" /></span>
                        <p className="text-lg text-indigo9 font-medium mx-3">Continue explorando</p>
                    </a>
                </div>

            </div>

        </>
    )
}