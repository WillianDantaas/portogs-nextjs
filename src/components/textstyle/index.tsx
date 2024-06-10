'use client'


interface TextProps {
    children?: React.ReactNode,
    text: string
}

export function P( {text = ''}: TextProps) {

    return (
        <p className="w-full text-gray-600 text-sm md:text-base">
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
        <p className="w-full text-indigo-900 text-xs md:text-sm font-bold">
            {text}
        </p>
    )
}

export function H3( {text= ''}: TextProps) {

    return (
        <h3 className="text-indigo-900 font-bold text-lg md:text-2xl">{text}</h3>

    )
}