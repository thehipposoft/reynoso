'use client'
import { useState } from 'react'

// Acumula los índices de slides que ya se mostraron (o están por mostrarse),
// para que los carruseles solo monten las imágenes que el visitante realmente ve.
// Un slide revelado queda montado: volver atrás no lo descarga de nuevo ni parpadea.
export function useRevealedSlides(visible: number[]): Set<number> {
  const [revealed, setRevealed] = useState(() => new Set(visible))

  // Actualización durante el render (patrón recomendado por React en lugar de un effect).
  if (visible.some((index) => !revealed.has(index))) {
    const next = new Set([...revealed, ...visible])
    setRevealed(next)
    return next
  }

  return revealed
}
