import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import {
  IconSearch, IconStar, IconHeart, IconBell, IconHome, IconBag, IconUser,
  IconLocation, IconLeaf, IconWallet, IconUtensils, IconAndroid,
  CatTodos, CatHamburguer, CatPizza, CatJapones, CatAcai,
} from './Icons'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function FloatingBadge({ className, delay, children }) {
  return (
    <motion.div
      className={`absolute hidden lg:block bg-white border border-gray-100 rounded-2xl px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.05)] ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: 3.5 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 },
      }}
    >
      {children}
    </motion.div>
  )
}

function PhoneScreen() {
  const deals = [
    {
      name: 'Smash Burger Clássico', restaurant: 'Burger House',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
      rating: '4.8', reviews: '142', dist: '0,7 km',
      old: 'R$ 58,00', price: 'R$ 27,84', off: '52', pickup: 'Retirar até 23h',
    },
    {
      name: 'Pizza Margherita (Família)', restaurant: 'Pizzaria Roma',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      rating: '4.7', reviews: '167', dist: '1,2 km',
      old: 'R$ 82,00', price: 'R$ 45,10', off: '45', pickup: 'Retirar até 23h',
    },
    {
      name: 'Combo Sushi (12 peças)', restaurant: 'Sushi No Ar',
      img: 'https://images.unsplash.com/photo-1712192644058-092c39b36b6f?w=400&q=80',
      rating: '4.7', reviews: '134', dist: '2,2 km',
      old: 'R$ 92,90', price: 'R$ 55,74', off: '40', pickup: 'Retirar até 20h',
    },
  ]
  const cats = [
    { label: 'Todos', Icon: CatTodos, active: true },
    { label: 'Hambúrguer', Icon: CatHamburguer },
    { label: 'Pizza', Icon: CatPizza },
    { label: 'Japonês', Icon: CatJapones },
    { label: 'Açaí', Icon: CatAcai },
  ]
  const tabs = [
    { label: 'Início', Icon: IconHome, active: true },
    { label: 'Explorar', Icon: IconSearch },
    { label: 'Favoritos', Icon: IconHeart },
    { label: 'Reservas', Icon: IconBag },
    { label: 'Perfil', Icon: IconUser },
  ]
  return (
    <div className="h-full bg-[#F9FBF8] flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-4 pt-3 pb-1">
        <span className="text-gray-900 text-[9px] font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-[2px] items-end h-3">
            {[1,2,3,4].map(h => (
              <div key={h} className="w-[3px] bg-gray-800 rounded-sm" style={{ height: `${h * 3}px` }} />
            ))}
          </div>
          <div className="w-4 h-2 border border-gray-400 rounded-[2px] flex items-center px-[1px]">
            <div className="w-2 h-1 bg-[#2ECC71] rounded-[1px]" />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between px-3.5 pt-1.5 pb-2.5">
        <div>
          <p className="text-gray-900 text-[13px] font-extrabold leading-tight">Olá, Marina!</p>
          <p className="text-gray-500 text-[8px] leading-tight mt-0.5">Que bom te ver por aqui!</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center shadow-sm">
          <IconBell className="w-3.5 h-3.5 text-gray-600" />
        </div>
      </div>
      <div className="mx-3.5 bg-white border border-[#E5E7EB] rounded-full h-8 px-3 flex items-center justify-between mb-3 shadow-sm">
        <span className="text-gray-400 text-[8px] truncate">Buscar estabelecimentos ou pratos...</span>
        <IconSearch className="w-3 h-3 text-gray-400 flex-shrink-0" />
      </div>
      <div className="flex gap-1.5 px-3.5 mb-3 overflow-hidden">
        {cats.map(({ label, Icon, active }) => (
          <div key={label} className="flex flex-col items-center gap-1 w-[40px] flex-shrink-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? 'bg-[#2ECC71] text-white' : 'bg-[#E6F8EA] text-[#1B5E3B]'}`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className={`text-[7px] font-semibold leading-none ${active ? 'text-[#2ECC71]' : 'text-gray-500'}`}>{label}</span>
          </div>
        ))}
      </div>
      <div className="px-3.5 flex items-center justify-between mb-2">
        <p className="text-gray-900 text-[10px] font-bold">Ofertas próximas de você</p>
        <span className="text-[#2ECC71] text-[8px] font-semibold">Ver todas</span>
      </div>
      <div className="px-3.5 flex-1 overflow-hidden space-y-2.5">
        {deals.map((d, i) => (
          <div key={i} className="rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="relative h-[88px] bg-[#E6F8EA]">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover" draggable={false} loading="eager" />
              <span className="absolute top-2 left-2 bg-[#E53935] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow">-{d.off}%</span>
              <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow">
                <IconHeart className="w-2.5 h-2.5 text-gray-400" />
              </span>
            </div>
            <div className="px-2.5 py-2">
              <p className="text-gray-900 text-[10px] font-bold leading-tight truncate">{d.name}</p>
              <p className="text-gray-500 text-[8px] leading-tight">{d.restaurant}</p>
              <div className="flex items-center gap-1 mt-1 text-[8px]">
                <IconStar className="w-2.5 h-2.5 text-amber-400" />
                <span className="text-gray-900 font-semibold">{d.rating}</span>
                <span className="text-gray-400">({d.reviews})</span>
                <span className="text-gray-300 mx-0.5">·</span>
                <IconLocation className="w-2.5 h-2.5 text-gray-400" />
                <span className="text-gray-500">{d.dist}</span>
              </div>
              <div className="flex items-end justify-between mt-1.5">
                <div>
                  <p className="text-gray-400 text-[7px] line-through leading-none">De {d.old}</p>
                  <p className="text-[#2ECC71] text-[13px] font-extrabold leading-tight">{d.price}</p>
                </div>
                <span className="text-[#2ECC71] text-[8px] font-semibold mb-0.5">{d.pickup}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center px-2 py-2 bg-white border-t border-[#E5E7EB] mt-auto">
        {tabs.map(({ label, Icon, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <Icon className={`w-4 h-4 ${active ? 'text-[#2ECC71]' : 'text-gray-400'}`} />
            <span className={`text-[6px] leading-none ${active ? 'text-[#2ECC71] font-semibold' : 'text-gray-400'}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneMockup() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-220, 220], [14, -14]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(mouseX, [-220, 220], [-14, 14]), { stiffness: 180, damping: 22 })

  function onMove(e) {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }
  function onLeave() { mouseX.set(0); mouseY.set(0) }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-[240px] h-[490px] mx-auto"
      style={{ perspective: '1100px' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Glow beneath phone (desktop só) */}
        <div className="absolute hidden lg:block inset-x-4 -bottom-6 h-20 bg-green-300/30 blur-2xl rounded-full pointer-events-none" />
        <div className="absolute hidden lg:block inset-0 rounded-[42px] bg-green-200/20 blur-3xl scale-110 pointer-events-none" />

        {/* Phone shell */}
        <div className="relative w-full h-full rounded-[42px] bg-gradient-to-b from-[#3a3a3a] via-[#242424] to-[#1a1a1a] p-[1.5px] shadow-[0_40px_80px_rgba(0,0,0,0.28),0_12px_32px_rgba(46,204,113,0.12),inset_0_1px_0_rgba(255,255,255,0.14)]">
          <div className="w-full h-full rounded-[40.5px] overflow-hidden">
            {/* Dynamic island */}
            <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[88px] h-[26px] bg-black rounded-full z-20 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
            <PhoneScreen />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-2px] top-20 w-[3px] h-10 bg-gradient-to-b from-[#555] to-[#333] rounded-r-full" />
        <div className="absolute left-[-2px] top-16 w-[3px] h-8 bg-gradient-to-b from-[#555] to-[#333] rounded-l-full" />
        <div className="absolute left-[-2px] top-28 w-[3px] h-8 bg-gradient-to-b from-[#555] to-[#333] rounded-l-full" />

        {/* Floating badges */}
        <FloatingBadge className="-left-20 top-8" delay={0.8}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
              <IconLeaf className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-900 text-[10px] font-bold leading-tight">12,4 kg CO₂</p>
              <p className="text-gray-400 text-[9px] leading-tight">evitados</p>
            </div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="-right-20 top-1/4" delay={1.0}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
              <IconWallet className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-900 text-[10px] font-bold leading-tight">R$ 158,50</p>
              <p className="text-gray-400 text-[9px] leading-tight">Economizados</p>
            </div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="-left-24 bottom-24" delay={1.2}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
              <IconUtensils className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-900 text-[10px] font-bold leading-tight">23 refeições</p>
              <p className="text-gray-400 text-[9px] leading-tight">salvas por você</p>
            </div>
          </div>
        </FloatingBadge>

        <FloatingBadge className="-right-24 bottom-40" delay={1.4}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <div>
              <p className="text-gray-900 text-[10px] font-bold leading-tight">Nova oferta!</p>
              <p className="text-gray-400 text-[9px] leading-tight flex items-center gap-0.5">
                <IconLocation className="w-2 h-2" /> 300m de você
              </p>
            </div>
          </div>
        </FloatingBadge>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30])

  // Parallax (ligado ao scroll) só no desktop — no mobile pesa e trava
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #d1fae5 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.7 }} />
        {/* Green glow orbs (só no desktop — blur grande é pesado no mobile) */}
        <div className="absolute hidden lg:block bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-100 blur-[160px] rounded-full opacity-70" />
        <div className="absolute hidden lg:block top-1/4 -left-40 w-72 h-72 bg-green-50 blur-[100px] rounded-full" />
        <div className="absolute hidden lg:block top-1/3 right-0 w-64 h-64 bg-emerald-50 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center w-full">
        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ y: isDesktop ? textY : 0 }}
          className="max-w-xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wide">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Sustentabilidade Alimentar · Versão Beta
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-[2rem] sm:text-5xl lg:text-[5rem] xl:text-[5.5rem] font-black leading-[1.12] lg:leading-[1.0] tracking-tight mb-6 lg:mb-7 text-gray-900">
            Menos<br />
            desperdício,{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] via-emerald-500 to-green-400">
                mais
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] via-emerald-500 to-green-400">
                economia
              </span>
              <span className="absolute -bottom-1.5 left-0 right-0 h-[4px] bg-gradient-to-r from-[#2ECC71]/70 via-emerald-400/50 to-transparent rounded-full" />
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
            Conectamos restaurantes com consumidores para transformar excedente em oportunidade.
            Refeições premium com até{' '}
            <span className="text-gray-900 font-bold">70% de desconto</span>,
            impacto real no planeta.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-9">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 bg-[#2ECC71] hover:bg-[#27b863] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_10px_40px_rgba(46,204,113,0.50)] shadow-[0_6px_20px_rgba(46,204,113,0.35)] text-base"
            >
              <IconAndroid className="w-5 h-5" />
              Baixar para Android
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-2xl border border-gray-200 transition-all duration-200 hover:border-gray-300 hover:shadow-lg shadow-sm text-base"
            >
              Como funciona →
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            {[
              { icon: '✔', text: 'Android 8.0+', sub: 'gratuito' },
              { icon: '✔', text: '8 categorias', sub: 'de culinária' },
              { icon: '✔', text: 'Sem cadastro', sub: 'para explorar' },
            ].map((p) => (
              <div key={p.text} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px] font-black flex-shrink-0">{p.icon}</span>
                <span className="text-sm text-gray-700 font-semibold">{p.text} <span className="text-gray-400 font-normal">· {p.sub}</span></span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: phone 3D */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: isDesktop ? phoneY : 0 }}
          className="flex justify-center items-center relative min-h-[480px] lg:min-h-[560px]"
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#2ECC71]/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
