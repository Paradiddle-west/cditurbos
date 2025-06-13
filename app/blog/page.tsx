import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Instagram, Facebook } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MobileMenu } from "@/components/mobile-menu"

export default function BlogPage() {
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
        {/* Hero Section */}
        <section className="bg-[#093C8E] text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-oxanium">
                Blog de CDI Turbos
              </h1>
              <p className="mt-6 text-lg text-[#DBF6FF] font-roboto">
                Artículos, guías y consejos sobre turbocompresores, mantenimiento y rendimiento de vehículos
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="container py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#019FD5]">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-[#093C8E] font-medium">Blog</span>
          </div>
        </div>

        {/* Artículos Destacados */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-[#093C8E] font-oxanium">Artículos Destacados</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Artículo 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="/turbo-selection-main.jpeg"
                    alt="Técnico sosteniendo un turbocompresor para inspección"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#E5262D] text-white text-xs font-semibold px-2 py-1 rounded">
                    Guía
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium">
                    Cómo elegir el turbo adecuado para tu vehículo
                  </h3>
                  <p className="text-[#03255C] mb-4 line-clamp-3 font-roboto">
                    Elegir el turbocompresor correcto puede marcar una gran diferencia en el rendimiento de tu motor. En
                    este artículo, te explicamos los factores clave que debes considerar antes de realizar tu compra.
                  </p>
                  <Link
                    href="/blog/como-elegir-turbo"
                    className="inline-flex items-center text-[#019FD5] hover:text-[#093C8E] font-medium"
                  >
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Artículo 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="/turbocharger-comparison.png"
                    alt="Comparativa: Las mejores marcas de turbocompresores 2025"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#093C8E] text-white text-xs font-semibold px-2 py-1 rounded">
                    Análisis
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium">
                    Comparativa: Las mejores marcas de turbocompresores 2025
                  </h3>
                  <p className="text-[#03255C] mb-4 line-clamp-3 font-roboto">
                    ¿Estás buscando un nuevo turbocompresor pero no sabes qué marca elegir? En este artículo comparamos
                    las principales marcas del mercado, analizando calidad, rendimiento y relación calidad-precio.
                  </p>
                  <Link
                    href="/blog/comparativa-marcas-turbocompresores"
                    className="inline-flex items-center text-[#019FD5] hover:text-[#093C8E] font-medium"
                  >
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
