'use client'

import Image from "next/image"
import { Instagram, Facebook, Whatsapp } from "../socialmedia"
import { WhatsappLogo, Envelope } from "@phosphor-icons/react"
import { NavFooter } from "../menu"


export default function Footer() {

    return (
        <footer className="bg-gradient-to-r from-violet9 to-indigo5 py-11 px-14 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 text-center md:text-left md:justify-around">

                <div>
                    <div className="flex justify-center pt-8 md:pt-0">
                        <Image src={'/portogswhite.svg'} width={186} height={63} alt="Logotipo Porto GS Branca"/>
                    </div>
                    <div className="font-bold text-white mt-6 text-xs">
                        {/* info empresa */}
                        <p>CNPJ - 43.119.963/0001-11</p>
                        <p className="mt-1">Todos os direitos reservados - 2024</p>
                    </div>
                    <div className="text-white text-xs mt-6">
                        <p>Siga-nos nas nossas redes sociais</p>
                        <div className="mt-2">
                            <div className="flex justify-center md:justify-start items-center space-x-2">
                                <Instagram />
                                <Facebook />
                                {/* <Whatsapp /> */}
                    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="font-bold text-white">Navegação</p>

                    <div className="mt-4">
                        <nav className="flex flex-col space-y-3">
                            <NavFooter link={'#inicio'} navigation={'Início'}/>
                            <NavFooter link={'#diferencial'} navigation={'O que oferecemos?'}/>
                            <NavFooter link={'#qualidade-da-empresa'} navigation={'Porque contratar-nos?'}/>
                            {/* <NavFooter link={''} navigation={'Tire suas dúvidas'}/> */}
                            <NavFooter target="blank" link={'https://wa.me/5519996811960/'} navigation={'Orçamento'}/>
                        </nav>
                    </div>
                </div>

                <div className="">
                    <p className="font-bold text-white">Paginas</p>

                    <div className="mt-4">
                        <nav className="flex flex-col space-y-3">
                            <NavFooter link={''} navigation={'Principal'}/>
                            <NavFooter link={''} navigation={'Modelos de site'}/>
                            <NavFooter link={''} navigation={'Faça seu orçamento'}/>
                            <NavFooter link={''} navigation={'Começar Projeto'}/>
                            <NavFooter link={''} navigation={'Trabalhe conosco'}/>
                        </nav>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="font-bold text-white">Contato</p>

                    <div className="text-white text-sm flex flex-col space-y-4">
                        <a href="https://mail.comercial@portogs.com.br" className="flex flex-col md:flex-row justify-center items-center"><span><Envelope size={18}/></span>comercial@portogs.com.br</a>

                        <a href="https://wa.me/5519996811960/?text=Gostaria de fazer um orçamento." target="blank" className="flex items-center justify-center md:justify-start flex-col md:flex-row"><span><WhatsappLogo size={18} /></span>(19) 99681-1960</a>
                        
                    </div>
                </div>

            </div>
        </footer>
    )
}