import { motion } from 'framer-motion'
import { IconStore, IconSmartphone, IconGlobe } from './Icons'

const cards = [
  {
    Icon: IconStore,
    iconBg: 'bg-blue-100', iconColor: 'text-blue-700',
    tag: 'Para Restaurantes', tagBg: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'Transforme excedente em receita',
    desc: 'Publique refeições excedentes em segundos. Em vez de descartar, gere receita extra com um painel de controle intuitivo.',
    features: ['Painel de controle simples', 'Publicação em 3 cliques', 'Relatórios de impacto', 'Notificações automáticas'],
    checkColor: 'text-blue-500',
    bg: 'bg-white',
    border: 'border-gray-100',
    shadow: 'shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(59,130,246,0.12)]',
    topBar: 'bg-gradient-to-r from-blue-400 to-cyan-400',
  },
  {
    Icon: IconSmartphone,
    iconBg: 'bg-white/20', iconColor: 'text-white',
    tag: 'Para Consumidores', tagBg: 'bg-white/15 text-white border-white/20',
    title: 'Refeições premium, preço acessível',
    desc: 'Descubra restaurantes incríveis perto de você com refeições até 70% mais baratas. Qualidade garantida, impacto positivo.',
    features: ['Até 70% de desconto real', 'Geolocalização em tempo real', 'Avaliações verificadas', 'Reserva instantânea'],
    featured: true,
    checkColor: 'text-green-200',
    bg: 'bg-gradient-to-br from-[#2ECC71] via-emerald-500 to-green-600',
    border: 'border-white/10',
    shadow: 'shadow-[0_20px_60px_rgba(46,204,113,0.35)] hover:shadow-[0_28px_70px_rgba(46,204,113,0.45)]',
    topBar: null,
    dark: true,
  },
  {
    Icon: IconGlobe,
    iconBg: 'bg-emerald-100', iconColor: 'text-emerald-700',
    tag: 'Para o Planeta', tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    title: 'Cada refeição salva faz diferença',
    desc: 'Cada prato vendido evita emissões de CO₂ e reduz resíduos. Juntos construímos um sistema alimentar mais justo.',
    features: ['Cálculo de impacto CO₂', 'Relatório de sustentabilidade', 'Certificado verde', 'ONGs parceiras'],
    checkColor: 'text-emerald-500',
    bg: 'bg-white',
    border: 'border-gray-100',
    shadow: 'shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(16,185,129,0.12)]',
    topBar: 'bg-gradient-to-r from-emerald-400 to-teal-400',
  },
]

export default function Solution() {
  return (
    <section id="solução" className="py-20 lg:py-32 bg-[#F9FBF8] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute hidden lg:block bottom-0 left-1/4 w-[600px] h-[500px] bg-green-100/60 blur-[160px] rounded-full" />
        <div className="absolute hidden lg:block top-0 right-0 w-[400px] h-[400px] bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="inline-block text-green-700 text-xs font-bold uppercase tracking-[0.25em] mb-5 bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">A Solução</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-gray-900 leading-[1.05]">
            Uma plataforma,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-emerald-500">
              três impactos
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            EcoFood cria um ecossistema onde restaurantes, consumidores e o meio ambiente saem ganhando.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-7">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{ transformPerspective: 900 }}
              whileHover={{ rotateY: c.featured ? 0 : i === 0 ? 5 : -5, rotateX: c.featured ? 0 : -3, scale: c.featured ? 1.02 : 1.025, transition: { duration: 0.35 } }}
              className={`relative ${c.bg} border ${c.border} rounded-3xl p-9 transition-shadow duration-300 group ${c.shadow} ${c.featured ? '-translate-y-4 lg:-translate-y-6 z-10' : ''}`}
            >
              {c.topBar && <div className={`absolute top-0 left-10 right-10 h-1 ${c.topBar} rounded-b-full`} />}

              {c.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-green-700 text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                    Mais popular
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${c.featured ? 'shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : 'shadow-sm'}`}>
                <c.Icon className={`w-8 h-8 ${c.iconColor}`} />
              </div>

              <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${c.tagBg} mb-5`}>
                {c.tag}
              </span>

              <h3 className={`text-2xl font-black mt-4 mb-4 leading-snug ${c.dark ? 'text-white' : 'text-gray-900'}`}>{c.title}</h3>
              <p className={`text-base leading-relaxed mb-8 ${c.dark ? 'text-white/70' : 'text-gray-400'}`}>{c.desc}</p>

              <ul className="space-y-3">
                {c.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm font-medium ${c.dark ? 'text-white/90' : 'text-gray-600'}`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${c.dark ? 'bg-white/20' : 'bg-green-50'}`}>
                      <svg className={`w-3 h-3 ${c.checkColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
