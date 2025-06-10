import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"
import { Roboto } from "next/font/google"

// Cargar fuente Oxanium (tipografía de marca)
const oxanium = localFont({
  src: "../fonts/Oxanium-Regular.ttf",
  variable: "--font-oxanium",
  display: "swap",
})

// Cargar fuente Roboto (tipografía para contenido digital)
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata = {
  title: "CDI Turbos - Soluciones Integrales para Turbocompresores",
  description:
    "Venta, reparación y mantenimiento de turbocompresores vehiculares en toda Argentina. Servicio rápido y de calidad para talleres y particulares.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${oxanium.variable} ${roboto.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
