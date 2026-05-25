/**
 * pSEO (Programmatic SEO) Content Generator
 * Generates 12 page types × 3 games = 36+ MDX pages
 * 
 * Usage: node scripts/pseo-generate.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'content');

// ============================================================
// GAME DATA - Each game has its own terminology and content
// ============================================================

const games = {
  'blox-fruits': {
    name: 'Blox Fruits',
    year: '2026',
    unitType: 'Fruits',
    unitTypePlural: 'Fruits',
    unitTypeLower: 'fruits',
    dpsName: 'Best DPS Fruits',
    supportName: 'Best Support Fruits',
    traitName: 'Best Fighting Styles',
    relicName: 'Best Accessories',
    currency: 'Beli',
    currency2: 'Fragments',
    xpSource: 'Quests & Boss Fights',
    gemsSource: 'Boss Drops & Quests',
    topDPS: ['Dragon', 'Venom', 'Control', 'Eagle', 'Shadow'],
    topSupport: ['Phoenix', 'Angel', 'Spirit', 'Gravity', 'Portal'],
    topTraits: ['Superhuman', 'Death Step', 'Electric Claw', 'Sharkman Karate', 'Dragon Talon'],
    topRelics: ['Hunter Cape', 'Pale Scarf', 'Swan Glasses', 'Dark Coat', 'Choppa Cap'],
    topTeams: ['Dragon + Superhuman', 'Venom + Death Step', 'Control + Electric Claw'],
    topFarming: ['Sea Beast Hunting', 'Boss Farming', 'Quest Stacking', 'Island Grinding'],
    topStarter: ['Smoke', 'Flame', 'Ice', 'Spike', 'Rubber'],
    updateName: 'Update 30',
    updates: [
      { name: 'Update 30', desc: 'Fourth Sea, Magnet Fruit, new islands and quests' },
      { name: 'Update 26', desc: 'Eagle & Creation Fruits, Fruit Progression System, Level cap 2650' },
      { name: 'Update 24', desc: 'Dragon Rework V2, new fighting styles' },
      { name: 'Update 23', desc: 'Venom rework, new accessories, balance changes' },
      { name: 'Update 22', desc: 'Third Sea expansion, new bosses and quests' },
      { name: 'Update 21', desc: 'PvP Arena system, ranked matchmaking' },
      { name: 'Update 20', desc: 'Gravity Fruit rework, new islands' },
    ],
    xpTips: [
      'Complete quests in the highest-level area you can survive',
      'Stack multiple quests before turning them in for bonus XP',
      'Use 2x XP codes from our codes page before grinding',
      'Boss fights give massive XP — party up for faster kills',
      'Sea Beast hunting provides consistent XP and valuable drops',
      'During Double XP weekends, focus on quest stacking',
    ],
    gemsTips: [
      'Farm bosses daily for Fragment drops',
      'Complete daily quests for guaranteed Beli rewards',
      'Sea Beast hunting yields both Beli and Fragments',
      'Use the private server trick to farm bosses without competition',
      'Participate in events for bonus currency multipliers',
      'Trade rare fruits for quick Beli through the trading system',
    ],
  },
  'anime-rangers': {
    name: 'Anime Rangers X',
    year: '2026',
    unitType: 'Units',
    unitTypePlural: 'Units',
    unitTypeLower: 'units',
    dpsName: 'Best DPS Units',
    supportName: 'Best Support Units',
    traitName: 'Best Traits',
    relicName: 'Best Relics',
    currency: 'Gems',
    currency2: 'Gold',
    xpSource: 'Story Stages & Raids',
    gemsSource: 'Daily Missions & Events',
    topDPS: ['Madara', 'Solar Fist', 'Goku Ultra', 'Naruto Sage', 'Luffy Gear 5'],
    topSupport: ['Tsunsade', 'Orihime', 'Sakura', 'Robin', 'Bulma'],
    topTraits: ['Warrior', 'Strategist', 'Berserker', 'Guardian', 'Swift'],
    topRelics: ['Dragon Orb', 'Phoenix Feather', 'Shadow Blade', 'Holy Grail', 'Demon Core'],
    topTeams: ['Madara + Solar Fist + Orihime', 'Goku Ultra + Naruto Sage + Sakura', 'Luffy Gear 5 + Berserker + Robin'],
    topFarming: ['Story Mode Stage 12-3', 'Raid Boss Events', 'Tower Challenges', 'Daily Dungeons'],
    topStarter: ['Naruto Base', 'Luffy Base', 'Goku Base', 'Zoro', 'Sasuke'],
    updateName: 'Update 4',
    updates: [
      { name: 'Update 4', desc: 'New character Solar Fist, Spiral Invasion event, balance changes' },
      { name: 'Update 3.5', desc: 'Madara character release, new raid boss' },
      { name: 'Update 3', desc: 'Trait system overhaul, new relics' },
      { name: 'Update 2.5', desc: 'Tower challenge mode, QoL improvements' },
      { name: 'Update 2', desc: 'Guild system, co-op raids' },
      { name: 'Update 1.5', desc: 'PvP arena, ranked matchmaking' },
      { name: 'Update 1', desc: 'Game launch, 30+ characters' },
    ],
    xpTips: [
      'Run the highest story stage you can clear quickly',
      'Use XP boost items during farming sessions',
      'Complete all daily missions for bonus XP rewards',
      'Tower challenges give exponential XP at higher floors',
      'Auto-repeat story stages while watching for rare drops',
      'Join a guild for XP bonus perks',
    ],
    gemsTips: [
      'Complete daily missions every day for guaranteed Gems',
      'Participate in limited-time events for Gem rewards',
      'Use our codes page for free Gem redemption codes',
      'Tower challenges reward Gems every 5 floors',
      'Achievement milestones grant one-time Gem bonuses',
      'Watch for weekend Gem bonus events',
    ],
  },
  'anime-vanguards': {
    name: 'Anime Vanguards',
    year: '2026',
    unitType: 'Units',
    unitTypePlural: 'Units',
    unitTypeLower: 'units',
    dpsName: 'Best DPS Units',
    supportName: 'Best Support Units',
    traitName: 'Best Traits',
    relicName: 'Best Relics',
    currency: 'Gems',
    currency2: 'Gold',
    xpSource: 'Story Stages & Challenges',
    gemsSource: 'Daily Tasks & Summon Events',
    topDPS: ['Gojo', 'Sukuna', 'Escanor', 'Meliodas', 'Levi'],
    topSupport: ['Elisabeth', 'Orihime', 'Mikasa', 'Nezuko', 'Rukia'],
    topTraits: ['Warlord', 'Sage', 'Champion', 'Sentinel', 'Phantom'],
    topRelics: ['Cursed Finger', 'Demon Sword', 'Divine Shield', 'Shadow Cloak', 'Dragon Heart'],
    topTeams: ['Gojo + Sukuna + Elisabeth', 'Escanor + Meliodas + Orihime', 'Levi + Mikasa + Nezuko'],
    topFarming: ['Infinite Mode Stage 8', 'Challenge Tower', 'Raid Events', 'Daily Dungeons'],
    topStarter: ['Tanjiro', 'Yuji', 'Asta', 'Deku Base', 'Naruto Base'],
    updateName: 'Update 12.5',
    updates: [
      { name: 'Update 12.5', desc: 'Turning Tides event, new units, balance patch' },
      { name: 'Update 12', desc: 'Gojo unchained rework, new story chapters' },
      { name: 'Update 11', desc: 'Trait evolution system, new relics' },
      { name: 'Update 10', desc: 'Guild wars, co-op challenges' },
      { name: 'Update 9', desc: 'Infinite Mode rework, new farming stages' },
      { name: 'Update 8', desc: 'PvP ranked mode, leaderboard system' },
      { name: 'Update 7', desc: 'Escanor character release, new raids' },
    ],
    xpTips: [
      'Run Infinite Mode Stage 8 on auto-repeat for consistent XP',
      'Use XP potions during double XP events',
      'Complete all daily tasks for bonus XP',
      'Challenge Tower gives massive XP at higher floors',
      'Story stages with 3-star clears give XP bonuses',
      'Join an active guild for XP boost perks',
    ],
    gemsTips: [
      'Complete all daily tasks for guaranteed Gem rewards',
      'Participate in summon events for free pull tickets',
      'Use our codes page for free Gems and summon tickets',
      'Challenge Tower rewards Gems every 10 floors',
      'Achievement system grants Gems at milestones',
      'Special events often include Gem rewards for participation',
    ],
  },
};

// ============================================================
// PAGE TEMPLATES - Each generates a unique MDX file
// ============================================================

const pageTemplates = [
  {
    slug: 'best-dps-units',
    category: 'tier-list',
    titleTemplate: (g) => `${g.name} Best DPS ${g.unitTypePlural} (${g.year}) – Highest Damage Ranked`,
    descTemplate: (g) => `Find the best DPS ${g.unitTypeLower} in ${g.name} ranked by damage output. Our ${g.year} tier list covers the highest-damage ${g.unitTypeLower} for PvE and PvP content.`,
    getContent: (g) => `
## Why DPS ${g.unitTypePlural} Matter in ${g.name}

In ${g.name}, DPS (Damage Per Second) ${g.unitTypeLower} are the backbone of any strong team. Whether you're farming story stages, tackling raid bosses, or competing in PvP, having the right damage-dealing ${g.unitTypeLower} can make or break your run.

High DPS ${g.unitTypeLower} clear content faster, which means more rewards per hour and faster progression. Our tier list ranks every damage-focused ${g.unitType.slice(0, -1)} in ${g.name} based on raw damage output, skill scaling, and overall viability.

## ${g.name} Best DPS ${g.unitTypePlural} Tier List (${g.year})

| Tier | ${g.unitType.slice(0, -1)} | Damage Type | Best For |
|------|---------|-------------|----------|
${g.topDPS.map((u, i) => `| ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${u} | ${i % 2 === 0 ? 'Burst' : 'Sustained'} | ${i % 2 === 0 ? 'Boss Fights & Raids' : 'Story & Farming'} |`).join('\n')}

## S-Tier DPS ${g.unitTypePlural} — Detailed Breakdown

${g.topDPS.slice(0, 3).map((u, i) => `
### ${u}

${u} is one of the highest damage dealers in ${g.name}. With ${i === 0 ? 'massive burst damage and strong area-of-effect skills' : 'consistent DPS output and great skill scaling'}, ${u} excels in ${i === 0 ? 'endgame raids and boss encounters' : 'both PvE and PvP content'}.

**Key Strengths:**
- ${i === 0 ? 'Highest single-target burst in the game' : 'Excellent skill scaling with investment'}
- ${i === 0 ? 'Strong AoE for mob clearing' : 'Versatile across multiple game modes'}
- ${i === 0 ? 'Essential for raid compositions' : 'Great synergy with support units'}

**Best Build:**
- ${i === 0 ? 'Full damage build with critical rate substats' : 'Balanced build focusing on main stat scaling'}
- ${i === 0 ? 'Pair with support units for maximum uptime' : 'Works well in both burst and sustained teams'}
`).join('\n')}

## How We Rank DPS ${g.unitTypePlural}

Our rankings are based on:
- **Raw Damage Output** — Sustained and burst DPS numbers
- **Skill Scaling** — How well damage scales with investment
- **Versatility** — Performance across different game modes
- **Team Synergy** — How well the unit fits into meta compositions
- **Accessibility** — How easy the unit is to obtain and build

## Tips for Maximizing DPS

1. **Invest in your main DPS first** — Resources are limited, so focus on one primary damage dealer
2. **Match element weaknesses** — Using the right element can double your damage
3. **Build proper team synergy** — Support buffs can increase DPS by 50% or more
4. **Use damage-boosting relics** — The right relic can significantly boost output
5. **Keep ${g.unitTypeLower} leveled** — Level advantage provides hidden damage multipliers
6. **Time your burst windows** — Coordinate ultimates with support buffs for maximum damage

## Frequently Asked Questions

**What is the best DPS ${g.unitType.slice(0, -1)} in ${g.name}?**
${g.topDPS[0]} is currently the strongest DPS ${g.unitType.slice(0, -1).toLowerCase()} in ${g.name} for ${g.year}, offering the highest burst damage and excellent raid performance.

**Are DPS ${g.unitTypeLower} good for farming?**
Yes, S-tier DPS ${g.unitTypeLower} like ${g.topDPS[0]} and ${g.topDPS[1]} can clear farming stages very efficiently, especially when paired with the right support.

**Should I pull for DPS or support first?**
Generally, DPS ${g.unitTypeLower} should be your priority since they directly increase your clear speed. However, a balanced team with at least one support will outperform a full DPS team in challenging content.
`,
  },
  {
    slug: 'best-support-units',
    category: 'tier-list',
    titleTemplate: (g) => `${g.name} Best Support ${g.unitTypePlural} (${g.year}) – Healing & Buffs Ranked`,
    descTemplate: (g) => `Discover the best support ${g.unitTypeLower} in ${g.name} for ${g.year}. Our tier list ranks healers, buffers, and utility ${g.unitTypeLower} for every game mode.`,
    getContent: (g) => `
## Why Support ${g.unitTypePlural} Are Essential in ${g.name}

Support ${g.unitTypeLower} may not deal the most damage, but they are the glue that holds any strong team together in ${g.name}. From healing and shields to damage buffs and debuffs, the right support can multiply your entire team's effectiveness.

In endgame content like raids, tower challenges, and high-level PvP, having a top-tier support is not optional — it's required. Our ${g.year} tier list ranks every support ${g.unitType.slice(0, -1)} based on healing output, buff quality, and overall team value.

## ${g.name} Best Support ${g.unitTypePlural} Tier List (${g.year})

| Tier | ${g.unitType.slice(0, -1)} | Role | Best With |
|------|---------|------|-----------|
${g.topSupport.map((u, i) => `| ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${u} | ${i % 2 === 0 ? 'Healer + Buffer' : 'Utility'} | ${g.topDPS[i] || 'Any DPS'} |`).join('\n')}

## S-Tier Support — Detailed Breakdown

${g.topSupport.slice(0, 2).map((u, i) => `
### ${u}

${u} is ${i === 0 ? 'the best support in ' + g.name + ' right now' : 'an excellent support choice'}, providing ${i === 0 ? 'massive healing and powerful damage buffs' : 'strong utility and team sustain'}. ${i === 0 ? 'If you can only build one support, make it ' + u + '.' : u + ' shines in longer fights where sustain matters.'}

**Key Strengths:**
- ${i === 0 ? 'Best healing output in the game' : 'Strong utility and crowd control'}
- ${i === 0 ? 'Damage buff that boosts team DPS by 40%+' : 'Consistent healing over time'}
- ${i === 0 ? 'Essential for raid and tower content' : 'Great for PvP stall strategies'}
`).join('\n')}

## Support Unit Roles Explained

- **Healers** — Restore HP to keep the team alive in extended fights
- **Buffers** — Increase team damage, defense, or speed with skill effects
- **Debuffers** — Reduce enemy stats to make fights easier
- **Shielders** — Absorb damage to protect squishy DPS units
- **Revivers** — Can bring back fallen allies in clutch moments

## How to Build Support ${g.unitTypePlural}

1. **Prioritize HP and defense stats** — Supports need to survive to do their job
2. **Speed/energy regen is crucial** — Faster skill rotation means more healing and buffs
3. **Use supportive relics** — Relics that boost healing or buff duration are ideal
4. **Don\'t neglect skill levels** — Support skills scale well with investment
5. **Position matters** — Keep supports safe from AoE damage
6. **Stack support effects** — Multiple supports can create powerful combinations

## Frequently Asked Questions

**What is the best support ${g.unitType.slice(0, -1)} in ${g.name}?**
${g.topSupport[0]} is currently the strongest support ${g.unitType.slice(0, -1).toLowerCase()} in ${g.name} for ${g.year}, offering the best healing and damage buffs.

**Do I need support ${g.unitTypeLower} for farming?**
For low-level farming, DPS-only teams work fine. But for endgame content and raids, at least one support is strongly recommended.

**Can support ${g.unitTypeLower} deal damage?**
Some support ${g.unitTypeLower} have hybrid builds that can deal decent damage while still providing team utility. However, pure supports will always out-heal and out-buff hybrid builds.
`,
  },
  {
    slug: 'best-traits',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Best Traits (${g.year}) – Best Trait for Every Unit`,
    descTemplate: (g) => `Complete ${g.name} best traits guide for ${g.year}. Find the optimal trait for every ${g.unitType.slice(0, -1).toLowerCase()} and learn how the trait system works.`,
    getContent: (g) => `
## Understanding the Trait System in ${g.name}

The trait system in ${g.name} allows you to customize your ${g.unitTypeLower} with passive bonuses that enhance their performance. Choosing the right trait can dramatically improve a ${g.unitType.slice(0, -1).toLowerCase()}'s effectiveness in combat, farming, and PvP.

Each ${g.unitType.slice(0, -1).toLowerCase()} can equip one trait, and some traits are significantly better than others depending on the ${g.unitType.slice(0, -1).toLowerCase()}'s role and your team composition.

## ${g.name} Best Traits Tier List (${g.year})

| Trait | Tier | Best For | Description |
|-------|------|----------|-------------|
${g.topTraits.map((t, i) => `| ${t} | ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${i === 0 ? 'DPS Units' : i === 1 ? 'Support Units' : i === 2 ? 'Burst DPS' : 'Tank Units'} | ${i === 0 ? 'Increases attack damage significantly' : i === 1 ? 'Boosts team buff effects' : i === 2 ? 'Enhances burst window damage' : 'Improves survivability'} |`).join('\n')}

## Best Traits by Unit Role

### Best Traits for DPS Units
- **${g.topTraits[0]}** — The go-to trait for damage dealers. Increases overall damage output.
- **${g.topTraits[2]}** — Great for burst-focused DPS that rely on skill combos.

### Best Traits for Support Units
- **${g.topTraits[1]}** — Amplifies buff effects, making your support even more valuable.
- **${g.topTraits[3]}** — Increases survivability so supports stay alive longer.

### Best Traits for PvP
- **${g.topTraits[4]}** — Speed advantage is crucial in PvP for outpacing opponents.

## How to Unlock and Upgrade Traits

1. **Unlocking Traits** — Traits are unlocked through ${g.unitTypeLower} progression and specific achievements
2. **Upgrading Traits** — Use duplicate ${g.unitTypeLower} or special upgrade materials
3. **Rerolling Traits** — Some traits can be rerolled using premium currency
4. **Trait Synergies** — Some traits have bonus effects when paired with specific ${g.unitTypeLower}

## Tips for Choosing the Right Trait

1. **Match the trait to the ${g.unitType.slice(0, -1).toLowerCase()}'s role** — Don't put a DPS trait on a support
2. **Consider team composition** — Some traits benefit from team synergy
3. **Test before committing** — Try different traits in easy content first
4. **S-tier traits are always worth the investment** — They provide the biggest stat boost
5. **Save reroll resources for your main team** — Don't waste them on bench ${g.unitTypeLower}
6. **Check meta builds** — Top players share optimal trait setups

## Frequently Asked Questions

**What is the best trait in ${g.name}?**
${g.topTraits[0]} is generally considered the best overall trait in ${g.name} for ${g.year}, as it provides the most universal damage bonus.

**Can I change traits later?**
Yes, traits can be changed, but it may cost premium currency or rare materials. Plan your trait choices carefully.

**Do traits stack with buffs?**
Yes, trait bonuses are multiplicative with buff effects, which is why choosing the right trait is so important for maximizing team performance.
`,
  },
  {
    slug: 'best-relics',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Best Relics (${g.year}) – Top Relics for Every Build`,
    descTemplate: (g) => `Find the best relics in ${g.name} for ${g.year}. Our guide covers the top relics for DPS, support, and PvP builds with farming locations.`,
    getContent: (g) => `
## Why Relics Matter in ${g.name}

Relics are powerful equipment items in ${g.name} that provide significant stat bonuses and unique effects. Equipping the right relic can be the difference between clearing endgame content and struggling through it.

Unlike ${g.unitTypeLower}, which you collect and level up, relics are farmed from specific content and can be swapped between ${g.unitTypeLower} freely. This makes them one of the most important progression systems in the game.

## ${g.name} Best Relics Tier List (${g.year})

| Relic | Tier | Stat Bonus | Best For | Farm Location |
|-------|------|------------|----------|---------------|
${g.topRelics.map((r, i) => `| ${r} | ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${i === 0 ? 'ATK +25%' : i === 1 ? 'HP +30%' : i === 2 ? 'Crit Rate +20%' : 'DEF +20%'} | ${i === 0 ? 'DPS Units' : i === 1 ? 'Support Units' : 'PvP Builds'} | ${i === 0 ? 'Raid Boss' : i === 1 ? 'Tower Challenge' : 'Daily Dungeon'} |`).join('\n')}

## Best Relics by Build Type

### Best DPS Relics
- **${g.topRelics[0]}** — The best damage-boosting relic. Essential for all DPS builds.
- **${g.topRelics[2]}** — Great for burst-focused builds that rely on critical hits.

### Best Support Relics
- **${g.topRelics[1]}** — Massive HP boost keeps supports alive in challenging content.
- **${g.topRelics[3]}** — Defense bonus for supports that need extra survivability.

### Best PvP Relics
- **${g.topRelics[4]}** — Speed bonus gives PvP units the first move advantage.
- **${g.topRelics[0]}** — Raw damage is king in PvP for quick eliminations.

## How to Farm Relics Efficiently

1. **Focus on one relic at a time** — Don't spread your farming efforts thin
2. **Use the highest difficulty you can clear** — Better drop rates at higher levels
3. **Farm during relic bonus events** — Events can double drop rates
4. **Join a guild for co-op relic farming** — Team farming is faster and more efficient
5. **Prioritize S-tier relics first** — They provide the biggest power spike
6. **Save duplicate relics for upgrades** — Upgrading relics provides additional stat bonuses

## Relic Upgrade Priority

When you have limited upgrade materials, prioritize in this order:
1. **Main DPS relic** — Your primary damage dealer benefits the most
2. **Main support relic** — Keeps your team alive in hard content
3. **Secondary DPS relic** — Boost your backup damage dealer
4. **PvP-specific relics** — Only if you actively PvP

## Frequently Asked Questions

**What is the best relic in ${g.name}?**
${g.topRelics[0]} is currently the strongest relic in ${g.name} for ${g.year}, providing the highest damage boost for DPS units.

**Can relics be transferred between units?**
Yes, relics can be freely swapped between ${g.unitTypeLower}, making them very flexible.

**How long does it take to farm a relic?**
On average, S-tier relics take 2-3 days of focused farming. Drop rate events can cut this time in half.
`,
  },
  {
    slug: 'best-farming-stages',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Best Farming Stages (${g.year}) – Maximize ${g.currency} & XP Per Hour`,
    descTemplate: (g) => `Best farming stages in ${g.name} for ${g.year}. Optimize your ${g.currency} and XP farming with our stage-by-stage efficiency guide.`,
    getContent: (g) => `
## Farming Efficiency in ${g.name}

Efficient farming is the key to progressing quickly in ${g.name}. Whether you need ${g.currency}, ${g.currency2}, or XP, choosing the right farming stage can save you hours of grinding. Our ${g.year} guide covers the best stages for every resource type.

The best farming stage depends on what you need, your team power, and current events. We break down the optimal farming routes for every situation.

## ${g.name} Best Farming Stages (${g.year})

| Stage | Resource | Per Hour | Difficulty | Recommended Power |
|-------|----------|----------|------------|-------------------|
${g.topFarming.map((f, i) => `| ${f} | ${i === 0 ? g.currency : i === 1 ? g.currency2 : 'XP'} | ${i === 0 ? '5,000+' : i === 1 ? '3,000+' : '50,000+'} | ${i === 0 ? 'Hard' : 'Medium'} | ${i === 0 ? '50,000+' : '30,000+'} |`).join('\n')}

## Farming Routes by Resource

### Best ${g.currency} Farming Route
1. Start with ${g.topFarming[0]} for maximum ${g.currency} per hour
2. Use any active XP or ${g.currency} boost codes from our codes page
3. Run in a loop during ${g.currency} bonus events
4. Reset and repeat — consistency is key

### Best XP Farming Route
1. Focus on ${g.xpSource} for the best XP-to-time ratio
2. Use XP boost items before starting your farming session
3. ${g.xpTips[0]}
4. ${g.xpTips[1]}

### Best ${g.currency2} Farming Route
1. ${g.gemsTips[0]}
2. ${g.gemsTips[1]}
3. ${g.gemsTips[2]}

## Farming Tips & Tricks

1. **Use auto-repeat when available** — Save time and effort on repetitive stages
2. **Farm during bonus events** — Double drops and XP events are the best time to grind
3. **Optimize your team for speed** — Fast clears > slow clears even if the rewards are similar
4. **Don't over-farm one resource** — Balance your farming based on current needs
5. **Check our codes page daily** — Free boosts and currency can save farming time
6. **Join an active guild** — Guild bonuses and co-op farming increase efficiency

## Time-Efficient Farming Schedule

| Time | Activity | Duration | Expected Gains |
|------|----------|----------|----------------|
| Morning | Daily Tasks & Missions | 15 min | ${g.currency} + XP |
| Midday | ${g.topFarming[0]} | 30 min | ${g.currency} + Drops |
| Evening | ${g.topFarming[1]} | 30 min | ${g.currency2} + Materials |
| Night | Tower/Raid Content | 30 min | Premium Rewards |

## Frequently Asked Questions

**What is the best stage for ${g.currency} farming in ${g.name}?**
${g.topFarming[0]} is currently the best stage for ${g.currency} farming in ${g.name} for ${g.year}, offering the highest ${g.currency} per hour ratio.

**How much ${g.currency} can I farm per hour?**
With an optimized team and boosts, you can farm 5,000+ ${g.currency} per hour from the best stages.

**Should I farm ${g.currency} or ${g.currency2}?**
Early game, prioritize ${g.currency} for ${g.unitTypeLower} and upgrades. Late game, ${g.currency2} becomes more important for endgame content.
`,
  },
  {
    slug: 'best-starter-units',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Best Starter Units (${g.year}) – Early Game Tier List`,
    descTemplate: (g) => `Best starter units in ${g.name} for ${g.year}. Our beginner guide ranks the best early-game ${g.unitTypeLower} for new players to progress fast.`,
    getContent: (g) => `
## Starting Right in ${g.name}

Your starter ${g.unitType.slice(0, -1).toLowerCase()} choice in ${g.name} can significantly impact your early game experience. Picking the right ${g.unitTypeLower} from the beginning means faster clears, better resource income, and smoother progression through the story.

This guide covers the best starter ${g.unitTypeLower} for new players in ${g.name} for ${g.year}, including which ${g.unitTypeLower} to reroll for, which to invest in first, and how to build your early game team.

## ${g.name} Best Starter ${g.unitTypePlural} (${g.year})

| Tier | ${g.unitType.slice(0, -1)} | Why | Easy to Get? |
|------|---------|-----|-------------|
${g.topStarter.map((u, i) => `| ${i === 0 ? 'S' : i < 3 ? 'A' : 'B'} | ${u} | ${i === 0 ? 'Best early carry, scales well' : i === 1 ? 'Strong damage, easy to build' : 'Decent all-rounder'} | ${i < 3 ? 'Yes' : 'Moderate'} |`).join('\n')}

## Top Starter ${g.unitTypePlural} — Detailed Guide

${g.topStarter.slice(0, 3).map((u, i) => `
### ${u}

${u} is ${i === 0 ? 'our #1 recommended starter ' + g.unitType.slice(0, -1).toLowerCase() + ' in ' + g.name : 'a solid starter choice'}. ${i === 0 ? 'With strong early-game damage and good scaling into mid-game, ' + u + ' carries new players through story content efficiently.' : u + ' provides reliable performance and is straightforward to build.'}

**Pros:**
- ${i === 0 ? 'Best early-game damage output' : 'Easy to obtain and build'}
- ${i === 0 ? 'Scales well into mid-game content' : 'Decent damage for story progression'}
- ${i === 0 ? 'Low investment required for good results' : 'Works in multiple team compositions'}

**Investment Priority:**
- Level up skills first, then invest in traits and relics
- ${i === 0 ? 'Worth maxing out — you will use this unit for a long time' : 'Good investment for early-mid game, may be replaced later'}
`).join('\n')}

## Early Game Progression Guide

### Day 1-3: Getting Started
1. Complete the tutorial and claim all free rewards
2. Use codes from our codes page for free ${g.currency} and items
3. Focus on leveling your main starter ${g.unitType.slice(0, -1).toLowerCase()}
4. Clear story stages as far as possible

### Day 4-7: Building Your Team
1. Roll for a support ${g.unitType.slice(0, -1).toLowerCase()} to complement your starter
2. Start farming ${g.currency} from the best farming stages
3. Join a guild for bonus rewards
4. Complete all daily tasks every day

### Week 2 and Beyond
1. Start tackling raid content for premium rewards
2. Build a second DPS ${g.unitType.slice(0, -1).toLowerCase()} for team flexibility
3. Farm S-tier relics for your main team
4. Begin PvP once your team is properly built

## Should You Reroll?

Rerolling can give you a head start, but it's not strictly necessary in ${g.name}. If you want the best possible start:
- Reroll for **${g.topStarter[0]}** or **${g.topStarter[1]}** on your first pull
- Use our codes for extra ${g.currency} to get more pulls
- Stop rerolling once you get an S-tier starter

## Frequently Asked Questions

**What is the best starter ${g.unitType.slice(0, -1).toLowerCase()} in ${g.name}?**
${g.topStarter[0]} is the best starter ${g.unitType.slice(0, -1).toLowerCase()} in ${g.name} for ${g.year}, offering the strongest early-game performance and good scaling.

**Should I reroll in ${g.name}?**
Rerolling is recommended if you want the fastest start possible. Target ${g.topStarter[0]} or ${g.topStarter[1]}.

**How long does the early game take?**
With optimal starter ${g.unitTypeLower}, most players reach mid-game content within 1-2 weeks of active play.
`,
  },
  {
    slug: 'xp-guide',
    category: 'guides',
    titleTemplate: (g) => `${g.name} XP Guide (${g.year}) – Fastest Leveling Methods & XP Farming`,
    descTemplate: (g) => `Complete ${g.name} XP guide for ${g.year}. Learn the fastest leveling methods, best XP farming spots, and XP optimization tips.`,
    getContent: (g) => `
## Leveling Up Fast in ${g.name}

XP is the lifeblood of progression in ${g.name}. Whether you're leveling ${g.unitTypeLower}, unlocking new content, or pushing through the story, understanding how to maximize your XP gain is essential.

Our ${g.year} XP guide covers every method of earning XP in ${g.name}, from daily tasks to optimal farming routes, so you can level up as efficiently as possible.

## All XP Sources in ${g.name}

| Source | XP Per Hour | Effort | Availability |
|--------|-------------|--------|-------------|
| ${g.xpSource} | Very High | Medium | Always |
| Daily Tasks | High | Low | Daily Reset |
| Raid Events | Very High | High | Limited Time |
| ${g.topFarming[0]} | High | Low | Always |
| Story Missions | Medium | Low | One-time |
| PvP Battles | Medium | High | Always |

## ${g.name} Best XP Farming Methods (${g.year})

### Method 1: ${g.xpSource}
${g.xpSource} is the most consistent XP source in ${g.name}. Focus on the highest-level content you can clear quickly for the best XP-to-time ratio.

### Method 2: Daily Tasks & Missions
Never skip your daily tasks. They provide guaranteed XP and are quick to complete. Stack them with other activities for maximum efficiency.

### Method 3: Event Content
Limited-time events often provide 2x or 3x XP bonuses. Always prioritize event content when available.

## XP Optimization Tips

${g.xpTips.map((tip, i) => `${i + 1}. ${tip}`).join('\n')}

## XP Boosting Strategies

### Free XP Boosts
- Check our [${g.name} Codes](/${g.name === 'Blox Fruits' ? 'blox-fruits' : g.name === 'Anime Rangers X' ? 'anime-rangers' : 'anime-vanguards'}/codes) page for XP boost codes
- Use any free XP potions from daily login rewards
- Guild bonuses can provide passive XP boosts

### Premium XP Boosts
- XP boost items from the shop provide 2x XP for limited time
- Some traits and relics provide passive XP bonuses
- Premium battle pass includes XP bonus tiers

## Level Milestones & Rewards

| Level | Unlocks | Priority |
|-------|---------|----------|
| Level 10 | Basic team building | High |
| Level 25 | Raid content access | High |
| Level 40 | Advanced farming stages | Medium |
| Level 60 | Endgame content | High |
| Level 80 | Hard mode raids | Medium |
| Level 100 | All content unlocked | Low |

## Frequently Asked Questions

**What is the fastest way to level up in ${g.name}?**
The fastest leveling method in ${g.name} for ${g.year} is combining ${g.xpSource} with XP boost items during bonus events.

**How much XP do I need per level?**
XP requirements scale exponentially. Early levels need ~1,000 XP while later levels can require 50,000+ XP.

**Are XP boosts worth it?**
Yes, XP boosts are one of the best value purchases in the game, effectively halving your grinding time.
`,
  },
  {
    slug: 'gems-guide',
    category: 'guides',
    titleTemplate: (g) => `${g.name} ${g.currency} Guide (${g.year}) – How to Get Free ${g.currency} & ${g.currency2}`,
    descTemplate: (g) => `Complete ${g.name} ${g.currency} guide for ${g.year}. Learn how to earn free ${g.currency}, ${g.currency2}, and other currencies efficiently.`,
    getContent: (g) => `
## Currency Guide for ${g.name}

${g.currency} and ${g.currency2} are the primary currencies in ${g.name}. Managing your resources wisely is crucial for progression — knowing where to spend and where to save can make a huge difference in your account's power level.

Our ${g.year} currency guide covers every method of earning ${g.currency} and ${g.currency2} in ${g.name}, plus smart spending strategies to maximize your account value.

## All Currency Sources in ${g.name}

| Source | ${g.currency}/Hour | ${g.currency2}/Hour | Effort |
|--------|-----------|-----------|--------|
| ${g.gemsSource} | High | Medium | Low |
| ${g.topFarming[0]} | Very High | Medium | Medium |
| ${g.topFarming[1]} | Low | Very High | Medium |
| Daily Login | Medium | Low | None |
| Events | Very High | High | Variable |

## How to Get Free ${g.currency}

${g.gemsTips.map((tip, i) => `${i + 1}. ${tip}`).join('\n')}

## Smart Spending Guide

### What to Spend ${g.currency} On (Priority Order)
1. **${g.unitType} pulls** — New ${g.unitTypeLower} are the biggest power spikes
2. **Energy refills** — Only during events with bonus rewards
3. **Trait rerolls** — For your main team only
4. **Relic upgrades** — After securing key ${g.unitTypeLower}

### What NOT to Spend ${g.currency} On
- Don't spend on cosmetic items until you have a strong team
- Avoid spending on easy-to-farm resources
- Don't use ${g.currency} for content you can clear without it
- Save at least 3,000 ${g.currency} for new banner releases

## ${g.currency2} Farming Guide

${g.currency2} is primarily farmed through:
1. ${g.topFarming[1]} for the best ${g.currency2}-to-time ratio
2. Daily dungeons that award ${g.currency2} as completion rewards
3. Event exchanges that trade ${g.currency} for ${g.currency2}

## Currency Efficiency Tips

1. **Never let energy cap** — Use it before it overflows
2. **Log in twice daily** — Morning and evening for daily tasks
3. **Save for banner releases** — New ${g.unitTypeLower} are worth waiting for
4. **Use codes weekly** — Check our codes page for free currency
5. **Prioritize permanent upgrades** — Over consumable items
6. **Track your spending** — Know where your resources go

## Frequently Asked Questions

**How do I get free ${g.currency} in ${g.name}?**
The best ways to get free ${g.currency} are daily missions, event participation, and using codes from our codes page.

**Should I save or spend ${g.currency}?**
Save ${g.currency} for new ${g.unitTypeLower} releases and limited-time events. Only spend on pulls and essential upgrades.

**What is the ${g.currency} cap?**
There is no hard cap on ${g.currency}, but the soft cap is determined by how efficiently you can farm it.
`,
  },
  {
    slug: 'leveling-guide',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Leveling Guide (${g.year}) – Fastest Way to Max Level`,
    descTemplate: (g) => `${g.name} leveling guide for ${g.year}. Step-by-step walkthrough to reach max level fast with optimal routes and XP strategies.`,
    getContent: (g) => `
## Leveling Up Efficiently in ${g.name}

Reaching max level in ${g.name} unlocks the best content, the strongest ${g.unitTypeLower}, and the most rewarding gameplay. But leveling can be slow if you don't know the optimal path.

Our ${g.year} leveling guide provides a step-by-step walkthrough from level 1 to max, with the fastest routes, best XP sources, and leveling strategies for every stage of the game.

## ${g.name} Leveling Roadmap (${g.year})

### Early Game (Level 1-25)
**Goal:** Build your first viable team and clear story content

1. Start with ${g.topStarter[0]} as your main DPS
2. Complete all tutorial and story missions for XP
3. Use free ${g.currency} from codes to pull for a support ${g.unitType.slice(0, -1).toLowerCase()}
4. Focus on ${g.xpSource} for consistent XP
5. Don't worry about optimization — just clear content

**Expected Time:** 2-3 days

### Mid Game (Level 25-50)
**Goal:** Build a complete team and start farming

1. Add a second DPS ${g.unitType.slice(0, -1).toLowerCase()} to your team
2. Start farming ${g.topFarming[0]} for ${g.currency}
3. Invest in traits and relics for your main team
4. Begin raid content for premium rewards
5. Complete all daily tasks every day

**Expected Time:** 1-2 weeks

### Late Game (Level 50-80+)
**Goal:** Optimize your team for endgame content

1. Build specialized teams for different content types
2. Farm S-tier relics from raid bosses
3. Optimize traits for each ${g.unitType.slice(0, -1).toLowerCase()}'s role
4. Push tower and challenge content for rare rewards
5. Begin PvP if interested in competitive play

**Expected Time:** 2-4 weeks

## XP Optimization Checklist

${g.xpTips.map((tip, i) => `- [ ] ${tip}`).join('\n')}

## Leveling Speed Comparison

| Method | XP/Hour | Cost | Recommended Level |
|--------|---------|------|-------------------|
| ${g.xpSource} | ★★★★★ | Free | All Levels |
| ${g.topFarming[0]} | ★★★★☆ | Free | Level 25+ |
| Raid Content | ★★★★☆ | Free | Level 40+ |
| Daily Tasks | ★★★☆☆ | Free | All Levels |
| PvP | ★★☆☆☆ | Free | Level 50+ |

## Frequently Asked Questions

**What level should I be for endgame content?**
Most endgame content in ${g.name} requires level 60+ with a well-built team.

**How long does it take to reach max level?**
With optimal play and XP boosts, most players reach max level in 4-6 weeks.

**Is it worth using XP boosts?**
Absolutely. XP boosts can cut your leveling time in half, making them one of the best value items in the game.
`,
  },
  {
    slug: 'update-history',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Update History (${g.year}) – All Patch Notes & Changes`,
    descTemplate: (g) => `Complete ${g.name} update history for ${g.year}. Every patch note, balance change, and new content addition documented in one place.`,
    getContent: (g) => `
## ${g.name} Update History

Keeping track of every update in ${g.name} helps you stay ahead of meta changes, plan your pulls, and understand the current game state. Our update history documents every major patch, balance change, and new content addition.

## All ${g.name} Updates (${g.year})

${g.updates.map((u, i) => `
### ${u.name}
${u.desc}

${i === 0 ? '**Current Update** — This is the latest version of ' + g.name + '.' : ''}

| Category | Changes |
|----------|---------|
| New Content | ${u.desc.split(',').slice(0, 2).join(',')} |
| Balance | ${i === 0 ? 'Various unit balancing adjustments' : 'Minor balance tweaks'} |
| Bug Fixes | ${i === 0 ? 'Multiple bug fixes and QoL improvements' : 'Stability improvements'} |
`).join('\n')}

## How Updates Affect the Meta

Each update in ${g.name} can significantly shift the meta. Here's what to watch for:

1. **New ${g.unitTypeLower}** — New releases often become meta-defining
2. **Balance Changes** — Buffs and nerfs can make or break ${g.unitTypeLower}
3. **New Systems** — New mechanics can change how you build teams
4. **Event Content** — Limited events often preview upcoming changes

## How to Stay Updated

- **Bookmark this page** — We update it with every patch
- **Follow our codes page** — New codes often accompany updates
- **Check the official Discord** — Developer announcements post there first
- **Join community groups** — Other players share update insights quickly

## Update Schedule

${g.name} typically receives updates on the following schedule:
- **Major Updates:** Every 4-6 weeks
- **Minor Patches:** Every 1-2 weeks
- **Hotfixes:** As needed for critical bugs
- **Events:** Usually 1-2 events between major updates

## Frequently Asked Questions

**What is the latest update for ${g.name}?**
The latest update is ${g.updateName}, which ${g.updates[0].desc.toLowerCase()}.

**How often does ${g.name} get updated?**
${g.name} receives major updates every 4-6 weeks, with minor patches and hotfixes in between.

**Where can I find patch notes?**
We document all patch notes on this page. You can also check the official Discord for real-time announcements.
`,
  },
  {
    slug: 'best-teams',
    category: 'guides',
    titleTemplate: (g) => `${g.name} Best Teams (${g.year}) – Meta Compositions & Synergies`,
    descTemplate: (g) => `Best team compositions in ${g.name} for ${g.year}. Complete guide to meta teams, synergies, and team building strategies.`,
    getContent: (g) => `
## Team Building in ${g.name}

Building the right team in ${g.name} is just as important as having strong individual ${g.unitTypeLower}. Team synergy, role balance, and counter strategies all play a part in creating an effective composition.

Our ${g.year} team guide covers the best meta compositions, explains team synergies, and helps you build the right team for any content type.

## ${g.name} Best Team Compositions (${g.year})

| Team | DPS | Support | Flex | Best For |
|------|-----|---------|------|----------|
${g.topTeams.map((t, i) => `| Team ${i + 1} | ${g.topDPS[i] || g.topDPS[0]} | ${g.topSupport[i] || g.topSupport[0]} | ${g.topDPS[i + 1] || g.topDPS[1]} | ${i === 0 ? 'Raids & Bosses' : i === 1 ? 'Story & Farming' : 'PvP'} |`).join('\n')}

## Top Team — Detailed Breakdown

### ${g.topTeams[0]}

This is the strongest team composition in ${g.name} for ${g.year}. It combines the raw damage of ${g.topDPS[0]} with the healing and buffs of ${g.topSupport[0]}, creating a team that excels in both burst damage and sustained fights.

**Team Synergies:**
- ${g.topDPS[0]}'s burst damage pairs perfectly with ${g.topSupport[0]}'s damage buffs
- The flex slot can be adjusted based on content type
- Strong against most raid bosses and tower challenges

**Strengths:**
- Highest damage ceiling in the game
- Excellent sustain for extended fights
- Flexible enough to adapt to different content

**Weaknesses:**
- Requires investment in multiple ${g.unitTypeLower}
- Some matchups favor different team compositions
- PvP effectiveness depends on speed optimization

## Team Building Fundamentals

### Role Distribution
- **1-2 DPS Units** — Your primary damage dealers
- **1 Support Unit** — Healing, buffs, and utility
- **1 Flex Slot** — Adjust based on content needs

### Synergy Types
- **Elemental Synergy** — Same-element ${g.unitTypeLower} often buff each other
- **Skill Synergy** — Some ${g.unitTypeLower} have skills that combo together
- **Role Synergy** — DPS + Support is the core of every good team

## Frequently Asked Questions

**What is the best team in ${g.name}?**
${g.topTeams[0]} is currently the best team in ${g.name} for ${g.year}, offering the highest damage and best sustain.

**Can I use lower-tier ${g.unitTypeLower} in meta teams?**
Yes, with the right investment and team synergy, even A-tier ${g.unitTypeLower} can perform well in most content.

**How do I counter specific teams?**
Understanding element weaknesses and using counter-picks is key. Adjust your flex slot based on the opponent's team composition.
`,
  },
];

// ============================================================
// GENERATOR
// ============================================================

function generateMDX(template, gameKey) {
  const game = games[gameKey];
  const title = template.titleTemplate(game);
  const description = template.descTemplate(game);
  const content = template.getContent(game);
  const date = '2026-05-25';

  return `---
title: "${title}"
description: "${description}"
date: "${date}"
category: "${template.category}"
game: "${gameKey}"
---

${content.trim()}
`;
}

// Skip files that already exist
const existingFiles = new Set();

function main() {
  console.log('🚀 pSEO Content Generator');
  console.log('=========================\n');

  let created = 0;
  let skipped = 0;

  for (const [gameKey, game] of Object.entries(games)) {
    console.log(`\n📦 Processing: ${game.name}`);
    
    for (const template of pageTemplates) {
      const filePath = path.join(CONTENT_DIR, gameKey, `${template.slug}.mdx`);
      
      // Skip if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`  ⏭️  Skipping ${template.slug}.mdx (already exists)`);
        skipped++;
        continue;
      }
      
      const mdxContent = generateMDX(template, gameKey);
      
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, mdxContent);
      console.log(`  ✅ Created ${template.slug}.mdx`);
      created++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`  Created: ${created} files`);
  console.log(`  Skipped: ${skipped} files (already exist)`);
  console.log(`  Total: ${created + skipped} files`);
}

main();
