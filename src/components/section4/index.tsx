'use client'

import { SeparationCircle } from "../Icons"
import { RocketLaunch } from "@phosphor-icons/react"
import Image from "next/image"
import { H2 } from "../textstyle"

export default function Section04() {

    return (
        <section>

            <div className="container mx-auto h-[329px] md:h-[389px] lg:h-[483px]">

                <div className="flex justify-center lg:justify-normal lg:ml-28">

                    <div className="flex flex-col justify-center">
                        <span className="-mt-4">
                            <SeparationCircle icon={<RocketLaunch size={18} />} />
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

                <div>
                    <div className="text-black">
                        <H2 text={'Transformamos a sua ideia em aplicações robustas.'}/>
                    </div>
                </div>


            </div>

        </section>
    )
}