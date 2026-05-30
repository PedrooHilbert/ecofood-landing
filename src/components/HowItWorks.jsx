import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IconStore, IconBell, IconBag, IconLeaf, IconBolt } from './Icons'

const steps = [
  {
    num: '01', Icon: IconStore,
    title: 'Restaurante publica o excedente',
    desc: 'Com 3 cliques, o restaurante cadastra as refeições que sobraram com preço especial e horário de retirada.',
    pill: 'Restaurante',
    accent: '#3b82f6',
    iconBg: 'bg-blue-50', iconColor: 'text-blue-600',
    numColor: 'text-blue-100',
    cardBg: 'bg-gradient-to-br from-blue-50 to-white',
    border: 'border-blue-100',
    tag: 'bg-blue-50 border-blue-100 text-blue-600',
  },
  {
    num: '02', Icon: IconBell,
    title: 'Usuários são notificados',
    desc: 'O app alerta consumidores próximos em tempo real com matching inteligente por localização.',
    pill: 'IA + Geo',
    accent: '#a855f7',
    iconBg: 'bg-purple-50', iconColor: 'text-purple-600',
    numColor: 'text-purple-100',
    cardBg: 'bg-gradient-to-br from-purple-50 to-white',
    border: 'border-purple-100',
    tag: 'bg-purple-50 border-purple-100 text-purple-600',
  },
  {
    num: '03', Icon: IconBag,
    title: 'Cliente escolhe e reserva',
    desc: 'Em segundos o usuário reserva e paga pelo app. Confirmação instantânea e pagamento seguro.',
    pill: 'Pagamento',
    accent: '#f59e0b',
    iconBg: 'bg-amber-50', iconColor: 'text-amber-600',
    numColor: 'text-amber-100',
    cardBg: 'bg-gradient-to-br from-amber-50 to-white',
    border: 'border-amber-100',
    tag: 'bg-amber-50 border-amber-100 text-amber-600',
  },
  {
    num: '04', Icon: IconLeaf,
    title: 'Retira e aproveita',
    desc: 'O cliente retira no horário certo. Economia no bolso, zero desperdício, impacto positivo no planeta.',
    pill: 'Impacto',
    accent: '#2ECC71',
    iconBg: 'bg-green-50', iconColor: 'text-green-600',
    numColor: 'text-green-100',
    cardBg: 'bg-gradient-to-br from-green-50 to-white',
    border: 'border-green-100',
    tag: 'bg-green-50 border-green-100 text-green-700',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="como-funciona" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d1fae5 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-green-700 text-xs font-bold uppercase tracking-[0.25em] mb-5 bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">Como Funciona</span>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6 text-gray-900 leading-[1.05]">
            Simples como pedir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-emerald-500">
              uma pizza
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-xl mx-auto">
            Da publicação ao prato na mão em menos de 5 minutos.
          </p>
        </motion.div>

        {/* Scroll progress line */}
        <div className="hidden lg:block relative mb-2">
          <div className="absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gray-100 z-0 rounded-full" />
          <motion.div
            className="absolute top-8 left-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 via-amber-400 to-green-400 z-0 rounded-full"
            style={{ width: lineWidth }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.15 }}
              style={{ transformPerspective: 800 }}
              whileHover={{ rotateX: -5, scale: 1.03, transition: { duration: 0.3 } }}
              className={`relative ${step.cardBg} border ${step.border} rounded-3xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.09)] transition-shadow duration-300 group cursor-default overflow-hidden`}
            >
              {/* Big background number */}
              <div className={`absolute -top-4 -right-2 text-[7rem] font-black leading-none ${step.numColor} select-none pointer-events-none`}>
                {step.num}
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-5 z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <step.Icon className={`w-7 h-7 ${step.iconColor}`} />
              </div>

              {/* Pill */}
              <span className={`relative inline-block text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full ${step.tag} mb-4 z-10`}>
                {step.pill}
              </span>

              <h3 className="relative text-gray-900 font-black text-lg mb-3 leading-snug z-10">{step.title}</h3>
              <p className="relative text-gray-400 text-sm leading-relaxed z-10">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="lg:hidden mt-6 flex justify-center text-gray-200">
                  <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Speed strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-50 via-emerald-50 to-white border border-green-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_24px_rgba(46,204,113,0.08)]"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
              <IconBolt className="w-7 h-7" />
            </div>
            <div>
              <p className="text-gray-900 font-black text-xl">Tempo médio por transação</p>
              <p className="text-gray-400 text-sm mt-0.5">Do registro à retirada, tudo em minutos.</p>
            </div>
          </div>
          <div className="flex items-center gap-10 flex-shrink-0">
            {[['< 1 min', 'Publicar oferta'], ['< 30 seg', 'Reservar & pagar'], ['0 min', 'Sem filas']].map(([t, l]) => (
              <div key={l} className="text-center">
                <p className="text-[#2ECC71] font-black text-2xl leading-none">{t}</p>
                <p className="text-gray-400 text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
