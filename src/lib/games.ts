export interface GameFAQ {
  question: string;
  answer: string;
}

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
  whatIs: string;
  bestItemLabel: string;
  bestItemSlug: string;
  faqs: GameFAQ[];
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
    whatIs: 'Blox Fruits is one of the most popular Roblox anime games, inspired by the anime One Piece. Players can become master swordsmen or powerful fruit users, explore a vast world, collect Devil Fruits, battle enemies and bosses, and trade with other players. The game features regular updates with new fruits, islands, and content.',
    bestItemLabel: 'Best Fruits',
    bestItemSlug: 'tier-list',
    faqs: [
      { question: 'What are the best fruits in Blox Fruits?', answer: 'The best fruits include Dragon, Venom, Shadow, and Dough. Check our Blox Fruits Tier List for the full ranking.' },
      { question: 'How do I redeem codes in Blox Fruits?', answer: 'Open the game, tap the Twitter bird icon on the left side, enter the code, and press Try to redeem your rewards.' },
      { question: 'How often does Blox Fruits update?', answer: 'Blox Fruits typically receives major updates every 1-2 months, with smaller patches and bug fixes in between.' },
      { question: 'Is Blox Fruits free to play?', answer: 'Yes, Blox Fruits is free to play on Roblox. You can purchase in-game items with Robux, but all core gameplay is accessible for free.' },
    ],
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
    whatIs: 'Anime Rangers is a popular Roblox tower defense game where players collect anime characters, deploy them strategically to defend against waves of enemies, and upgrade their abilities. The game features characters from multiple anime series, regular updates with new units and maps.',
    bestItemLabel: 'Best Units',
    bestItemSlug: 'tier-list',
    faqs: [
      { question: 'What are the best units in Anime Rangers?', answer: 'The best units change with each update. Check our Anime Rangers Tier List for the current meta ranking.' },
      { question: 'How do I get more gems in Anime Rangers?', answer: 'You can earn gems by completing stages, daily quests, using codes, and participating in events. Check our Gems Guide for details.' },
      { question: 'How do I redeem codes in Anime Rangers?', answer: 'Open the game, click the Settings icon, find the code redemption box, enter your code, and press Redeem.' },
      { question: 'What is the best team comp in Anime Rangers?', answer: 'A balanced team with DPS, support, and crowd control units works best. See our Best Teams guide for specific recommendations.' },
    ],
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
    whatIs: 'Anime Vanguards is a Roblox strategy defense game where players deploy powerful anime heroes to protect their base from waves of enemies. With deep team-building mechanics, trait systems, and relic enhancements, players must strategize the best combinations to conquer increasingly difficult challenges.',
    bestItemLabel: 'Best Vanguards',
    bestItemSlug: 'tier-list',
    faqs: [
      { question: 'What are the best vanguards in Anime Vanguards?', answer: 'Top vanguards change with each update. Check our Anime Vanguards Tier List for the latest rankings.' },
      { question: 'How do traits work in Anime Vanguards?', answer: 'Traits provide passive bonuses to your units. Each unit can have multiple traits that affect their stats and abilities. See our Best Traits guide.' },
      { question: 'How do I level up fast in Anime Vanguards?', answer: 'Focus on farming stages that give the most XP per energy spent. Our Leveling Guide has the optimal routes.' },
      { question: 'What are relics in Anime Vanguards?', answer: 'Relics are powerful items that provide team-wide bonuses. Check our Best Relics guide for the top picks.' },
    ],
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
    whatIs: 'Anime Last Stand is a Roblox tower defense game where players summon legendary anime heroes to defend against endless waves of enemies. With a deep evolution system, secret units to discover, and challenging game modes, players must build the strongest team possible to survive.',
    bestItemLabel: 'Best Units',
    bestItemSlug: 'best-units',
    faqs: [
      { question: 'What are the best units in Anime Last Stand?', answer: 'The meta shifts with each update. Check our Anime Last Stand Tier List and Best Units guide for the current top picks.' },
      { question: 'How do I evolve units in Anime Last Stand?', answer: 'You need specific materials and enough currency to evolve units. Check our Evolution Guide for the full details.' },
      { question: 'Are there secret units in Anime Last Stand?', answer: 'Yes! Secret units are rare and powerful. See our Secret Units Guide for how to unlock them.' },
      { question: 'How do I get more gems in Anime Last Stand?', answer: 'Complete stages, daily quests, use codes, and participate in challenges. Our XP Guide has optimal farming strategies.' },
    ],
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
    whatIs: 'Anime Defenders is a Roblox tower defense game where players collect and deploy anime heroes to protect their base from waves of enemies. With strategic placement, evolution mechanics, and challenging modes, players must build the ultimate defense team.',
    bestItemLabel: 'Best Defenders',
    bestItemSlug: 'best-units',
    faqs: [
      { question: 'What are the best defenders in Anime Defenders?', answer: 'Top defenders change with updates. Check our Anime Defenders Tier List and Best Units guide for current rankings.' },
      { question: 'How do I redeem codes in Anime Defenders?', answer: 'Open the game, find the code redemption button in settings, enter your code, and press Redeem.' },
      { question: 'How do I evolve units in Anime Defenders?', answer: 'Collect the required materials from farming stages, then use the evolve feature. See our Evolution Guide for details.' },
      { question: 'What are relics in Anime Defenders?', answer: 'Relics provide powerful bonuses to your team. Check our Relic Tier List for the best ones to use.' },
    ],
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
    whatIs: 'Arise Crossover is a Roblox RPG that brings together characters from multiple anime universes. Players can collect iconic heroes, master unique crossover abilities, explore different anime worlds, and battle through challenging content in this massive crossover adventure.',
    bestItemLabel: 'Best Characters',
    bestItemSlug: 'best-units',
    faqs: [
      { question: 'What are the best characters in Arise Crossover?', answer: 'The best characters vary by game mode. Check our Arise Crossover Tier List and Best Units guide for rankings.' },
      { question: 'How do I get new characters in Arise Crossover?', answer: 'Characters can be obtained through summoning, events, and completing specific stages. See our Beginner Guide for tips.' },
      { question: 'How do I redeem codes in Arise Crossover?', answer: 'Open the game, go to Settings, find the code box, enter your code, and press Redeem.' },
      { question: 'What are traits in Arise Crossover?', answer: 'Traits are passive abilities that enhance your characters. Check our Best Traits guide for the top picks.' },
    ],
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
    whatIs: 'Blue Lock Rivals is a Roblox sports game inspired by the anime Blue Lock. Players compete in intense soccer matches, build their dream teams with iconic anime players, develop strategies, and climb the competitive ranks to become the ultimate striker.',
    bestItemLabel: 'Best Players',
    bestItemSlug: 'best-units',
    faqs: [
      { question: 'What are the best players in Blue Lock Rivals?', answer: 'Top players change with updates. Check our Blue Lock Rivals Tier List and Best Units guide for the latest rankings.' },
      { question: 'How do I redeem codes in Blue Lock Rivals?', answer: 'Open the game, find the code button on the main screen, enter your code, and press Redeem.' },
      { question: 'How do I get more XP in Blue Lock Rivals?', answer: 'Play matches, complete daily quests, and use XP boosters. Our XP Guide has the best strategies.' },
      { question: 'What are traits in Blue Lock Rivals?', answer: 'Traits are special abilities that boost player performance. Check our Best Traits guide for optimal builds.' },
    ],
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
    whatIs: 'Anime Saga is a Roblox RPG adventure where players collect anime heroes, explore dungeons, complete quests, and build the ultimate team. With deep team-building mechanics, evolution systems, and challenging boss fights, Anime Saga offers a rich anime RPG experience.',
    bestItemLabel: 'Best Heroes',
    bestItemSlug: 'best-units',
    faqs: [
      { question: 'What are the best heroes in Anime Saga?', answer: 'The best heroes depend on your team composition. Check our Anime Saga Tier List and Best Units guide for rankings.' },
      { question: 'How do I redeem codes in Anime Saga?', answer: 'Open the game, go to Settings, find the code redemption box, enter your code, and press Redeem.' },
      { question: 'How do I evolve heroes in Anime Saga?', answer: 'Collect evolution materials from dungeons and farming stages. Our Evolution Guide has all the details.' },
      { question: 'What is the best team comp in Anime Saga?', answer: 'A balanced team with DPS, support, and tank heroes works best. See our Best Teams guide for specifics.' },
    ],
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
