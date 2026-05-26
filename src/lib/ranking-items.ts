export interface RankingCategory {
  id: string;
  label: string;
  items: RankingItem[];
}

export interface RankingItem {
  id: string;
  name: string;
  image?: string;
}

export const rankingData: Record<string, RankingCategory[]> = {
  'blox-fruits': [
    {
      id: 'fruits',
      label: 'Fruits',
      items: [
        { id: 'dragon', name: 'Dragon' },
        { id: 'leopard', name: 'Leopard' },
        { id: 'venom', name: 'Venom' },
        { id: 'dough', name: 'Dough' },
        { id: 'shadow', name: 'Shadow' },
        { id: 'gas', name: 'Gas' },
        { id: 'spirit', name: 'Spirit' },
        { id: 'control', name: 'Control' },
        { id: 'magma', name: 'Magma' },
        { id: 'ice', name: 'Ice' },
        { id: 'light', name: 'Light' },
        { id: 'rumble', name: 'Rumble' },
        { id: 'flame', name: 'Flame' },
        { id: 'quake', name: 'Quake' },
        { id: 'string', name: 'String' },
        { id: 'portal', name: 'Portal' },
        { id: 'blizzard', name: 'Blizzard' },
        { id: 'gravity', name: 'Gravity' },
        { id: 'buddha', name: 'Buddha' },
        { id: 'phoenix', name: 'Phoenix' },
      ],
    },
    {
      id: 'swords',
      label: 'Swords',
      items: [
        { id: 'yoru', name: 'Yoru' },
        { id: 'shisui', name: 'Shisui' },
        { id: 'wando', name: 'Wando' },
        { id: 'saddi', name: 'Saddi' },
        { id: 'triple-katana', name: 'Triple Katana' },
        { id: 'dual-katana', name: 'Dual Katana' },
        { id: 'saber', name: 'Saber' },
        { id: 'pole-v2', name: 'Pole V2' },
        { id: 'cursed-dual-katana', name: 'Cursed Dual Katana' },
        { id: 'hallow-scythe', name: 'Hallow Scythe' },
      ],
    },
    {
      id: 'races',
      label: 'Races',
      items: [
        { id: 'ghoul', name: 'Ghoul' },
        { id: 'cyborg', name: 'Cyborg' },
        { id: 'angel', name: 'Angel' },
        { id: 'mink', name: 'Mink' },
        { id: 'fishman', name: 'Fishman' },
        { id: 'skypiea', name: 'Skypiea' },
        { id: 'human', name: 'Human' },
      ],
    },
  ],
  'anime-rangers': [
    {
      id: 'units',
      label: 'Units',
      items: [
        { id: 'gojo', name: 'Gojo' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'goku', name: 'Goku' },
        { id: 'vegeta', name: 'Vegeta' },
        { id: 'tanjiro', name: 'Tanjiro' },
        { id: 'killua', name: 'Killua' },
        { id: 'levi', name: 'Levi' },
        { id: 'madara', name: 'Madara' },
        { id: 'itachi', name: 'Itachi' },
        { id: 'kakashi', name: 'Kakashi' },
        { id: 'saitama', name: 'Saitama' },
      ],
    },
    {
      id: 'traits',
      label: 'Traits',
      items: [
        { id: 'mythic', name: 'Mythic' },
        { id: 'godly', name: 'Godly' },
        { id: 'divine', name: 'Divine' },
        { id: 'legendary', name: 'Legendary' },
        { id: 'epic', name: 'Epic' },
        { id: 'rare', name: 'Rare' },
        { id: 'swift', name: 'Swift' },
        { id: 'critical', name: 'Critical' },
      ],
    },
  ],
  'anime-vanguards': [
    {
      id: 'characters',
      label: 'Characters',
      items: [
        { id: 'alucard', name: 'Alucard' },
        { id: 'saber', name: 'Saber' },
        { id: 'rin', name: 'Rin' },
        { id: 'sung-jinwoo', name: 'Sung Jinwoo' },
        { id: 'levi', name: 'Levi' },
        { id: 'gojo', name: 'Gojo' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'goku', name: 'Goku' },
      ],
    },
    {
      id: 'traits',
      label: 'Traits',
      items: [
        { id: 'mythic', name: 'Mythic' },
        { id: 'godly', name: 'Godly' },
        { id: 'divine', name: 'Divine' },
        { id: 'legendary', name: 'Legendary' },
        { id: 'epic', name: 'Epic' },
        { id: 'rare', name: 'Rare' },
      ],
    },
  ],
  'anime-last-stand': [
    {
      id: 'units',
      label: 'Units',
      items: [
        { id: 'gojo', name: 'Gojo' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'aizen', name: 'Aizen' },
        { id: 'cid', name: 'Cid' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'goku', name: 'Goku' },
        { id: 'tanjiro', name: 'Tanjiro' },
      ],
    },
    {
      id: 'traits',
      label: 'Traits',
      items: [
        { id: 'mythic', name: 'Mythic' },
        { id: 'godly', name: 'Godly' },
        { id: 'divine', name: 'Divine' },
        { id: 'legendary', name: 'Legendary' },
        { id: 'epic', name: 'Epic' },
      ],
    },
  ],
  'anime-defenders': [
    {
      id: 'units',
      label: 'Units',
      items: [
        { id: 'gojo', name: 'Gojo' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'goku', name: 'Goku' },
        { id: 'tanjiro', name: 'Tanjiro' },
        { id: 'levi', name: 'Levi' },
        { id: 'killua', name: 'Killua' },
      ],
    },
    {
      id: 'evolutions',
      label: 'Evolutions',
      items: [
        { id: 'gojo-evolved', name: 'Gojo (Evolved)' },
        { id: 'sukuna-evolved', name: 'Sukuna (Evolved)' },
        { id: 'naruto-evolved', name: 'Naruto (Evolved)' },
        { id: 'luffy-evolved', name: 'Luffy (Evolved)' },
        { id: 'ichigo-evolved', name: 'Ichigo (Evolved)' },
        { id: 'goku-evolved', name: 'Goku (Evolved)' },
      ],
    },
  ],
  'arise-crossover': [
    {
      id: 'shadows',
      label: 'Shadows',
      items: [
        { id: 'igris', name: 'Igris' },
        { id: 'beru', name: 'Beru' },
        { id: 'tank', name: 'Tank' },
        { id: 'iron', name: 'Iron' },
        { id: 'tusk', name: 'Tusk' },
        { id: 'sung-jinwoo', name: 'Sung Jinwoo' },
        { id: 'cha-haein', name: 'Cha Haein' },
        { id: 'choi-jongin', name: 'Choi Jongin' },
      ],
    },
    {
      id: 'weapons',
      label: 'Weapons',
      items: [
        { id: 'demon-kings-longsword', name: "Demon King's Longsword" },
        { id: 'kamishs-wrath', name: "Kamish's Wrath" },
        { id: 'barukas-dagger', name: "Baruka's Dagger" },
        { id: 'knights-dagger', name: "Knight's Dagger" },
        { id: 'monarchs-domain', name: "Monarch's Domain" },
      ],
    },
  ],
  'blue-lock-rivals': [
    {
      id: 'players',
      label: 'Players',
      items: [
        { id: 'isagi', name: 'Isagi' },
        { id: 'rin', name: 'Rin' },
        { id: 'nagi', name: 'Nagi' },
        { id: 'bachira', name: 'Bachira' },
        { id: 'chigiri', name: 'Chigiri' },
        { id: 'kunigami', name: 'Kunigami' },
        { id: 'reo', name: 'Reo' },
        { id: 'shidou', name: 'Shidou' },
        { id: 'sae', name: 'Sae' },
        { id: 'barou', name: 'Barou' },
      ],
    },
    {
      id: 'styles',
      label: 'Styles',
      items: [
        { id: 'direct-attack', name: 'Direct Attack' },
        { id: 'playmaker', name: 'Playmaker' },
        { id: 'dribbler', name: 'Dribbler' },
        { id: 'defender', name: 'Defender' },
        { id: 'goalkeeper', name: 'Goalkeeper' },
        { id: 'speedster', name: 'Speedster' },
      ],
    },
  ],
  'anime-saga': [
    {
      id: 'heroes',
      label: 'Heroes',
      items: [
        { id: 'sung-jinwoo', name: 'Sung Jinwoo' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'gojo', name: 'Gojo' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'goku', name: 'Goku' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'tanjiro', name: 'Tanjiro' },
        { id: 'levi', name: 'Levi' },
      ],
    },
    {
      id: 'traits',
      label: 'Traits',
      items: [
        { id: 'mythic', name: 'Mythic' },
        { id: 'godly', name: 'Godly' },
        { id: 'divine', name: 'Divine' },
        { id: 'legendary', name: 'Legendary' },
        { id: 'epic', name: 'Epic' },
      ],
    },
  ],
  'roll-an-anime': [
    {
      id: 'characters',
      label: 'Characters',
      items: [
        { id: 'gojo', name: 'Gojo' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'goku', name: 'Goku' },
        { id: 'tanjiro', name: 'Tanjiro' },
        { id: 'levi', name: 'Levi' },
        { id: 'killua', name: 'Killua' },
      ],
    },
  ],
  'anime-story-2': [
    {
      id: 'units',
      label: 'Units',
      items: [
        { id: 'gojo', name: 'Gojo' },
        { id: 'sukuna', name: 'Sukuna' },
        { id: 'naruto', name: 'Naruto' },
        { id: 'luffy', name: 'Luffy' },
        { id: 'zoro', name: 'Zoro' },
        { id: 'ichigo', name: 'Ichigo' },
        { id: 'goku', name: 'Goku' },
        { id: 'tanjiro', name: 'Tanjiro' },
      ],
    },
  ],
};

export function getRankingCategories(gameSlug: string): RankingCategory[] {
  return rankingData[gameSlug] || [];
}

export function getRankingItem(gameSlug: string, categoryId: string, itemId: string): RankingItem | undefined {
  const categories = rankingData[gameSlug] || [];
  const category = categories.find((c) => c.id === categoryId);
  return category?.items.find((i) => i.id === itemId);
}

export interface RankingResult {
  item_id: string;
  item_name: string;
  avg_score: number;
  total_votes: number;
  recent_votes: number;
}

export const scoreLabels: Record<number, string> = {
  5: 'Excellent',
  4: 'Good',
  3: 'Average',
  2: 'Poor',
  1: 'Very Poor',
};

export const scoreEmojis: Record<number, string> = {
  5: '⭐⭐⭐⭐⭐',
  4: '⭐⭐⭐⭐',
  3: '⭐⭐⭐',
  2: '⭐⭐',
  1: '⭐',
};
