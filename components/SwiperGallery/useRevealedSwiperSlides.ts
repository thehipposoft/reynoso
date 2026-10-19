'use client'
import { useEffect, useState } from 'react'
import type { Swiper as SwiperClass } from 'swiper'
import type { SwiperOptions } from 'swiper/types'
import { useRevealedSlides } from '@/lib/useRevealedSlides'

const perViewOf = (slidesPerView: SwiperOptions['slidesPerView']) => Math.ceil(Number(slidesPerView)) || 1

// Monta solo las imágenes de los slides visibles, para que la galería no descargue todas de entrada.
// El siguiente (y el anterior, una vez que el usuario arrastra) se precargan recién cuando la
// galería entra en pantalla, así quien no llega a verla no los baja.
export function useRevealedSwiperSlides(total: number) {
  const [view, setView] = useState({ index: 0, perView: 1, interacted: false })
  const [swiperEl, setSwiperEl] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!swiperEl) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    })
    observer.observe(swiperEl)
    return () => observer.disconnect()
  }, [swiperEl])

  const sync = (swiper: SwiperClass, slidesPerView = swiper.params.slidesPerView) =>
    setView((prev) => ({ ...prev, index: swiper.realIndex, perView: perViewOf(slidesPerView) }))

  const visible: number[] = []
  if (total > 0) {
    const from = view.interacted ? -1 : 0
    const to = inView || view.interacted ? view.perView : view.perView - 1
    for (let i = from; i <= to; i++) visible.push((((view.index + i) % total) + total) % total)
  }

  const revealed = useRevealedSlides(visible)

  const swiperHandlers = {
    onSwiper: (swiper: SwiperClass) => {
      setSwiperEl(swiper.el)
      sync(swiper)
    },
    onSlideChange: (swiper: SwiperClass) => sync(swiper),
    onBreakpoint: (swiper: SwiperClass, params: SwiperOptions) => sync(swiper, params.slidesPerView ?? swiper.params.slidesPerView),
    onTouchStart: () => setView((prev) => (prev.interacted ? prev : { ...prev, interacted: true })),
  }

  return { revealed, swiperHandlers }
}
