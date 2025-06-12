import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, Wrench, ShoppingCart, Clock, Award, ThumbsUp, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#inicio">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Servicios
            </Link>
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Beneficios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Contacto
            </Link>
            <Link href="#mercadolibre" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
              Tienda
            </Link>
          </nav>
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
        <section
          id="inicio"
          className="relative flex items-center min-h-[700px] py-20 md:py-32 overflow-hidden hero-bg"
        >
          {/* Carrusel de imágenes */}
          <HeroCarousel />

          {/* Formas geométricas animadas */}
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-shape shape-4"></div>

          {/* Círculo rotatorio */}
          <div className="rotating-circle"></div>

          {/* Líneas onduladas */}
          <div className="wave-line wave-1"></div>
          <div className="wave-line wave-2"></div>
          <div className="wave-line wave-3"></div>
          <div className="wave-line wave-4"></div>

          {/* Elementos flotantes animados */}
          <div
            className="absolute top-20 left-10 w-4 h-4 bg-[#019FD5] rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-[#E5262D] rounded-full opacity-50 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-5 h-5 bg-[#019FD5] rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute top-60 right-40 w-2 h-2 bg-[#E5262D] rounded-full opacity-70 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
          ></div>

          {/* Contenido principal */}
          <div className="container relative z-10">
            <div className="max-w-3xl text-white">
              {/* Badge animado */}
              <div
                className="inline-flex items-center px-4 py-2 bg-[#019FD5]/20 backdrop-blur-sm border border-[#019FD5]/30 rounded-full mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-2 h-2 bg-[#019FD5] rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-[#DBF6FF]">Más de 15 años de experiencia</span>
              </div>

              {/* Título principal con animación */}
              <h1
                className="hero-title text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-oxanium mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="block bg-gradient-to-r from-[#019FD5] to-[#E5262D] bg-clip-text text-transparent animate-gradient-x">
                  ESPECIALISTAS EN
                </span>
                <span className="block">TURBOCOMPRESORES</span>
              </h1>

              {/* Subtítulo animado */}
              <p
                className="text-xl text-[#DBF6FF] font-roboto mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Vendemos, reparamos y asesoramos en soluciones a medida para todo tipo de vehículos.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <a
                  href="https://wa.me/5491159762237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactar Ahora
                  <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
                </a>

                <a
                  href="#servicios"
                  className="group inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white text-white py-4 px-8 rounded-lg font-medium text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                >
                  Ver Servicios
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
                    className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300"
                  >
                    <path d="m7 13 3 3 7-7" />
                    <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Indicador de scroll animado */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white/60">
              <span className="text-xs mb-2 font-roboto">Scroll para explorar</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium">
                Nuestros Servicios
              </h2>
              <p className="mt-4 text-lg text-[#03255C] max-w-3xl mx-auto font-roboto">
                Ofrecemos soluciones completas para turbocompresores, desde la venta de equipos nuevos hasta
                reparaciones profesionales.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#019FD5]/5 to-[#093C8E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#DBF6FF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                    <ShoppingCart className="h-6 w-6 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                    Venta de Turbocompresores
                  </h3>
                  <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                    Tenemos a disposición la oferta mas amplia del mercado en turbocompresores. Para todo tipo de motor.
                  </p>
                  <ul className="mt-4 space-y-2 font-roboto">
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Múltiples marcas disponibles</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Garantía de fábrica</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-300">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Asesoramiento técnico</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#019FD5]/5 to-[#093C8E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#DBF6FF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                    <Settings className="h-6 w-6 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                    Venta de Conjuntos Centrales
                  </h3>
                  <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                    Conjuntos centrales de alta calidad y compatibilidad garantizada para optimizar el rendimiento de su
                    turbo.
                  </p>
                  <ul className="mt-4 space-y-2 font-roboto">
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Componentes de primera calidad</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Amplia compatibilidad</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-300">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Instalación disponible</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#019FD5]/5 to-[#093C8E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#DBF6FF] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                    <Wrench className="h-6 w-6 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                    Reparación de Turbocompresores
                  </h3>
                  <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                    Servicio rápido y eficiente de reparación de turbocompresores con técnicos especializados y
                    equipamiento de última generación.
                  </p>
                  <ul className="mt-4 space-y-2 font-roboto">
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-100">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Diagnóstico preciso</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-200">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Reparación profesional</span>
                    </li>
                    <li className="flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300 delay-300">
                      <ChevronRight className="h-4 w-4 text-[#E5262D] group-hover:text-[#019FD5] transition-colors duration-300" />
                      <span>Pruebas de rendimiento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propuesta de Valor */}
        <section id="beneficios" className="py-16 md:py-24 bg-[#BFD6FB]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium">
                ¿Por qué elegir CDI Turbos?
              </h2>
              <p className="mt-4 text-lg text-[#03255C] max-w-3xl mx-auto font-roboto">
                Descubre por que, grandes empresas, casas de repuesto, talleres y particulares de toda la Argentina
                confían en nosotros desde hace mas de 15 años.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#DBF6FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                  <Award className="h-8 w-8 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                  Productos con control de calidad certificado
                </h3>
                <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                  Nuestros productos superan estrictos controles de calidad, asegurando rendimiento y durabilidad con
                  total respaldo en cada compra.
                </p>
              </div>
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#DBF6FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                  <ThumbsUp className="h-8 w-8 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                  Precios Competitivos
                </h3>
                <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                  Ofrecemos la mejor relación calidad-precio del mercado, con opciones para todos los presupuestos.
                </p>
              </div>
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#DBF6FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-8 w-8 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                  Rapidez en el Servicio
                </h3>
                <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                  Entendemos la importancia del tiempo, por eso nos comprometemos con plazos de entrega rápidos y
                  confiables.
                </p>
              </div>
              <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#DBF6FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#019FD5] group-hover:scale-110 transition-all duration-300">
                  <Truck className="h-8 w-8 text-[#019FD5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#093C8E] font-oxanium group-hover:text-[#019FD5] transition-colors duration-300">
                  Cobertura Nacional
                </h3>
                <p className="text-[#03255C] font-roboto group-hover:text-[#093C8E] transition-colors duration-300">
                  Enviamos a todo el país, permitiéndote acceder a nuestros servicios sin importar dónde te encuentres.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium">
                Testimonios que respaldan nuestra trayectoria
              </h2>
              <p className="mt-4 text-lg text-[#03255C] max-w-3xl mx-auto font-roboto">
                Te invitamos a conocer las opiniones de quienes ya confiaron en nosotros.
              </p>
            </div>

            {/* Google Reviews Badge */}
            <div className="flex justify-center mb-10">
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md px-6 py-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M22.222 9.542V12h-3.442v3.448H16.333V12h-3.441V9.542h3.441V6.1h2.447v3.442h3.442M8.895 10.5a2.36 2.36 0 0 1 2.363 2.363 2.36 2.36 0 0 1-2.363 2.365 2.36 2.36 0 0 1-2.365-2.365A2.36 2.36 0 0 1 8.895 10.5m0-1.75a4.11 4.11 0 0 0-4.113 4.113 4.11 4.11 0 0 0 4.113 4.115a4.11 4.11 0 0 0 4.115-4.115A4.11 4.11 0 0 0 8.895 8.75"
                      fill="#4285F4"
                    />
                    <path
                      d="M1.792 4.654a9.17 9.17 0 0 1 14.205 0l-1.693 1.693a6.85 6.85 0 0 0-10.818 0L1.792 4.654m.26 14.434a9.17 9.17 0 0 0 13.685 0l-1.693-1.693a6.85 6.85 0 0 1-10.299 0l-1.693 1.693"
                      fill="#34A853"
                    />
                    <path
                      d="M3.486 6.347a6.85 6.85 0 0 0 0 10.818l1.693-1.693a4.53 4.53 0 0 1 0-7.432L3.486 6.347"
                      fill="#FBBC05"
                    />
                    <path
                      d="M14.257 17.395a6.85 6.85 0 0 0 0-10.818l-1.693 1.693a4.53 4.53 0 0 1 0 7.432l1.693 1.693"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="font-semibold text-gray-800">Opiniones de Google</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-gray-800">4.7</span>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                      stroke="#FBBC05"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                      stroke="#FBBC05"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                      stroke="#FBBC05"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                      stroke="#FBBC05"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FBBC05"
                      stroke="#FBBC05"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">(66 Opiniones)</span>
                </div>
                <a
                  href="https://www.google.com/search?sca_esv=b97c0088c4eec1a1&rlz=1C1ONGR_enAR1149AR1149&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzd-5cQXH65d2_WCVWDWiH_mnubDwySLwToS2wF709JE_gubOFMkC2pVs5qrweRceCdk60HyUX--n-q81c9q-DKwJz2Hz&q=CDITURBOS+Opiniones&sa=X&ved=2ahUKEwiDs9KPxrSNAxV9PrkGHahYJosQ0bkNegQIIRAE&biw=1396&bih=719&dpr=1.38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver todas las Opiniones en Google
                </a>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Reseña de Google 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        d="M22.222 9.542V12h-3.442v3.448H16.333V12h-3.441V9.542h3.441V6.1h2.447v3.442h3.442M8.895 10.5a2.36 2.36 0 0 1 2.363 2.363 2.36 2.36 0 0 1-2.363 2.365 2.36 2.36 0 0 1-2.365-2.365A2.36 2.36 0 0 1 8.895 10.5m0-1.75a4.11 4.11 0 0 0-4.113 4.113 4.11 4.11 0 0 0 4.113 4.115a4.11 4.11 0 0 0 4.115-4.115A4.11 4.11 0 0 0 8.895 8.75"
                        fill="#4285F4"
                      />
                      <path
                        d="M1.792 4.654a9.17 9.17 0 0 1 14.205 0l-1.693 1.693a6.85 6.85 0 0 0-10.818 0L1.792 4.654m.26 14.434a9.17 9.17 0 0 0 13.685 0l-1.693-1.693a6.85 6.85 0 0 1-10.299 0l-1.693 1.693"
                        fill="#34A853"
                      />
                      <path
                        d="M3.486 6.347a6.85 6.85 0 0 0 0 10.818l1.693-1.693a4.53 4.53 0 0 1 0-7.432L3.486 6.347"
                        fill="#FBBC05"
                      />
                      <path
                        d="M14.257 17.395a6.85 6.85 0 0 0 0-10.818l-1.693 1.693a4.53 4.53 0 0 1 0 7.432l1.693 1.693"
                        fill="#EA4335"
                      />
                    </svg>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">hace 3 meses</span>
                </div>
                <p className="text-[#03255C] mb-4 font-roboto">
                  "Se les puede comprar tranquilo desde cualquier lugar del país ¡gente sería en todos sentidos!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#DBF6FF] rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-[#019FD5]">JR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#093C8E]">Javier R.</p>
                    <p className="text-sm text-[#03255C]">Cliente verificado</p>
                    <p className="text-xs text-gray-500 mt-1">Reseña verificada de Google</p>
                  </div>
                </div>
              </div>

              {/* Reseña de Google 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        d="M22.222 9.542V12h-3.442v3.448H16.333V12h-3.441V9.542h3.441V6.1h2.447v3.442h3.442M8.895 10.5a2.36 2.36 0 0 1 2.363 2.363 2.36 2.36 0 0 1-2.363 2.365 2.36 2.36 0 0 1-2.365-2.365A2.36 2.36 0 0 1 8.895 10.5m0-1.75a4.11 4.11 0 0 0-4.113 4.113 4.11 4.11 0 0 0 4.113 4.115a4.11 4.11 0 0 0 4.115-4.115A4.11 4.11 0 0 0 8.895 8.75"
                        fill="#4285F4"
                      />
                      <path
                        d="M1.792 4.654a9.17 9.17 0 0 1 14.205 0l-1.693 1.693a6.85 6.85 0 0 0-10.818 0L1.792 4.654m.26 14.434a9.17 9.17 0 0 0 13.685 0l-1.693-1.693a6.85 6.85 0 0 1-10.299 0l-1.693 1.693"
                        fill="#34A853"
                      />
                      <path
                        d="M3.486 6.347a6.85 6.85 0 0 0 0 10.818l1.693-1.693a4.53 4.53 0 0 1 0-7.432L3.486 6.347"
                        fill="#FBBC05"
                      />
                      <path
                        d="M14.257 17.395a6.85 6.85 0 0 0 0-10.818l-1.693 1.693a4.53 4.53 0 0 1 0 7.432l1.693 1.693"
                        fill="#EA4335"
                      />
                    </svg>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">hace 7 meses</span>
                </div>
                <p className="text-[#03255C] mb-4 font-roboto">
                  "10 puntos super atentos su atencion. Lo recomendaria sin ninguna duda"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#DBF6FF] rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-[#019FD5]">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#093C8E]">José L.</p>
                    <p className="text-sm text-[#03255C]">Cliente verificado</p>
                    <p className="text-xs text-gray-500 mt-1">Reseña verificada de Google</p>
                  </div>
                </div>
              </div>

              {/* Reseña de Google 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        d="M22.222 9.542V12h-3.442v3.448H16.333V12h-3.441V9.542h3.441V6.1h2.447v3.442h3.442M8.895 10.5a2.36 2.36 0 0 1 2.363 2.363 2.36 2.36 0 0 1-2.363 2.365 2.36 2.36 0 0 1-2.365-2.365A2.36 2.36 0 0 1 8.895 10.5m0-1.75a4.11 4.11 0 0 0-4.113 4.113 4.11 4.11 0 0 0 4.113 4.115a4.11 4.11 0 0 0 4.115-4.115A4.11 4.11 0 0 0 8.895 8.75"
                        fill="#4285F4"
                      />
                      <path
                        d="M1.792 4.654a9.17 9.17 0 0 1 14.205 0l-1.693 1.693a6.85 6.85 0 0 0-10.818 0L1.792 4.654m.26 14.434a9.17 9.17 0 0 0 13.685 0l-1.693-1.693a6.85 6.85 0 0 1-10.299 0l-1.693 1.693"
                        fill="#34A853"
                      />
                      <path
                        d="M3.486 6.347a6.85 6.85 0 0 0 0 10.818l1.693-1.693a4.53 4.53 0 0 1 0-7.432L3.486 6.347"
                        fill="#FBBC05"
                      />
                      <path
                        d="M14.257 17.395a6.85 6.85 0 0 0 0-10.818l-1.693 1.693a4.53 4.53 0 0 1 0 7.432l1.693 1.693"
                        fill="#EA4335"
                      />
                    </svg>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FBBC05"
                        stroke="#FBBC05"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">hace 11 meses</span>
                </div>
                <p className="text-[#03255C] mb-4 font-roboto">
                  "Muy amables y educados. Excelentes."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#DBF6FF] rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-[#019FD5]">AM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#093C8E]">Ariel M.</p>
                    <p className="text-sm text-[#03255C]">Cliente verificado</p>
                    <p className="text-xs text-gray-500 mt-1">Reseña verificada de Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-16 md:py-24 bg-[#E8F4FD]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium">
                Contactanos
              </h2>
              <p className="mt-4 text-lg text-[#093C8E] max-w-3xl mx-auto font-roboto">
                Estamos aquí para ayudarte. No dudes en comunicarte con nosotros para cualquier consulta o
                asesoramiento.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-12">
              {/* Información de Contacto */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-[#093C8E] font-oxanium">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#019FD5] rounded-full flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-roboto">Teléfono</p>
                      <p className="font-semibold text-[#093C8E] font-roboto">+54 9 11 5976-2237</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#019FD5] rounded-full flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-roboto">Email</p>
                      <p className="font-semibold text-[#093C8E] font-roboto">info@cditurbos.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#019FD5] rounded-full flex items-center justify-center mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-roboto">Dirección</p>
                      <p className="font-semibold text-[#093C8E] font-roboto">Av. Gral. Tomás de Iriarte 2679, CABA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horarios de Atención */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-[#093C8E] font-oxanium">Horarios de Atención</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-[#093C8E]">Lunes a Viernes</span>
                    <span className="font-roboto text-[#093C8E]">8:30 a 17:30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-roboto text-[#093C8E]">Sábados y Domingos</span>
                    <span className="font-roboto text-red-500 font-semibold">Cerrado</span>
                  </div>
                </div>

                <div className="bg-[#FFF3CD] border border-[#FFEAA7] rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">💡</span>
                    <div>
                      <p className="text-sm font-semibold text-[#856404] font-roboto">Tip:</p>
                      <p className="text-sm text-[#856404] font-roboto">
                        Podés adquirir nuestros productos las 24 horas a través de nuestra tienda en <a target="_blank" href="https://www.mercadolibre.com.ar/pagina/cditurbos#from=share_eshop">Mercado Libre</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Síguenos en Redes */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 text-[#093C8E] font-oxanium">Seginos en Redes</h3>

                <p className="text-sm text-gray-600 font-roboto mb-6">
                  Mantenete al día con nuestras últimas novedades y promociones.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/cditurbos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#093C8E] font-roboto">Instagram</p>
                      <p className="text-sm text-gray-600 font-roboto">@cditurbos</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/CDIturbocompresion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#1877F2] rounded-lg flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#093C8E] font-roboto">Facebook</p>
                      <p className="text-sm text-gray-600 font-roboto">CDI Turbocompresión</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp centrado */}
            <div className="text-center">
              <a
                href="https://wa.me/5491159762237"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-8 rounded-lg font-medium text-lg transition-colors gap-3 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Artículos Recientes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#093C8E] font-oxanium">
                Artículos Recientes
              </h2>
              <p className="mt-4 text-lg text-[#03255C] max-w-3xl mx-auto font-roboto">
                Mantente al día con las últimas novedades y consejos sobre turbocompresores
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Artículo 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative">
                  <Image
                    src="/turbo-selection-main.jpeg"
                    alt="Cómo elegir el turbo adecuado para tu vehículo"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#E5262D] text-white text-xs font-semibold px-2 py-1 rounded">
                    Guía
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 font-roboto">15 de Mayo, 2025</p>
                  <h3 className="text-lg font-bold mb-3 text-[#093C8E] font-oxanium">
                    Cómo elegir el turbo adecuado para tu vehículo
                  </h3>
                  <p className="text-[#03255C] mb-4 text-sm font-roboto">
                    Elegir el turbocompresor correcto puede marcar una gran diferencia en el rendimiento de tu motor. En
                    este artículo, te explicamos los factores clave que...
                  </p>
                  <Link
                    href="/blog/como-elegir-turbo"
                    className="text-[#019FD5] hover:text-[#093C8E] font-medium text-sm flex items-center gap-1"
                  >
                    Leer más
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Artículo 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative">
                  <Image
                    src="/turbocompresor-mantenimiento.png"
                    alt="5 señales de que tu turbo necesita mantenimiento"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#019FD5] text-white text-xs font-semibold px-2 py-1 rounded">
                    Mantenimiento
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 font-roboto">2 de Mayo, 2025</p>
                  <h3 className="text-lg font-bold mb-3 text-[#093C8E] font-oxanium">
                    5 señales de que tu turbo necesita mantenimiento
                  </h3>
                  <p className="text-[#03255C] mb-4 text-sm font-roboto">
                    Detectar a tiempo los problemas en tu turbocompresor puede ahorrarte costosas reparaciones. Aprende
                    a identificar las señales de advertencia...
                  </p>
                  <Link
                    href="/blog/senales-mantenimiento-turbo"
                    className="text-[#019FD5] hover:text-[#093C8E] font-medium text-sm flex items-center gap-1"
                  >
                    Leer más
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Artículo 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="relative">
                  <Image
                    src="/turbocharger-comparison.png"
                    alt="Comparativa: Las mejores marcas de turbocompresores 2025"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#093C8E] text-white text-xs font-semibold px-2 py-1 rounded">
                    Análisis
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 font-roboto">20 de Abril, 2025</p>
                  <h3 className="text-lg font-bold mb-3 text-[#093C8E] font-oxanium">
                    Comparativa: Las mejores marcas de turbocompresores 2025
                  </h3>
                  <p className="text-[#03255C] mb-4 text-sm font-roboto">
                    ¿Estás buscando un nuevo turbocompresor pero no sabes qué marca elegir? En este artículo comparamos
                    las principales marcas del mercado...
                  </p>
                  <Link
                    href="/blog/comparativa-marcas-turbocompresores"
                    className="text-[#019FD5] hover:text-[#093C8E] font-medium text-sm flex items-center gap-1"
                  >
                    Leer más
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center border border-[#019FD5] text-[#019FD5] hover:bg-[#019FD5] hover:text-white py-2 px-6 rounded-lg font-medium transition-colors"
              >
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>

        {/* También en Mercado Libre */}
        <section id="mercadolibre" className="py-16 md:py-24 bg-[#FFD836]">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Contenido */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium mb-6">
                  También en Mercado Libre
                </h2>
                <p className="text-lg text-[#093C8E] font-roboto mb-8 max-w-lg">
                  Encontrá nuestros productos en nuestra tienda oficial de Mercado Libre. Envíos a todo el país y
                  múltiples medios de pago.
                </p>
                <a
                  href="https://www.mercadolibre.com.ar/pagina/cditurbos#from=share_eshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#093C8E] hover:bg-[#019FD5] text-white py-3 px-6 rounded-lg font-medium transition-colors gap-2"
                >
                  Visitar tienda
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>

              {/* Imagen/Placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Image
                    src="/400x400_meli.png?height=400&width=400"
                    alt="Productos CDI Turbos en Mercado Libre"
                    width={400}
                    height={300}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
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
                  <Link href="#inicio" className="text-sm hover:text-[#019FD5] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-sm hover:text-[#019FD5] transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#beneficios" className="text-sm hover:text-[#019FD5] transition-colors">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-sm hover:text-[#019FD5] transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.mercadolibre.com.ar/pagina/cditurbos#from=share_eshop" className="text-sm hover:text-[#019FD5] transition-colors">
                    Tienda
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
