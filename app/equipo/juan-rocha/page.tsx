import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/Equipo/ShareButton";

export const metadata: Metadata = {
    title: "Juan Rocha | Reynoso Bienes Raíces",
    description: "Perfil digital de Juan Rocha, Comercial en Reynoso Bienes Raíces.",
    robots: {
        index: false,
    },
};

export default function JuanRochaPage() {
    return (
        <main className="min-h-screen bg-[#F4F2EE]">
            <section className="relative w-full">
                <div className="relative h-[260px] w-full sm:h-[320px]">
                    <Image
                        src="/assets/images/banner/banner.jpg"
                        alt="Reynoso Bienes Raíces"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative -mt-32 px-6 pb-16 sm:-mt-40">
                    <div className="relative mx-auto max-w-sm">
                        <div className="relative z-20 mx-auto -mb-20 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg">
                            <Image
                                src="/assets/images/equipo/equipo-3.png"
                                alt="Juan Rocha"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 rounded-[32px] bg-gradient-to-b from-primary-green to-verde-oscuro px-6 pt-24 pb-8 text-center text-white shadow-xl">
                            <h1 className="font-jakarta text-3xl">
                                <span className="font-bold">Juan</span> Rocha
                            </h1>
                            <div className="mx-auto mt-3 mb-4 h-[2px] w-16 bg-white/70" />
                            <p className="text-sm uppercase tracking-[3px] text-white/90">Comercial</p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <Link
                                    href="https://wa.me/543874063402?text=Hola%20Juan!%20Vengo%20desde%20tu%20perfil%20de%20Reynoso"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Escribir por WhatsApp"
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110"
                                >
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.37A10 10 0 1 0 12 2Zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3 .81.8-2.94-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.13-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.53.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.47-.29Z" fill="#33847D"/>
                                    </svg>
                                </Link>
                                <ShareButton nombre="Juan Rocha" />
                                <Link
                                    href="tel:+543874063402"
                                    aria-label="Llamar"
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21c.3862 0 .7691-.0141 1.1483-.0419.4351-.0319.6526-.0478.8507-.1618.164-.0944.3195-.2618.4017-.4323.0993-.2058.0993-.4459.0993-.926v-2.8173c0-.4038 0-.6057-.0665-.7787-.0586-.1529-.154-.289-.2776-.3964-.1399-.1216-.3297-.1906-.7091-.3286L16.74 13.9509c-.4415-.1605-.6623-.2408-.8717-.2272-.1847.012-.3624.0751-.5134.1821-.1712.1213-.292.3227-.5337.7256L14 16c-2.6499-1.2001-4.7981-3.3511-6-6l1.36863-.82118c.40282-.24169.60423-.36254.72557-.53376.107-.15098.1701-.32869.1821-.51336.0136-.20943-.0667-.43017-.2272-.87165L8.88299 4.05321c-.13799-.37945-.20698-.56918-.32857-.70911-.10741-.12361-.24353-.21895-.3964-.27765C7.98496 3 7.78308 3 7.37932 3H4.56201c-.48013 0-.7202 0-.92603.09925-.17048.08221-.33784.23776-.43228.40178-.11402.19804-.12995.41559-.16181.8507C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#33847D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex justify-center pb-10 hidden">
                <Image
                    src="/assets/images/logo/reynoso.svg"
                    alt="Reynoso Bienes Raíces"
                    width={160}
                    height={160}
                    className="h-auto w-32"
                />
            </div>

            <div className="mx-auto flex w-fit flex-col gap-4 pb-16 text-primary-gray">
                <div className="flex items-center gap-3">
                    <svg className="min-w-6 max-w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" stroke="#33847D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="#33847D" strokeWidth="1.6"/>
                    </svg>
                    <Link href="https://maps.app.goo.gl/uEYeRbV7cRkBSJfK9" target="_blank" rel="noreferrer" className="hover:underline">
                        Leguizamón 515 Oficina 201
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <svg className="min-w-6 max-w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="#33847D" strokeWidth="1.6"/>
                        <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" stroke="#33847D" strokeWidth="1.6"/>
                    </svg>
                    <Link href="https://reynosobienesraices.com.ar" target="_blank" rel="noreferrer" className="hover:underline">
                        reynosobienesraices.com.ar
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <svg className="min-w-6 max-w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#33847D" strokeWidth="1.6"/>
                        <circle cx="12" cy="12" r="4" stroke="#33847D" strokeWidth="1.6"/>
                        <circle cx="17.2" cy="6.8" r="1" fill="#33847D"/>
                    </svg>
                    <Link href="https://www.instagram.com/reynosobienesraicessalta" target="_blank" rel="noreferrer" className="hover:underline">
                        reynosobienesraicessalta
                    </Link>
                </div>
            </div>

            <div className="border-t border-primary-green px-6 pt-4 pb-8 text-center hidden">
                <Link
                    href="https://www.thehipposoft.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-jakarta text-sm text-primary-gray hover:underline"
                >
                    Created by <strong>hipposoft</strong> | All Right Reserved
                </Link>
            </div>
        </main>
    );
}
