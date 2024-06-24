'use client'

import { List } from '@phosphor-icons/react'
import { Button, Button2 } from '../button'

import Image from 'next/image'

interface NavigationFooter {
    children?: React.ReactNode,
    navigation: string,
    link: any,
    target?: string
}

export function NavBar() {

    return (
        <>
            <div className="container mx-auto my-auto" id='inicio'>

                <div className='lg:hidden flex justify-between h-16 items-center'>
                    <div className='cursor-pointer'>
                        <Image
                            src="/logotipo-mobile.svg"
                            width={130}
                            height={46}
                            alt="Logotipo PORTOGS Desenvolvimento WEB"
                        />
                    </div>
                    <nav>
                        <div  >
                            <List size={32} weight='fill' className='cursor-pointer text-indigo9' />
                        </div>
                        <div>
                            <ul>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>


                {/* DESKTOP */}
                <div className='hidden lg:flex justify-between items-center'>
                    <div className='cursor-pointer'>
                        <Image
                            src="/logotipo-mobile.svg"
                            width={163}
                            height={58}
                            alt="Logotipo PORTOGS Desenvolvimento WEB"
                        />
                    </div>

                    {/* para ativar, basta declarar flex */}
                    <nav className='hidden mx-auto items-center'>
                        {/* desktop */}
                        <ul className='flex w-72 items-center justify-between font-medium text-indigo9'>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#nicio">Início</a></li>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#sobre-nos">Sobre Nós</a></li>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#">Trabalhe conosco</a></li>
                        </ul>

                    </nav>

                    {/* paradrão w-80 */}
                    <div className='flex items-center justify-between'>
                        {/* <a href="#" className='text-indigo9 font-semibold'>Modelos de sites</a> */}

                        <div className='w-40 h-12 flex items-center'>
                            <Button2 text={'Orçamento'} target={'_blank'} link={'https://wa.me/5519996811960/?text=Gostaria de realizar um orçamento, poderia me ajudar?'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function NavFooter({ navigation = '', link = '#', target = ''}: NavigationFooter) {

    return (

        <ul>
            <li><a href={link} target={target} className='text-white text-sm'>{navigation}</a></li>
        </ul>

    )
}