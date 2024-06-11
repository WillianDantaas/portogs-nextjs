
interface ButtonProps {
    children?: React.ReactNode,
    text: string
}


export function Button({ text = '' }: ButtonProps) {

    return (

        <button className="w-64 lg:w-72 h-14 mx-auto font-medium rounded-lg bg-gradient-to-r from-violet5 to-indigo9 text-white shadow-lg shadow-violet9/50 opacity-95 hover:opacity-100">
            {text}
        </button>
    )
}

export function Button2({ text = '' }: ButtonProps) {

    return (

            <button className="w-64 lg:w-72 h-12 mx-auto font-medium rounded-lg bg-gradient-to-r from-violet5 to-indigo9 text-white shadow-lg shadow-violet9/50 opacity-95 hover:opacity-100">
                {text}
            </button>
    )
}