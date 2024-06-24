'use client'


interface TextProps {
    children?: React.ReactNode,
    text: string
}

export function P( {text = ''}: TextProps) {
    // Mobile p-desc

    return (
        <p className="w-full text-sm md:text-base">
            {text}
        </p>
    )
}

export function P1( {text = ''}: TextProps) {

    return (
        <p className="w-full text-gray-600 text-xs md:text-sm ">
            {text}
        </p>
    )
}

export function PTitle( {text = ''}: TextProps) {

    return (
        <p className="w-full text-indigo9 text-xs md:text-sm font-bold">
            {text}
        </p>
    )
}

export function H2( {text= ''}: TextProps) {

    return (
        <h2 className="font-extrabold text-xl md:text-4xl">{text}</h2>

    )
}

export function H3( {text= ''}: TextProps) {

    return (
        <h3 className="text-indigo9 font-bold text-lg md:text-2xl">{text}</h3>

    )
}

export function H5( {text= ''}: TextProps) {

    return (
        <h5 className="font-bold text-lg md:text-3xl">{text}</h5>

    )
}