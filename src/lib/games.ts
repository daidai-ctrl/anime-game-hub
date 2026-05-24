export interface Game {
  slug: string;
  name: string;
  description: string;
  robloxUrl: string;
  coverImage: string;
}

export const games: Game[] = [
  {
    slug: 'blox-fruits',
    name: 'Blox Fruits',
    description: 'Become a master swordsman or a powerful blox fruit user as you train to become the strongest player. Explore the world, find new fruits, and battle enemies!',
    robloxUrl: 'https://www.roblox.com/games/2753915549',
    coverImage: '/games/blox-fruits.jpg',
  },
  {
    slug: 'anime-rangers',
    name: 'Anime Rangers',
    description: 'Collect and battle with your favorite anime characters! Build the ultimate team, level up your rangers, and conquer challenging quests.',
    robloxUrl: 'https://www.roblox.com/games/anime-rangers',
    coverImage: '/games/anime-rangers.jpg',
  },
  {
    slug: 'anime-vanguards',
    name: 'Anime Vanguards',
    description: 'Defend your base with powerful anime heroes! Strategically place your vanguards, upgrade their abilities, and protect against waves of enemies.',
    robloxUrl: 'https://www.roblox.com/games/anime-vanguards',
    coverImage: '/games/anime-vanguards.jpg',
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}
