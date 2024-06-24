'use client'

import { Rockets } from "../Icons"
import { RocketLaunch } from "@phosphor-icons/react"
import Image from "next/image"
import { P, P1, H2, H5 } from "../textstyle"

export default function Section04() {

    return (
        <section>

            <div className="container mx-auto h-[380px] md:h-[329px] lg:h-[483px]">

                <div className="flex justify-center lg:justify-normal lg:ml-[20%]">

                    <div className="flex flex-col ">
                        <span className="-mt-4">
                            <Rockets icon={<RocketLaunch size={18} />} />
                        </span>
                        <div className="lg:hidden ml-[11px]">
                            <Image
                                src='/vector2.svg'
                                width={8}
                                height={62}
                                alt="Vetor de separação"
                            />
                        </div>

                        <div className="hidden lg:block ml-[15px]">
                            <Image
                                src='/vector4.svg'
                                width={248}
                                height={235}
                                alt="Vetor de separação"
                            />
                        </div>
                    </div>

                    {/* <div className="hidden md:block lg:ml-[519px]">
                        <Image
                            src='/tablet.svg'
                            width={652}
                            height={486}
                            alt='Tablet PortoGS' />
                    </div> */}
                </div>

                <div className="max-w-[272px] md:max-w-[406px] mx-auto mt-6">

                    <div className="text-indigo9 text-center md:hidden">
                        <H2 text={'Transformamos a sua ideia em aplicações robustas.'}/>
                    </div>

                    <div className="text-indigo9 text-center lg:text-left hidden md:block">
                        <H5 text={'Transformamos a sua ideia em aplicações robustas.'}/>
                    </div>
                    
                    <div className="mt-6 text-center text-gray6 md:hidden">
                        <P text='Prezamos pelo bom entendimento das ídeias propostas, para o fluxo do projeto seguir rápido e fácil.'/>
                    </div>

                    <div className="hidden md:block mt-6 text-center lg:text-left text-gray6">
                        <P1 text='Prezamos pelo bom entendimento das ídeias propostas, para o fluxo do projeto seguir rápido e fácil.'/>
                    </div>
                </div>


            </div>

        </section>
    )
}