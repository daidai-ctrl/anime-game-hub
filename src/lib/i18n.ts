export type Locale = 'en' | 'zh' | 'ja' | 'es' | 'pt';

export interface LocaleOption {
  code: Locale;
  label: string;
  flag: string;
}

export const locales: LocaleOption[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '简体中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
  es: 'Español',
  pt: 'Português',
};

// ─── Translation dictionaries ────────────────────────────────────────────────

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Site
    'site.name': 'AnimeGameHub',
    'site.tagline': 'Your go-to source for Roblox anime game codes, tier lists, and guides.',

    // Nav
    'nav.games': 'Games',
    'nav.codes': 'Codes',
    'nav.tierList': 'Tier List',
    'nav.guides': 'Guides',
    'nav.language': 'Language',

    // Hero
    'hero.title': 'Latest Roblox Anime Game {codes}, {tierLists} & {guides}',
    'hero.subtitle': 'Stay updated with the latest codes, rankings, and strategies for your favorite Roblox anime games.',

    // Home sections
    'home.popularGames': 'Popular Games',
    'home.latestCodes': 'Latest Codes',
    'home.latestTierLists': 'Latest Tier Lists',
    'home.viewAll': 'View All',
    'home.noCodes': 'No codes articles yet.',
    'home.noTierLists': 'No tier list articles yet.',

    // Game card
    'game.viewGame': 'View Game',
    'game.playOnRoblox': 'Play on Roblox',

    // Game page
    'game.latestContent': 'Latest Content',
    'game.noContent': 'No content available yet for {game}.',

    // Category labels
    'category.codes': 'Codes',
    'category.tierList': 'Tier List',
    'category.guides': 'Guide',
    'category.updates': 'Updates',
    'category.fixes': 'Fixes',

    // Category pages
    'codes.title': 'Game Codes',
    'codes.description': 'All the latest Roblox anime game codes. Get free rewards, XP boosts, and more!',
    'codes.noArticles': 'No codes articles yet.',
    'tierlist.title': 'Tier Lists',
    'tierlist.description': 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies!',
    'tierlist.noArticles': 'No tier list articles yet.',
    'guides.title': 'Guides',
    'guides.description': 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast!',
    'guides.noArticles': 'No guides yet.',

    // Article
    'article.lastUpdated': 'Last Updated',
    'article.tableOfContents': 'Table of Contents',
    'article.relatedArticles': 'Related Articles',
    'article.code': 'Code',
    'article.reward': 'Reward',
    'article.status': 'Status',
    'article.active': 'Active',
    'article.expired': 'Expired',

    // Breadcrumb
    'breadcrumb.home': 'Home',

    // Footer
    'footer.games': 'Games',
    'footer.categories': 'Categories',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.disclaimer': 'Disclaimer',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.copyright': '© {year} AnimeGameHub. Not affiliated with Roblox Corporation.',

    // Game descriptions
    'game.blox-fruits.desc': 'Become a master swordsman or a powerful blox fruit user as you train to become the strongest player. Explore the world, find new fruits, and battle enemies!',
    'game.anime-rangers.desc': 'Collect and battle with your favorite anime characters! Build the ultimate team, level up your rangers, and conquer challenging quests.',
    'game.anime-vanguards.desc': 'Defend your base with powerful anime heroes! Strategically place your vanguards, upgrade their abilities, and protect against waves of enemies.',
  },

  zh: {
    'site.name': 'AnimeGameHub',
    'site.tagline': '您获取 Roblox 动漫游戏兑换码、排行榜和攻略的首选平台。',

    'nav.games': '游戏',
    'nav.codes': '兑换码',
    'nav.tierList': '排行榜',
    'nav.guides': '攻略',
    'nav.language': '语言',

    'hero.title': '最新 Roblox 动漫游戏{codes}、{tierLists}与{guides}',
    'hero.subtitle': '为您喜爱的 Roblox 动漫游戏获取最新兑换码、排行和攻略。',

    'home.popularGames': '热门游戏',
    'home.latestCodes': '最新兑换码',
    'home.latestTierLists': '最新排行榜',
    'home.viewAll': '查看全部',
    'home.noCodes': '暂无兑换码文章。',
    'home.noTierLists': '暂无排行榜文章。',

    'game.viewGame': '查看游戏',
    'game.playOnRoblox': '在 Roblox 中游玩',

    'game.latestContent': '最新内容',
    'game.noContent': '{game} 暂无可用内容。',

    'category.codes': '兑换码',
    'category.tierList': '排行榜',
    'category.guides': '攻略',
    'category.updates': '更新',
    'category.fixes': '修复',

    'codes.title': '游戏兑换码',
    'codes.description': '所有最新的 Roblox 动漫游戏兑换码。获取免费奖励、经验加成等！',
    'codes.noArticles': '暂无兑换码文章。',
    'tierlist.title': '排行榜',
    'tierlist.description': '全面的 Roblox 动漫游戏排行榜。找到最强角色、果实和策略！',
    'tierlist.noArticles': '暂无排行榜文章。',
    'guides.title': '攻略',
    'guides.description': '深度 Roblox 动漫游戏攻略。学习策略、技巧和窍门，快速升级！',
    'guides.noArticles': '暂无攻略。',

    'article.lastUpdated': '最后更新',
    'article.tableOfContents': '目录',
    'article.relatedArticles': '相关文章',
    'article.code': '兑换码',
    'article.reward': '奖励',
    'article.status': '状态',
    'article.active': '有效',
    'article.expired': '已过期',

    'breadcrumb.home': '首页',

    'footer.games': '游戏',
    'footer.categories': '分类',
    'footer.legal': '法律信息',
    'footer.privacy': '隐私政策',
    'footer.disclaimer': '免责声明',
    'footer.about': '关于我们',
    'footer.contact': '联系我们',
    'footer.copyright': '© {year} AnimeGameHub. 与 Roblox Corporation 无关联。',

    'game.blox-fruits.desc': '成为剑术大师或强大的果实能力者，训练成为最强玩家。探索世界、寻找新果实、与敌人战斗！',
    'game.anime-rangers.desc': '收集并与您最喜爱的动漫角色一起战斗！组建最强队伍、升级您的角色、征服挑战任务。',
    'game.anime-vanguards.desc': '用强大的动漫英雄保卫基地！策略性部署守卫、升级技能、抵御敌人的进攻浪潮。',
  },

  ja: {
    'site.name': 'AnimeGameHub',
    'site.tagline': 'Robloxアニメゲームのコード、ティアリスト、攻略の最強情報源。',

    'nav.games': 'ゲーム',
    'nav.codes': 'コード',
    'nav.tierList': 'ティアリスト',
    'nav.guides': '攻略',
    'nav.language': '言語',

    'hero.title': '最新Robloxアニメゲームの{codes}、{tierLists}＆{guides}',
    'hero.subtitle': 'お気に入りのRobloxアニメゲームの最新コード、ランキング、攻略情報をお届けします。',

    'home.popularGames': '人気ゲーム',
    'home.latestCodes': '最新コード',
    'home.latestTierLists': '最新ティアリスト',
    'home.viewAll': 'すべて見る',
    'home.noCodes': 'コード記事はまだありません。',
    'home.noTierLists': 'ティアリスト記事はまだありません。',

    'game.viewGame': 'ゲームを見る',
    'game.playOnRoblox': 'Robloxでプレイ',

    'game.latestContent': '最新コンテンツ',
    'game.noContent': '{game}のコンテンツはまだありません。',

    'category.codes': 'コード',
    'category.tierList': 'ティアリスト',
    'category.guides': '攻略',
    'category.updates': 'アップデート',
    'category.fixes': '修正',

    'codes.title': 'ゲームコード',
    'codes.description': '最新のRobloxアニメゲームコードまとめ。無料報酬、経験値ブーストなどを入手！',
    'codes.noArticles': 'コード記事はまだありません。',
    'tierlist.title': 'ティアリスト',
    'tierlist.description': 'Robloxアニメゲームの包括的なティアリスト。最強キャラ、フルーツ、戦略を見つけよう！',
    'tierlist.noArticles': 'ティアリスト記事はまだありません。',
    'guides.title': '攻略',
    'guides.description': 'Robloxアニメゲームの詳細攻略。戦略、ヒント、コツを学んでレベルアップ！',
    'guides.noArticles': '攻略記事はまだありません。',

    'article.lastUpdated': '最終更新',
    'article.tableOfContents': '目次',
    'article.relatedArticles': '関連記事',
    'article.code': 'コード',
    'article.reward': '報酬',
    'article.status': 'ステータス',
    'article.active': '有効',
    'article.expired': '期限切れ',

    'breadcrumb.home': 'ホーム',

    'footer.games': 'ゲーム',
    'footer.categories': 'カテゴリー',
    'footer.legal': '法的事情',
    'footer.privacy': 'プライバシーポリシー',
    'footer.disclaimer': '免責事項',
    'footer.about': 'について',
    'footer.contact': 'お問い合わせ',
    'footer.copyright': '© {year} AnimeGameHub. Roblox Corporationとは無関係です。',

    'game.blox-fruits.desc': '剣術マスターまたは強力なフルーツ使いとなり、最強のプレイヤーを目指して修行しましょう。世界を探索し、新しいフルーツを見つけ、敵と戦おう！',
    'game.anime-rangers.desc': 'お気に入りのアニメキャラを集めてバトル！最強チームを組み、レンジャーをレベルアップし、クエストを征服しよう。',
    'game.anime-vanguards.desc': '強力なアニメヒーローでベースを防衛！戦略的にヴァンガードを配置し、アビリティを強化して、敵の波から守ろう。',
  },

  es: {
    'site.name': 'AnimeGameHub',
    'site.tagline': 'Tu fuente de códigos, tier lists y guías para juegos de anime en Roblox.',

    'nav.games': 'Juegos',
    'nav.codes': 'Códigos',
    'nav.tierList': 'Tier List',
    'nav.guides': 'Guías',
    'nav.language': 'Idioma',

    'hero.title': 'Últimos {codes}, {tierLists} y {guides} de juegos de anime en Roblox',
    'hero.subtitle': 'Mantente actualizado con los últimos códigos, rankings y estrategias para tus juegos de anime favoritos en Roblox.',

    'home.popularGames': 'Juegos Populares',
    'home.latestCodes': 'Últimos Códigos',
    'home.latestTierLists': 'Últimos Tier Lists',
    'home.viewAll': 'Ver Todo',
    'home.noCodes': 'No hay artículos de códigos todavía.',
    'home.noTierLists': 'No hay artículos de tier list todavía.',

    'game.viewGame': 'Ver Juego',
    'game.playOnRoblox': 'Jugar en Roblox',

    'game.latestContent': 'Último Contenido',
    'game.noContent': 'No hay contenido disponible para {game} todavía.',

    'category.codes': 'Códigos',
    'category.tierList': 'Tier List',
    'category.guides': 'Guía',
    'category.updates': 'Actualizaciones',
    'category.fixes': 'Correcciones',

    'codes.title': 'Códigos de Juegos',
    'codes.description': 'Todos los últimos códigos de juegos de anime en Roblox. ¡Consigue recompensas gratis, boosts de XP y más!',
    'codes.noArticles': 'No hay artículos de códigos todavía.',
    'tierlist.title': 'Tier Lists',
    'tierlist.description': 'Tier lists completas para juegos de anime en Roblox. ¡Encuentra los mejores personajes, frutas y estrategias!',
    'tierlist.noArticles': 'No hay artículos de tier list todavía.',
    'guides.title': 'Guías',
    'guides.description': 'Guías detalladas para juegos de anime en Roblox. ¡Aprende estrategias, consejos y trucos para subir de nivel rápido!',
    'guides.noArticles': 'No hay guías todavía.',

    'article.lastUpdated': 'Última Actualización',
    'article.tableOfContents': 'Tabla de Contenidos',
    'article.relatedArticles': 'Artículos Relacionados',
    'article.code': 'Código',
    'article.reward': 'Recompensa',
    'article.status': 'Estado',
    'article.active': 'Activo',
    'article.expired': 'Expirado',

    'breadcrumb.home': 'Inicio',

    'footer.games': 'Juegos',
    'footer.categories': 'Categorías',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.disclaimer': 'Aviso Legal',
    'footer.about': 'Acerca de',
    'footer.contact': 'Contacto',
    'footer.copyright': '© {year} AnimeGameHub. No afiliado con Roblox Corporation.',

    'game.blox-fruits.desc': 'Conviértete en un maestro espadachín o un poderoso usuario de frutas mientras entrenas para ser el jugador más fuerte. ¡Explora el mundo, encuentra nuevas frutas y lucha contra enemigos!',
    'game.anime-rangers.desc': '¡Recoge y lucha con tus personajes de anime favoritos! Construye el equipo definitivo, sube de nivel a tus rangers y conquista misiones desafiantes.',
    'game.anime-vanguards.desc': '¡Defiende tu base con poderosos héroes de anime! Coloca estratégicamente a tus vanguardias, mejora sus habilidades y protege contra oleadas de enemigos.',
  },

  pt: {
    'site.name': 'AnimeGameHub',
    'site.tagline': 'Sua fonte de códigos, tier lists e guias para jogos de anime no Roblox.',

    'nav.games': 'Jogos',
    'nav.codes': 'Códigos',
    'nav.tierList': 'Tier List',
    'nav.guides': 'Guias',
    'nav.language': 'Idioma',

    'hero.title': 'Últimos {codes}, {tierLists} e {guides} de jogos de anime no Roblox',
    'hero.subtitle': 'Fique atualizado com os últimos códigos, rankings e estratégias para seus jogos de anime favoritos no Roblox.',

    'home.popularGames': 'Jogos Populares',
    'home.latestCodes': 'Últimos Códigos',
    'home.latestTierLists': 'Últimos Tier Lists',
    'home.viewAll': 'Ver Tudo',
    'home.noCodes': 'Nenhum artigo de códigos ainda.',
    'home.noTierLists': 'Nenhum artigo de tier list ainda.',

    'game.viewGame': 'Ver Jogo',
    'game.playOnRoblox': 'Jogar no Roblox',

    'game.latestContent': 'Último Conteúdo',
    'game.noContent': 'Nenhum conteúdo disponível para {game} ainda.',

    'category.codes': 'Códigos',
    'category.tierList': 'Tier List',
    'category.guides': 'Guia',
    'category.updates': 'Atualizações',
    'category.fixes': 'Correções',

    'codes.title': 'Códigos de Jogos',
    'codes.description': 'Todos os últimos códigos de jogos de anime no Roblox. Ganhe recompensas grátis, boosts de XP e mais!',
    'codes.noArticles': 'Nenhum artigo de códigos ainda.',
    'tierlist.title': 'Tier Lists',
    'tierlist.description': 'Tier lists completas para jogos de anime no Roblox. Encontre os melhores personagens, frutas e estratégias!',
    'tierlist.noArticles': 'Nenhum artigo de tier list ainda.',
    'guides.title': 'Guias',
    'guides.description': 'Guias detalhados para jogos de anime no Roblox. Aprenda estratégias, dicas e truques para subir de nível rápido!',
    'guides.noArticles': 'Nenhum guia ainda.',

    'article.lastUpdated': 'Última Atualização',
    'article.tableOfContents': 'Índice',
    'article.relatedArticles': 'Artigos Relacionados',
    'article.code': 'Código',
    'article.reward': 'Recompensa',
    'article.status': 'Status',
    'article.active': 'Ativo',
    'article.expired': 'Expirado',

    'breadcrumb.home': 'Início',

    'footer.games': 'Jogos',
    'footer.categories': 'Categorias',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.disclaimer': 'Aviso Legal',
    'footer.about': 'Sobre',
    'footer.contact': 'Contato',
    'footer.copyright': '© {year} AnimeGameHub. Não afiliado à Roblox Corporation.',

    'game.blox-fruits.desc': 'Torne-se um mestre espadachim ou um poderoso usuário de frutas enquanto treina para ser o jogador mais forte. Explore o mundo, encontre novas frutas e lute contra inimigos!',
    'game.anime-rangers.desc': 'Colete e lute com seus personagens de anime favoritos! Monte o time definitivo, suba o nível dos seus rangers e conquiste missões desafiadoras.',
    'game.anime-vanguards.desc': 'Defenda sua base com poderosos heróis de anime! Posicione estrategicamente suas vanguardas, melhore suas habilidades e proteja contra ondas de inimigos.',
  },
};

// ─── Helper functions ────────────────────────────────────────────────────────

export function t(key: string, locale: Locale = defaultLocale, params?: Record<string, string>): string {
  let value = translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      value = value.replace(`{${paramKey}}`, paramValue);
    }
  }
  return value;
}

export function getCategoryLabel(category: string, locale: Locale = defaultLocale): string {
  if (category === 'codes') return t('category.codes', locale);
  if (category === 'tier-list') return t('category.tierList', locale);
  if (category === 'guides') return t('category.guides', locale);
  if (category === 'updates') return t('category.updates', locale);
  if (category === 'fixes') return t('category.fixes', locale);
  return category;
}

export function getGameDescription(gameSlug: string, locale: Locale = defaultLocale): string {
  return t(`game.${gameSlug}.desc`, locale);
}

export function isValidLocale(value: string): value is Locale {
  return ['en', 'zh', 'ja', 'es', 'pt'].includes(value);
}

export function getLocaleFromCookie(cookieValue: string | undefined): Locale {
  if (cookieValue && isValidLocale(cookieValue)) return cookieValue;
  return defaultLocale;
}

// Date formatting per locale
export function formatDate(dateString: string, locale: Locale = defaultLocale): string {
  const date = new Date(dateString);
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
    ja: 'ja-JP',
    es: 'es-ES',
    pt: 'pt-BR',
  };
  return date.toLocaleDateString(localeMap[locale], {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatShortDate(dateString: string, locale: Locale = defaultLocale): string {
  const date = new Date(dateString);
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
    ja: 'ja-JP',
    es: 'es-ES',
    pt: 'pt-BR',
  };
  return date.toLocaleDateString(localeMap[locale], {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatMonthDay(dateString: string, locale: Locale = defaultLocale): string {
  const date = new Date(dateString);
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
    ja: 'ja-JP',
    es: 'es-ES',
    pt: 'pt-BR',
  };
  return date.toLocaleDateString(localeMap[locale], {
    month: 'short',
    day: 'numeric',
  });
}
