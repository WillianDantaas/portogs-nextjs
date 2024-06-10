'use client'

import Image from "next/image"


interface SeparationCircle {
    children?: React.ReactNode,
    icon: any
}


export function SeparationCircle({ icon = '' }: SeparationCircle) {

    return (

        <button className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-8 h-8 text-white flex justify-center items-center">
            {icon}
        </button>
    )
}

export function QualitiesCircle({ icon = '' }: SeparationCircle) {

    return (

        <div className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-11 h-11 text-white flex justify-center items-center">
            {icon}
        </div>
    )
}

export function RectangleIcon({ icon = '' }: SeparationCircle) {

    return (

        <div className="rounded-lg w-14 h-11 bg-gradient-to-r from-violet-900 to-indigo-500 flex justify-center items-center text-white">
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