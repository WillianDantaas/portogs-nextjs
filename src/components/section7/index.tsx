'use client'

import { SeparationCircle } from "../Icons"
import { ArrowDown } from "@phosphor-icons/react"
import { Button } from "../button"

// Icons
import { WhatsappLogo } from "@phosphor-icons/react"

// Text Styles
import { H3, P } from "../textstyle"

export default function Section07() {

    return (
        <section id="chamada-whatsapp">

            <div className="container mx-auto text-center">

                <div className="flex justify-center">
                    <span className="-mt-4">
                        <SeparationCircle icon={<ArrowDown size={16} weight="bold" />} />
                    </span>
                </div>

                <div className="mt-10 md:mt-14 lg:mt-20">
                    <H3 text={'Restou alguma dúvida?'} />
                    <div className="text-gray6 mt-3">
                        <P text={'Entre em contato diretamente conosco'} />
                    </div>

                    <div className="mt-6">
                        <Button text={'Mande um Zap'} target="blank" link={'https://wa.me/5519996811960/?text=Gostaria de tirar algumas dúvidas..'} icon={<WhatsappLogo size={32} />} />
                    </div>
                </div>
            </div>

        </section>
    )
}