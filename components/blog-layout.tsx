import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

interface BlogLayoutProps {
  children: React.ReactNode
  title: string
  category: string
  date: string
  breadcrumbs: {
    name: string
    href: string
  }[]
}

export function BlogLayout({ children, title, category, date, breadcrumbs }: BlogLayoutProps) {
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
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-2" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-[#093C8E] font-medium">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#019FD5]">
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
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

        {/* Newsletter */}
        <section className="py-12 bg-[#093C8E] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 font-oxanium">¿Te resultó útil este artículo?</h2>
              <p className="mb-6 text-[#DBF6FF] font-roboto">
                Suscríbete a nuestro boletín para recibir más contenido como este directamente en tu bandeja de entrada.
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
      <footer className="bg-[#093C8E] text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
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
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-oxanium">Boletín Informativo</h3>
              <p className="text-sm text-white/80 font-roboto mb-4">
                Suscribite para recibir noticias y ofertas especiales.
              </p>
              <form className="flex flex-col gap-2">
                <input type="email" placeholder="Tu email" className="px-3 py-2 rounded text-gray-900 text-sm" />
                <Button className="bg-[#E5262D] hover:bg-[#9C1318] text-white py-2 px-4 text-sm">Enviar</Button>
              </form>
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
