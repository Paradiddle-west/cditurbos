"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  {
    src: "/turbo-hero.jpg",
    alt: "Técnico especializado sosteniendo un turbocompresor",
  },
  {
    src: "/turbocompresor-mantenimiento.png",
    alt: "Selección de turbocompresores",
  },
  {
    src: "/turbocharger-comparison.png",
    alt: "Comparativa de turbocompresores",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Cambiar imagen cada 5 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover object-center scale-110 transition-transform duration-[20s] ease-out hover:scale-105"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicadores del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 