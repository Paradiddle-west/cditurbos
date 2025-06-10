import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Instagram, Facebook } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#inicio" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Inicio
            </Link>
            <Link href="/#servicios" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Servicios
            </Link>
            <Link href="/#beneficios" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Beneficios
            </Link>
            <Link href="/#testimonios" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Testimonios
            </Link>
            <Link href="/#contacto" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Contacto
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#019FD5] transition-colors">
              Blog
            </Link>
            <Link href="/#mercadolibre" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Tienda ML
            </Link>
          </nav>
          <Button className="hidden md:flex bg-[#25D366] hover:bg-[#128C7E]" asChild>
            <a
              href="https://wa.me/5491159762237"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 mr-2"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
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
        <section className="py-12">
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
                  <p className="text-sm text-gray-500 mb-2 font-roboto">15 de Mayo, 2025</p>
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
                    src="/turbocompresor-mantenimiento.png"
                    alt="5 señales de que tu turbo necesita mantenimiento"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#019FD5] text-white text-xs font-semibold px-2 py-1 rounded">
                    Mantenimiento
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 font-roboto">2 de Mayo, 2025</p>
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium">
                    5 señales de que tu turbo necesita mantenimiento
                  </h3>
                  <p className="text-[#03255C] mb-4 line-clamp-3 font-roboto">
                    Detectar a tiempo los problemas en tu turbocompresor puede ahorrarte costosas reparaciones. Aprende
                    a identificar las señales de advertencia más comunes que indican que tu turbo necesita atención.
                  </p>
                  <Link
                    href="/blog/senales-mantenimiento-turbo"
                    className="inline-flex items-center text-[#019FD5] hover:text-[#093C8E] font-medium"
                  >
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Artículo 3 */}
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
                  <p className="text-sm text-gray-500 mb-2 font-roboto">20 de Abril, 2025</p>
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

        {/* Newsletter */}
        <section className="py-12 bg-[#093C8E] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 font-oxanium">Suscríbete a nuestro boletín</h2>
              <p className="mb-6 text-[#DBF6FF] font-roboto">
                Recibe las últimas noticias, artículos y ofertas especiales directamente en tu bandeja de entrada.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-4 py-2 rounded-md flex-1 text-gray-900"
                  required
                />
                <Button className="bg-[#E5262D] hover:bg-[#9C1318]">Suscribirse</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#03255C] text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="h-10 w-auto" color="white" />
              </div>
              <p className="text-sm text-[#DBF6FF] max-w-xs font-roboto">
                Soluciones integrales para turbocompresores vehiculares. Venta, reparación y mantenimiento en toda
                Argentina.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-oxanium">Enlaces Rápidos</h3>
              <ul className="space-y-2 font-roboto">
                <li>
                  <Link href="/#inicio" className="text-sm hover:text-[#019FD5] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-sm hover:text-[#019FD5] transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/#beneficios" className="text-sm hover:text-[#019FD5] transition-colors">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonios" className="text-sm hover:text-[#019FD5] transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="/#contacto" className="text-sm hover:text-[#019FD5] transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#019FD5] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#mercadolibre" className="text-sm hover:text-[#019FD5] transition-colors">
                    Mercado Libre
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-oxanium">Contacto</h3>
              <ul className="space-y-2 font-roboto">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#019FD5]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+54 9 11 5976-2237</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#019FD5]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@cditurbos.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-[#019FD5]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Av. Gral. Tomás de Iriarte 2679, CABA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#062A63] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#DBF6FF] font-roboto">
              &copy; {new Date().getFullYear()} CDI Turbos. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-[#DBF6FF] hover:text-[#019FD5] transition-colors font-roboto">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-xs text-[#DBF6FF] hover:text-[#019FD5] transition-colors font-roboto">
                Términos y Condiciones
              </Link>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="https://www.instagram.com/cditurbos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#093C8E] hover:bg-[#019FD5] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/CDIturbocompresion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#093C8E] hover:bg-[#019FD5] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
