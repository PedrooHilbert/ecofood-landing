import { Logo } from './Icons'

const links = {
  Produto: ['Features', 'Preços', 'Roadmap', 'Changelog', 'Status'],
  Empresa: ['Sobre nós', 'Blog', 'Carreiras', 'Imprensa'],
  Parceiros: ['Para restaurantes', 'API & Integrações', 'Programa de afiliados'],
  Legal: ['Privacidade', 'Termos de uso', 'Cookies', 'LGPD'],
}

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo variant="verde" className="h-11 w-auto" />
              <span className="font-black text-gray-900 text-xl">EcoFood</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Reduzindo o desperdício alimentar, um prato de cada vez. Para um planeta melhor.
            </p>
            {/* Socials */}
            <div className="flex gap-2">
              {[
                { label: 'X', title: 'Twitter' },
                { label: 'in', title: 'LinkedIn' },
                { label: '▶', title: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.title}
                  href="#"
                  title={s.title}
                  className="w-8 h-8 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 text-xs transition-all duration-200 shadow-sm"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-gray-800 font-semibold text-sm mb-4">{cat}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-gray-700 text-sm transition-colors duration-150">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 EcoFood. Todos os direitos reservados.
            </p>
            <span className="text-gray-200 hidden sm:block">·</span>
            <p className="text-gray-400 text-sm hidden sm:block">São Paulo, Brasil</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-xs">Todos os sistemas operando</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
