'use client'



import { SeparationCircle, QualitiesCircle } from "../IconCircles"
import { H3, P } from "../textstyle"

export default function Qualities() {

    return (
        <>

            <div className="w-[272px] md:w-[672px] lg:w-[1200px] container mx-auto mr-auto px-4 md:px-8 lg:px-18 py-10 bg-white -mt-20 rounded-xl space-y-8 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Qualidade na aplicação' />

                        <P text='Do ínicio a entrega do seu projeto, nós utilizamos este pilar com o principal, te entregamos o melhor.' />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='UI/UX Design' />

                        <P text='Desenhamos e programamos interfaces bonitas, robustas e amigáveis, focado em qualidade. ' />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Responsividade' />

                        <P text='Criamos interfaces responsivas para cada dispositivo, buscando a melhor experiência do úsuario possivel.' />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='SEO' />

                        <P text='Otimizamos a sua aplicação para ser amigável aos sistemas de buscas da Web, garantimos qualidade.' />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Suporte contínuo' />

                        <P text='Nós oferecemos suporte para todos os nossos clientes, solucionando os problemas e tirando as dúvidas.' />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-60">

                    <QualitiesCircle icon='a' />

                    <div className="mt-6 flex flex-col space-y-3">
                        <H3 text='Integrações com API' />

                        <P text='Integramos a sua aplicação com as API’s necessárias para o seu projeto alcançar máxima otimização.' />
                    </div>
                </div>

            </div>

        </>
    )
}