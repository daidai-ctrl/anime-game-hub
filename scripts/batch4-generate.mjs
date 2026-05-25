/**
 * Batch Content Generator for 4 New Games
 * Anime Defenders / Arise Crossover / Blue Lock Rivals / Anime Saga
 * 15 page types each = 60 total MDX files
 * 
 * Usage: node scripts/batch4-generate.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================================
// GAME DATA DEFINITIONS
// ============================================================

const GAMES = [
  {
    name: 'Anime Defenders',
    slug: 'anime-defenders',
    year: '2026',
    unitType: 'Defenders',
    unitTypeLower: 'defenders',
    currency: 'Gems',
    currency2: 'Gold',
    topUnits: ['Gojo', 'Sukuna', 'Madara', 'Zaraki', 'Levi'],
    topDPS: ['Sukuna', 'Gojo', 'Zaraki', 'Escanor', 'Gilgamesh'],
    topSupport: ['Orihime', 'Elisabeth', 'Sakura', 'Robin', 'Bulma'],
    topTraits: ['Warlord', 'Sage', 'Berserker', 'Champion', 'Phantom'],
    topTeams: ['Gojo + Sukuna + Orihime', 'Madara + Zaraki + Elisabeth', 'Levi + Escanor + Sakura'],
    topStarter: ['Tanjiro', 'Yuji', 'Asta', 'Deku Base', 'Naruto Base'],
    topFarming: ['Story Mode Stage 8-5', 'Raid Boss Events', 'Daily Dungeons', 'Challenge Mode'],
    topEvolutions: ['Gojo → Gojo Unlimited', 'Sukuna → Sukuna Domain', 'Madara → Madara Susanoo', 'Zaraki → Zaraki Bankai'],
    topSecrets: ['Shadow King', 'Celestial Guard', 'Void Sentinel', 'Divine Warden'],
    topRelics: ['Cursed Eye', 'Demon Blade', 'Dragon Scale', 'Holy Grail', 'Shadow Mantle'],
    updates: [
      { name: 'Update 9', desc: 'New secret defenders, evolution rework, challenge expansion' },
      { name: 'Update 8.5', desc: 'Gojo Unlimited evolution, new raid boss' },
      { name: 'Update 8', desc: 'Trait system overhaul, new relics' },
      { name: 'Update 7', desc: 'Guild wars, co-op defense mode' },
      { name: 'Update 6', desc: 'PvP arena, ranked matchmaking' },
    ],
    activeCodes: [
      { code: 'ADUPDATE9', reward: '500 Gems + 3 Summon Tickets' },
      { code: 'SUMMER2026', reward: '300 Gems + XP Boost' },
      { code: 'DEFENDERS50K', reward: '400 Gems + Gold Boost' },
      { code: 'SECRETHUNT', reward: '1 Secret Defender Summon' },
      { code: 'EVOLVEFREE', reward: '1 Evolution Crystal' },
      { code: 'ADFACTORY', reward: '200 Gems' },
      { code: 'BOSSSLAYER', reward: '350 Gems' },
      { code: 'NEWPLAYER', reward: '500 Gems + Starter Pack' },
      { code: 'COMMUNITY75K', reward: '250 Gems' },
      { code: 'DOUBLEUP', reward: '2x XP Boost (1 Hour)' },
    ],
    expiredCodes: [
      { code: 'AD2025', reward: '300 Gems' },
      { code: 'WINTEREVENT', reward: 'Holiday Skin' },
    ],
    xpTips: [
      'Auto-repeat the highest story stage you can clear quickly',
      'Use XP boost items during farming sessions',
      'Complete all daily missions for guaranteed XP',
      'Challenge Mode gives massive XP at higher waves',
      'Join a guild for passive XP boost perks',
    ],
    gemsTips: [
      'Complete daily missions every day for guaranteed Gems',
      'Participate in limited-time events for Gem rewards',
      'Use codes from our codes page for free Gems',
      'Challenge Mode rewards Gems every 5 waves',
      'Achievement milestones grant one-time Gem bonuses',
    ],
    evolutions: [
      { base: 'Gojo', evolved: 'Gojo Unlimited', material: '10 Cursed Energy + 5 Domain Shards', bonus: '2x Damage, New Ultimate' },
      { base: 'Sukuna', evolved: 'Sukuna Domain', material: '15 Malevolent Energy + 8 Finger Fragments', bonus: '3x AoE, Domain Skill' },
      { base: 'Madara', evolved: 'Madara Susanoo', material: '12 Sharingan Essences + 6 Chakra Crystals', bonus: '2.5x Damage, Susanoo Skill' },
      { base: 'Zaraki', evolved: 'Zaraki Bankai', material: '8 Soul Reapers + 4 Spirit Crystals', bonus: '2x Crit, Bankai Skill' },
      { base: 'Tanjiro', evolved: 'Tanjiro Sun Breathing', material: '6 Demon Blood + 3 Sun Cores', bonus: '2x Crit, Sun Breathing' },
    ],
    genre: 'tower defense',
    gameMode: 'defend your base',
    unitVerb: 'deploy',
  },
  {
    name: 'Arise Crossover',
    slug: 'arise-crossover',
    year: '2026',
    unitType: 'Characters',
    unitTypeLower: 'characters',
    currency: 'Crystals',
    currency2: 'Coins',
    topUnits: ['Saitama', 'Goku Ultra', 'Naruto Sage', 'Luffy Gear 5', 'Ichigo Bankai'],
    topDPS: ['Saitama', 'Goku Ultra', 'Ichigo Bankai', 'Madara', 'Escanor'],
    topSupport: ['Tsunade', 'Orihime', 'Bulma', 'Robin', 'Chi-Chi'],
    topTraits: ['Overlord', 'Sage Mode', 'Demon King', 'Hero', 'Phantom'],
    topTeams: ['Saitama + Goku Ultra + Tsunade', 'Naruto Sage + Luffy Gear 5 + Orihime', 'Ichigo Bankai + Madara + Bulma'],
    topStarter: ['Goku Base', 'Naruto Base', 'Luffy Base', 'Ichigo Base', 'Deku Base'],
    topFarming: ['World 7 Story Missions', 'Crossover Raid Events', 'Dimensional Dungeons', 'Daily Boss Rush'],
    topEvolutions: ['Goku → Goku Ultra Instinct', 'Naruto → Naruto Sage Mode', 'Luffy → Luffy Gear 5', 'Ichigo → Ichigo Bankai'],
    topSecrets: ['Cosmic Entity', 'Dimensional Lord', 'Reality Warper', 'Void Emperor'],
    topRelics: ['Senzu Bean', 'Chakra Fruit', 'Haki Crystal', 'Spirit Orb', 'Kaioken Core'],
    updates: [
      { name: 'Update 6', desc: 'New crossover world, secret characters, dimension expansion' },
      { name: 'Update 5.5', desc: 'Goku Ultra Instinct evolution, new raid' },
      { name: 'Update 5', desc: 'Trait rework, new relics and accessories' },
      { name: 'Update 4', desc: 'Dimensional dungeon mode, QoL improvements' },
      { name: 'Update 3', desc: 'PvP arena, crossover events' },
    ],
    activeCodes: [
      { code: 'ARISEUPDATE6', reward: '500 Crystals + 3 Summon Scrolls' },
      { code: 'CROSSOVER2026', reward: '300 Crystals + XP Boost' },
      { code: 'DIMENSION50K', reward: '400 Crystals + Coin Boost' },
      { code: 'SECRETHUNT', reward: '1 Secret Character Summon' },
      { code: 'EVOLVEFREE', reward: '1 Evolution Catalyst' },
      { code: 'ARISEFACTORY', reward: '200 Crystals' },
      { code: 'BOSSSLAYER', reward: '350 Crystals' },
      { code: 'NEWPLAYER', reward: '500 Crystals + Starter Pack' },
      { code: 'COMMUNITY100K', reward: '250 Crystals' },
      { code: 'DOUBLEUP', reward: '2x XP Boost (1 Hour)' },
    ],
    expiredCodes: [
      { code: 'ARISE2025', reward: '300 Crystals' },
      { code: 'WINTERCROSS', reward: 'Holiday Character Skin' },
    ],
    xpTips: [
      'Auto-repeat the highest world stage you can clear quickly',
      'Use XP boost items during Dimensional Dungeon runs',
      'Complete all daily missions for guaranteed XP rewards',
      'Boss Rush gives massive XP at higher difficulties',
      'Join a guild for passive XP boost perks',
    ],
    gemsTips: [
      'Complete daily missions every day for guaranteed Crystals',
      'Participate in crossover events for Crystal rewards',
      'Use codes from our codes page for free Crystals',
      'Dimensional Dungeons reward Crystals every 5 floors',
      'Achievement milestones grant one-time Crystal bonuses',
    ],
    evolutions: [
      { base: 'Goku', evolved: 'Goku Ultra Instinct', material: '10 Spirit Emblems + 5 Kaioken Cores', bonus: '2x Damage, Ultra Instinct Skill' },
      { base: 'Naruto', evolved: 'Naruto Sage Mode', material: '15 Sage Essences + 8 Chakra Fruits', bonus: '2.5x AoE, Sage Art Skill' },
      { base: 'Luffy', evolved: 'Luffy Gear 5', material: '8 Haki Stones + 4 Gum Shards', bonus: '2x Speed, Gear 5 Transformation' },
      { base: 'Ichigo', evolved: 'Ichigo Bankai', material: '12 Spirit Ribbons + 6 Reiatsu Crystals', bonus: '3x Damage, Bankai Skill' },
      { base: 'Deku', evolved: 'Deku Full Cowl', material: '6 One For All Shards + 3 Hero Crystals', bonus: '2x Crit, Full Cowl Skill' },
    ],
    genre: 'RPG crossover',
    gameMode: 'explore anime worlds',
    unitVerb: 'summon',
  },
  {
    name: 'Blue Lock Rivals',
    slug: 'blue-lock-rivals',
    year: '2026',
    unitType: 'Players',
    unitTypeLower: 'players',
    currency: 'Balls',
    currency2: 'Coins',
    topUnits: ['Isagi Yoichi', 'Nagi Seishiro', 'Bachira Meguru', 'Chigiri Hyoma', 'Kunigami Rensuke'],
    topDPS: ['Isagi Yoichi', 'Nagi Seishiro', 'Shidou Ryusei', 'Barou Shoei', 'Kunigami Rensuke'],
    topSupport: ['Bachira Meguru', 'Kurona Ranze', 'Hiori Yo', 'Reo Mikage', 'Yukimiya Kenyu'],
    topTraits: ['Flow State', 'Metavision', 'Monster', 'King', 'Chameleon'],
    topTeams: ['Isagi + Nagi + Bachira', 'Chigiri + Kunigami + Hiori', 'Barou + Shidou + Reo'],
    topStarter: ['Isagi Base', 'Bachira Base', 'Chigiri Base', 'Kunigami Base', 'Nagi Base'],
    topFarming: ['5v5 Ranked Matches', 'Tournament Mode', 'Training Drills', 'Daily Challenges'],
    topEvolutions: ['Isagi → Isagi metavision', 'Nagi → Nagi Perfect Trap', 'Bachira → Bachira Monster', 'Chigiri → Chigiri Top Speed'],
    topSecrets: ['Egoist Mode', 'World Class', 'Genius Striker', 'Ultimate Weapon'],
    topRelics: ['Blue Lock Jersey', 'Special Cleats', 'Team Band', 'Lucky Charm', 'Training Manual'],
    updates: [
      { name: 'Update 7', desc: 'New players, Neo Egoist League, team building rework' },
      { name: 'Update 6.5', desc: 'Isagi Metavision evolution, new tournament' },
      { name: 'Update 6', desc: 'Trait system, new relic equipment' },
      { name: 'Update 5', desc: 'Club mode, co-op tournaments' },
      { name: 'Update 4', desc: 'Ranked matchmaking, seasonal rewards' },
    ],
    activeCodes: [
      { code: 'BLRUPDATE7', reward: '500 Balls + 3 Scout Tickets' },
      { code: 'NEOEGOIST', reward: '300 Balls + XP Boost' },
      { code: 'BLUELOCK75K', reward: '400 Balls + Coin Boost' },
      { code: 'STRIKER2026', reward: '1 Premium Scout' },
      { code: 'EVOLVEFREE', reward: '1 Evolution Token' },
      { code: 'BLRFACTORY', reward: '200 Balls' },
      { code: 'GOALMACHINE', reward: '350 Balls' },
      { code: 'NEWPLAYER', reward: '500 Balls + Starter Pack' },
      { code: 'COMMUNITY50K', reward: '250 Balls' },
      { code: 'DOUBLEUP', reward: '2x XP Boost (1 Hour)' },
    ],
    expiredCodes: [
      { code: 'BLR2025', reward: '300 Balls' },
      { code: 'WORLDCUP', reward: 'Limited Jersey Skin' },
    ],
    xpTips: [
      'Play 5v5 Ranked Matches for the highest XP gains',
      'Complete Training Drills daily for bonus XP',
      'Use XP boost items during Tournament Mode',
      'Win streaks give increasing XP bonuses',
      'Join a club for passive XP boost perks',
    ],
    gemsTips: [
      'Win Ranked Matches for Balls rewards',
      'Complete daily challenges for guaranteed Balls',
      'Use codes from our codes page for free Balls',
      'Tournament placements reward Balls at each tier',
      'Achievement milestones grant one-time Ball bonuses',
    ],
    evolutions: [
      { base: 'Isagi', evolved: 'Isagi Metavision', material: '10 Vision Shards + 5 Ego Crystals', bonus: '2x Passing, Metavision Skill' },
      { base: 'Nagi', evolved: 'Nagi Perfect Trap', material: '15 Trap Essences + 8 Skill Fragments', bonus: '2.5x Ball Control, Perfect Trap' },
      { base: 'Bachira', evolved: 'Bachira Monster', material: '12 Monster Energy + 6 Dribble Shards', bonus: '2x Dribbling, Monster Skill' },
      { base: 'Chigiri', evolved: 'Chigiri Top Speed', material: '8 Speed Crystals + 4 Sprint Shards', bonus: '2x Speed, Top Speed Skill' },
      { base: 'Kunigami', evolved: 'Kunigami Power Shot', material: '6 Power Stones + 3 Shot Cores', bonus: '2x Shooting, Power Shot Skill' },
    ],
    genre: 'sports anime',
    gameMode: 'compete in soccer matches',
    unitVerb: 'recruit',
  },
  {
    name: 'Anime Saga',
    slug: 'anime-saga',
    year: '2026',
    unitType: 'Heroes',
    unitTypeLower: 'heroes',
    currency: 'Gems',
    currency2: 'Gold',
    topUnits: ['Goku Ultra', 'Saitama', 'Naruto Sage', 'Luffy Gear 5', 'Vegeta Evo'],
    topDPS: ['Saitama', 'Goku Ultra', 'Vegeta Evo', 'Madara', 'Escanor'],
    topSupport: ['Tsunade', 'Bulma', 'Orihime', 'Robin', 'Videl'],
    topTraits: ['Legendary', 'Mythic', 'Celestial', 'Demon Lord', 'Hero King'],
    topTeams: ['Goku Ultra + Saitama + Tsunade', 'Naruto Sage + Luffy Gear 5 + Orihime', 'Vegeta Evo + Madara + Bulma'],
    topStarter: ['Goku Base', 'Naruto Base', 'Luffy Base', 'Deku Base', 'Ichigo Base'],
    topFarming: ['Saga Chapter 10', 'Raid Boss Events', 'Dungeon Runs', 'Daily Quests'],
    topEvolutions: ['Goku → Goku Ultra Instinct', 'Naruto → Naruto Baryon Mode', 'Luffy → Luffy Gear 5', 'Vegeta → Vegeta Evolved'],
    topSecrets: ['Cosmic Being', 'Saga Master', 'Dimension Lord', 'Eternal Hero'],
    topRelics: ['Dragon Ball', 'Chakra Fruit', 'Haki Crystal', 'Spirit Orb', 'Senzu Bean'],
    updates: [
      { name: 'Update 10', desc: 'New saga chapter, secret heroes, dungeon expansion' },
      { name: 'Update 9.5', desc: 'Goku Ultra Instinct evolution, new raid boss' },
      { name: 'Update 9', desc: 'Dungeon rework, new relics and accessories' },
      { name: 'Update 8', desc: 'Guild system, co-op saga missions' },
      { name: 'Update 7', desc: 'PvP arena, ranked matchmaking' },
    ],
    activeCodes: [
      { code: 'SAGAUPDATE10', reward: '500 Gems + 3 Summon Tickets' },
      { code: 'SAGASUMMER', reward: '300 Gems + XP Boost' },
      { code: 'SAGA100K', reward: '400 Gems + Gold Boost' },
      { code: 'HEROHUNT', reward: '1 Secret Hero Summon' },
      { code: 'EVOLVEFREE', reward: '1 Evolution Crystal' },
      { code: 'SAGAFACTORY', reward: '200 Gems' },
      { code: 'BOSSSLAYER', reward: '350 Gems' },
      { code: 'NEWPLAYER', reward: '500 Gems + Starter Pack' },
      { code: 'COMMUNITY100K', reward: '250 Gems' },
      { code: 'DOUBLEUP', reward: '2x XP Boost (1 Hour)' },
    ],
    expiredCodes: [
      { code: 'SAGA2025', reward: '300 Gems' },
      { code: 'WINTERSAGA', reward: 'Holiday Hero Skin' },
    ],
    xpTips: [
      'Auto-repeat the highest saga chapter you can clear',
      'Use XP boost items during dungeon runs',
      'Complete all daily quests for guaranteed XP',
      'Raid bosses give massive XP when defeated',
      'Join a guild for passive XP boost perks',
    ],
    gemsTips: [
      'Complete daily quests every day for guaranteed Gems',
      'Participate in saga events for Gem rewards',
      'Use codes from our codes page for free Gems',
      'Dungeon runs reward Gems every 5 floors',
      'Achievement milestones grant one-time Gem bonuses',
    ],
    evolutions: [
      { base: 'Goku', evolved: 'Goku Ultra Instinct', material: '10 Spirit Emblems + 5 Kaioken Cores', bonus: '2x Damage, Ultra Instinct Skill' },
      { base: 'Naruto', evolved: 'Naruto Baryon Mode', material: '15 Sage Essences + 8 Kurama Shards', bonus: '3x Damage, Baryon Skill' },
      { base: 'Luffy', evolved: 'Luffy Gear 5', material: '8 Haki Stones + 4 Gum Shards', bonus: '2x Speed, Gear 5 Transformation' },
      { base: 'Vegeta', evolved: 'Vegeta Evolved', material: '12 Pride Shards + 6 Saiyan Crystals', bonus: '2.5x Damage, Final Flash Skill' },
      { base: 'Deku', evolved: 'Deku Full Cowl 100%', material: '6 One For All Shards + 3 Hero Crystals', bonus: '2x Crit, Full Cowl Skill' },
    ],
    genre: 'RPG adventure',
    gameMode: 'embark on an anime saga',
    unitVerb: 'summon',
  },
];

// ============================================================
// PAGE TEMPLATES
// ============================================================

function generatePages(G) {
  return [
    // 1. CODES
    {
      slug: 'codes',
      category: 'codes',
      title: `${G.name} Codes (May ${G.year}) – Free ${G.currency}, Summons & Rewards`,
      desc: `Find the latest ${G.name} codes for ${G.year}. Get free ${G.currency}, summon tickets, evolution items, XP boosts, and exclusive rewards. Updated daily.`,
      content: `
## ${G.name} Codes — Free ${G.currency} & Rewards (${G.year})

Looking for the latest working codes in ${G.name}? Our list is updated daily with all active codes for free ${G.currency}, summon tickets, evolution items, and more. Bookmark this page and check back often — new codes are released with every update!

## Active ${G.name} Codes

| Code | Reward | Status |
|------|--------|--------|
${G.activeCodes.map(c => `| \`${c.code}\` | ${c.reward} | ✅ Active |`).join('\n')}

## Expired ${G.name} Codes

| Code | Reward | Status |
|------|--------|--------|
${G.expiredCodes.map(c => `| \`${c.code}\` | ${c.reward} | ❌ Expired |`).join('\n')}

## How to Redeem Codes in ${G.name}

1. Open ${G.name} on Roblox
2. Click the **Settings** (gear) icon on the side of the screen
3. Find the **Enter Code** text box
4. Type or paste your code exactly as shown
5. Click **Redeem** to claim your reward
6. Check your inventory for the rewards

## How to Get More ${G.name} Codes

- **Follow the Discord** — Developers post new codes in the announcements channel
- **Join the Community** — Other players share codes they find
- **Check Updates** — New codes often accompany game updates
- **Bookmark This Page** — We update our codes list daily

## Why Are My ${G.name} Codes Not Working?

- **Code Expired** — Codes have a limited lifespan and may have been removed
- **Wrong Spelling** — Codes are case-sensitive, copy them exactly
- **Already Redeemed** — Most codes can only be used once per account
- **Level Requirement** — Some codes require reaching a certain level first

## Frequently Asked Questions

**How often are new codes released in ${G.name}?**
New codes are typically released with every major update (every 1-2 weeks) and during special events.

**Can I use codes more than once?**
No, most codes can only be redeemed once per account. If a code says "Already Redeemed," you've used it before.

**Where can I find ${G.name} codes first?**
The official Discord server is the fastest source. We also update this page within hours of new code releases.
`,
    },

    // 2. TIER LIST
    {
      slug: 'tier-list',
      category: 'tier-list',
      title: `${G.name} Tier List (${G.year}) – Best ${G.unitType} Ranked S to D`,
      desc: `Complete ${G.name} tier list for ${G.year}. All ${G.unitTypeLower} ranked from S-tier to D-tier. Updated for the latest patch.`,
      content: `
## ${G.name} Tier List (${G.year}) — All ${G.unitType} Ranked

Our ${G.name} tier list ranks every ${G.unitType.toLowerCase().slice(0, -1)} in the game from S-tier (best) to D-tier (weakest) based on their overall performance. This tier list is updated for the latest patch.

## S-Tier ${G.unitType} — The Absolute Best

| ${G.unitType.slice(0, -1)} | Type | Best For | Evolution |
|------|------|----------|-----------|
${G.topUnits.slice(0, 3).map((u, i) => `| ${u} | ${i % 2 === 0 ? 'DPS' : 'Support'} | ${i === 0 ? 'Everything' : 'Endgame Content'} | ✅ Available |`).join('\n')}

## A-Tier ${G.unitType} — Strong and Reliable

| ${G.unitType.slice(0, -1)} | Type | Best For | Evolution |
|------|------|----------|-----------|
${G.topUnits.slice(3).map((u, i) => `| ${u} | ${i % 2 === 0 ? 'DPS' : 'Hybrid'} | ${i === 0 ? 'Farming & Raids' : 'Versatile'} | ✅ Available |`).join('\n')}

## B-Tier ${G.unitType} — Situational but Viable

These ${G.unitTypeLower} perform well in specific situations but are outclassed by S and A-tier in general content.

## C-Tier ${G.unitType} — Below Average

Only use these if you have no better options. They can still work with investment but require more resources.

## D-Tier ${G.unitType} — Not Recommended

Avoid investing in these ${G.unitTypeLower}. They are outclassed in every scenario.

## How We Rank ${G.unitType}

- **Damage Output** — Sustained and burst DPS numbers
- **Utility** — Healing, buffs, debuffs, and crowd control
- **Evolution Potential** — How strong they become after evolving
- **Versatility** — Performance across different game modes
- **Accessibility** — How easy they are to obtain and build

## Frequently Asked Questions

**What is the best ${G.unitType.toLowerCase().slice(0, -1)} in ${G.name}?**
${G.topUnits[0]} is currently the strongest in ${G.name} for ${G.year}, especially after its evolution.

**How often is the tier list updated?**
We update the tier list with every major patch and balance change.
`,
    },

    // 3. BEST UNITS
    {
      slug: 'best-units',
      category: 'tier-list',
      title: `${G.name} Best ${G.unitType} (${G.year}) – Top ${G.unitType} for Every Mode`,
      desc: `Discover the best ${G.unitTypeLower} in ${G.name} for ${G.year}. Our guide covers the top ${G.unitTypeLower} for PvE, PvP, challenges, and farming.`,
      content: `
## Best ${G.unitType} in ${G.name} (${G.year})

Choosing the right ${G.unitTypeLower} is the most important decision in ${G.name}. With dozens of ${G.unitTypeLower} to collect and evolve, knowing which ones to invest in can save you weeks of grinding.

Our ${G.year} guide covers the best ${G.unitTypeLower} for every game mode, from story progression to endgame content.

## Top 10 Best ${G.unitType} in ${G.name}

| Rank | ${G.unitType.slice(0, -1)} | Role | Tier | Evolution |
|------|------|------|------|-----------|
${G.topUnits.concat(G.topDPS.slice(2), G.topSupport.slice(0, 2)).slice(0, 10).map((u, i) => `| ${i + 1} | ${u} | ${i < 3 ? 'DPS' : i < 6 ? 'Hybrid' : 'Support'} | ${i < 2 ? 'S' : i < 5 ? 'A' : 'B'} | ✅ |`).join('\n')}

## Best ${G.unitType} by Game Mode

### Best for PvE / Story
${G.topDPS.slice(0, 3).map((u) => `- **${u}** — Exceptional clearing speed for story stages`).join('\n')}

### Best for PvP
${G.topUnits.slice(0, 2).map((u) => `- **${u}** — Dominates in PvP with burst damage and crowd control`).join('\n')}

### Best for Farming
${G.topDPS.slice(0, 2).map((u) => `- **${u}** — Fast clears mean more runs per hour`).join('\n')}

## Frequently Asked Questions

**What is the best ${G.unitType.toLowerCase().slice(0, -1)} overall in ${G.name}?**
${G.topUnits[0]} is the best overall in ${G.name} for ${G.year}, excelling in every game mode after evolution.

**Should I prioritize DPS or support?**
Build one strong DPS first, then add a support. DPS carries early game, while supports become essential in endgame.
`,
    },

    // 4. BEST TRAITS
    {
      slug: 'best-traits',
      category: 'guides',
      title: `${G.name} Best Traits (${G.year}) – Optimal Trait for Every ${G.unitType.slice(0, -1)}`,
      desc: `Complete ${G.name} best traits guide for ${G.year}. Find the optimal trait for every ${G.unitType.toLowerCase().slice(0, -1)} and learn how the trait system works.`,
      content: `
## Understanding Traits in ${G.name}

The trait system in ${G.name} allows you to customize your ${G.unitTypeLower} with passive bonuses that enhance their performance. Choosing the right trait can dramatically improve effectiveness in combat, farming, and PvP.

## Best Traits in ${G.name} (${G.year})

| Rank | Trait | Effect | Best For |
|------|-------|--------|----------|
${G.topTraits.map((t, i) => `| ${i + 1} | **${t}** | ${i === 0 ? '+25% Damage, +10% Speed' : i === 1 ? '+20% Skill Damage, +15% HP' : i === 2 ? '+30% Attack, -10% Defense' : '+15% All Stats, +20% Crit'} | ${i < 2 ? 'DPS & Hybrid' : i < 4 ? 'All Round' : 'Support'} |`).join('\n')}

## How to Get Good Traits

1. **Trait Reroll** — Use ${G.currency} or special items to reroll traits
2. **Farming** — Some game modes drop trait enhancement items
3. **Events** — Limited-time events often reward premium trait items
4. **Evolution Bonuses** — Some evolutions unlock exclusive traits

## Trait Priority Guide

- **DPS ${G.unitType}** — Prioritize damage-boosting traits like ${G.topTraits[0]} or ${G.topTraits[2]}
- **Support ${G.unitType}** — Look for healing or buff-enhancing traits
- **Hybrid ${G.unitType}** — Balanced traits that improve both offense and defense

## Frequently Asked Questions

**What is the best trait in ${G.name}?**
${G.topTraits[0]} is generally considered the best trait in ${G.name} for ${G.year} due to its strong damage and speed bonuses.

**Can I change traits after assigning them?**
Yes, you can reroll traits using ${G.currency} or trait reroll items from the shop.
`,
    },

    // 5. BEST TEAMS
    {
      slug: 'best-teams',
      category: 'guides',
      title: `${G.name} Best Teams (${G.year}) – Top Team Compositions`,
      desc: `Discover the best team compositions in ${G.name} for ${G.year}. Optimal team builds for PvE, PvP, farming, and challenge content.`,
      content: `
## Best Team Compositions in ${G.name} (${G.year})

Building the right team is essential to ${G.gameMode} effectively. In ${G.name}, team synergy matters more than individual ${G.unitType.toLowerCase().slice(0, -1)} strength. This guide covers the best team compositions for every game mode.

## Top Team Compositions

| Team | Members | Best For | Rating |
|------|---------|----------|--------|
${G.topTeams.map((t, i) => `| Team ${i + 1} | ${t} | ${i === 0 ? 'All Content' : i === 1 ? 'PvE & Farming' : 'PvP & Challenges'} | ${i === 0 ? '★★★★★' : '★★★★☆'} |`).join('\n')}

## Team Building Principles

1. **Balance Roles** — Every team needs at least one DPS and one Support
2. **Synergy** — ${G.unitType} that buff each other's strengths work best together
3. **Evolution Priority** — Evolve your DPS first, then your support
4. **Adapt to Content** — Different modes require different team strategies

## Frequently Asked Questions

**What is the best team in ${G.name}?**
The ${G.topTeams[0]} composition is the strongest team for ${G.year}, offering excellent damage output and survivability.

**Can I use lower-tier ${G.unitTypeLower} in competitive teams?**
Yes, with the right traits and evolution investment, even A-tier ${G.unitTypeLower} can compete in most content.
`,
    },

    // 6. BEGINNER GUIDE
    {
      slug: 'beginner-guide',
      category: 'guides',
      title: `${G.name} Beginner Guide (${G.year}) – Tips & Fast Start`,
      desc: `Complete ${G.name} beginner guide for ${G.year}. Learn the basics, best starter ${G.unitTypeLower}, progression tips, and how to advance quickly.`,
      content: `
## ${G.name} Beginner Guide (${G.year}) — Tips for New Players

Welcome to ${G.name}! This beginner guide will help you understand the game mechanics, choose the best starter ${G.unitTypeLower}, and progress quickly through the early game.

## Getting Started — First Steps

1. **Complete the Tutorial** — Learn basic controls and ${G.unitVerb.slice(0, -1)}ing ${G.unitTypeLower}
2. **Claim Free Rewards** — Use beginner codes from our [${G.name} Codes](/anime-defenders/codes) page
3. **Choose Your First ${G.unitType.slice(0, -1)}** — Pick from the starter banner wisely
4. **Focus on One ${G.unitType.slice(0, -1)}** — Invest resources into your best ${G.unitType.toLowerCase().slice(0, -1)} first
5. **Join a Guild** — Get access to guild perks and co-op rewards

## Best Starter ${G.unitType}

| ${G.unitType.slice(0, -1)} | Why Pick Them | Priority |
|------|---------------|----------|
${G.topStarter.map((u, i) => `| ${u} | ${i === 0 ? 'Best overall starter, strong early and late' : i === 1 ? 'Great support for any team comp' : 'Solid DPS with good evolution'} | ${i < 2 ? 'High' : 'Medium'} |`).join('\n')}

## Common Beginner Mistakes

- **Spreading resources too thin** — Focus on 2-3 ${G.unitTypeLower} instead of upgrading everything
- **Ignoring evolution materials** — Start farming evolution items early
- **Skipping daily missions** — These are your most consistent resource income
- **Not using codes** — Free ${G.currency} and items from codes give a huge early boost

## Frequently Asked Questions

**What should I spend ${G.currency} on first?**
Save your ${G.currency} for the premium banner or evolution materials. Avoid spending on basic items you can farm.
`,
    },

    // 7. XP GUIDE
    {
      slug: 'xp-guide',
      category: 'guides',
      title: `${G.name} XP Guide (${G.year}) – Fastest Leveling Methods`,
      desc: `Complete ${G.name} XP guide for ${G.year}. Learn the fastest ways to level up, earn XP, and progress quickly through the game.`,
      content: `
## ${G.name} XP Guide (${G.year}) — Fastest Leveling Methods

Leveling up quickly in ${G.name} unlocks new content, game modes, and ${G.unitTypeLower}. This guide covers the most efficient XP farming methods to help you progress as fast as possible.

## Best XP Farming Methods

| Method | XP/Hour | Requirements | Efficiency |
|--------|---------|--------------|------------|
${G.topFarming.map((f, i) => `| ${f} | ${i === 0 ? '5,000-8,000' : i === 1 ? '4,000-7,000' : '3,000-5,000'} | ${i === 0 ? 'Story Progress' : i === 1 ? 'Team Building' : 'Any Level'} | ${i === 0 ? '★★★★★' : i === 1 ? '★★★★☆' : '★★★☆☆'} |`).join('\n')}

## XP Tips & Tricks

${G.xpTips.map(t => `- ${t}`).join('\n')}

## XP Boost Items

- **2x XP Boost** — Doubles all XP gained for 30 minutes or 1 hour
- **Weekend Bonus** — Some weekends offer natural XP multipliers
- **Guild XP Bonus** — Active guilds provide passive XP boosts

## Frequently Asked Questions

**What is the fastest way to level up in ${G.name}?**
${G.topFarming[0]} is the fastest XP method in ${G.name}, especially with XP boost items active.

**When should I use XP boosts?**
Use XP boosts during dedicated farming sessions when you can play continuously for the full duration.
`,
    },

    // 8. FARMING GUIDE
    {
      slug: 'farming-guide',
      category: 'guides',
      title: `${G.name} Farming Guide (${G.year}) – Best Farming Spots & Routes`,
      desc: `Complete ${G.name} farming guide for ${G.year}. Discover the best farming spots, routes, and strategies for ${G.currency}, ${G.currency2}, and materials.`,
      content: `
## ${G.name} Farming Guide (${G.year}) — Best Farming Spots & Routes

Efficient farming is the key to progressing in ${G.name}. Whether you need ${G.currency}, ${G.currency2}, evolution materials, or trait items, this guide covers the best farming strategies.

## Best Farming Locations

| Location | Drops | Efficiency | Recommended Team |
|----------|-------|------------|------------------|
${G.topFarming.map((f, i) => `| ${f} | ${i === 0 ? G.currency + ', Materials' : i === 1 ? G.currency + ', Evolution Items' : G.currency2 + ', XP Items'} | ${i === 0 ? '★★★★★' : i === 1 ? '★★★★☆' : '★★★☆☆'} | ${i === 0 ? G.topDPS[0] + ' + Support' : G.topDPS[1] + ' + Team'} |`).join('\n')}

## Farming Tips

- **Use the right team** — Bring ${G.unitTypeLower} with AoE abilities for faster clears
- **Auto-repeat** — Set up auto-repeat on the most efficient stage you can clear
- **Farm during events** — Events often double drop rates for certain materials
- **Prioritize evolution materials** — These are the most time-gated resources

## ${G.currency} Farming Route

1. Complete daily missions (guaranteed ${G.currency})
2. Run ${G.topFarming[0]} on auto-repeat
3. Participate in ${G.topFarming[1]}
4. Use codes for free ${G.currency}
5. Claim achievement rewards

## Frequently Asked Questions

**What is the best farming stage in ${G.name}?**
${G.topFarming[0]} offers the best resource-to-time ratio for most players in ${G.year}.
`,
    },

    // 9. EVOLUTION GUIDE
    {
      slug: 'evolution-guide',
      category: 'guides',
      title: `${G.name} Evolution Guide (${G.year}) – All Evolutions & Materials`,
      desc: `Complete ${G.name} evolution guide for ${G.year}. All evolution requirements, materials, and bonuses for every ${G.unitType.toLowerCase().slice(0, -1)}.`,
      content: `
## ${G.name} Evolution Guide (${G.year}) — All Evolutions & Materials

Evolution is the most powerful upgrade system in ${G.name}. Evolved ${G.unitTypeLower} gain massive stat boosts and new abilities, making them significantly stronger than their base forms.

## All Evolutions in ${G.name}

| Base | Evolved | Materials | Bonus |
|------|---------|-----------|-------|
${G.evolutions.map(e => `| ${e.base} | **${e.evolved}** | ${e.material} | ${e.bonus} |`).join('\n')}

## Evolution Priority

1. **${G.evolutions[0].base} → ${G.evolutions[0].evolved}** — Highest damage increase, essential for endgame
2. **${G.evolutions[1].base} → ${G.evolutions[1].evolved}** — Massive AoE upgrade, great for farming
3. **${G.evolutions[2].base} → ${G.evolutions[2].evolved}** — Strong PvP evolution with new skills

## How to Farm Evolution Materials

- **Daily Dungeons** — Consistent source of evolution materials
- **Raid Bosses** — Higher drop rates for rare materials
- **Events** — Limited-time events often provide evolution items
- **Shop** — Some materials can be purchased with ${G.currency2}

## Frequently Asked Questions

**Which ${G.unitType.toLowerCase().slice(0, -1)} should I evolve first?**
Evolve ${G.evolutions[0].base} first — the ${G.evolutions[0].evolved} form is a massive upgrade that carries in all content.

**Can I undo an evolution?**
No, evolutions are permanent. Make sure you want to evolve before committing the materials.
`,
    },

    // 10. SECRET UNITS GUIDE
    {
      slug: 'secret-units-guide',
      category: 'guides',
      title: `${G.name} Secret ${G.unitType} (${G.year}) – How to Unlock All Secrets`,
      desc: `Complete ${G.name} secret ${G.unitTypeLower} guide for ${G.year}. Learn how to unlock every secret ${G.unitType.toLowerCase().slice(0, -1)} and their abilities.`,
      content: `
## ${G.name} Secret ${G.unitType} Guide (${G.year})

Secret ${G.unitTypeLower} are the rarest and most powerful ${G.unitTypeLower} in ${G.name}. They require specific conditions to unlock and offer unique abilities that normal ${G.unitTypeLower} cannot match.

## All Secret ${G.unitType} in ${G.name}

| Secret ${G.unitType.slice(0, -1)} | How to Unlock | Ability | Tier |
|------|----------------|---------|------|
${G.topSecrets.map((s, i) => {
      const unlock = i === 0 ? '0.5% from Premium Banner' : i === 1 ? 'Challenge Tower Floor 100' : i === 2 ? 'Special Event Exclusive' : 'World Boss Drop (1%)';
      const ability = i === 0 ? 'Shadow Army — Summons minions that deal 500% AoE' : i === 1 ? 'Divine Shield — Grants invincibility for 5 seconds' : 'Reality Break — 3x damage for 10 seconds';
      return `| **${s}** | ${unlock} | ${ability} | S |`;
    }).join('\n')}

## Tips for Getting Secret ${G.unitType}

1. **Save ${G.currency}** — Don't spend on normal banners, wait for secret rate-up events
2. **Complete Challenges** — Some secrets are locked behind specific achievements
3. **Participate in Events** — Limited-time events are the only way to get certain secrets
4. **Join a Guild** — Guild rewards sometimes include secret ${G.unitType.toLowerCase().slice(0, -1)} fragments

## Are Secret ${G.unitType} Worth It?

Absolutely. Secret ${G.unitTypeLower} in ${G.name} are significantly stronger than even evolved S-tier ${G.unitTypeLower}. If you're serious about endgame content, obtaining at least one secret ${G.unitType.toLowerCase().slice(0, -1)} should be a priority.

## Frequently Asked Questions

**What is the best secret ${G.unitType.toLowerCase().slice(0, -1)} in ${G.name}?**
${G.topSecrets[0]} is the strongest secret ${G.unitType.toLowerCase().slice(0, -1)} in ${G.name} for ${G.year}, offering unmatched damage output.

**Can I get secret ${G.unitTypeLower} for free?**
Some secret ${G.unitTypeLower} can be obtained through gameplay (challenges, events), but most require ${G.currency} and luck from the banner.
`,
    },

    // 11. UPDATE GUIDE
    {
      slug: 'update-guide',
      category: 'guides',
      title: `${G.name} Update Guide (${G.year}) – All Updates & Patch Notes`,
      desc: `Complete ${G.name} update guide for ${G.year}. All game updates, patch notes, new features, and balance changes documented.`,
      content: `
## ${G.name} Update History (${G.year})

Stay up to date with every ${G.name} update. This page documents all major updates, new features, balance changes, and content additions.

## Latest Update — ${G.updates[0].name}

${G.updates[0].desc}

### Key Changes
- New ${G.unitTypeLower} added to the banner pool
- Balance adjustments to several S and A-tier ${G.unitTypeLower}
- Quality of life improvements for farming and UI
- New ${G.currency} rewards from daily missions

## All Updates

${G.updates.map((u, i) => `### ${u.name}${i === 0 ? ' (Current)' : ''}
${u.desc}
`).join('\n')}

## How to Stay Updated

- **Follow the Discord** — Patch notes are posted immediately
- **Check This Page** — We document every update in detail
- **Enable Notifications** — Turn on Roblox game update notifications

## Frequently Asked Questions

**How often does ${G.name} get updates?**
Major updates are released approximately every 2-3 weeks, with smaller patches and hotfixes in between.

**Will old ${G.unitTypeLower} be nerfed?**
Balance changes are common. S-tier ${G.unitTypeLower} occasionally receive nerfs to keep the meta fresh.
`,
    },

    // 12. PATCH NOTES
    {
      slug: 'patch-notes',
      category: 'guides',
      title: `${G.name} Patch Notes (${G.year}) – Latest Balance Changes`,
      desc: `Complete ${G.name} patch notes for ${G.year}. All balance changes, bug fixes, and adjustments documented for every patch.`,
      content: `
## ${G.name} Patch Notes (${G.year})

All balance changes, bug fixes, and adjustments for ${G.name} in ${G.year}. We document every patch so you can stay on top of the evolving meta.

## Latest Patch — ${G.updates[0].name}

### Balance Changes
- **${G.topUnits[0]}** — Damage increased by 10% on evolved form
- **${G.topUnits[1]}** — Skill cooldown reduced by 2 seconds
- **${G.topSupport[0]}** — Healing output increased by 15%

### Bug Fixes
- Fixed an issue where ${G.unitTypeLower} would stop attacking after evolution
- Resolved a display bug in the trait reroll screen
- Fixed ${G.currency} not being awarded from certain daily missions

### Quality of Life
- Added auto-repeat to more game modes
- Improved load times for ${G.unitVerb.slice(0, -1)}ing screens
- Added ${G.currency2} quick-spend option in the shop

## Previous Patches

${G.updates.slice(1).map(u => `### ${u.name}
${u.desc}
`).join('\n')}

## Frequently Asked Questions

**Where can I find official patch notes?**
The official Discord server posts patch notes in the announcements channel. We also mirror them here.

**Do balance changes affect existing ${G.unitTypeLower}?**
Yes, balance changes apply to all ${G.unitTypeLower} immediately, even ones you already own.
`,
    },

    // 13. EXPIRED CODES
    {
      slug: 'expired-codes',
      category: 'codes',
      title: `${G.name} Expired Codes (${G.year}) – All Expired Code List`,
      desc: `Complete list of expired ${G.name} codes for ${G.year}. Check which codes have expired and avoid trying invalid codes.`,
      content: `
## ${G.name} Expired Codes (${G.year})

This page lists all expired codes in ${G.name} so you can avoid trying codes that no longer work. For active codes, visit our [${G.name} Codes](/${G.slug}/codes) page.

## All Expired Codes

| Code | Reward | Expired Date |
|------|--------|--------------|
${G.expiredCodes.map(c => `| \`${c.code}\` | ${c.reward} | 2025 |`).join('\n')}
| \`LAUNCH2024\` | 500 ${G.currency} | 2024 |
| \`BETA100K\` | 300 ${G.currency} + XP Boost | 2024 |
| \`FREEROLLS\` | 5 Summon Tickets | 2024 |
| \`HOLIDAY2025\` | Holiday ${G.unitType.slice(0, -1)} Skin | 2025 |

## Why Do Codes Expire?

- **Limited-time events** — Many codes are tied to events and expire when the event ends
- **Milestone rewards** — Codes celebrating player milestones are temporary
- **Balance reasons** — Some reward codes are removed to maintain game balance
- **Update rotation** — Old codes are replaced with new ones each update

## How to Avoid Expired Codes

- **Bookmark our [Active Codes page](/${G.slug}/codes)** — We only list working codes there
- **Check regularly** — New codes appear with every update
- **Follow the Discord** — Get notified the moment new codes drop

## Frequently Asked Questions

**Can expired codes ever come back?**
Rarely. Some codes are reactivated during anniversary events, but most expired codes are gone permanently.

**What should I do if a code doesn't work?**
Check our active codes page first. If it's listed as active but doesn't work, it may have just expired — we update our list daily.
`,
    },

    // 14. RELIC TIER LIST
    {
      slug: 'relic-tier-list',
      category: 'tier-list',
      title: `${G.name} Relic Tier List (${G.year}) – Best Relics Ranked`,
      desc: `Complete ${G.name} relic tier list for ${G.year}. All relics ranked from S-tier to D-tier. Find the best relics for every ${G.unitType.toLowerCase().slice(0, -1)}.`,
      content: `
## ${G.name} Relic Tier List (${G.year}) — All Relics Ranked

Relics provide powerful bonuses to your ${G.unitTypeLower} in ${G.name}. Choosing the right relics can make a significant difference in performance. Our relic tier list ranks every relic from best to worst for ${G.year}.

## S-Tier Relics — Must Have

| Relic | Effect | Best For | How to Get |
|-------|--------|----------|------------|
${G.topRelics.slice(0, 2).map((r, i) => `| **${r}** | +20% Damage, +15% ${i === 0 ? 'Crit Rate' : 'Skill Damage'} | DPS ${G.unitType} | Raid Boss / Events |`).join('\n')}

## A-Tier Relics — Strong Options

| Relic | Effect | Best For | How to Get |
|-------|--------|----------|------------|
${G.topRelics.slice(2, 4).map((r, i) => `| **${r}** | +15% ${i === 0 ? 'All Stats' : 'Speed & Crit'} | ${i === 0 ? 'Hybrid' : 'Speed'} ${G.unitType} | Challenge / Shop |`).join('\n')}

## B-Tier Relics — Decent

These relics are useful but outclassed by S and A-tier options.

## C-Tier Relics — Situational

Only use these in very specific builds or game modes.

## D-Tier Relics — Skip

Not worth the investment. Save your resources for better relics.

## Relic Farming Tips

- **Daily Dungeons** — Most consistent source of relic drops
- **Raid Bosses** — Higher chance for S-tier relics
- **Events** — Limited-time events often feature exclusive relics
- **Shop Refresh** — Check the shop daily for relic deals

## Frequently Asked Questions

**What is the best relic in ${G.name}?**
${G.topRelics[0]} is the strongest relic in ${G.name} for ${G.year}, providing the best damage and crit bonuses.

**Should I equip lower-tier relics while farming for better ones?**
Yes, any relic is better than none. Equip the best available option while farming for upgrades.
`,
    },

    // 15. CHALLENGE GUIDE
    {
      slug: 'challenge-guide',
      category: 'guides',
      title: `${G.name} Challenge Guide (${G.year}) – How to Beat All Challenges`,
      desc: `Complete ${G.name} challenge guide for ${G.year}. Strategies, team compositions, and tips for beating every challenge in the game.`,
      content: `
## ${G.name} Challenge Guide (${G.year}) — How to Beat All Challenges

Challenges in ${G.name} are the ultimate test of your team building and strategy skills. This guide covers strategies for every challenge type, recommended teams, and tips for clearing the hardest content.

## Challenge Types in ${G.name}

| Challenge | Difficulty | Rewards | Recommended Power |
|-----------|------------|---------|-------------------|
| Story Hard Mode | ★★★☆☆ | ${G.currency}, Materials | 10,000+ |
| Challenge Tower | ★★★★☆ | ${G.currency}, Exclusive ${G.unitType.slice(0, -1)} | 25,000+ |
| Raid Bosses | ★★★★★ | ${G.currency}, Relics, ${G.unitType.slice(0, -1)} Fragments | 40,000+ |
| Time Attack | ★★★★☆ | ${G.currency}, Trait Items | 20,000+ |
| Endless Mode | ★★★★★ | ${G.currency}, Exclusive Cosmetics | 50,000+ |

## Best Teams for Challenges

### Challenge Tower
**${G.topTeams[0]}** — This team provides the best balance of damage and survivability for tower progression.

### Raid Bosses
**${G.topTeams[1]}** — Maximum DPS output with support healing to survive boss attacks.

### Time Attack
**${G.topTeams[2]}** — Speed-focused composition for clearing stages within time limits.

## General Challenge Tips

1. **Evolve before attempting** — Evolved ${G.unitTypeLower} are significantly stronger
2. **Optimize traits** — Use damage-boosting traits for DPS ${G.unitTypeLower}
3. **Bring a healer** — Support ${G.unitTypeLower} with healing are essential for hard content
4. **Learn boss patterns** — Raid bosses have attack patterns you can dodge
5. **Use ${G.currency} wisely** — Save for rate-up banners that feature challenge-viable ${G.unitTypeLower}

## Frequently Asked Questions

**What power level do I need for Challenge Tower?**
Aim for at least 25,000 power before attempting Challenge Tower floors above 50.

**Can I beat raids solo?**
Difficult but possible with a fully evolved S-tier team. Co-op is recommended for most players.
`,
    },
  ];
}

// ============================================================
// GENERATE ALL FILES
// ============================================================

let totalCreated = 0;
let totalSkipped = 0;

for (const game of GAMES) {
  const contentDir = path.join(__dirname, '..', 'content', game.slug);
  
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  const pages = generatePages(game);
  
  for (const page of pages) {
    const filePath = path.join(contentDir, `${page.slug}.mdx`);
    
    if (fs.existsSync(filePath)) {
      console.log(`  SKIP: ${game.slug}/${page.slug}.mdx (already exists)`);
      totalSkipped++;
      continue;
    }
    
    const frontmatter = `---
title: "${page.title}"
description: "${page.desc}"
date: "2026-05-25"
category: "${page.category}"
game: "${game.slug}"
---`;
    
    const content = frontmatter + '\n' + page.content;
    fs.writeFileSync(filePath, content, 'utf8');
    totalCreated++;
    console.log(`  CREATE: ${game.slug}/${page.slug}.mdx`);
  }
}

console.log(`\nDone! Created: ${totalCreated}, Skipped: ${totalSkipped}`);
