'use client'

import { Rockets } from "../Icons"
import { RocketLaunch } from "@phosphor-icons/react"
import Image from "next/image"
import { H5, H2, P } from "../textstyle"

export default function Section05() {

    return (

        <section className="bg-gradient-to-r from-violet-900 to-indigo-500 h-[507px] md:h-[256px]">

            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="mx-auto lg:mx-0 -mt-[77px] lg:flex lg:flex-col lg:ml-[75%] lg:-mt-[150px]">
                        <div className="ml-[10px] lg:hidden">
                            <Image
                                src='/vector7.svg'
                                width={8}
                                height={62}
                                alt="Vetor de separação"
                            />
                        </div>
                        {/* <div className="w-[240px] h-full">
                            <Image src={'/vector27.svg'} width={0} height={0} alt="" style={{ width: '100%', height: 'auto' }}/>
                        </div> */}
                        <div className="hidden lg:block">
                            <Image
                                src='/vector5.svg'
                                width={213}
                                height={133}
                                alt="Vetor de separação"
                            />
                        </div>
                        <span className="lg:ml-[195px]">
                            <Rockets icon={<RocketLaunch size={18} />} />
                        </span>
                    </div>
                </div>

                <div className="lg:flex lg:justify-between lg:pt-12">

                    <div className="w-[142px] md:w-[200px] lg:w-[298px] mt-8 md:absolute md:top-[3400px] mx-auto lg:static lg:mx-0 lg:-mt-[350px]">
                        <Image
                            src={'/phone.svg'} width={0} height={0} alt="Imagem de telefone" style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="flex flex-col justify-center text-center lg:text-end mx-auto lg:mx-0 max-w-[363px]">

                        <h2 className="text-gray-100 font-bold text-xl md:text-3xl">
                            Tornamos sua aplicação eficiente e eficaz</h2>
                        <p className="text-gray-100 font-sm md:text-base lg:text-end mt-8">Integramos as necessidades de sua aplicação, com propósito de fazê-la eficiente e eficaz</p>
                    </div>
                </div>
            </div>

        </section >
    )
}