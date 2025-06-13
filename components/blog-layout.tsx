import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MobileMenu } from "@/components/mobile-menu"

interface BlogLayoutProps {
  children: React.ReactNode
  title: string
  category: string
  date: string
}

export function BlogLayout({ children, title, category, date }: BlogLayoutProps) {
  const menuLinks = [
    { href: "https://cditurbos.vercel.app/", label: "Inicio" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#inicio">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="https://cditurbos.vercel.app/" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Inicio
            </Link>
          </nav>
          <MobileMenu links={menuLinks} />
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#019FD5]">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/blog" className="hover:text-[#019FD5]">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-[#093C8E] font-medium">{title}</span>
          </div>
        </div>

        {/* Article Header */}
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span
                className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
                style={{
                  backgroundColor:
                    category === "Guía" ? "#E5262D" : category === "Mantenimiento" ? "#019FD5" : "#093C8E",
                }}
              >
                {category}
              </span>
              <p className="mt-2 text-sm text-gray-500">{date}</p>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium mb-8">
              {title}
            </h1>
          </div>
        </div>

        {/* Article Content */}
        <div className="container pb-16">
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#093C8E] text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Logo className="h-12 w-auto mb-4" color="white" />
              <p className="text-sm text-white/80 font-roboto">
                Soluciones integrales para turbocompresores vehiculares. Venta, reparación y mantenimiento en toda
                Argentina.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-oxanium">Enlaces Rápidos</h3>
              <ul className="space-y-2 font-roboto">
                <li>
                  <Link href="https://cditurbos.vercel.app/" className="text-sm hover:text-[#019FD5] transition-colors">
                    Inicio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">{/* Espacio para mantener el grid */}</div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/60 font-roboto">© 2025 CDI Turbos. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {/* <Link href="#" className="text-xs text-white/60 hover:text-[#019FD5] transition-colors font-roboto">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-xs text-white/60 hover:text-[#019FD5] transition-colors font-roboto">
                Términos y Condiciones
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
