import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { IconTrash, IconTrendingDown, IconFactory, IconLocation, IconClock } from './Icons'

function AnimCounter({ target, suffix = '', prefix = '', decimals = 0 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = null
    const dur = 2000
    const tick = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setVal(ease * target)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  const display = decimals > 0
    ? val.toFixed(decimals)
    : Math.floor(val).toLocaleString('pt-BR')

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

const stats = [
  {
    Icon: IconTrash,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50',
    value: 30, suffix: '%',
    numColor: 'text-red-500',
    label: 'da produção global é desperdiçada',
    desc: 'Um terço de tudo que é produzido nunca chega a uma mesa.',
    bg: 'bg-gradient-to-br from-red-50 to-white',
    border: 'border-red-100',
    topBar: 'bg-red-400',
  },
  {
    Icon: IconTrendingDown,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    value: 1.3, suffix: ' tri', prefix: 'R$ ', decimals: 1,
    numColor: 'text-orange-500',
    label: 'em perdas econômicas por ano',
    desc: 'O custo global ultrapassa o PIB de muitos países.',
    bg: 'bg-gradient-to-br from-orange-50 to-white',
    border: 'border-orange-100',
    topBar: 'bg-orange-400',
  },
  {
    Icon: IconFactory,
    iconColor: 'text-yellow-600',
    iconBg: 'bg-yellow-50',
    value: 10, suffix: '%',
    numColor: 'text-yellow-600',
    label: 'das emissões globais de carbono',
    desc: 'Mais CO₂ que toda a aviação comercial do mundo.',
    bg: 'bg-gradient-to-br from-yellow-50 to-white',
    border: 'border-yellow-100',
    topBar: 'bg-yellow-400',
  },
  {
    Icon: IconLocation,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    value: 46, suffix: ' mi ton',
    numColor: 'text-green-600',
    label: 'desperdiçadas no Brasil por ano',
    desc: 'Suficiente para alimentar o país inteiro por 2 anos.',
    bg: 'bg-gradient-to-br from-green-50 to-white',
    border: 'border-green-100',
    topBar: 'bg-green-400',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f3f4f6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-red-500 text-xs font-bold uppercase tracking-[0.25em] mb-5 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full">O Problema</span>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 text-gray-900 leading-[1.05]">
            Uma crise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              silenciosa
            </span>
            {' '}no prato
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Enquanto 828 milhões de pessoas passam fome, toneladas de alimentos perfeitos são descartadas todos os dias.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformPerspective: 900 }}
              whileHover={{ rotateY: 5, rotateX: -4, scale: 1.04, transition: { duration: 0.3 } }}
              className={`relative ${s.bg} border ${s.border} rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] transition-shadow duration-300 cursor-default overflow-hidden group`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${s.topBar} rounded-t-3xl`} />

              <div className={`w-12 h-12 rounded-2xl ${s.iconBg} flex items-center justify-center mb-6 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <s.Icon className={`w-6 h-6 ${s.iconColor}`} />
              </div>

              {/* Big number */}
              <div className={`text-[3rem] lg:text-[3.5rem] font-black mb-2 leading-none ${s.numColor} tracking-tight`}>
                <AnimCounter target={s.value} suffix={s.suffix} prefix={s.prefix || ''} decimals={s.decimals || 0} />
              </div>

              <p className="text-gray-700 text-base font-semibold mb-3 leading-snug">{s.label}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Alert banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-50 via-red-50 to-white border border-orange-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-[0_4px_32px_rgba(249,115,22,0.08)]"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 shadow-sm">
            <IconClock className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-gray-900 text-2xl font-black mb-2 leading-snug">
              A cada <span className="text-red-500">3 segundos</span>, um caminhão de alimentos é desperdiçado.
            </p>
            <p className="text-gray-400 text-base">
              Restaurantes são responsáveis por até <strong className="text-orange-500 font-bold">35%</strong> desse desperdício — e a solução já existe.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2.5 bg-green-500 text-white font-bold px-5 py-3 rounded-full whitespace-nowrap shadow-[0_4px_16px_rgba(46,204,113,0.35)] flex-shrink-0">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            EcoFood resolve isso
          </div>
        </motion.div>
      </div>
    </section>
  )
}
