import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Logo, IconAndroid } from './Icons'

const navLinks = ['Problema', 'Solução', 'Como Funciona', 'Funcionalidades']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl border-b border-gray-100 shadow-[0_1px_24px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo
            variant="verde"
            className="h-11 w-auto transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-black text-gray-900 text-xl tracking-tight">EcoFood</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-gray-500 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 text-sm bg-[#2ECC71] hover:bg-[#27b863] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_4px_20px_rgba(46,204,113,0.4)] hover:scale-[1.03] shadow-[0_2px_10px_rgba(46,204,113,0.25)]"
          >
            <IconAndroid className="w-4 h-4" />
            Baixar para Android
          </a>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-5 h-[2px] bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-3 text-gray-600 hover:text-gray-900 text-sm border-b border-gray-50 last:border-0 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
