export interface Game {
  slug: string;
  name: string;
  description: string;
  robloxUrl: string;
  coverImage: string;
  articleCount: number;
  codesCount: number;
  tierListCount: number;
  guidesCount: number;
  tags: string[];
  lastUpdated: string;
}

export const games: Game[] = [
  {
    slug: 'blox-fruits',
    name: 'Blox Fruits',
    description: 'Become a master swordsman or a powerful blox fruit user as you train to become the strongest player. Explore the world, find new fruits, and battle enemies!',
    robloxUrl: 'https://www.roblox.com/games/2753915549',
    coverImage: '/images/blox-fruits.jpeg',
    articleCount: 22,
    codesCount: 2,
    tierListCount: 6,
    guidesCount: 13,
    tags: ['Adventure', 'Fruits', 'PvP'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'anime-rangers',
    name: 'Anime Rangers',
    description: 'Collect and battle with your favorite anime characters! Build the ultimate team, level up your rangers, and conquer challenging quests.',
    robloxUrl: 'https://www.roblox.com/games/anime-rangers',
    coverImage: '/images/anime-rangers.jpeg',
    articleCount: 17,
    codesCount: 2,
    tierListCount: 5,
    guidesCount: 10,
    tags: ['Tower Defense', 'Anime', 'Collection'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'anime-vanguards',
    name: 'Anime Vanguards',
    description: 'Defend your base with powerful anime heroes! Strategically place your vanguards, upgrade their abilities, and protect against waves of enemies.',
    robloxUrl: 'https://www.roblox.com/games/anime-vanguards',
    coverImage: '/images/anime-vanguards.jpeg',
    articleCount: 18,
    codesCount: 2,
    tierListCount: 4,
    guidesCount: 11,
    tags: ['Strategy', 'Defense', 'Anime'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'anime-last-stand',
    name: 'Anime Last Stand',
    description: 'Defend your base with legendary anime heroes in Anime Last Stand! Summon powerful units, evolve them, and battle through endless waves of enemies.',
    robloxUrl: 'https://www.roblox.com/games/anime-last-stand',
    coverImage: '/images/anime-last-stand.jpeg',
    articleCount: 14,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 9,
    tags: ['Tower Defense', 'Anime', 'Evolution'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'anime-defenders',
    name: 'Anime Defenders',
    description: 'Defend your base with legendary anime heroes in Anime Defenders! Collect powerful defenders, evolve them, and battle through challenging stages.',
    robloxUrl: 'https://www.roblox.com/games/anime-defenders',
    coverImage: '/images/anime-defenders.jpeg',
    articleCount: 15,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 10,
    tags: ['Tower Defense', 'Anime', 'Strategy'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'arise-crossover',
    name: 'Arise Crossover',
    description: 'Explore multiple anime worlds in Arise Crossover! Collect iconic characters, master unique abilities, and conquer crossover challenges.',
    robloxUrl: 'https://www.roblox.com/games/arise-crossover',
    coverImage: '/images/arise-crossover.jpeg',
    articleCount: 15,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 10,
    tags: ['RPG', 'Anime', 'Crossover'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'blue-lock-rivals',
    name: 'Blue Lock Rivals',
    description: 'Compete in intense anime soccer battles in Blue Lock Rivals! Build your dream team, unlock powerful players, and dominate the field.',
    robloxUrl: 'https://www.roblox.com/games/blue-lock-rivals',
    coverImage: '/images/blue-lock-rivals.jpeg',
    articleCount: 15,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 10,
    tags: ['Sports', 'Anime', 'Competitive'],
    lastUpdated: '2026-05-25',
  },
  {
    slug: 'anime-saga',
    name: 'Anime Saga',
    description: 'Embark on an epic anime adventure in Anime Saga! Collect heroes, explore dungeons, and build the ultimate team in this Roblox RPG.',
    robloxUrl: 'https://www.roblox.com/games/anime-saga',
    coverImage: '/images/anime-saga.jpeg',
    articleCount: 15,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 10,
    tags: ['RPG', 'Anime', 'Adventure'],
    lastUpdated: '2026-05-25',
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export interface GameUpdate {
  game: string;
  gameSlug: string;
  title: string;
  type: 'update' | 'patch' | 'new-character' | 'new-version';
  date: string;
  href?: string;
}

export const latestUpdates: GameUpdate[] = [
  { game: 'Blox Fruits', gameSlug: 'blox-fruits', title: 'Blox Fruits Update 26 — New Fruits, Reworks & More', type: 'update', date: '2026-05-24', href: '/blox-fruits/update-26' },
  { game: 'Anime Rangers', gameSlug: 'anime-rangers', title: 'Anime Rangers Update 4 — New Characters & Events', type: 'new-version', date: '2026-05-22', href: '/anime-rangers/tier-list' },
  { game: 'Anime Vanguards', gameSlug: 'anime-vanguards', title: 'Anime Vanguards New Units — Summer Banner', type: 'new-character', date: '2026-05-20', href: '/anime-vanguards/tier-list' },
  { game: 'Blox Fruits', gameSlug: 'blox-fruits', title: 'Blox Fruits Eagle & Creation Fruit Released', type: 'new-character', date: '2026-05-18', href: '/blox-fruits/tier-list' },
  { game: 'Anime Vanguards', gameSlug: 'anime-vanguards', title: 'Anime Vanguards Balance Patch — Meta Shift', type: 'patch', date: '2026-05-15', href: '/anime-vanguards/guides' },
  { game: 'Anime Last Stand', gameSlug: 'anime-last-stand', title: 'Anime Last Stand Update — New Secret Units & Evolution', type: 'update', date: '2026-05-25', href: '/anime-last-stand/update-guide' },
  { game: 'Anime Last Stand', gameSlug: 'anime-last-stand', title: 'Anime Last Stand Codes — Free Gems & Summons', type: 'new-version', date: '2026-05-25', href: '/anime-last-stand/codes' },
  { game: 'Anime Defenders', gameSlug: 'anime-defenders', title: 'Anime Defenders Update — New Defenders & Relics', type: 'update', date: '2026-05-25', href: '/anime-defenders/update-guide' },
  { game: 'Anime Defenders', gameSlug: 'anime-defenders', title: 'Anime Defenders Codes — Free Gems & Rolls', type: 'new-version', date: '2026-05-25', href: '/anime-defenders/codes' },
  { game: 'Arise Crossover', gameSlug: 'arise-crossover', title: 'Arise Crossover Update — New Characters & Worlds', type: 'update', date: '2026-05-25', href: '/arise-crossover/update-guide' },
  { game: 'Arise Crossover', gameSlug: 'arise-crossover', title: 'Arise Crossover Codes — Free Summons & Currency', type: 'new-version', date: '2026-05-25', href: '/arise-crossover/codes' },
  { game: 'Blue Lock Rivals', gameSlug: 'blue-lock-rivals', title: 'Blue Lock Rivals Update — New Characters & Modes', type: 'update', date: '2026-05-25', href: '/blue-lock-rivals/update-guide' },
  { game: 'Blue Lock Rivals', gameSlug: 'blue-lock-rivals', title: 'Blue Lock Rivals Codes — Free Currency & Rolls', type: 'new-version', date: '2026-05-25', href: '/blue-lock-rivals/codes' },
  { game: 'Anime Saga', gameSlug: 'anime-saga', title: 'Anime Saga Update — New Heroes & Dungeons', type: 'update', date: '2026-05-25', href: '/anime-saga/update-guide' },
  { game: 'Anime Saga', gameSlug: 'anime-saga', title: 'Anime Saga Codes — Free Gems & Summons', type: 'new-version', date: '2026-05-25', href: '/anime-saga/codes' },
];
