
interface ButtonProps {
    children?: React.ReactNode,
    text: string
}


export default function Button({ text = '' }: ButtonProps) {

    return (

        <button className="w-full h-full font-medium rounded-lg bg-gradient-to-r from-violet5 to-indigo9 text-white shadow-lg shadow-violet9/50 opacity-95 hover:opacity-100">
            {text}
        </button>
    )
}