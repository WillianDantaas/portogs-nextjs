'use client'



import { SeparationCircle, QualitiesCircle } from "../Icons"
import { H3, P } from "../textstyle"

import { Rocket, PenNibStraight, DeviceMobile, Binoculars, Headset, Intersect } from '@phosphor-icons/react'

export default function Qualities() {

    return (
        <>

            <div className="min-w-[272px] md:min-w-[672px] lg:max-w-[1200px] mx-auto mr-auto px-4 md:px-8 lg:px-18 py-10 bg-white rounded-xl space-y-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<Rocket size={25} weight="bold" />} />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Qualidade na aplicação' />

                        <div className="text-gray-600">
                            <P text='Do ínicio a entrega do seu projeto, nós utilizamos este pilar com o principal, te entregamos o melhor.' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<PenNibStraight size={25} weight="bold" />} />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='UI/UX Design' />

                        <div className="text-gray-600">
                            <P text='Desenhamos e programamos interfaces bonitas, robustas e amigáveis, focado em qualidade.' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<DeviceMobile size={25} weight="bold" />} />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Responsividade' />

                        <div className="text-gray-600">
                            <P text='Criamos interfaces responsivas para cada dispositivo, buscando a melhor experiência do úsuario possivel.' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<Binoculars size={25} weight="bold" />} />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='SEO' />

                        <div className="text-gray-600">
                            <P text='Otimizamos a sua aplicação para ser amigável aos sistemas de buscas da Web, garantimos qualidade.' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<Headset size={25} weight="bold" />} />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Suporte contínuo' />

                        <div className="text-gray-600">
                            <P text='Nós oferecemos suporte para todos os nossos clientes, solucionando os problemas e tirando as dúvidas.' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon={<Intersect size={25} weight="bold" />

                    } />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Integrações com API' />

                        <div className="text-gray-600">
                            <P text='Integramos a sua aplicação com as API’s necessárias para o seu projeto alcançar máxima otimização.' />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}