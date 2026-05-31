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
  { slug: 'beginner-guide', title: 'Anime Rangers X Traits Tier List (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-dps-units', title: 'Anime Rangers X Beginner Guide (2026)', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Anime Rangers X Best DPS Units (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-relics', title: 'Anime Rangers X Best Farming Stages (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-starter-units', title: 'Anime Rangers X Best Relics (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-support-units', title: 'Anime Rangers X Best Starter Units (2026)', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'best-teams', title: 'Anime Rangers X Best Support Units (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-traits', title: 'Anime Rangers X Best Teams (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'best-units', title: 'Anime Rangers X Best Traits (2026)', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'characters-tier-list', title: 'Anime Rangers X Best Units (2026)', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'codes', title: 'Anime Rangers X Characters Tier List (2026)', game: 'anime-rangers', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Rangers X Codes (May 2026)', game: 'anime-rangers', type: 'codes' },
  { slug: 'gems-guide', title: 'Anime Rangers X Expired Codes (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'leveling-guide', title: 'Anime Rangers X Gems Guide (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'tier-list', title: 'Anime Rangers X Leveling Guide (2026)', game: 'anime-rangers', type: 'tier-list' },
  { slug: 'update-history', title: 'Anime Rangers X Tier List (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Rangers X Update History (2026)', game: 'anime-rangers', type: 'guides' },
  { slug: 'pvp-guide', title: 'Anime Rangers X XP Guide (2026)', game: 'anime-rangers', type: 'guides' },

  // ========================
  // Anime Vanguards
  // ========================
  { slug: 'best-dps-units', title: 'Anime Vanguards Turning Tides (2026)', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Anime Vanguards XP Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-relics', title: 'Anime Vanguards Best Relics (2026) – Top Relics for Every Build', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-starter-units', title: 'Anime Vanguards Best Starter Units (2026) – Early Game Tier List', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-support-units', title: 'Anime Vanguards Best Support Units (2026) – Healing & Buffs Ranked', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'best-teams', title: 'Anime Vanguards Best Teams (2026) – Meta Compositions & Synergies', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-traits', title: 'Anime Vanguards Best Traits (2026) – Best Trait for Every Unit', game: 'anime-vanguards', type: 'guides' },
  { slug: 'codes', title: 'Anime Vanguards Codes (May 2026) – Free Gems, Summons & Rewards', game: 'anime-vanguards', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Vanguards Expired Codes List (2026) – All Old & Removed Codes', game: 'anime-vanguards', type: 'codes' },
  { slug: 'farming-guide', title: 'Anime Vanguards Farming Guide (2026) – Best Stages for Gems, Gold & XP', game: 'anime-vanguards', type: 'guides' },
  { slug: 'gems-guide', title: 'Anime Vanguards Farming Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'guides', title: 'Anime Vanguards Beginner Guide (2026) – Fast Progression & Best Early Units', game: 'anime-vanguards', type: 'guides' },
  { slug: 'leveling-guide', title: 'Anime Vanguards Beginner Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'tier-list', title: 'Anime Vanguards Tier List (2026) – Best Units Ranked S to D', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'units-tier-list', title: 'Anime Vanguards Units Tier List (2026) – All Characters Ranked S to D', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'update-12-5', title: 'Anime Vanguards Units Tier List (2026)', game: 'anime-vanguards', type: 'update' },
  { slug: 'update-history', title: 'Anime Vanguards Update 12.5 (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Vanguards XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'anime-vanguards', type: 'guides' },
  { slug: 'discord-trello-wiki', title: 'Anime Vanguards Discord, Trello & Wiki Links', game: 'anime-vanguards', type: 'guides' },
  { slug: 'value-list', title: 'Anime Vanguards Discord, Trello & Wiki (2026)', game: 'anime-vanguards', type: 'tier-list' },
  { slug: 'memoria-guide', title: 'Anime Vanguards Value List (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'familiar-guide', title: 'Anime Vanguards Memoria Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'madara-guide', title: 'Anime Vanguards Familiar Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'ichigo-guide', title: 'Anime Vanguards Madara Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'best-units', title: 'Anime Vanguards Ichigo Guide (2026)', game: 'anime-vanguards', type: 'guides' },
  { slug: 'pvp-guide', title: 'Anime Vanguards PvP Guide (2026) – Best Units, Traits & Teams for PvP', game: 'anime-vanguards', type: 'guides' },

  // ========================
  // Blox Fruits
  // ========================
  { slug: 'best-dps-units', title: 'Blox Fruits Race V4 Awakening Guide (2026)', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-farming-stages', title: 'Blox Fruits XP Guide (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-fruits-grinding', title: 'Blox Fruits Best Fruits for Grinding (2026) – Fastest Farming Fruits', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-relics', title: 'Blox Fruits Grinding Fruits (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-starter-units', title: 'Blox Fruits Best Starter Units (2026) – Early Game Tier List', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-support-units', title: 'Blox Fruits Best Support Fruits (2026) – Healing & Buffs Ranked', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'best-teams', title: 'Blox Fruits Best Teams (2026) – Meta Compositions & Synergies', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-traits', title: 'Blox Fruits Best Traits (2026) – Best Trait for Every Unit', game: 'blox-fruits', type: 'guides' },
  { slug: 'codes', title: 'Blox Fruits Codes (May 2026) – Free Boosts, Rerolls & Rewards', game: 'blox-fruits', type: 'codes' },
  { slug: 'dragon-rework-guide', title: 'Blox Fruits Dragon Rework Guide (2026) – V2 Abilities, Combos & Tips', game: 'blox-fruits', type: 'guides' },
  { slug: 'expired-codes', title: 'Blox Fruits Dragon Rework Guide (2026)', game: 'blox-fruits', type: 'codes' },
  { slug: 'gems-guide', title: 'Blox Fruits Beli Guide (2026) – How to Get Free Beli & Fragments', game: 'blox-fruits', type: 'guides' },
  { slug: 'guides', title: 'Blox Fruits Beginner Guide (2026) – Complete Starter Walkthrough', game: 'blox-fruits', type: 'guides' },
  { slug: 'leveling-guide', title: 'Blox Fruits Leveling Guide (2026) – Fastest Way to Max Level 2650', game: 'blox-fruits', type: 'guides' },
  { slug: 'pvp-guide', title: 'Blox Fruits PvP Guide (2026) – Best Builds, Combos & Combat Tips', game: 'blox-fruits', type: 'guides' },
  { slug: 'swords-tier-list', title: 'Blox Fruits Swords Tier List (2026) – Best Swords Ranked S to D', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'tier-list', title: 'Blox Fruits Swords Tier List (2026)', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'trading-values', title: 'Blox Fruits Trading Values List (2026) – Fruit & Item Price Guide', game: 'blox-fruits', type: 'tier-list' },
  { slug: 'update-26', title: 'Blox Fruits Trading Values (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'update-30', title: 'Blox Fruits Update 26 Guide (2026)', game: 'blox-fruits', type: 'update' },
  { slug: 'update-history', title: 'Blox Fruits Update 30 Guide (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'xp-guide', title: 'Blox Fruits XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'blox-fruits', type: 'guides' },
  { slug: '2x-exp-codes', title: 'Blox Fruits 2x EXP Codes (2026) – All Double XP Boosts & How to Use Them', game: 'blox-fruits', type: 'codes' },
  { slug: 'stat-reset-codes', title: 'Blox Fruits 2X EXP Codes (2026)', game: 'blox-fruits', type: 'codes' },
  { slug: 'free-fruit-codes', title: 'Blox Fruits Stat Reset Codes (2026)', game: 'blox-fruits', type: 'codes' },
  { slug: 'level-guide', title: 'Blox Fruits Free Fruit Codes (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'updates', title: 'Blox Fruits Level Guide (2026)', game: 'blox-fruits', type: 'guides' },
  { slug: 'best-units', title: 'Blox Fruits Updates (2026)', game: 'blox-fruits', type: 'guides' },

  // ========================
  // Anime Last Stand
  // ========================
  { slug: 'codes', title: 'Anime Last Stand Codes (May 2026) – Free Gems, Summons & Rewards', game: 'anime-last-stand', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Last Stand XP Guide (2026)', game: 'anime-last-stand', type: 'codes' },
  { slug: 'tier-list', title: 'Anime Last Stand Tier List (2026) – Best Units Ranked S to D', game: 'anime-last-stand', type: 'tier-list' },
  { slug: 'best-units', title: 'Anime Last Stand Best Units (2026) – Top Characters for Every Mode', game: 'anime-last-stand', type: 'tier-list' },
  { slug: 'relic-tier-list', title: 'Anime Last Stand Relic Tier List (2026) – Best Relics Ranked S to D', game: 'anime-last-stand', type: 'tier-list' },
  { slug: 'best-traits', title: 'Anime Last Stand Relic Tier List (2026)', game: 'anime-last-stand', type: 'guides' },
  { slug: 'best-teams', title: 'Anime Last Stand Best Teams (2026) – Meta Compositions & Synergies', game: 'anime-last-stand', type: 'guides' },
  { slug: 'beginner-guide', title: 'Anime Last Stand Beginner Guide (2026) – Complete Starter Walkthrough', game: 'anime-last-stand', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Last Stand XP Guide (2026) – Fastest Leveling Methods & XP Farming', game: 'anime-last-stand', type: 'guides' },
  { slug: 'farming-guide', title: 'Anime Last Stand Farming Guide (2026) – Best Stages for Gems, Gold & XP', game: 'anime-last-stand', type: 'guides' },
  { slug: 'evolution-guide', title: 'Anime Last Stand Evolution Guide (2026) – How to Evolve Every Unit', game: 'anime-last-stand', type: 'guides' },
  { slug: 'secret-units-guide', title: 'Anime Vanguards Secret Units (2026)', game: 'anime-last-stand', type: 'guides' },
  { slug: 'update-guide', title: 'Anime Last Stand Secret Units Guide (2026)', game: 'anime-last-stand', type: 'update' },
  { slug: 'patch-notes', title: 'Anime Last Stand Update Guide (2026)', game: 'anime-last-stand', type: 'update' },
  { slug: 'challenge-guide', title: 'Anime Last Stand Patch Notes (2026)', game: 'anime-last-stand', type: 'guides' },
  // Anime Defenders
  { slug: 'codes', title: 'Anime Last Stand Challenge Guide (2026)', game: 'anime-defenders', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Defenders XP Guide (2026)', game: 'anime-defenders', type: 'codes' },
  { slug: 'tier-list', title: 'Anime Defenders Tier List (2026) – Best Defenders Ranked S to D', game: 'anime-defenders', type: 'tier-list' },
  { slug: 'best-units', title: 'Anime Defenders Best Defenders (2026) – Top Defenders for Every Mode', game: 'anime-defenders', type: 'tier-list' },
  { slug: 'relic-tier-list', title: 'Anime Defenders Relic Tier List (2026) – Best Relics Ranked', game: 'anime-defenders', type: 'tier-list' },
  { slug: 'best-traits', title: 'Anime Defenders Best Traits (2026) – Optimal Trait for Every Defender', game: 'anime-defenders', type: 'guides' },
  { slug: 'best-teams', title: 'Anime Defenders Best Teams (2026) – Top Team Compositions', game: 'anime-defenders', type: 'guides' },
  { slug: 'beginner-guide', title: 'Anime Defenders Beginner Guide (2026) – Tips & Fast Start', game: 'anime-defenders', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Defenders XP Guide (2026) – Fastest Leveling Methods', game: 'anime-defenders', type: 'guides' },
  { slug: 'farming-guide', title: 'Anime Defenders Farming Guide (2026) – Best Farming Spots & Routes', game: 'anime-defenders', type: 'guides' },
  { slug: 'evolution-guide', title: 'Anime Defenders Evolution Guide (2026) – All Evolutions & Materials', game: 'anime-defenders', type: 'guides' },
  { slug: 'secret-units-guide', title: 'Anime Defenders Secret Defenders (2026) – How to Unlock All Secrets', game: 'anime-defenders', type: 'guides' },
  { slug: 'update-guide', title: 'Anime Defenders Update Guide (2026) – All Updates & Patch Notes', game: 'anime-defenders', type: 'guides' },
  { slug: 'patch-notes', title: 'Anime Defenders Patch Notes (2026) – Latest Balance Changes', game: 'anime-defenders', type: 'guides' },
  { slug: 'challenge-guide', title: 'Anime Defenders Challenge Guide (2026) – How to Beat All Challenges', game: 'anime-defenders', type: 'guides' },
  { slug: 'pvp-guide', title: 'Anime Defenders PvP Guide (2026)', game: 'anime-defenders', type: 'guides' },
  // Arise Crossover
  { slug: 'codes', title: 'Arise Crossover Codes (May 2026) – Free Crystals, Summons & Rewards', game: 'arise-crossover', type: 'codes' },
  { slug: 'expired-codes', title: 'Arise Crossover XP Guide (2026)', game: 'arise-crossover', type: 'codes' },
  { slug: 'tier-list', title: 'Arise Crossover Tier List (2026) – Best Characters Ranked S to D', game: 'arise-crossover', type: 'tier-list' },
  { slug: 'best-units', title: 'Arise Crossover Best Characters (2026) – Top Characters for Every Mode', game: 'arise-crossover', type: 'tier-list' },
  { slug: 'relic-tier-list', title: 'Arise Crossover Relic Tier List (2026) – Best Relics Ranked', game: 'arise-crossover', type: 'tier-list' },
  { slug: 'best-traits', title: 'Arise Crossover Best Traits (2026) – Optimal Trait for Every Character', game: 'arise-crossover', type: 'guides' },
  { slug: 'best-teams', title: 'Arise Crossover Best Teams (2026) – Top Team Compositions', game: 'arise-crossover', type: 'guides' },
  { slug: 'beginner-guide', title: 'Arise Crossover Beginner Guide (2026) – Tips & Fast Start', game: 'arise-crossover', type: 'guides' },
  { slug: 'xp-guide', title: 'Arise Crossover XP Guide (2026) – Fastest Leveling Methods', game: 'arise-crossover', type: 'guides' },
  { slug: 'farming-guide', title: 'Arise Crossover Farming Guide (2026) – Best Farming Spots & Routes', game: 'arise-crossover', type: 'guides' },
  { slug: 'evolution-guide', title: 'Arise Crossover Evolution Guide (2026) – All Evolutions & Materials', game: 'arise-crossover', type: 'guides' },
  { slug: 'secret-units-guide', title: 'Arise Crossover Secret Characters (2026) – How to Unlock All Secrets', game: 'arise-crossover', type: 'guides' },
  { slug: 'update-guide', title: 'Arise Crossover Update Guide (2026) – All Updates & Patch Notes', game: 'arise-crossover', type: 'guides' },
  { slug: 'patch-notes', title: 'Arise Crossover Patch Notes (2026) – Latest Balance Changes', game: 'arise-crossover', type: 'guides' },
  { slug: 'challenge-guide', title: 'Arise Crossover Challenge Guide (2026) – How to Beat All Challenges', game: 'arise-crossover', type: 'guides' },
  // Blue Lock Rivals
  { slug: 'codes', title: 'Blue Lock Rivals Codes (May 2026) – Free Balls, Summons & Rewards', game: 'blue-lock-rivals', type: 'codes' },
  { slug: 'expired-codes', title: 'Blue Lock Rivals XP Guide (2026)', game: 'blue-lock-rivals', type: 'codes' },
  { slug: 'tier-list', title: 'Blue Lock Rivals Tier List (2026) – Best Players Ranked S to D', game: 'blue-lock-rivals', type: 'tier-list' },
  { slug: 'best-units', title: 'Blue Lock Rivals Best Players (2026) – Top Players for Every Mode', game: 'blue-lock-rivals', type: 'tier-list' },
  { slug: 'relic-tier-list', title: 'Blue Lock Rivals Relic Tier List (2026) – Best Relics Ranked', game: 'blue-lock-rivals', type: 'tier-list' },
  { slug: 'best-traits', title: 'Blue Lock Rivals Best Traits (2026) – Optimal Trait for Every Player', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'best-teams', title: 'Blue Lock Rivals Best Teams (2026) – Top Team Compositions', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'beginner-guide', title: 'Blue Lock Rivals Beginner Guide (2026) – Tips & Fast Start', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'xp-guide', title: 'Blue Lock Rivals XP Guide (2026) – Fastest Leveling Methods', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'farming-guide', title: 'Blue Lock Rivals Farming Guide (2026) – Best Farming Spots & Routes', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'evolution-guide', title: 'Blue Lock Rivals Evolution Guide (2026) – All Evolutions & Materials', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'secret-units-guide', title: 'Blue Lock Rivals Secret Players (2026) – How to Unlock All Secrets', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'update-guide', title: 'Blue Lock Rivals Update Guide (2026) – All Updates & Patch Notes', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'patch-notes', title: 'Blue Lock Rivals Patch Notes (2026) – Latest Balance Changes', game: 'blue-lock-rivals', type: 'guides' },
  { slug: 'challenge-guide', title: 'Blue Lock Rivals Challenge Guide (2026) – How to Beat All Challenges', game: 'blue-lock-rivals', type: 'guides' },
  // Anime Saga
  { slug: 'codes', title: 'Anime Saga Codes (May 2026) – Free Gems, Summons & Rewards', game: 'anime-saga', type: 'codes' },
  { slug: 'expired-codes', title: 'Anime Saga XP Guide (2026)', game: 'anime-saga', type: 'codes' },
  { slug: 'tier-list', title: 'Anime Saga Tier List (2026) – Best Heroes Ranked S to D', game: 'anime-saga', type: 'tier-list' },
  { slug: 'best-units', title: 'Anime Saga Best Heroes (2026) – Top Heroes for Every Mode', game: 'anime-saga', type: 'tier-list' },
  { slug: 'relic-tier-list', title: 'Anime Saga Relic Tier List (2026) – Best Relics Ranked', game: 'anime-saga', type: 'tier-list' },
  { slug: 'best-traits', title: 'Anime Saga Best Traits (2026) – Optimal Trait for Every Hero', game: 'anime-saga', type: 'guides' },
  { slug: 'best-teams', title: 'Anime Saga Best Teams (2026) – Top Team Compositions', game: 'anime-saga', type: 'guides' },
  { slug: 'beginner-guide', title: 'Anime Saga Beginner Guide (2026) – Tips & Fast Start', game: 'anime-saga', type: 'guides' },
  { slug: 'xp-guide', title: 'Anime Saga XP Guide (2026) – Fastest Leveling Methods', game: 'anime-saga', type: 'guides' },
  { slug: 'farming-guide', title: 'Anime Saga Farming Guide (2026) – Best Farming Spots & Routes', game: 'anime-saga', type: 'guides' },
  { slug: 'evolution-guide', title: 'Anime Saga Evolution Guide (2026) – All Evolutions & Materials', game: 'anime-saga', type: 'guides' },
  { slug: 'secret-units-guide', title: 'Anime Saga Secret Heroes (2026) – How to Unlock All Secrets', game: 'anime-saga', type: 'guides' },
  { slug: 'update-guide', title: 'Anime Saga Update Guide (2026) – All Updates & Patch Notes', game: 'anime-saga', type: 'guides' },
  { slug: 'patch-notes', title: 'Anime Saga Patch Notes (2026) – Latest Balance Changes', game: 'anime-saga', type: 'guides' },
  { slug: 'challenge-guide', title: 'Anime Saga Challenge Guide (2026) – How to Beat All Challenges', game: 'anime-saga', type: 'guides' },
  // Roll an Anime
  { slug: 'beginner-guide', title: 'Roll an Anime Beginner Guide (2026) – How to Start Strong', game: 'roll-an-anime', type: 'guides' },
  { slug: 'best-characters', title: 'Roll an Anime Tier List (2026)', game: 'roll-an-anime', type: 'tier-list' },
  { slug: 'cash-farming-guide', title: 'Roll an Anime Best Characters (2026)', game: 'roll-an-anime', type: 'guides' },
  { slug: 'codes', title: 'Roll an Anime Cash Farming Guide (2026)', game: 'roll-an-anime', type: 'codes' },
  { slug: 'expired-codes', title: 'Roll an Anime Expired Codes (2026) – List of All Inactive Codes', game: 'roll-an-anime', type: 'codes' },
  { slug: 'luck-boost-guide', title: 'Roll an Anime Luck Boost Guide (2026) – Maximize Your Rare Pulls', game: 'roll-an-anime', type: 'guides' },
  { slug: 'tier-list', title: 'Roll an Anime Luck Boost Guide (2026)', game: 'roll-an-anime', type: 'tier-list' },
  // Anime Story 2
  { slug: 'beginner-guide', title: 'Anime Story 2 Beginner Guide (2026) – Complete Walkthrough for New Players', game: 'anime-story-2', type: 'guides' },
  { slug: 'best-units', title: 'Anime Story 2 Update Guide (2026)', game: 'anime-story-2', type: 'tier-list' },
  { slug: 'codes', title: 'Anime Story 2 Codes (2026) – Free Gems, Upgrades & Unlocks', game: 'anime-story-2', type: 'codes' },
  { slug: 'how-to-unlock-units', title: 'Anime Story 2 How to Unlock Units (2026) – All Unlock Methods & Requirements', game: 'anime-story-2', type: 'guides' },
  { slug: 'tier-list', title: 'Anime Story 2 How to Unlock Units (2026)', game: 'anime-story-2', type: 'tier-list' },
  { slug: 'upgrade-guide', title: 'Anime Story 2 Upgrade Guide (2026) – Fastest Upgrade Paths & Materials', game: 'anime-story-2', type: 'guides' },
  { slug: 'best-teams', title: 'Anime Story 2 Upgrade Guide (2026)', game: 'anime-story-2', type: 'guides' },
  { slug: 'farming-guide', title: 'Anime Story 2 Farming Guide (2026) – Best Stages for Gems, Materials & XP', game: 'anime-story-2', type: 'guides' },
  { slug: 'best-traits', title: 'Anime Story 2 Best Traits (2026) – All Traits Ranked & Best Combinations', game: 'anime-story-2', type: 'tier-list' },
  { slug: 'update-guide', title: 'Anime Story 2 Update Guide (2026) – Latest Changes, Codes & New Units', game: 'anime-story-2', type: 'guides' },
  { slug: 'pvp-guide', title: 'Anime Story 2 PvP Guide (2026) – Best Units, Traits & Teams', game: 'anime-story-2', type: 'guides' },
  { slug: 'discord-trello-wiki', title: 'Anime Story 2 Discord, Trello & Wiki Links', game: 'anime-story-2', type: 'guides' },
  { slug: 'how-to-get-gems', title: 'How to Get Gems Fast in Anime Story 2 – Best Farming Methods', game: 'anime-story-2', type: 'guides' },
  { slug: 'reroll-guide', title: 'Anime Story 2 Reroll Guide (2026)', game: 'anime-story-2', type: 'guides' },
];

/**
 * 按游戏 + 类型过滤文章（排除当前文章自身）
 */
/** 获取指定游戏的所有文章（用于 Related Guides 等模块，只链接真实存在的页面） */
export function getArticlesByGame(game: string): ArticleEntry[] {
  return articles.filter((a) => a.game === game);
}

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
