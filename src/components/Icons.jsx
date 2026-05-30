// Real EcoFood icons, recreated 1:1 from the production app's SVG assets
// (Resources/Images/*.svg). Stroke-based, 24x24, using currentColor so they
// can be tinted anywhere.

function Svg({ className = 'w-6 h-6', children, filled = false, strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

/* ----------------------------- UI icons ----------------------------- */

export const IconLocation = (p) => (
  <Svg {...p}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </Svg>
)

export const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </Svg>
)

export const IconStar = (p) => (
  <Svg filled {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Svg>
)

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 15.5" />
  </Svg>
)

export const IconBag = (p) => (
  <Svg {...p}>
    <rect x="4" y="8" width="16" height="13" rx="1" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </Svg>
)

export const IconHeart = (p) => (
  <Svg {...p}>
    <path d="M12 21C12 21 3 14.5 3 8.5A5.5 5.5 0 0 1 12 6.1 5.5 5.5 0 0 1 21 8.5C21 14.5 12 21 12 21z" />
  </Svg>
)

export const IconHome = (p) => (
  <Svg {...p}>
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </Svg>
)

export const IconUser = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </Svg>
)

/* --------------------------- Category icons -------------------------- */

export const CatTodos = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
  </Svg>
)

export const CatPizza = (p) => (
  <Svg {...p}>
    <path d="M12 2.5L3 21H21L12 2.5Z" />
    <line x1="12" y1="2.5" x2="12" y2="21" />
    <path d="M6 15.5Q12 11.5 18 15.5" />
    <circle cx="9" cy="13" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="13" r="1.1" fill="currentColor" stroke="none" />
  </Svg>
)

export const CatHamburguer = (p) => (
  <Svg {...p}>
    <path d="M4.5 10C4.5 7 7.5 5 12 5C16.5 5 19.5 7 19.5 10H4.5Z" />
    <line x1="3.5" y1="13" x2="20.5" y2="13" />
    <line x1="3.5" y1="16" x2="20.5" y2="16" />
    <path d="M5 19H19C20.1 19 21 18.1 21 17V16H3V17C3 18.1 3.9 19 5 19Z" />
  </Svg>
)

export const CatJapones = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="14" r="7.5" />
    <circle cx="12" cy="14" r="3" />
    <line x1="7" y1="2" x2="9.5" y2="7.5" />
    <line x1="11" y1="2" x2="12.5" y2="7" />
  </Svg>
)

export const CatMassas = (p) => (
  <Svg {...p}>
    <line x1="9" y1="3" x2="9" y2="8" />
    <line x1="12" y1="3" x2="12" y2="8" />
    <line x1="15" y1="3" x2="15" y2="8" />
    <path d="M9 8Q9 11 12 11Q15 11 15 8" />
    <line x1="12" y1="11" x2="12" y2="21" />
    <path d="M16 15C18 13.5 20 15.5 18 17C16 18.5 18 20 20 19" />
  </Svg>
)

export const CatPadaria = (p) => (
  <Svg {...p}>
    <path d="M5 12C5 8.5 7.5 6 12 6C16.5 6 19 8.5 19 12C19 13.5 18 14.5 17 15V20H7V15C6 14.5 5 13.5 5 12Z" />
    <path d="M9 8.5C9 7.5 10 7 12 7C14 7 15 7.5 15 8.5" />
    <line x1="10" y1="15" x2="10" y2="20" />
    <line x1="14" y1="15" x2="14" y2="20" />
  </Svg>
)

export const CatAcai = (p) => (
  <Svg {...p}>
    <path d="M6 8H18L16.5 20.5C16.3 21.4 14.3 22 12 22C9.7 22 7.7 21.4 7.5 20.5L6 8Z" />
    <line x1="5" y1="8" x2="19" y2="8" />
    <path d="M7 5H17C17.6 5 18 5.4 18 6V8H6V6C6 5.4 6.4 5 7 5Z" />
    <line x1="15" y1="2" x2="14" y2="8" />
    <path d="M8.5 12Q10.5 10.5 12 12Q13.5 13.5 15.5 12" />
  </Svg>
)

export const CatDoces = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="3.5" r="1.5" />
    <path d="M12 5L12 7.5" />
    <path d="M7.5 10.5C7.5 7 16.5 7 16.5 10.5H7.5Z" />
    <path d="M9.5 10.5C9.5 9 14.5 9 14.5 10.5" />
    <path d="M7.5 10.5H16.5L15.5 20H8.5L7.5 10.5Z" />
    <line x1="10.5" y1="12.5" x2="10" y2="20" />
    <line x1="13.5" y1="12.5" x2="14" y2="20" />
  </Svg>
)

// Ordered exactly like the app's category bar
export const categories = [
  { key: 'todos', label: 'Todos', Icon: CatTodos },
  { key: 'pizza', label: 'Pizza', Icon: CatPizza },
  { key: 'hamburguer', label: 'Hambúrguer', Icon: CatHamburguer },
  { key: 'japones', label: 'Japonês', Icon: CatJapones },
  { key: 'massas', label: 'Massas', Icon: CatMassas },
  { key: 'padaria', label: 'Padaria', Icon: CatPadaria },
  { key: 'acai', label: 'Açaí', Icon: CatAcai },
  { key: 'doces', label: 'Doces', Icon: CatDoces },
]

/* --------------------- Concept icons (same line style) --------------------- */
// Line icons in the app's visual language (stroke 1.8, round caps) for concepts
// the product icon set doesn't cover. Used across the marketing sections.

export const IconStore = (p) => (
  <Svg {...p}>
    <path d="M3 9l1.2-4.2A1 1 0 0 1 5.16 4h13.68a1 1 0 0 1 .96.8L21 9" />
    <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
    <path d="M3 9h18" />
    <path d="M9 20v-5h6v5" />
  </Svg>
)

export const IconSmartphone = (p) => (
  <Svg {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2.5" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </Svg>
)

export const IconGlobe = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </Svg>
)

export const IconLeaf = (p) => (
  <Svg {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.52-4.48 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </Svg>
)

export const IconWallet = (p) => (
  <Svg {...p}>
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </Svg>
)

export const IconBell = (p) => (
  <Svg {...p}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </Svg>
)

export const IconBolt = (p) => (
  <Svg {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
)

export const IconUtensils = (p) => (
  <Svg {...p}>
    <path d="M7 2v7a2 2 0 0 0 4 0V2" />
    <line x1="9" y1="9" x2="9" y2="22" />
    <path d="M16 2c-1.5 1.5-2 4-2 6 0 1.6 1 2.6 2 2.6V22" />
  </Svg>
)

export const IconSparkles = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
    <path d="M18.5 15l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6Z" />
  </Svg>
)

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)

export const IconBarChart = (p) => (
  <Svg {...p}>
    <line x1="3" y1="20" x2="21" y2="20" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="12" y1="20" x2="12" y2="9" />
    <line x1="18" y1="20" x2="18" y2="4" />
  </Svg>
)

export const IconTrash = (p) => (
  <Svg {...p}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </Svg>
)

export const IconTrendingDown = (p) => (
  <Svg {...p}>
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </Svg>
)

export const IconFactory = (p) => (
  <Svg {...p}>
    <path d="M2 20h20" />
    <path d="M4 20V9l5 3.5V9l5 3.5V9l5 3.5V20" />
    <path d="M10 20v-4h2v4" />
  </Svg>
)

export const IconApple = (p) => (
  <Svg filled {...p}>
    <path d="M15.8 2c.1 1.2-.4 2.3-1.1 3.1-.7.9-1.9 1.5-3 1.4-.1-1.1.4-2.3 1.1-3 .8-.9 2-1.4 3-1.5z" />
    <path d="M18.3 17.2c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.1 3.1-3.7 3.1-1.4 0-1.7-.9-3.6-.9s-2.3.9-3.6.9c-1.6 0-2.8-1.6-3.7-3-2.4-3.8-2.7-8.2-1.2-10.6 1.1-1.7 2.8-2.7 4.4-2.7 1.6 0 2.7 1 4 1 1.3 0 2.1-1 4-1 1.4 0 2.9.8 4 2.1-3.5 2-3 7 .5 8.4z" />
  </Svg>
)

export const IconAndroid = (p) => (
  <Svg filled {...p}>
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C7.15 3.23 6 5.01 6 7h12c0-1.99-1.15-3.77-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
  </Svg>
)

export const IconPlay = (p) => (
  <Svg filled {...p}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </Svg>
)

/* ------------------------------- Logo ------------------------------- */
// Real EcoFood sprout mark (resized from the app's logo_*_sem_fundo.png).

export function Logo({ variant = 'branca', className = 'h-8 w-auto' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/logo_${variant}.png`}
      alt="EcoFood"
      className={className}
      draggable={false}
    />
  )
}
