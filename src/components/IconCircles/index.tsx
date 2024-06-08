'use client'

import { ReactComponentElement } from "react"

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

        <button className="rounded-full bg-gradient-to-r from-violet9 to-indigo5 w-11 h-11 text-white flex justify-center items-center">
            {icon}
        </button>
    )
}