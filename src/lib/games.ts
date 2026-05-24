export interface Game {
  slug: string;
  name: string;
  description: string;
  robloxUrl: string;
  coverImage: string;
  articleCount: number;
  tags: string[];
  lastUpdated: string;
}

export const games: Game[] = [
  {
    slug: 'blox-fruits',
    name: 'Blox Fruits',
    description: 'Become a master swordsman or a powerful blox fruit user as you train to become the strongest player. Explore the world, find new fruits, and battle enemies!',
    robloxUrl: 'https://www.roblox.com/games/2753915549',
    coverImage: '/games/blox-fruits.jpg',
    articleCount: 24,
    tags: ['Adventure', 'Fruits', 'PvP'],
    lastUpdated: '2026-05-24',
  },
  {
    slug: 'anime-rangers',
    name: 'Anime Rangers',
    description: 'Collect and battle with your favorite anime characters! Build the ultimate team, level up your rangers, and conquer challenging quests.',
    robloxUrl: 'https://www.roblox.com/games/anime-rangers',
    coverImage: '/games/anime-rangers.jpg',
    articleCount: 12,
    tags: ['Tower Defense', 'Anime', 'Collection'],
    lastUpdated: '2026-05-22',
  },
  {
    slug: 'anime-vanguards',
    name: 'Anime Vanguards',
    description: 'Defend your base with powerful anime heroes! Strategically place your vanguards, upgrade their abilities, and protect against waves of enemies.',
    robloxUrl: 'https://www.roblox.com/games/anime-vanguards',
    coverImage: '/games/anime-vanguards.jpg',
    articleCount: 8,
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
}

export const latestUpdates: GameUpdate[] = [
  { game: 'Blox Fruits', gameSlug: 'blox-fruits', title: 'Blox Fruits Dragon Rework', type: 'update', date: '2026-05-24' },
  { game: 'Anime Rangers', gameSlug: 'anime-rangers', title: 'Anime Rangers Update 4', type: 'new-version', date: '2026-05-22' },
  { game: 'Anime Vanguards', gameSlug: 'anime-vanguards', title: 'Anime Vanguards New Units', type: 'new-character', date: '2026-05-20' },
  { game: 'Blox Fruits', gameSlug: 'blox-fruits', title: 'Blox Fruits Patch Notes v24.1', type: 'patch', date: '2026-05-18' },
  { game: 'Anime Rangers', gameSlug: 'anime-rangers', title: 'Anime Rangers New Character: Gojo', type: 'new-character', date: '2026-05-15' },
];
