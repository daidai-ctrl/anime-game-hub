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
    articleCount: 24,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 5,
    tags: ['Adventure', 'Fruits', 'PvP'],
    lastUpdated: '2026-05-24',
  },
  {
    slug: 'anime-rangers',
    name: 'Anime Rangers',
    description: 'Collect and battle with your favorite anime characters! Build the ultimate team, level up your rangers, and conquer challenging quests.',
    robloxUrl: 'https://www.roblox.com/games/anime-rangers',
    coverImage: '/images/anime-rangers.jpeg',
    articleCount: 12,
    codesCount: 2,
    tierListCount: 3,
    guidesCount: 3,
    tags: ['Tower Defense', 'Anime', 'Collection'],
    lastUpdated: '2026-05-22',
  },
  {
    slug: 'anime-vanguards',
    name: 'Anime Vanguards',
    description: 'Defend your base with powerful anime heroes! Strategically place your vanguards, upgrade their abilities, and protect against waves of enemies.',
    robloxUrl: 'https://www.roblox.com/games/anime-vanguards',
    coverImage: '/images/anime-vanguards.jpeg',
    articleCount: 8,
    codesCount: 2,
    tierListCount: 2,
    guidesCount: 3,
    tags: ['Strategy', 'Defense', 'Anime'],
    lastUpdated: '2026-05-20',
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
];
