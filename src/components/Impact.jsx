import { motion } from 'framer-motion'
import {
  IconSearch, IconBell, IconBag, IconHeart, IconStar,
  IconLocation, IconLeaf, IconUser, IconStore, IconWallet,
} from './Icons'

const features = [
  {
    Icon: IconSearch,
    iconBg: 'bg-blue-50', iconColor: 'text-blue-600',
    title: 'Busca inteligente',
    desc: 'Encontre restaurantes e pratos perto de você com busca por nome, categoria ou localização.',
    bar: 'from-blue-400 to-cyan-300',
  },
  {
    Icon: IconLocation,
    iconBg: 'bg-green-50', iconColor: 'text-green-600',
    title: 'Geolocalização em tempo real',
    desc: 'Veja ofertas disponíveis ao seu redor no mapa. Distância e horário de retirada sempre visíveis.',
    bar: 'from-[#2ECC71] to-emerald-400',
  },
  {
    Icon: IconBell,
    iconBg: 'bg-purple-50', iconColor: 'text-purple-600',
    title: 'Notificações de ofertas',
    desc: 'Receba alertas quando novos pratos com desconto aparecerem próximos a você.',
    bar: 'from-purple-400 to-purple-300',
  },
  {
    Icon: IconBag,
    iconBg: 'bg-amber-50', iconColor: 'text-amber-600',
    title: 'Reserva instantânea',
    desc: 'Reserve o prato em segundos diretamente pelo app. Confirmação imediata, sem espera.',
    bar: 'from-amber-400 to-yellow-300',
  },
  {
    Icon: IconHeart,
    iconBg: 'bg-rose-50', iconColor: 'text-rose-500',
    title: 'Lista de favoritos',
    desc: 'Salve seus restaurantes e pratos preferidos para acessar rapidamente quando quiser.',
    bar: 'from-rose-400 to-pink-300',
  },
  {
    Icon: IconStar,
    iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600',
    title: 'Avaliações reais',
    desc: 'Veja avaliações de outros usuários antes de reservar. Transparência em cada pedido.',
    bar: 'from-yellow-400 to-amber-300',
  },
  {
    Icon: IconLeaf,
    iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600',
    title: 'Impacto ambiental',
    desc: 'Acompanhe quanto CO₂ você ajudou a evitar e quantas refeições salvou do desperdício.',
    bar: 'from-emerald-400 to-teal-300',
  },
  {
    Icon: IconStore,
    iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600',
    title: 'Painel do restaurante',
    desc: 'Restaurantes gerenciam ofertas, estoque e pedidos por um painel dedicado no próprio app.',
    bar: 'from-indigo-400 to-blue-300',
  },
]

const categories = [
  'Hambúrguer', 'Pizza', 'Japonês', 'Massas', 'Padaria', 'Açaí', 'Doces', 'Todos',
]

export default function Impact() {
  return (
    <section id="funcionalidades" className="py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-green-50 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-green-700 text-xs font-bold uppercase tracking-[0.2em] mb-4 bg-green-50 border border-green-100 px-3 py-1 rounded-full">O App na Prática</span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5 text-gray-900">
            Tudo que você precisa,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-emerald-500">
              em um só lugar
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            O EcoFood foi feito para ser simples. Abriu o app, encontrou a oferta, reservou e foi buscar.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              style={{ transformPerspective: 800 }}
              whileHover={{ rotateY: i % 2 === 0 ? 4 : -4, rotateX: -3, scale: 1.03, transition: { duration: 0.3 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 cursor-default relative overflow-hidden group"
            >
              <div className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <f.Icon className={`w-5 h-5 ${f.iconColor}`} />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-2 leading-snug">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${f.bar} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <p className="text-gray-900 font-bold text-lg mb-1">8 categorias de comida</p>
              <p className="text-gray-400 text-sm">Filtros por tipo de culinária direto na tela inicial.</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((c) => (
                <span key={c} className="px-3 py-1.5 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
