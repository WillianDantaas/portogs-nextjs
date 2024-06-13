
interface ButtonProps {
    children?: React.ReactNode,
    text: string,
    icon?: any,
    link: any,
    target?: string
}


export function Button({ text = '', icon = '', link = '', target = '' }: ButtonProps) {

    return (

            <button className="w-64 lg:w-72 h-14 mx-auto font-medium rounded-lg bg-gradient-to-r from-violet5 to-indigo9 text-white shadow-lg shadow-violet9/50 opacity-95 hover:opacity-100">
                <a href={link} target={target} className="flex justify-center items-center">{text} {icon}</a>
            </button>
    )
}

export function Button2({ text = '', link = '' }: ButtonProps) {
    // Button menu

    return (

                <button className="w-64 lg:w-72 h-12 mx-auto font-medium rounded-lg bg-gradient-to-r from-violet5 to-indigo9 text-white shadow-lg shadow-violet9/50 opacity-95 hover:opacity-100">
                    <a href={link}>{text}</a>
                </button>
    )
}
