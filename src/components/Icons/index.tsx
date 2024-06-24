'use client'

import Image from "next/image"


interface SeparationCircleProps {
    children?: React.ReactNode,
    icon: any,
    link?: any,
    target?: string
}


export function SeparationCircle({ icon = '', link = '', target = '' }: SeparationCircleProps) {

    return (

        <button className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-8 h-8 text-white flex justify-center items-center">
            <a href={link} target={target}>{icon}</a>
        </button>
    )
}

export function Rockets({ icon = ''}: SeparationCircleProps) {

    return (

        <span className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-8 h-8 text-white flex justify-center items-center">
            {icon}
        </span>
    )
}

export function QualitiesCircle({ icon = '' }: SeparationCircleProps) {

    return (

        <div className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-11 h-11 text-white flex justify-center items-center">
            {icon}
        </div>
    )
}

export function RectangleIcon({ icon = '' }: SeparationCircleProps) {

    return (

        <div className="rounded-lg w-14 h-11 bg-gradient-to-r from-violet5 to-indigo9 flex justify-center items-center text-white">
            {icon}
        </div>
    )
}

export function Separation() {

    return (
        <div className="w-14 flex justify-center">
            <Image
                src="/vector.svg"
                width={2}
                height={40} alt={"Vetor de Separação"} />
        </div>
    )
}