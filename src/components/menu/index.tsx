'use client'

import { List } from '@phosphor-icons/react'
import Button from '../button'

import Image from 'next/image'

export default function NavBar() {

    return (
        <>
            <div className="container mx-auto my-auto">

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
                        <div>
                            <List size={32} weight='fill' className='cursor-pointer' />
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

                    <nav className='flex mx-auto items-center'>
                        {/* desktop */}
                        <ul className='flex w-72 items-center justify-between font-medium text-indigo9'>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#">Início</a></li>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#">Sobre Nós</a></li>
                            <li className='hover:border-b-2 border-violet9 duration-75'><a href="#">Trabalhe conosco</a></li>
                        </ul>

                    </nav>
                    <div className='flex w-80 items-center justify-between'>
                        <a href="#" className='text-white font-semibold'>Modelos de sites</a>

                        <div className='w-40 h-12 flex items-center'>
                            <Button text={'Orçamento'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 