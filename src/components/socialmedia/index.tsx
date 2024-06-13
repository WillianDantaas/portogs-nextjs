'use client'

import { InstagramLogo, TelegramLogo, FacebookLogo, WhatsappLogo  } from "@phosphor-icons/react"

export function Instagram() {

    return (
        <>
            <a href="https://www.instagram.com/portogs.com.br/" className="w-[18px] h-[18px] bg-indigo5 rounded-md flex items-center justify-center">
                <button>
                    <InstagramLogo size={12} />
                </button>
            </a>
        </>
    )
}

export function Telegram() {

    return (
        <>
            <a href="https://www.instagram.com/portogs.com.br/" className="w-[18px] h-[18px] bg-indigo5 rounded-md flex items-center justify-center" target="blank">
                <button>
                    <TelegramLogo size={12} />
                </button>
            </a>
        </>
    )
}

export function Facebook() {

    return (
        <>
            <a href="https://www.instagram.com/portogs.com.br/" className="w-[18px] h-[18px] bg-indigo5 rounded-md flex items-center justify-center" target="blank">
                <button>
                    <FacebookLogo size={12} />
                </button>
            </a>
        </>
    )
}

export function Whatsapp() {

    return (
        <>
            <a href="https://www.instagram.com/portogs.com.br/" className="w-[18px] h-[18px] bg-indigo5 rounded-md flex items-center justify-center" target="blank">
                <button>
                    <WhatsappLogo size={12} />
                </button>
            </a>
        </>
    )
}