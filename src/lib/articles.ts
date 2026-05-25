/**
 * Article Index — 站内推荐系统的数据源
 * 
 * 每篇文章记录：slug / title / game / type
 * type 取值: 'codes' | 'tier-list' | 'guides' | 'update'
 * 
 * 新增文章时在此文件追加条目即可，推荐组件会自动关联。
 */

export interface ArticleEntry {
  /** 文章 slug，同时作为 URL 路径 */
  slug: string;
  /** 文章标题 */
  title: string;
  /** 所属游戏 slug */
  game: string;
  /** 内容类型 */
  type: 'codes' | 'tier-list' | 'guides' | 'update';
}

export const articles: ArticleEntry[] = [
  // ========================
  // Anime Rangers X
  // ========================
  { slug: 'beginner-guide', title: 'Anime Rangers X Beginner Guide (2026) – Best Starter Units & Progression Tips', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-dps-units', title: 'Anime Rangers X Best DPS Units (2026) – Highest Damage Ranked', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Anime Rangers X Best Farming Stages (2026) – Maximize Gems & XP Per Hour', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-relics', title: 'Anime Rangers X Best Relics (2026) – Top Relics for Every Build', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-starter-units', title: 'Anime Rangers X Best Starter Units (2026) – Early Game Tier List', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-support-units', title: 'Anime Rangers X Best Support Units (2026) – Healing & Buffs Ranked', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'best-teams', title: 'Anime Rangers X Best Teams Guide (2026) – Meta Compositions & Synergies', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-traits', title: 'Anime Rangers X Best Traits (2026) – Best Trait for Every Unit', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-units', title: 'Anime Rangers X Best Units (2026) – Top Characters for Every Game Mode', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'characters-tier-list', title: 'Anime Rangers X Characters Tier List (2026) – All Units Ranked', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'codes', title: 'Anime Rangers X Codes (May 2026) – Free Gems, Rerolls & Rewards', game: 'anime-rangers', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Rangers X Expired Codes List (2026) – All Old & Removed Codes', game: 'anime-rangers', type: 'codes' },
  { slug: 'gems-guide', title: 'Anime Rangers X Gems Guide (2026) – How to Get Free Gems & Gold', game: 'anime-rangers', type: 'guides' },
  { slug: 'leveling-guide', title: 'Anime Rangers X Leveling Guide (2026) – Fastest Way to Max Level', game: 'anime-rangers', type: 'guides' },
  { slug: 'tier-list', title: 'Anime Rangers X Tier List (2026) – Best Characters Ranked S to D', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'update-history', title: 'Anime Rangers X Update History (2026) – All Patch Notes & Changes', game: 'anime-rangers', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Rangers X XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'anime-rangers', type: 'guides' },

  // ========================
  // Anime Vanguards
  // ========================
  { slug: 'best-dps-units', title: 'Anime Vanguards Best DPS Units (2026) – Highest Damage Ranked', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Anime Vanguards Best Farming Stages (2026) – Maximize Gems & XP Per Hour', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-relics', title: 'Anime Vanguards Best Relics (2026) – Top Relics for Every Build', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-starter-units', title: 'Anime Vanguards Best Starter Units (2026) – Early Game Tier List', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-support-units', title: 'Anime Vanguards Best Support Units (2026) – Healing & Buffs Ranked', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'best-teams', title: 'Anime Vanguards Best Teams (2026) – Meta Compositions & Synergies', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-traits', title: 'Anime Vanguards Best Traits (2026) – Best Trait for Every Unit', game: 'anime-vanguards', type: 'guides' },
  { slug: 'codes', title: 'Anime Vanguards Codes (May 2026) – Free Gems, Summons & Rewards', game: 'anime-vanguards', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Vanguards Expired Codes List (2026) – All Old & Removed Codes', game: 'anime-vanguards', type: 'codes' },
  { slug: 'farming-guide', title: 'Anime Vanguards Farming Guide (2026) – Best Stages for Gems, Gold & XP', game: 'anime-vanguards', type: 'guides' },
  { slug: 'gems-guide', title: 'Anime Vanguards Gems Guide (2026) – How to Get Free Gems & Gold', game: 'anime-vanguards', type: 'guides' },
  { slug: 'guides', title: 'Anime Vanguards Beginner Guide (2026) – Fast Progression & Best Early Units', game: 'anime-vanguards', type: 'guides' },
  { slug: 'leveling-guide', title: 'Anime Vanguards Leveling Guide (2026) – Fastest Way to Max Level', game: 'anime-vanguards', type: 'guides' },
  { slug: 'tier-list', title: 'Anime Vanguards Tier List (2026) – Best Units Ranked S to D', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'units-tier-list', title: 'Anime Vanguards Units Tier List (2026) – All Characters Ranked S to D', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'update-12-5', title: 'Anime Vanguards Update 12.5 Guide (2026) – Turning Tides & New Units', game: 'anime-vanguards', type: 'update' },
  { slug: 'update-history', title: 'Anime Vanguards Update History (2026) – All Patch Notes & Changes', game: 'anime-vanguards', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Vanguards XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'anime-vanguards', type: 'guides' },

  // ========================
  // Blox Fruits
  // ========================
  { slug: 'best-dps-units', title: 'Blox Fruits Best DPS Fruits (2026) – Highest Damage Ranked', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Blox Fruits Best Farming Stages (2026) – Maximize Beli & XP Per Hour', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-fruits-grinding', title: 'Blox Fruits Best Fruits for Grinding (2026) – Fastest Farming Fruits', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-relics', title: 'Blox Fruits Best Relics (2026) – Top Relics for Every Build', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-starter-units', title: 'Blox Fruits Best Starter Units (2026) – Early Game Tier List', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-support-units', title: 'Blox Fruits Best Support Fruits (2026) – Healing & Buffs Ranked', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-teams', title: 'Blox Fruits Best Teams (2026) – Meta Compositions & Synergies', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-traits', title: 'Blox Fruits Best Traits (2026) – Best Trait for Every Unit', game: 'blox-fruits', type: 'guides' },
  { slug: 'codes', title: 'Blox Fruits Codes (May 2026) – Free Boosts, Rerolls & Rewards', game: 'blox-fruits', type: 'codes' },
  { slug: 'dragon-rework-guide', title: 'Blox Fruits Dragon Rework Guide (2026) – V2 Abilities, Combos & Tips', game: 'blox-fruits', type: 'guides' },
  { slug: 'expired-codes', title: 'Blox Fruits Expired Codes List (2026) – All Removed & Old Codes', game: 'blox-fruits', type: 'codes' },
  { slug: 'gems-guide', title: 'Blox Fruits Beli Guide (2026) – How to Get Free Beli & Fragments', game: 'blox-fruits', type: 'guides' },
  { slug: 'guides', title: 'Blox Fruits Beginner Guide (2026) – Complete Starter Walkthrough', game: 'blox-fruits', type: 'guides' },
  { slug: 'leveling-guide', title: 'Blox Fruits Leveling Guide (2026) – Fastest Way to Max Level 2650', game: 'blox-fruits', type: 'guides' },
  { slug: 'pvp-guide', title: 'Blox Fruits PvP Guide (2026) – Best Builds, Combos & Combat Tips', game: 'blox-fruits', type: 'guides' },
  { slug: 'swords-tier-list', title: 'Blox Fruits Swords Tier List (2026) – Best Swords Ranked S to D', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'tier-list', title: 'Blox Fruits Tier List (2026) – Best Fruits Ranked from S to D', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'trading-values', title: 'Blox Fruits Trading Values List (2026) – Fruit & Item Price Guide', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'update-26', title: 'Blox Fruits Update 26 Guide (2026) – New Fruits, Map Changes & Level Cap', game: 'blox-fruits', type: 'guides' },
  { slug: 'update-30', title: 'Blox Fruits Update 30 Guide (2026) – Fourth Sea, Magnet Fruit & All Leaks', game: 'blox-fruits', type: 'update' },
  { slug: 'update-history', title: 'Blox Fruits Update History (2026) – All Patch Notes & Changes', game: 'blox-fruits', type: 'guides' },
  { slug: 'xp-guide', title: 'Blox Fruits XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'blox-fruits', type: 'guides' },
];

/**
 * 按游戏 + 类型过滤文章（排除当前文章自身）
 */
export function getRelatedByType(
  game: string,
  currentSlug: string,
  type: ArticleEntry['type'],
  limit: number = 5,
): ArticleEntry[] {
  return articles
    .filter((a) => a.game === game && a.type === type && a.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * 获取同游戏下按类型分组的推荐文章（排除当前文章自身）
 */
export function getRelatedGrouped(
  game: string,
  currentSlug: string,
): Record<string, ArticleEntry[]> {
  const sameGame = articles.filter((a) => a.game === game && a.slug !== currentSlug);

  const groups: Record<string, ArticleEntry[]> = {
    codes: [],
    'tier-list': [],
    guides: [],
  };

  for (const a of sameGame) {
    const key = a.type === 'update' ? 'guides' : a.type;
    if (key in groups) {
      groups[key].push(a);
    }
  }

  return groups;
}
