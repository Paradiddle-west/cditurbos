import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Roboto } from "next/font/google"
import Head from "next/head"


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
    <html lang="es" suppressHydrationWarning className={`${roboto.variable}`}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
