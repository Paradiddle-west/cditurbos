import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MobileMenu } from "@/components/mobile-menu"

export default function PoliticaPrivacidadPage() {
  const menuLinks = [
    { href: "https://www.cditurbos.com/", label: "Inicio" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="https://www.cditurbos.com/">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="https://www.cditurbos.com/" className="text-sm font-medium hover:text-[#019FD5] transition-colors">
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
            <Link href="https://www.cditurbos.com/" className="hover:text-[#019FD5]">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-[#093C8E] font-medium">Política de Privacidad</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="container py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#093C8E] font-oxanium mb-8">
              Política de Privacidad
            </h1>
            
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="text-lg text-gray-700 font-roboto mb-6">
                En CDI Turbos nos comprometemos a proteger la privacidad de nuestros usuarios. Los datos personales recopilados a través de nuestros formularios o canales de contacto serán utilizados únicamente para responder consultas, gestionar pedidos y mejorar la experiencia del usuario.
              </p>
              
              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Recopilación de Información
              </h2>
              <p className="text-gray-700 font-roboto mb-4">
                Recopilamos información cuando usted:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-roboto mb-6">
                <li>Se registra en nuestro sitio web</li>
                <li>Realiza una consulta a través de nuestros formularios de contacto</li>
                <li>Se comunica con nosotros por WhatsApp, email o teléfono</li>
                <li>Realiza una compra a través de nuestra tienda en Mercado Libre</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Uso de la Información
              </h2>
              <p className="text-gray-700 font-roboto mb-4">
                La información que recopilamos se utiliza para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-roboto mb-6">
                <li>Responder consultas y solicitudes de información</li>
                <li>Gestionar pedidos y envíos</li>
                <li>Proporcionar soporte técnico</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Enviar información sobre productos y promociones (solo con su consentimiento)</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Protección de Datos
              </h2>
              <p className="text-gray-700 font-roboto mb-6">
                No compartimos, vendemos ni cedemos información personal a terceros, salvo obligación legal. Utilizamos medidas de seguridad técnicas y organizativas para proteger los datos almacenados contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Sus Derechos
              </h2>
              <p className="text-gray-700 font-roboto mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-roboto mb-6">
                <li>Solicitar acceso a sus datos personales</li>
                <li>Rectificar información incorrecta o incompleta</li>
                <li>Solicitar la eliminación de sus datos personales</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-700 font-roboto mb-6">
                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Cambios en la Política
              </h2>
              <p className="text-gray-700 font-roboto mb-6">
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán notificados en esta página con una fecha de última actualización. Le recomendamos revisar periódicamente esta política.
              </p>

              <h2 className="text-2xl font-bold text-[#093C8E] font-oxanium mt-8 mb-4">
                Contacto
              </h2>
              <p className="text-gray-700 font-roboto mb-6">
                Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-roboto mb-6">
                <li><strong>Email:</strong> info@cditurbos.com</li>
                <li><strong>WhatsApp:</strong> +54 9 11 5976-2237</li>
                <li><strong>Dirección:</strong> Av. Gral. Tomás de Iriarte 2679, CABA</li>
              </ul>

              <div className="bg-[#F0F7FF] p-6 rounded-lg my-8 border-l-4 border-[#019FD5]">
                <p className="text-sm text-[#093C8E] font-roboto">
                  <strong>Última actualización:</strong> Enero 2025
                </p>
              </div>
            </div>
          </div>
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
                  <Link href="https://www.cditurbos.com/" className="text-sm hover:text-[#019FD5] transition-colors">
                    Inicio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">{/* Espacio para mantener el grid */}</div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/60 font-roboto">© 2025 CDI Turbos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 