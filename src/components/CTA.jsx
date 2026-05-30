import { motion } from 'framer-motion'
import { IconAndroid, IconShield, IconBolt, IconLeaf } from './Icons'

const requirements = [
  { label: 'Android 8.0 ou superior', detail: '(API 26+)' },
  { label: 'Sem iOS / iPhone', detail: 'apenas Android' },
  { label: 'Gratuito', detail: 'sem custo algum' },
  { label: 'Conexão com internet', detail: 'para buscar ofertas' },
]

const highlights = [
  { Icon: IconShield, label: 'APK verificado', sub: 'Sem vírus, sem rastreamento' },
  { Icon: IconBolt, label: 'Instalação rápida', sub: 'Menos de 30 segundos' },
  { Icon: IconLeaf, label: '100% gratuito', sub: 'Sem assinatura ou taxa' },
]

export default function CTA() {
  return (
    <section id="download" className="py-20 lg:py-32 relative overflow-hidden bg-[#F0FDF4]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #bbf7d0 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.6 }} />
        <div className="absolute hidden lg:block top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-green-200/40 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Android badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-green-200 text-green-700 text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-sm">
            <IconAndroid className="w-4 h-4 text-green-600" />
            Disponível para Android
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.05] text-gray-900">
            Baixe agora e comece{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] via-emerald-500 to-green-400">
              a economizar
            </span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Instale o EcoFood no seu Android e encontre refeições com desconto perto de você. É gratuito, sem cadastro obrigatório para explorar.
          </p>

          {/* Main download button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`${import.meta.env.BASE_URL}ecofood.apk`}
              download
              className="inline-flex items-center gap-3 bg-[#2ECC71] hover:bg-[#27b863] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(46,204,113,0.45)] shadow-[0_6px_24px_rgba(46,204,113,0.35)] text-base"
            >
              <IconAndroid className="w-6 h-6" />
              <div className="text-left">
                <p className="text-white/80 text-[10px] leading-none font-normal mb-0.5">Baixar APK gratuito</p>
                <p className="font-bold leading-none">EcoFood para Android</p>
              </div>
            </a>

            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-7 py-4 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
            >
              Como instalar o APK?
            </a>
          </div>

          {/* Requirements */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
            {requirements.map((r) => (
              <span key={r.label} className="flex items-center gap-1.5 text-sm text-gray-500">
                <svg className={`w-3.5 h-3.5 flex-shrink-0 ${r.label.includes('iOS') ? 'text-red-400' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {r.label.includes('iOS')
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  }
                </svg>
                <span className="font-medium text-gray-700">{r.label}</span>
                <span className="text-gray-400 text-xs">{r.detail}</span>
              </span>
            ))}
          </div>

          {/* Highlights strip */}
          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map(({ Icon, label, sub }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-gray-900 font-semibold text-sm">{label}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Install tip */}
          <p className="mt-8 text-gray-400 text-xs leading-relaxed max-w-md mx-auto">
            <strong className="text-gray-600">Como instalar:</strong> Baixe o APK, abra o arquivo no seu Android e permita a instalação de fontes desconhecidas nas configurações. Pronto!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
