'use client'

import Image from "next/image"
import { Button } from "../button"

import { ArrowCircleDown } from "@phosphor-icons/react"

export default function Section01() {

    return (
        <>
            <div className="container mx-auto flex justify-between items-center">
                <div className="mx-auto">

                    <div className="mt-[90px] md:w-[592px] lg:w-[652px] lg:h-[389px]">

                        <h1 className="text-indigo9 font-bold text-xl  md:font-black md:text-[56px] leading-[64px] text-center mx-auto max-w-56 md:max-w-full lg:text-start">
                            Procurando alguém para desenvolver sua aplicação WEB?
                        </h1>

                        <p className="text-gray6 font-medium text-center text-base mt-6 mx-auto max-w-64 md:max-w-full md:text-2xl lg:text-start">Desenvolvemos e projetamos 100% da sua aplicação WEB, desde o design até a hospedagem de seu projeto.</p>
                    </div>

                    <div className="mt-6 md:mt-12 text-center lg:text-start">
                        <Button text="Conhecer Ofertas" target={'_blank'} link={'https://wa.me/5519996811960/?text=Gostaria de realizar um orçamento, poderia em ajudar?'}></Button>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Image
                        src="/logotipo-grande.svg"
                        width={714}
                        height={620}
                        alt="Logotipo PORTOGS Desenvolvimento WEB"
                    />
                </div>

            </div>


            <div className="container mx-auto">
                <a href="#diferencial" className="hidden mt-24 lg:flex items-center text-indigo9 cursor-pointer">
                    <span><ArrowCircleDown size={32} weight="light" /></span>
                    <p className="text-lg text-indigo9 font-medium mx-3">Continue explorando</p>
                </a>
            </div>

        </>
    )
}