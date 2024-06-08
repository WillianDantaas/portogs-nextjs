'use client'


interface ParagraphProps {
    children?: React.ReactNode,
    text: string
}

export function P( {text = ''}: ParagraphProps) {

    return (
        <p className="w-full text-gray-600 text-sm md:text-base lg:text-base ">
            {text}
        </p>
    )
}

interface H3Props {
    children?: React.ReactNode,
    text: string
}

export function H3( {text= ''}: H3Props) {

    return (
        <h3 className="text-indigo-900 font-bold text-lg md:text-2xl">{text}</h3>

    )
}