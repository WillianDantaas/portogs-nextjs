'use client'

import { SeparationCircle, RectangleIcon, Separation } from "../Icons"
import { ArrowDown, ChatsTeardrop, Stack, Atom, RocketLaunch } from '@phosphor-icons/react'
import { H3, PTitle, P1 } from "../textstyle"
import Qualities from "../qualities"
import Image from "next/image"
import Button from "../button"

export default function Section02() {


    return (
        <>
            <section>
                <div className="h-52 bg-gradient-to-r from-violet-900 to-indigo-500 mt-12">
                    <div className="flex justify-center lg:hidden">
                        <span className="-mt-4">
                            <SeparationCircle icon={<ArrowDown size={16} weight="bold" />} />
                        </span>
                    </div>
                    <div className="container mx-auto my-auto">
                        <h5 className="text-white font-bold text-xl md:text-2xl lg:text-3xl pt-10 text-center">Nós te oferecemos o melhor do mercado</h5>
                    </div>
                </div>

                <div className="container mx-auto -mt-20">
                    <Qualities />
                </div>

                <div className="container mx-auto lg:flex lg:justify-between">
                    <div className="lg:w-[488px]">
                        <div className="text-center lg:text-start mt-10 md:mt-16 ">
                            <H3 text='Temos passos definidos para desenvolver sua aplicação' />
                        </div>
                        <div className="w-[270px] md:w-[340px] lg:w-[360px] mx-auto lg:mx-0 mt-6 md:mt-12">
                            <div className="flex justify-between items-center">
                                <RectangleIcon icon={<ChatsTeardrop size={32} />} />
                                <div className="w-48 md:w-64 lg:w-72">
                                    <PTitle text='Apresentação e definição do projeto' />
                                    <div>
                                        <P1 text='Sua ideia sairá do papel e mostraremos o melhor caminho a seguir.' />
                                    </div>
                                </div>
                            </div>
                            <Separation />
                            <div className="flex justify-between items-center my-1">
                                <RectangleIcon icon={<Stack size={32} />} />
                                <div className="w-48 md:w-64 lg:w-72">
                                    <PTitle text='Design e aprovação da UI/UX' />
                                    <div>
                                        <P1 text='Após definir o projeto, iremos desenhar a interface de usuário para sua aprovação.' />
                                    </div>
                                </div>
                            </div>
                            <Separation />
                            <div className="flex justify-between items-center my-1">
                                <RectangleIcon icon={<Atom size={32} />} />
                                <div className="w-48 md:w-64 lg:w-72">
                                    <PTitle text='Desenvolvimento da aplicação' />
                                    <div>
                                        <P1 text='Desenvolveremos sua aplicação, testando todas as funcionalidades. ' />
                                    </div>
                                </div>
                            </div>
                            <Separation />
                            <div className="flex justify-between items-center my-1">
                                <RectangleIcon icon={<RocketLaunch size={32} />} />
                                <div className="w-48 md:w-64 lg:w-72">
                                    <PTitle text='Hospedagem e entrega do projeto' />
                                    <div>
                                        <P1 text='Entregaremos sua aplicação funcionando 100%, dando suporte contínuo a você. ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-indigo-600 mt-8 lg:mt-16">

                        <h3 className="max-w-[416px] mx-auto text-xs sm:text-base text-center">
                            Em sua jornada de desenvolvimento conosco, terá total autonômia para ver e acompanhar o seu projeto.
                        </h3>

                        <Image
                            className="mt-2 lg:mt-32"
                            src='/portogs3d.svg'
                            width={695}
                            height={450}
                            alt="PortoGS 3D Logotipo" />
                    </div>
                </div>

                <div className="container mx-auto text-center lg:mx-0 mt-6 md:mt-12">
                    <Button text="Orçamento rápido"></Button>
                </div>
            </section>

        </>
    )
}