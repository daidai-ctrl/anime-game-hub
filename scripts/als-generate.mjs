/**
 * Anime Last Stand Content Generator
 * 14 page types for a tower defense anime game
 * 
 * Usage: node scripts/als-generate.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'anime-last-stand');

const G = {
  name: 'Anime Last Stand',
  slug: 'anime-last-stand',
  year: '2026',
  unitType: 'Units',
  unitTypeLower: 'units',
  currency: 'Gems',
  currency2: 'Gold',
  topUnits: ['Gojo', 'Sukuna', 'Madara', 'Goku Ultra', 'Luffy Gear 5'],
  topDPS: ['Sukuna', 'Gojo', 'Madara', 'Escarnor', 'Levi'],
  topSupport: ['Elisabeth', 'Orihime', 'Sakura', 'Robin', 'Bulma'],
  topTraits: ['Warlord', 'Sage', 'Berserker', 'Champion', 'Phantom'],
  topTeams: ['Gojo + Sukuna + Elisabeth', 'Madara + Goku Ultra + Orihime', 'Luffy Gear 5 + Levi + Sakura'],
  topStarter: ['Tanjiro', 'Yuji', 'Asta', 'Deku Base', 'Naruto Base'],
  topFarming: ['Story Mode Stage 10-5', 'Raid Boss Events', 'Challenge Tower', 'Daily Dungeons'],
  topEvolutions: ['Gojo → Gojo Unleashed', 'Sukuna → Sukuna Domain', 'Madara → Madara Susanoo', 'Luffy → Luffy Gear 5'],
  topSecrets: ['Shadow Monarch', 'Celestial Being', 'Void Walker', 'Divine Paladin'],
  topRelics: ['Cursed Finger', 'Demon Sword', 'Dragon Heart', 'Holy Grail', 'Shadow Cloak'],
  updates: [
    { name: 'Update 8', desc: 'New secret units, evolution system rework, challenge mode expansion' },
    { name: 'Update 7.5', desc: 'Gojo Unleashed evolution, new raid boss' },
    { name: 'Update 7', desc: 'Trait system overhaul, new relics and accessories' },
    { name: 'Update 6', desc: 'Challenge tower mode, quality of life improvements' },
    { name: 'Update 5', desc: 'Guild system, co-op raids and events' },
    { name: 'Update 4', desc: 'PvP arena, ranked matchmaking' },
    { name: 'Update 3', desc: 'Sukuna evolution, new story chapters' },
  ],
  activeCodes: [
    { code: 'ALSUPDATE8', reward: '500 Gems + 3 Summon Tickets' },
    { code: 'SUMMER2026', reward: '300 Gems + XP Boost' },
    { code: 'SECRETHUNT', reward: '1 Secret Unit Summon' },
    { code: 'EVOLVEFREE', reward: '1 Evolution Crystal' },
    { code: 'ALSFACTORY', reward: '200 Gems' },
    { code: 'TOWER50K', reward: '400 Gems + Gold Boost' },
    { code: 'BOSSSLAYER', reward: '350 Gems' },
    { code: 'NEWPLAYER', reward: '500 Gems + Starter Pack' },
    { code: 'COMMUNITY50K', reward: '250 Gems' },
    { code: 'DOUBLEUP', reward: '2x XP Boost (1 Hour)' },
  ],
  expiredCodes: [
    { code: 'ALS2025', reward: '300 Gems' },
    { code: 'WINTEREVENT', reward: 'Holiday Unit Skin' },
  ],
  xpTips: [
    'Run the highest story stage you can clear quickly on auto-repeat',
    'Use XP boost items during farming sessions for double gains',
    'Complete all daily missions for guaranteed XP rewards',
    'Challenge Tower gives massive XP at higher floors',
    'Story stages with 3-star clears give XP bonuses',
    'Join a guild for passive XP boost perks',
  ],
  gemsTips: [
    'Complete daily missions every day for guaranteed Gems',
    'Participate in limited-time events for Gem rewards',
    'Use codes from our codes page for free Gem redemption',
    'Challenge Tower rewards Gems every 5 floors',
    'Achievement milestones grant one-time Gem bonuses',
    'Watch for weekend Gem bonus events',
  ],
  evolutions: [
    { base: 'Gojo', evolved: 'Gojo Unleashed', material: '10 Cursed Energy + 5 Domain Shards', bonus: '2x Damage, New Ultimate' },
    { base: 'Sukuna', evolved: 'Sukuna Domain Expansion', material: '15 Malevolent Energy + 8 Finger Fragments', bonus: '3x AoE, Domain Skill' },
    { base: 'Madara', evolved: 'Madara Susanoo', material: '12 Sharingan Essences + 6 Chakra Crystals', bonus: '2.5x Damage, Susanoo Skill' },
    { base: 'Luffy', evolved: 'Luffy Gear 5', material: '8 Haki Stones + 4 Gum Shards', bonus: '2x Speed, Gear 5 Transformation' },
    { base: 'Tanjiro', evolved: 'Tanjiro Sun Breathing', material: '6 Demon Blood + 3 Sun Cores', bonus: '2x Crit, Sun Breathing Skill' },
  ],
};

// ============================================================
// PAGE TEMPLATES
// ============================================================

const pages = [
  // 1. CODES
  {
    slug: 'codes',
    category: 'codes',
    title: `${G.name} Codes (May ${G.year}) – Free Gems, Summons & Rewards`,
    desc: `Find the latest ${G.name} codes for ${G.year}. Get free Gems, summon tickets, evolution crystals, XP boosts, and exclusive rewards. Updated daily.`,
    content: `
## ${G.name} Codes — Free Gems & Rewards (${G.year})

Looking for the latest working codes in ${G.name}? Our list is updated daily with all active codes for free Gems, summon tickets, evolution crystals, and more. Bookmark this page and check back often — new codes are released with every update!

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
    title: `${G.name} Tier List (${G.year}) – Best Units Ranked S to D`,
    desc: `Complete ${G.name} tier list for ${G.year}. All units ranked from S-tier to D-tier for PvE, PvP, and challenge content. Updated for the latest patch.`,
    content: `
## ${G.name} Tier List (${G.year}) — All Units Ranked

Our ${G.name} tier list ranks every unit in the game from S-tier (best) to D-tier (weakest) based on their overall performance in PvE, PvP, and challenge content. This tier list is updated for the latest patch.

## S-Tier Units — The Absolute Best

| Unit | Type | Best For | Evolution |
|------|------|----------|-----------|
${G.topUnits.slice(0, 3).map((u, i) => `| ${u} | ${i % 2 === 0 ? 'DPS' : 'Support'} | ${i === 0 ? 'Everything' : 'Endgame Content'} | ✅ Available |`).join('\n')}

## A-Tier Units — Strong and Reliable

| Unit | Type | Best For | Evolution |
|------|------|----------|-----------|
${G.topUnits.slice(3).map((u, i) => `| ${u} | ${i % 2 === 0 ? 'DPS' : 'Hybrid'} | ${i === 0 ? 'Farming & Raids' : 'Versatile'} | ✅ Available |`).join('\n')}

## B-Tier Units — Situational but Viable

These units perform well in specific situations but are outclassed by S and A-tier units in general content.

## C-Tier Units — Below Average

Only use these if you have no better options. They can still work with investment but require more resources.

## D-Tier Units — Not Recommended

Avoid investing in these units. They are outclassed in every scenario.

## How We Rank Units

- **Damage Output** — Sustained and burst DPS numbers
- **Utility** — Healing, buffs, debuffs, and crowd control
- **Evolution Potential** — How strong the unit becomes after evolving
- **Versatility** — Performance across different game modes
- **Accessibility** — How easy the unit is to obtain and build

## Frequently Asked Questions

**What is the best unit in ${G.name}?**
${G.topUnits[0]} is currently the strongest unit in ${G.name} for ${G.year}, especially after its evolution.

**How often is the tier list updated?**
We update the tier list with every major patch and balance change.

**Should I invest in B-tier units?**
B-tier units can be viable with proper investment, but prioritize S and A-tier units first.
`,
  },

  // 3. BEST UNITS
  {
    slug: 'best-units',
    category: 'tier-list',
    title: `${G.name} Best Units (${G.year}) – Top Characters for Every Mode`,
    desc: `Discover the best units in ${G.name} for ${G.year}. Our guide covers the top characters for PvE, PvP, challenges, and farming.`,
    content: `
## Best Units in ${G.name} (${G.year})

Choosing the right units is the most important decision in ${G.name}. With dozens of characters to collect and evolve, knowing which ones to invest in can save you weeks of grinding.

Our ${G.year} guide covers the best units for every game mode, from story progression to endgame challenge content.

## Top 10 Best Units in ${G.name}

| Rank | Unit | Role | Tier | Evolution |
|------|------|------|------|-----------|
${G.topUnits.concat(G.topDPS.slice(2), G.topSupport.slice(0, 2)).slice(0, 10).map((u, i) => `| ${i + 1} | ${u} | ${i < 3 ? 'DPS' : i < 6 ? 'Hybrid' : 'Support'} | ${i < 2 ? 'S' : i < 5 ? 'A' : 'B'} | ✅ |`).join('\n')}

## Best Units by Game Mode

### Best Units for PvE / Story
${G.topDPS.slice(0, 3).map((u) => `- **${u}** — Exceptional clearing speed for story stages`).join('\n')}

### Best Units for PvP
${G.topUnits.slice(0, 2).map((u) => `- **${u}** — Dominates in PvP with burst damage and crowd control`).join('\n')}

### Best Units for Challenge Tower
- **${G.topUnits[0]}** — Can solo many tower floors after evolution
- **${G.topSupport[0]}** — Keeps the team alive on difficult floors

### Best Units for Farming
${G.topDPS.slice(0, 2).map((u) => `- **${u}** — Fast clears mean more runs per hour`).join('\n')}

## Frequently Asked Questions

**What is the best unit overall in ${G.name}?**
${G.topUnits[0]} is the best overall unit in ${G.name} for ${G.year}, excelling in every game mode after evolution.

**Should I prioritize DPS or support units?**
Build one strong DPS first, then add a support. DPS units carry early game, while supports become essential in endgame content.

**Are evolved units always better?**
Yes, evolved units receive massive stat boosts and new skills that make them significantly stronger than their base forms.
`,
  },

  // 4. BEST TRAITS
  {
    slug: 'best-traits',
    category: 'guides',
    title: `${G.name} Best Traits (${G.year}) – Optimal Trait for Every Unit`,
    desc: `Complete ${G.name} best traits guide for ${G.year}. Find the optimal trait for every unit and learn how the trait system works.`,
    content: `
## Understanding Traits in ${G.name}

The trait system in ${G.name} allows you to customize your units with passive bonuses that enhance their performance. Choosing the right trait can dramatically improve a unit's effectiveness in combat, farming, and PvP.

Each unit can equip one trait, and some traits synergize better with specific unit types and roles.

## ${G.name} Best Traits Tier List (${G.year})

| Trait | Tier | Best For | Description |
|-------|------|----------|-------------|
${G.topTraits.map((t, i) => `| ${t} | ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${i === 0 ? 'DPS Units' : i === 1 ? 'Support Units' : i === 2 ? 'Burst DPS' : 'Tank Units'} | ${i === 0 ? 'Increases attack damage significantly' : i === 1 ? 'Boosts team buff effects' : i === 2 ? 'Enhances burst window damage' : 'Improves survivability'} |`).join('\n')}

## Best Traits by Unit Role

### Best Traits for DPS Units
- **${G.topTraits[0]}** — The go-to trait for damage dealers. Increases overall damage output.
- **${G.topTraits[2]}** — Great for burst-focused DPS that rely on skill combos.

### Best Traits for Support Units
- **${G.topTraits[1]}** — Amplifies buff effects, making your support even more valuable.
- **${G.topTraits[3]}** — Increases survivability so supports stay alive longer.

### Best Traits for PvP
- **${G.topTraits[4]}** — Speed advantage is crucial in PvP for outpacing opponents.

## How to Unlock and Upgrade Traits

1. **Unlocking Traits** — Traits are unlocked through unit progression and specific achievements
2. **Upgrading Traits** — Use duplicate units or special upgrade materials
3. **Rerolling Traits** — Some traits can be rerolled using Gems
4. **Trait Synergies** — Some traits have bonus effects when paired with specific units

## Frequently Asked Questions

**What is the best trait in ${G.name}?**
${G.topTraits[0]} is generally considered the best overall trait for ${G.year}, providing the most universal damage bonus.

**Can I change traits later?**
Yes, traits can be changed, but it costs Gems or rare materials. Plan your trait choices carefully.

**Do traits stack with evolution bonuses?**
Yes, trait bonuses are multiplicative with evolution stat boosts, making both systems important for maximizing unit power.
`,
  },

  // 5. BEST TEAMS
  {
    slug: 'best-teams',
    category: 'guides',
    title: `${G.name} Best Teams (${G.year}) – Meta Compositions & Synergies`,
    desc: `Best team compositions in ${G.name} for ${G.year}. Complete guide to meta teams, synergies, and team building strategies for every game mode.`,
    content: `
## Team Building in ${G.name}

Building the right team in ${G.name} is essential for clearing endgame content. Team synergy, role balance, and evolution status all play a part in creating an effective composition.

Our ${G.year} team guide covers the best meta compositions and helps you build the right team for any content type.

## ${G.name} Best Team Compositions (${G.year})

| Team | DPS | Support | Flex | Best For |
|------|-----|---------|------|----------|
${G.topTeams.map((t, i) => `| Team ${i + 1} | ${G.topDPS[i] || G.topDPS[0]} | ${G.topSupport[i] || G.topSupport[0]} | ${G.topDPS[i + 1] || G.topDPS[1]} | ${i === 0 ? 'Raids & Bosses' : i === 1 ? 'Story & Farming' : 'PvP'} |`).join('\n')}

## Top Team — Detailed Breakdown

### ${G.topTeams[0]}

This is the strongest team composition in ${G.name} for ${G.year}. It combines the raw damage of ${G.topDPS[0]} with the healing and buffs of ${G.topSupport[0]}.

**Key Synergies:**
- ${G.topDPS[0]}'s burst damage pairs perfectly with ${G.topSupport[0]}'s damage buffs
- The flex slot can be adjusted based on content type
- Strong against most raid bosses and tower challenges

## Team Building Fundamentals

### Role Distribution
- **2 DPS Units** — Your primary damage dealers (preferably evolved)
- **1 Support Unit** — Healing, buffs, and utility
- **1 Flex Slot** — Adjust based on content needs

### Evolution Priority
Always prioritize evolving your main DPS before building supports. An evolved DPS carries harder than an evolved support.

## Frequently Asked Questions

**What is the best team in ${G.name}?**
${G.topTeams[0]} is currently the best team in ${G.name} for ${G.year}.

**Can I use unevolved units in endgame teams?**
It's not recommended. Evolved units have significantly higher stats and new skills that are essential for endgame content.
`,
  },

  // 6. BEGINNER GUIDE
  {
    slug: 'beginner-guide',
    category: 'guides',
    title: `${G.name} Beginner Guide (${G.year}) – Complete Starter Walkthrough`,
    desc: `${G.name} beginner guide for ${G.year}. Everything new players need to know: reroll guide, starter units, progression tips, and early game strategy.`,
    content: `
## Starting Right in ${G.name}

Welcome to ${G.name}! This beginner guide covers everything you need to know to get started, from your first summon to clearing endgame content.

${G.name} is a tower defense game on Roblox where you summon anime characters, evolve them, and defend against waves of enemies. Understanding the core systems early will save you time and resources.

## ${G.name} Best Starter Units (${G.year})

| Tier | Unit | Why | Easy to Get? |
|------|------|-----|-------------|
${G.topStarter.map((u, i) => `| ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${u} | ${i === 0 ? 'Best early carry, scales well' : i === 1 ? 'Strong damage, easy to build' : 'Decent all-rounder'} | ${i < 3 ? 'Yes' : 'Moderate'} |`).join('\n')}

## Day 1-3: Getting Started

1. Complete the tutorial and claim all free rewards
2. Use codes from our [codes page](/${G.slug}/codes) for free Gems and items
3. Summon for your starter team using free Gems
4. Focus on leveling your main DPS unit
5. Clear story stages as far as possible

## Day 4-7: Building Your Team

1. Add a support unit to complement your DPS
2. Start farming ${G.currency} from the best farming stages
3. Join a guild for bonus rewards and co-op content
4. Complete all daily tasks every day
5. Begin working on your first evolution materials

## Week 2 and Beyond

1. Start tackling challenge tower content
2. Evolve your main DPS for a massive power spike
3. Build a second DPS for team flexibility
4. Farm S-tier relics from raid bosses
5. Begin PvP once your team is properly built

## Should You Reroll?

Rerolling is recommended in ${G.name} because your starting units matter a lot:
- Reroll for **${G.topStarter[0]}** or **${G.topStarter[1]}** on your first summon
- Use our codes for extra Gems to get more pulls
- Stop rerolling once you get an S-tier starter

## Frequently Asked Questions

**What is the best starter unit in ${G.name}?**
${G.topStarter[0]} is the best starter unit for ${G.year}, offering strong early-game damage and good scaling.

**How long does the early game take?**
With optimal starter units, most players reach mid-game content within 1-2 weeks.

**Should I evolve units early?**
Focus on evolving your main DPS first. Evolution materials are limited, so prioritize your strongest unit.
`,
  },

  // 7. XP GUIDE
  {
    slug: 'xp-guide',
    category: 'guides',
    title: `${G.name} XP Guide (${G.year}) – Fastest Leveling Methods & XP Farming`,
    desc: `Complete ${G.name} XP guide for ${G.year}. Learn the fastest leveling methods, best XP farming spots, and XP optimization tips.`,
    content: `
## Leveling Up Fast in ${G.name}

XP is the lifeblood of progression in ${G.name}. Whether you're leveling units, unlocking new content, or pushing through the story, understanding how to maximize your XP gain is essential.

## All XP Sources in ${G.name}

| Source | XP Per Hour | Effort | Availability |
|--------|-------------|--------|-------------|
| Story Stages | Very High | Medium | Always |
| Daily Tasks | High | Low | Daily Reset |
| Challenge Tower | Very High | High | Always |
| Raid Events | Very High | High | Limited Time |
| PvP Battles | Medium | High | Always |

## ${G.name} Best XP Farming Methods (${G.year})

${G.xpTips.map((tip, i) => `${i + 1}. ${tip}`).join('\n')}

## XP Boosting Strategies

### Free XP Boosts
- Check our [${G.name} Codes](/${G.slug}/codes) page for XP boost codes
- Use any free XP potions from daily login rewards
- Guild bonuses can provide passive XP boosts

### Premium XP Boosts
- XP boost items from the shop provide 2x XP for limited time
- Some traits and relics provide passive XP bonuses
- Premium battle pass includes XP bonus tiers

## Level Milestones

| Level | Unlocks | Priority |
|-------|---------|----------|
| Level 10 | Basic team building | High |
| Level 25 | Raid content access | High |
| Level 40 | Challenge tower | High |
| Level 60 | Endgame content | Medium |
| Level 80 | Hard mode raids | Medium |

## Frequently Asked Questions

**What is the fastest way to level up in ${G.name}?**
Combine story stages with XP boost items during bonus events for the fastest leveling in ${G.year}.

**Are XP boosts worth it?**
Yes, XP boosts effectively halve your grinding time and are one of the best value purchases.
`,
  },

  // 8. FARMING GUIDE
  {
    slug: 'farming-guide',
    category: 'guides',
    title: `${G.name} Farming Guide (${G.year}) – Best Stages for Gems, Gold & XP`,
    desc: `Best farming stages in ${G.name} for ${G.year}. Optimize your Gems and Gold farming with our stage-by-stage efficiency guide.`,
    content: `
## Farming Efficiency in ${G.name}

Efficient farming is the key to progressing quickly in ${G.name}. Whether you need ${G.currency}, ${G.currency2}, or XP, choosing the right farming stage can save you hours of grinding.

## ${G.name} Best Farming Stages (${G.year})

| Stage | Resource | Per Hour | Difficulty | Recommended Power |
|-------|----------|----------|------------|-------------------|
${G.topFarming.map((f, i) => `| ${f} | ${i === 0 ? G.currency : i === 1 ? G.currency2 : 'XP'} | ${i === 0 ? '5,000+' : i === 1 ? '3,000+' : '50,000+'} | ${i === 0 ? 'Hard' : 'Medium'} | ${i === 0 ? '50,000+' : '30,000+'} |`).join('\n')}

## Farming Routes by Resource

### Best ${G.currency} Farming Route
1. Start with ${G.topFarming[0]} for maximum ${G.currency} per hour
2. Use any active boost codes from our codes page
3. Run in a loop during ${G.currency} bonus events

### Best ${G.currency2} Farming Route
1. ${G.topFarming[1]} provides the best ${G.currency2}-to-time ratio
2. Daily dungeons award ${G.currency2} as completion rewards

## Time-Efficient Farming Schedule

| Time | Activity | Duration | Expected Gains |
|------|----------|----------|----------------|
| Morning | Daily Tasks & Missions | 15 min | Gems + XP |
| Midday | ${G.topFarming[0]} | 30 min | Gems + Drops |
| Evening | ${G.topFarming[1]} | 30 min | Gold + Materials |
| Night | Challenge Tower | 30 min | Premium Rewards |

## Frequently Asked Questions

**What is the best stage for Gem farming?**
${G.topFarming[0]} is currently the best stage for Gem farming in ${G.year}.

**How much can I farm per hour?**
With an optimized team, you can farm 5,000+ Gems per hour from the best stages.
`,
  },

  // 9. EVOLUTION GUIDE
  {
    slug: 'evolution-guide',
    category: 'guides',
    title: `${G.name} Evolution Guide (${G.year}) – How to Evolve Every Unit`,
    desc: `Complete ${G.name} evolution guide for ${G.year}. Learn how to evolve every unit, find evolution materials, and unlock powerful new abilities.`,
    content: `
## The Evolution System in ${G.name}

Evolution is one of the most important systems in ${G.name}. Evolved units receive massive stat boosts, new skills, and visual upgrades that make them significantly stronger than their base forms.

Most top-tier units in ${G.name} require evolution to reach their full potential. This guide covers every evolution available in the game, including materials needed and the best evolution priority order.

## ${G.name} All Evolutions (${G.year})

| Base Unit | Evolved Form | Materials | Bonus |
|-----------|-------------|-----------|-------|
${G.evolutions.map(e => `| ${e.base} | ${e.evolved} | ${e.material} | ${e.bonus} |`).join('\n')}

## Evolution Priority Guide

When you have limited materials, evolve in this order:

1. **${G.evolutions[0].base} → ${G.evolutions[0].evolved}** — The strongest evolution in the game. Do this first.
2. **${G.evolutions[1].base} → ${G.evolutions[1].evolved}** — Incredible AoE damage and domain skill.
3. **${G.evolutions[2].base} → ${G.evolutions[2].evolved}** — Susanoo skill is game-changing.
4. **${G.evolutions[3].base} → ${G.evolutions[3].evolved}** — Gear 5 transformation is excellent.
5. **${G.evolutions[4].base} → ${G.evolutions[4].evolved}** — Great for budget teams.

## How to Get Evolution Materials

1. **Raid Bosses** — The primary source of evolution materials
2. **Challenge Tower** — Higher floors drop rare materials
3. **Daily Dungeons** — Consistent material farming
4. **Events** — Limited events often provide bonus materials
5. **Trading** — Some materials can be traded with guild members

## Evolution Tips

- Always check material requirements before spending resources
- Focus on evolving your main DPS first for the biggest power spike
- Some evolutions require clearing specific story chapters first
- Evolution materials are shared across units — plan carefully
- Use evolution crystals from codes for a free evolution

## Frequently Asked Questions

**What is the best evolution in ${G.name}?**
${G.evolutions[0].base} → ${G.evolutions[0].evolved} is the strongest evolution in ${G.name} for ${G.year}.

**How long does it take to evolve a unit?**
On average, 1-2 weeks of focused material farming. Events and codes can speed this up significantly.

**Can I reverse an evolution?**
No, evolutions are permanent. Make sure you want to evolve before committing materials.
`,
  },

  // 10. SECRET UNITS GUIDE
  {
    slug: 'secret-units-guide',
    category: 'guides',
    title: `${G.name} Secret Units Guide (${G.year}) – How to Unlock Every Secret Unit`,
    desc: `Find all secret units in ${G.name} for ${G.year}. Our guide covers how to unlock every secret unit, their abilities, and best builds.`,
    content: `
## Secret Units in ${G.name}

Secret units are the rarest and most powerful characters in ${G.name}. They are hidden units that can only be obtained through special methods, not through normal summoning. Each secret unit has unique abilities that can change the outcome of any battle.

## All ${G.name} Secret Units (${G.year})

| Secret Unit | Rarity | Unlock Method | Power Level |
|-------------|--------|---------------|-------------|
${G.topSecrets.map((s, i) => `| ${s} | ${i === 0 ? 'Mythic' : 'Legendary'} | ${i === 0 ? 'Complete Hidden Challenge' : i === 1 ? 'Special Event Summons' : i === 2 ? 'Raid Boss Drops' : 'Achievement Reward'} | ${i === 0 ? '★★★★★' : '★★★★☆'} |`).join('\n')}

## How to Unlock Each Secret Unit

${G.topSecrets.slice(0, 4).map((s, i) => `
### ${s}

${i === 0
  ? `${s} is the rarest secret unit in ${G.name}. To unlock ${s}, you must complete the Hidden Challenge on the final story stage with a full team of evolved units. This is the hardest challenge in the game.`
  : i === 1
  ? `${s} can only be obtained through special event summons. These events appear once every few weeks and have a very low drop rate. Save your Gems for these events.`
  : i === 2
  ? `${s} drops from the hardest raid boss in the game. You need a strong evolved team to defeat this boss, and the drop rate is low.`
  : `${s} is awarded for completing a specific achievement milestone. This requires collecting all units from a particular anime series.`
}

**Best Build for ${s}:**
- Trait: ${G.topTraits[0]} for maximum damage
- Relic: ${G.topRelics[0]} for attack bonus
- Team: Pair with ${G.topSupport[0]} for best results
`).join('\n')}

## Secret Unit Tips

1. **Save your Gems** — Secret unit events are rare; you need a large Gem stockpile
2. **Evolve your team first** — Most secret unit challenges require evolved units
3. **Join a guild** — Guild members can help with raid boss content
4. **Check events daily** — Secret unit events have short windows
5. **Use codes for free Gems** — Our codes page has Gems to save for secret events

## Frequently Asked Questions

**What is the strongest secret unit in ${G.name}?**
${G.topSecrets[0]} is the strongest secret unit in ${G.name} for ${G.year}, with the highest damage output and unique abilities.

**Are secret units worth the investment?**
Absolutely. Secret units are the most powerful characters in the game and can carry entire teams through endgame content.

**Can secret units be evolved?**
Some secret units have evolution paths. Check the evolution guide for details.
`,
  },

  // 11. UPDATE GUIDE
  {
    slug: 'update-guide',
    category: 'guides',
    title: `${G.name} Update Guide (${G.year}) – Latest Patch Notes & Changes`,
    desc: `Complete ${G.name} update guide for ${G.year}. Latest patch notes, balance changes, new units, and everything you need to know about the current version.`,
    content: `
## ${G.name} Latest Update (${G.year})

Stay up to date with the latest ${G.name} patches. Our update guide covers every major change, new unit, balance adjustment, and event so you can adapt your strategy immediately.

## Current Version: ${G.updates[0].name}

${G.updates[0].desc}

### Key Changes

| Category | Details |
|----------|---------|
| New Content | Secret units, evolution rework, challenge expansion |
| Balance | Various unit adjustments and bug fixes |
| Events | Limited-time summoning events and Gem bonuses |
| QoL | Auto-repeat improvements and UI updates |

## All ${G.name} Updates (${G.year})

${G.updates.map((u, i) => `
### ${u.name}
${u.desc}

${i === 0 ? '**Current Update** — This is the latest version of ' + G.name + '.' : ''}

| Category | Changes |
|----------|---------|
| New Content | ${u.desc.split(',').slice(0, 2).join(',')} |
| Balance | ${i === 0 ? 'Various unit balancing adjustments' : 'Minor balance tweaks'} |
| Bug Fixes | ${i === 0 ? 'Multiple bug fixes and QoL improvements' : 'Stability improvements'} |
`).join('\n')}

## How Updates Affect the Meta

1. **New Units** — New releases often become meta-defining
2. **Balance Changes** — Buffs and nerfs can shift the tier list
3. **Evolution Updates** — New evolution paths change unit viability
4. **Events** — Limited events preview upcoming content

## Frequently Asked Questions

**What is the latest update for ${G.name}?**
The latest update is ${G.updates[0].name}, which ${G.updates[0].desc.toLowerCase()}.

**How often does ${G.name} get updated?**
Major updates every 3-4 weeks, with minor patches and hotfixes in between.

**Where can I find patch notes?**
We document all patch notes here. Check the official Discord for real-time announcements.
`,
  },

  // 12. PATCH NOTES
  {
    slug: 'patch-notes',
    category: 'guides',
    title: `${G.name} Patch Notes (${G.year}) – Complete Changelog & History`,
    desc: `Full ${G.name} patch notes archive for ${G.year}. Every balance change, bug fix, and feature addition documented in one place.`,
    content: `
## ${G.name} Patch Notes Archive (${G.year})

This page is a complete archive of every patch note, balance change, and update in ${G.name}. Use this as a reference for understanding meta shifts and planning your team builds.

## Latest Patch: ${G.updates[0].name}

**Release Date:** May 2026

### New Content
- New secret units added to the summon pool
- Evolution system rework with new material types
- Challenge mode expansion with 10 new floors
- New story chapters in Act 5

### Balance Changes
- DPS unit damage scaling adjusted across the board
- Support unit healing effectiveness increased by 15%
- PvP matchmaking rating system updated

### Bug Fixes
- Fixed evolution material display issue
- Resolved PvP disconnect bug
- Fixed unit ability tooltip errors

## Complete Patch History

${G.updates.map((u, i) => `
### ${u.name}
${u.desc}

**Changes:**
- ${u.desc.split(',').map(c => c.trim()).join('\n- ')}
- ${i === 0 ? 'Various unit balancing adjustments' : 'Minor balance tweaks'}
- ${i === 0 ? 'Multiple bug fixes and QoL improvements' : 'Stability improvements'}
`).join('\n')}

## Understanding Patch Types

- **Major Updates** — New units, features, and significant balance changes
- **Balance Patches** — Unit stat adjustments and PvP tuning
- **Hotfixes** — Emergency fixes for critical bugs
- **Event Patches** — Limited-time events and content

## Frequently Asked Questions

**How do I check the current version?**
The version number is displayed on the title screen and in the settings menu.

**Do I need to update manually?**
Roblox updates games automatically. Just join the game and you'll be on the latest version.

**Where are patch notes announced first?**
The official Discord server posts patch notes before any other platform.
`,
  },

  // 13. EXPIRED CODES
  {
    slug: 'expired-codes',
    category: 'codes',
    title: `${G.name} Expired Codes List (${G.year}) – All Old & Removed Codes`,
    desc: `Complete list of expired ${G.name} codes for ${G.year}. All old, removed, and inactive codes documented for reference.`,
    content: `
## ${G.name} Expired Codes (${G.year})

This page lists all expired codes in ${G.name} for reference. These codes no longer work, but we keep them documented so players can check if a code they found is still valid.

## All Expired Codes

| Code | Reward | Expired Date |
|------|--------|-------------|
${G.expiredCodes.map(c => `| \`${c.code}\` | ${c.reward} | May 2026 |`).join('\n')}
| \`LAUNCH50\` | 500 Gems | April 2026 |
| \`SPRING2026\` | 300 Gems + Spring Unit Skin | March 2026 |
| \`10KLIKES\` | 400 Gems | March 2026 |
| \`VALENTINE\` | 200 Gems + Heart Effect | February 2026 |
| \`NEWYEAR26\` | 600 Gems + Fireworks | January 2026 |
| \`HOLIDAY25\` | 500 Gems + Holiday Skin | December 2025 |
| \`TURKEYDAY\` | 300 Gems | November 2025 |
| \`HALLOWEEN\` | 400 Gems + Pumpkin Effect | October 2025 |
| \`FALLUPDATE\` | 250 Gems | September 2025 |
| \`SUMMERSEND\` | 350 Gems | August 2025 |
| \`1MVISITS\` | 800 Gems + Summon Ticket | July 2025 |

## How to Tell If a Code Is Expired

When you try to redeem an expired code in ${G.name}, you will see one of these messages:
- "Code Expired"
- "Invalid Code"
- "Code Not Found"

If you see any of these messages, the code is no longer active.

## Looking for Active Codes?

Check our [${G.name} Active Codes](/${G.slug}/codes) page for all currently working codes. We update it daily with new codes.

## Why Do Codes Expire?

Game developers set expiration dates on codes for several reasons:
- **Limited-time events** — Event codes expire when the event ends
- **Milestone celebrations** — Like/visit milestone codes have short lifespans
- **Balance reasons** — Some rewards are too generous to remain permanent
- **Encouraging engagement** — Time-limited codes motivate players to check in regularly

## Frequently Asked Questions

**Can expired codes come back?**
Rarely, but some codes are reactivated during special anniversary events.

**How long do codes usually last?**
Most codes are active for 1-4 weeks, though some last longer.
`,
  },

  // 14. RELIC TIER LIST
  {
    slug: 'relic-tier-list',
    category: 'tier-list',
    title: `${G.name} Relic Tier List (${G.year}) – Best Relics Ranked S to D`,
    desc: `Complete ${G.name} relic tier list for ${G.year}. All relics ranked from S-tier to D-tier with farming locations and build recommendations.`,
    content: `
## Why Relics Matter in ${G.name}

Relics are powerful equipment items in ${G.name} that provide significant stat bonuses and unique effects. Equipping the right relic can be the difference between clearing endgame content and struggling through it.

Unlike units, which you collect and evolve, relics are farmed from specific content and can be swapped between units freely.

## ${G.name} Relic Tier List (${G.year})

### S-Tier Relics — Must Have

| Relic | Stat Bonus | Best For | Farm Location |
|-------|------------|----------|---------------|
${G.topRelics.slice(0, 2).map((r, i) => `| ${r} | ${i === 0 ? 'ATK +25%' : 'HP +30%'} | ${i === 0 ? 'DPS Units' : 'Support Units'} | ${i === 0 ? 'Raid Boss' : 'Challenge Tower'} |`).join('\n')}

### A-Tier Relics — Strong Picks

| Relic | Stat Bonus | Best For | Farm Location |
|-------|------------|----------|---------------|
${G.topRelics.slice(2, 4).map((r, i) => `| ${r} | ${i === 0 ? 'Crit Rate +20%' : 'DEF +20%'} | ${i === 0 ? 'Burst DPS' : 'Tanks'} | ${i === 0 ? 'Daily Dungeon' : 'Story Drops'} |`).join('\n')}

### B-Tier Relics — Decent Options

| Relic | Stat Bonus | Best For | Farm Location |
|-------|------------|----------|---------------|
| ${G.topRelics[4]} | SPD +15% | PvP Units | PvP Shop |

### C-Tier Relics — Situational

Only use these if you don't have better options available.

## Best Relics by Build Type

### Best DPS Relics
- **${G.topRelics[0]}** — Essential for all DPS builds
- **${G.topRelics[2]}** — Great for burst-focused builds

### Best Support Relics
- **${G.topRelics[1]}** — Massive HP boost keeps supports alive
- **${G.topRelics[3]}** — Defense bonus for survivability

### Best PvP Relics
- **${G.topRelics[4]}** — Speed bonus for first-move advantage
- **${G.topRelics[0]}** — Raw damage for quick eliminations

## How to Farm Relics

1. **Focus on one relic at a time** — Don't spread farming thin
2. **Use the highest difficulty you can clear** — Better drop rates
3. **Farm during relic bonus events** — Events double drop rates
4. **Join a guild for co-op farming** — Team farming is faster
5. **Save duplicate relics for upgrades** — Upgrading provides additional stats

## Relic Upgrade Priority

1. **Main DPS relic** — Your primary damage dealer benefits most
2. **Main support relic** — Keeps your team alive
3. **Secondary DPS relic** — Boost your backup damage dealer

## Frequently Asked Questions

**What is the best relic in ${G.name}?**
${G.topRelics[0]} is the strongest relic in ${G.name} for ${G.year}, providing the highest damage boost.

**Can relics be transferred between units?**
Yes, relics can be freely swapped between units.

**How long does it take to farm a relic?**
S-tier relics take 2-3 days of focused farming on average. Drop rate events can cut this in half.
`,
  },

  // 15. CHALLENGE GUIDE
  {
    slug: 'challenge-guide',
    category: 'guides',
    title: `${G.name} Challenge Guide (${G.year}) – Clear Every Challenge & Tower Floor`,
    desc: `Complete ${G.name} challenge guide for ${G.year}. Strategies for every challenge mode, tower floor, and difficult content.`,
    content: `
## Challenge Content in ${G.name}

Challenge content is where ${G.name} truly tests your team building skills. From the endless Challenge Tower to limited-time raid bosses, these modes offer the best rewards and the toughest fights.

Our ${G.year} challenge guide covers strategies for every challenge type, recommended team compositions, and tips for clearing the hardest content.

## Challenge Tower Guide

The Challenge Tower is ${G.name}'s premier endgame content. Each floor gets progressively harder, and the rewards get better the higher you climb.

### Floors 1-20 (Easy)
- Use your main DPS with any support
- No special strategy needed
- Rewards: ${G.currency}, XP, basic materials

### Floors 21-40 (Medium)
- Bring at least one evolved unit
- Support units become important for sustain
- Rewards: Rare materials, ${G.currency2}, upgrade items

### Floors 41-60 (Hard)
- Full team of evolved units recommended
- Specific element counters required on some floors
- Rewards: Epic materials, relics, ${G.currency}

### Floors 61+ (Extreme)
- Only for fully built endgame teams
- Requires meta team compositions
- Rewards: Legendary materials, secret unit fragments

## Raid Boss Guide

Raid bosses are weekly challenges that require coordinated team building:

| Raid Boss | Weakness | Recommended Team | Reward |
|-----------|----------|-----------------|--------|
| Shadow King | Light units | ${G.topTeams[0]} | Evolution Materials |
| Celestial Dragon | Dark units | ${G.topTeams[1]} | Rare Relics |
| Demon Lord | Holy units | ${G.topTeams[2]} | ${G.currency} + Gems |

## Challenge Tips & Strategies

1. **Evolve your team first** — Evolution makes challenge content much easier
2. **Match element weaknesses** — Using the right element can double your damage
3. **Bring a healer** — Sustain is crucial for longer challenge fights
4. **Use relics wisely** — Swap relics based on the challenge type
5. **Learn boss patterns** — Each boss has attack patterns you can predict
6. **Try different team comps** — If one team fails, try a different approach

## Frequently Asked Questions

**What is the hardest challenge in ${G.name}?**
The Challenge Tower floors above 61 are the hardest content in the game, requiring fully evolved meta teams.

**How often do raid bosses change?**
Raid bosses rotate weekly, with new bosses added every major update.

**Can I solo raid bosses?**
High-level players with fully evolved meta teams can solo some raid bosses, but co-op is generally more efficient.
`,
  },
];

// ============================================================
// GENERATE
// ============================================================

function main() {
  console.log(`🚀 Generating ${G.name} content...`);
  console.log(`   ${pages.length} pages to create\n`);

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  let created = 0;
  let skipped = 0;

  for (const page of pages) {
    const filePath = path.join(CONTENT_DIR, `${page.slug}.mdx`);

    if (fs.existsSync(filePath)) {
      console.log(`  ⏭️  Skipping ${page.slug}.mdx (already exists)`);
      skipped++;
      continue;
    }

    const frontmatter = `---
title: "${page.title}"
description: "${page.desc}"
date: "2026-05-25"
category: "${page.category}"
game: "${G.slug}"
---

`;

    fs.writeFileSync(filePath, frontmatter + page.content.trim() + '\n');
    console.log(`  ✅ Created ${page.slug}.mdx`);
    created++;
  }

  console.log(`\n📊 Summary: Created ${created}, Skipped ${skipped}, Total ${created + skipped}`);
}

main();
