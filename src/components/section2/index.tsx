'use client'

import { SeparationCircle } from "../IconCircles"
import { ArrowDown } from '@phosphor-icons/react'
import { H3 } from "../textstyle"
import Qualities from "../qualities"

export default function Section02() {


    return (
        <>
            <section className="h-52 bg-gradient-to-r from-violet-900 to-indigo-500 mt-12">

                <div className="flex justify-center lg:hidden">
                    <div className="-mt-4">
                        <SeparationCircle icon={<ArrowDown size={16} weight="bold" />} />
                    </div>
                </div>

                <div className="container mx-auto my-auto">
                    <h5 className="text-white font-bold text-xl md:text-2xl lg:text-3xl pt-10 text-center">Nós te oferecemos o melhor do mercado</h5>
                </div>
            </section>

            <Qualities />

            <section>

                <div>
                    <H3 text='Temos passos definidos para desenvolver sua aplicação' />
                </div>


            </section>

        </>
    )
}