import { motion } from 'framer-motion'
import { IconSparkles, IconLocation, IconShield, IconBarChart } from './Icons'

const techs = [
  {
    Icon: IconSparkles,
    iconBg: 'bg-purple-50', iconColor: 'text-purple-600',
    tag: 'Machine Learning', tagBg: 'bg-purple-50 text-purple-600 border-purple-100',
    title: 'IA & Matching Inteligente',
    desc: 'Algoritmos de recomendação que conectam oferta e demanda em tempo real, otimizando preços, horários e preferências alimentares de cada usuário.',
    accentBar: 'from-purple-400 to-purple-300',
    shadow: 'hover:shadow-[0_16px_40px_rgba(168,85,247,0.10)]',
    stat: '94% precisão', statLabel: 'no matching',
    statColor: 'text-purple-600',
  },
  {
    Icon: IconLocation,
    iconBg: 'bg-blue-50', iconColor: 'text-blue-600',
    tag: 'Tempo Real', tagBg: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'Geolocalização Avançada',
    desc: 'Conecta consumidores com restaurantes a menos de 2km com notificações push instantâneas e mapa interativo de ofertas próximas.',
    accentBar: 'from-blue-400 to-cyan-300',
    shadow: 'hover:shadow-[0_16px_40px_rgba(59,130,246,0.10)]',
    stat: '< 500ms', statLabel: 'de latência',
    statColor: 'text-blue-600',
  },
  {
    Icon: IconShield,
    iconBg: 'bg-green-50', iconColor: 'text-green-600',
    tag: 'Criptografado', tagBg: 'bg-green-50 text-green-700 border-green-100',
    title: 'Pagamentos Seguros',
    desc: 'PIX, cartão de crédito/débito e carteiras digitais com criptografia end-to-end. Conformidade total com PCI DSS e LGPD.',
    accentBar: 'from-[#2ECC71] to-emerald-400',
    shadow: 'hover:shadow-[0_16px_40px_rgba(46,204,113,0.12)]',
    stat: '256-bit AES', statLabel: 'criptografia',
    statColor: 'text-green-600',
  },
  {
    Icon: IconBarChart,
    iconBg: 'bg-orange-50', iconColor: 'text-orange-600',
    tag: 'Para Parceiros', tagBg: 'bg-orange-50 text-orange-600 border-orange-100',
    title: 'Dashboard Analytics',
    desc: 'Painel completo com métricas de vendas, impacto ambiental, satisfação de clientes e previsão de demanda com dados em tempo real.',
    accentBar: 'from-orange-400 to-amber-300',
    shadow: 'hover:shadow-[0_16px_40px_rgba(249,115,22,0.10)]',
    stat: '99.9%', statLabel: 'uptime SLA',
    statColor: 'text-orange-600',
  },
]

const stack = [
  { name: '.NET MAUI', sub: 'App multiplataforma' },
  { name: 'C# / .NET 10', sub: 'Linguagem' },
  { name: 'MVVM Toolkit', sub: 'Arquitetura' },
  { name: 'SQLite', sub: 'Dados locais' },
  { name: 'Android', sub: 'Mobile' },
  { name: 'Windows', sub: 'Desktop' },
]

export default function Technology() {
  return (
    <section id="tecnologia" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.45 }} />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-green-700 text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-green-50 border border-green-100 px-3 py-1 rounded-full">Tecnologia</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5 text-gray-900">
            Construído com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-emerald-500">
              tecnologia de ponta
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Stack moderno e escalável, capaz de suportar milhares de transações diárias com performance e segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformPerspective: 800 }}
              whileHover={{ rotateY: i % 2 === 0 ? 5 : -5, rotateX: -4, scale: 1.04, transition: { duration: 0.3 } }}
              className={`group bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300 relative overflow-hidden ${t.shadow}`}
            >
              {/* Accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${t.accentBar} opacity-80`} />

              <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${t.tagBg} mb-5`}>
                {t.tag}
              </span>
              <div className={`w-12 h-12 rounded-2xl ${t.iconBg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <t.Icon className={`w-6 h-6 ${t.iconColor}`} />
              </div>
              <h3 className="text-gray-900 font-bold mb-2 leading-snug">{t.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{t.desc}</p>
              <div className="border-t border-gray-50 pt-4 flex items-end justify-between">
                <div>
                  <p className={`font-black text-lg leading-none ${t.statColor}`}>{t.stat}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
        >
          <p className="text-gray-400 text-sm font-medium">Powered by</p>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <div key={s.name} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 hover:border-green-200 transition-colors duration-200">
                <div>
                  <p className="text-gray-800 text-xs font-semibold">{s.name}</p>
                  <p className="text-gray-400 text-[10px]">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-400 text-xs">Todos os sistemas operando</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
