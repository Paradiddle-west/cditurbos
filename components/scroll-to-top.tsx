"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Cuando la ruta cambia, hacer scroll al inicio de la página
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
