'use client'

import { SeparationCircle } from "../Icons"
import { ArrowDown } from "@phosphor-icons/react"
import { H2, H5, P } from "../textstyle"
import Image from "next/image"

export default function Section03() {


    return (
        <section id="qualidade-da-empresa" className="bg-gradient-to-r from-violet9 to-indigo5 h-[537px] md:h-[424px] mt-12 md:mt-20 lg:mt-24">

            <div className="container mx-auto">
                <div className="flex justify-center">
                    <span className="-mt-4">
                        <SeparationCircle link={'#qualidade-da-empresa'} icon={<ArrowDown size={16} weight="bold" />} />
                    </span>
                </div>

                <div className="text-center text-gray0 mt-10 md:mt-15">
                    <H2 text={'Por que contratar a nossa empresa?'} />
                </div>

                <div className="flex justify-center md:hidden mt-2">
                    <Image
                    src='/tablet.svg'
                    width={319}
                    height={250}
                    alt='Tablet PortoGS'/>
                </div>

                <div className="md:flex md:justify-between">
                    <div className="md:w-[413px]">
                        <div className="text-gray0 mt-8 md:mt-16 lg:mt-28 text-center lg:text-left">
                            <H5 text={'Apresente a sua marca da melhor forma possível.'}/>
                        </div>
                        <div className="text-gray1 mt-6 text-center lg:text-left">
                            <P text={'Te supreenderemos com o design, usabilidade, qualidade de software e tudo o que tem de melhor.'}/>
                        </div>
                    </div>

                    <div className="hidden md:block opacity-15 mt-28 lg:w-52 lg:h-52 ">
                        <Image src='/Rocket.svg' width={0} height={0} 
                        style={{ width: '100%', height: 'auto' }} alt="Foguete PortoGS"/>
                    </div>
                </div>

            </div>

        </section>
    )
}