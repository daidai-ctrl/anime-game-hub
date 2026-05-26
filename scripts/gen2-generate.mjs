import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeMdx(filePath, frontmatter, body) {
  const content = `---
title: '${frontmatter.title}'
description: '${frontmatter.description}'
date: '${frontmatter.date}'
category: '${frontmatter.category}'
game: '${frontmatter.game}'
---

${body}`;
  fs.writeFileSync(filePath, content, 'utf-8');
}

// ===== ROLL AN ANIME =====
const raa = 'roll-an-anime';
const raaDir = path.join(CONTENT_DIR, raa);
ensureDir(raaDir);

// 1. Codes
writeMdx(path.join(raaDir, 'codes.mdx'), {
  title: 'Roll an Anime Codes (2026) – Free Rolls, Cash & Luck Boosts',
  description: 'All active Roll an Anime codes for free rolls, cash, and luck boosts. Updated daily with new codes and rewards.',
  date: '2026-05-26', category: 'codes', game: raa,
}, `
## Active Roll an Anime Codes

Here are all the currently working codes for Roll an Anime. Redeem them quickly before they expire!

| Code | Reward | Status |
|------|--------|--------|
| ROLL2026 | 500 Free Rolls | Active |
| LUCKYME | 2x Luck Boost (30 min) | Active |
| CASHRAIN | 10,000 Cash | Active |
| ANIMEFAN | 250 Free Rolls | Active |
| NEWUPDATE | 5,000 Cash + 100 Rolls | Active |
| ROLLRUSH | 3x Luck Boost (15 min) | Active |
| FREEROLLS | 300 Free Rolls | Active |
| BIGCASH | 20,000 Cash | Active |

## How to Redeem Roll an Anime Codes

Redeeming codes in Roll an Anime is simple and takes just a few seconds. Follow these steps to claim your free rewards:

1. Open Roll an Anime on Roblox
2. Look for the Twitter or Codes button on the left side of the screen
3. Click it to open the code redemption box
4. Type or paste the code exactly as shown above
5. Press the Redeem button
6. Your rewards will appear in your inventory or currency balance

Make sure to enter codes exactly as written — they are case-sensitive. If a code does not work, it may have expired or been entered incorrectly.

## How to Get More Roll an Anime Codes

New codes are released regularly by the developers. Here are the best ways to stay updated:

- **Follow the developers on Twitter/X** — New codes are often posted alongside update announcements
- **Join the official Discord server** — Codes are sometimes shared in the announcements channel before anywhere else
- **Bookmark this page** — We update our codes list daily so you never miss a free reward
- **Check YouTube** — Content creators sometimes get exclusive codes to share with their viewers

## Why Are My Roll an Anime Codes Not Working?

If a code is not working, it could be due to one of these common reasons:

- **The code has expired** — Codes are often time-limited and get deactivated after updates
- **Typing errors** — Codes are case-sensitive, so make sure you enter them exactly as shown
- **Already redeemed** — Most codes can only be used once per account
- **Server lag** — Sometimes you need to rejoin the server for the code to work

## Frequently Asked Questions

**How often are new Roll an Anime codes released?**
New codes typically come with game updates, which happen every 1-2 weeks. Holiday events and milestones often bring bonus codes.

**Can I use Roll an Anime codes on mobile?**
Yes, the code redemption process works the same way on mobile devices as on desktop.

**Do Roll an Anime codes expire?**
Yes, most codes have an expiration date. Always redeem codes as soon as possible to avoid missing out on rewards.
`);

// 2. Tier List
writeMdx(path.join(raaDir, 'tier-list.mdx'), {
  title: 'Roll an Anime Tier List (2026) – All Characters Ranked from S to D',
  description: 'Complete Roll an Anime tier list ranking all characters from best to worst. Find the strongest units for your team.',
  date: '2026-05-26', category: 'tier-list', game: raa,
}, `
## Roll an Anime Character Tier List

Our Roll an Anime tier list ranks every character in the game based on their overall power, utility, and team synergy. Whether you are a beginner or a veteran, this guide will help you build the strongest possible team.

### S Tier — Meta-Defining Characters

These are the absolute best characters in Roll an Anime. If you pull one of these, prioritize upgrading them immediately.

- **Cosmic Warrior** — Highest DPS in the game with devastating AoE attacks
- **Shadow Sovereign** — Unmatched single-target damage and survivability
- **Divine Protector** — Best support character with team-wide buffs and healing
- **Celestial Mage** — Incredible burst damage and crowd control abilities

### A Tier — Excellent Characters

Strong characters that perform well in almost all content. They are great additions to any team.

- **Flame Emperor** — Consistent DPS with burning debuffs
- **Storm Knight** — Great balance of offense and defense
- **Ice Witch** — Excellent crowd control and AoE damage
- **Thunder God** — Fast attack speed with chain lightning
- **Nature Guardian** — Solid support with regeneration abilities

### B Tier — Good Characters

Reliable characters that can carry you through most content with proper upgrades and team composition.

- **Blade Master** — Decent single-target DPS
- **Wind Archer** — Good ranged damage with slow effects
- **Earth Titan** — Tanky with decent damage output
- **Water Healer** — Reliable healing support

### C Tier — Average Characters

These characters are usable but generally outclassed by higher-tier options. Only invest if you lack better alternatives.

- **Fire Dancer** — Mediocre AoE damage
- **Steel Defender** — Average tank with limited utility

### D Tier — Below Average

Not recommended for serious team building. Replace these as soon as possible.

- **Wood Sprite** — Very low damage and limited utility
- **Stone Golem** — Slow and easily outclassed by better tanks

## How to Use This Tier List

This tier list is based on endgame performance with fully upgraded characters. Keep in mind that lower-tier characters can still be useful in early game or specific niche situations. Always consider team synergy when building your lineup.

## Frequently Asked Questions

**How often is the tier list updated?**
We update our tier list after every major game update or balance patch, typically every 1-2 weeks.

**Should I reroll for S Tier characters?**
If you are just starting out, rerolling for an S Tier character can give you a significant advantage. Check our Beginner Guide for the best reroll strategy.
`);

// 3. Best Characters
writeMdx(path.join(raaDir, 'best-characters.mdx'), {
  title: 'Roll an Anime Best Characters (2026) – Top 10 Must-Have Units',
  description: 'Discover the best characters in Roll an Anime. Our top 10 rankings with detailed analysis of abilities, upgrades, and team synergy.',
  date: '2026-05-26', category: 'tier-list', game: raa,
}, `
## Top 10 Best Characters in Roll an Anime

Finding the best characters in Roll an Anime can make the difference between dominating the leaderboard and struggling through content. This guide breaks down the top 10 must-have units, their abilities, and why they deserve a spot on your team.

### 1. Cosmic Warrior
The undisputed king of Roll an Anime. Cosmic Warrior deals the highest DPS in the game with massive AoE attacks that clear waves effortlessly. His ultimate ability, Cosmic Annihilation, deals catastrophic damage to all enemies on screen. Upgrade priority: **Maximum**.

### 2. Shadow Sovereign
If you need a character that can both deal and take damage, Shadow Sovereign is your best pick. His lifesteal mechanic keeps him alive in the toughest fights while his Shadow Strike ability melts bosses. He excels in both PvE and PvP content.

### 3. Divine Protector
Every team needs a great support, and Divine Protector is the best. Her abilities provide team-wide attack buffs, defense boosts, and consistent healing. She makes every other character on your team significantly better.

### 4. Celestial Mage
Burst damage and crowd control make Celestial Mage a top-tier pick. Her Starfall ability stuns enemies while dealing massive damage, giving your team time to reposition and attack safely.

### 5. Flame Emperor
Consistent DPS with burning debuffs that tick damage over time. Flame Emperor pairs well with any team composition and is especially effective in long fights where his burning damage stacks up.

### 6. Storm Knight
A well-rounded character with strong offense and defense. Storm Knight generates shields while attacking, making him self-sufficient and easy to use in any team.

### 7. Ice Witch
The queen of crowd control. Ice Witch can freeze entire groups of enemies, setting up devastating combos with your other damage dealers. Essential for difficult PvE content.

### 8. Thunder God
Lightning-fast attack speed with chain lightning that bounces between enemies. Thunder God excels in wave-based content where there are many targets to hit.

### 9. Nature Guardian
A solid support option that provides regeneration and damage-over-time effects. Nature Guardian is a great alternative if you do not have Divine Protector.

### 10. Blade Master
Reliable single-target DPS that works well in boss fights. Blade Master has high critical hit rates and can deal burst damage when needed.

## How to Get These Characters

The best characters are typically found in the rarest rolling machines and during limited-time banner events. Use luck boosts during events to maximize your chances. Check our Luck Boost Guide and Cash Farming Guide for strategies to get more rolls.

## Frequently Asked Questions

**Should I invest in lower-tier characters?**
Only invest in lower-tier characters if you do not have better options. Save your upgrade materials for top-tier units.
`);

// 4. Beginner Guide
writeMdx(path.join(raaDir, 'beginner-guide.mdx'), {
  title: 'Roll an Anime Beginner Guide (2026) – How to Start Strong',
  description: 'Complete beginner guide for Roll an Anime. Learn the basics of rolling, team building, cash farming, and progressing efficiently.',
  date: '2026-05-26', category: 'guides', game: raa,
}, `
## Roll an Anime Beginner Guide

Welcome to Roll an Anime! This beginner guide will walk you through everything you need to know to start strong and progress efficiently from day one.

### Getting Started — The Basics

When you first join Roll an Anime, you start with a basic character and a small amount of cash. Your primary goal is to roll for better characters and build a strong team. Here is what you should focus on:

1. **Use your free rolls immediately** — New players get bonus rolls at the start. Use them right away to get your first characters.
2. **Redeem all active codes** — Visit our Codes page and enter every working code for free rolls, cash, and luck boosts.
3. **Start farming cash** — Cash is the main currency for rolling. The faster you earn cash, the more rolls you can do.

### Understanding the Rolling System

Roll an Anime uses a gacha-style rolling system with different machines:

- **Basic Machine** — Common and uncommon characters, costs 100 cash per roll
- **Premium Machine** — Rare and epic characters, costs 500 cash per roll
- **Legendary Machine** — Epic and legendary characters, costs 2,000 cash per roll
- **Secret Machine** — Legendary and secret characters, costs 10,000 cash per roll

Always start with the Basic Machine to build your initial team, then move to Premium as you earn more cash. Save Legendary and Secret rolls for when you have luck boosts active.

### Team Building for Beginners

A good beginner team needs:
- **1 DPS character** — Your main damage dealer
- **1 Tank or Bruiser** — Absorbs damage and protects your team
- **1 Support** — Heals and buffs your team

Focus on upgrading these three core characters before expanding your roster. It is better to have three strong characters than ten weak ones.

### Cash Farming for Beginners

The fastest way to earn cash early on is:
- Complete all daily quests every day
- Use AFK farming spots (check our Cash Farming Guide)
- Participate in events for bonus rewards
- Use codes for free cash injections

### Common Beginner Mistakes to Avoid

- **Spending all cash on Basic rolls** — Save for Premium or Legendary machines
- **Upgrading too many characters** — Focus on your core team of 3-4
- **Ignoring luck boosts** — Always use luck boosts before expensive rolls
- **Not redeeming codes** — Free resources are essential for progression

## Frequently Asked Questions

**Should I reroll my starting character?**
If your first few rolls give you common characters, it may be worth rerolling for a better start. Check our Tier List to see which characters are worth keeping.

**How long does it take to get a legendary character?**
On average, it takes about 50-100 Premium rolls to get an epic, and 20-50 Legendary rolls for a legendary. Luck boosts significantly improve these odds.
`);

// 5. Luck Boost Guide
writeMdx(path.join(raaDir, 'luck-boost-guide.mdx'), {
  title: 'Roll an Anime Luck Boost Guide (2026) – Maximize Your Rare Pulls',
  description: 'Complete guide to luck boosts in Roll an Anime. Learn how to get, use, and maximize luck boosts for the best rolling results.',
  date: '2026-05-26', category: 'guides', game: raa,
}, `
## Roll an Anime Luck Boost Guide

Luck boosts are one of the most important mechanics in Roll an Anime. They directly increase your chances of rolling rare and legendary characters, making them essential for any serious player. This guide covers everything you need to know about luck boosts and how to use them effectively.

### What Are Luck Boosts?

Luck boosts are temporary buffs that multiply your chances of pulling higher-rarity characters. They come in different tiers:

- **1.5x Luck Boost** — Increases rare drop rates by 50%
- **2x Luck Boost** — Doubles your chances for rare and epic pulls
- **3x Luck Boost** — Triples your chances — best used on Legendary and Secret machines
- **5x Luck Boost** — Extremely rare, typically only available during special events

### How to Get Luck Boosts

There are several ways to obtain luck boosts in Roll an Anime:

1. **Redeem codes** — Many active codes include luck boosts as rewards. Check our Codes page regularly for new codes.
2. **Daily login rewards** — Logging in every day gives you small luck boosts over time.
3. **Event participation** — Special events often reward luck boosts as milestone prizes.
4. **Purchase with cash** — You can buy luck boosts from the in-game shop, though this is expensive.
5. **Discord giveaways** — The official Discord sometimes hosts giveaways for exclusive boosts.

### When to Use Luck Boosts — Timing is Everything

The key to maximizing luck boosts is timing. Here are the best situations to activate them:

- **During limited-time banners** — When a desirable character is available, use your best boosts
- **Before rolling on Legendary or Secret machines** — Higher base cost means you want the best odds
- **During 2x or 3x luck events** — Stack your personal boost with the server-wide event
- **When you have saved up rolls** — Do not waste a boost on just a few rolls

### Luck Boost Stacking Strategy

You can stack personal luck boosts with server-wide luck events for massive pull rates. If a server event gives 2x luck and you use a 3x personal boost, your effective luck multiplier becomes 6x. This is the best time to go all-in on Legendary and Secret machines.

### Common Luck Boost Mistakes

- **Wasting boosts on Basic Machine** — The low base odds make boosts less impactful
- **Using boosts with very few rolls** — Save at least 20-30 rolls before activating a boost
- **Forgetting to check for server events** — Always stack boosts with server events when possible
- **Not planning ahead** — Save your best boosts for banners with characters you actually want

## Frequently Asked Questions

**Do luck boosts guarantee a rare pull?**
No, they only increase your chances. Even with a 5x boost, rare pulls are not guaranteed, just more likely.

**How long do luck boosts last?**
Most luck boosts last between 15 and 60 minutes, depending on the source. Event boosts may last longer.
`);

// 6. Cash Farming Guide
writeMdx(path.join(raaDir, 'cash-farming-guide.mdx'), {
  title: 'Roll an Anime Cash Farming Guide (2026) – Fastest Methods to Earn Cash',
  description: 'Learn the fastest ways to farm cash in Roll an Anime. AFK farming, quest strategies, and optimal cash routes covered.',
  date: '2026-05-26', category: 'guides', game: raa,
}, `
## Roll an Anime Cash Farming Guide

Cash is the lifeblood of Roll an Anime. Every roll costs cash, and the best characters require thousands of rolls to obtain. This guide covers the most efficient cash farming methods so you can maximize your rolling budget.

### Why Cash Farming Matters

In Roll an Anime, the difference between a casual player and a top player often comes down to how efficiently they farm cash. More cash means more rolls, which means better characters and faster progression. Whether you are free-to-play or spend Robux, optimizing your cash income is essential.

### Best Cash Farming Methods

#### 1. AFK Farming (Most Efficient)
AFK farming is the most popular method because it generates cash passively. Here are the best AFK spots:

- **Starting Zone** — 50 cash/minute, safe for beginners
- **Mid-Tier Arena** — 150 cash/minute, requires a decent team
- **High-Level Dungeon** — 300 cash/minute, needs strong characters
- **VIP Zone** — 500 cash/minute, requires gamepass or special access

Set up your team in the highest AFK zone you can handle and leave the game running. Check back periodically to collect your earnings and reset the timer.

#### 2. Daily Quests (Most Consistent)
Daily quests provide a guaranteed cash income every day:

- **Login bonus** — 500-2,000 cash per day
- **Roll quests** — 1,000 cash for rolling 10 times
- **Battle quests** — 2,000 cash for winning 5 battles
- **Team quests** — 1,500 cash for upgrading a character

Complete all daily quests every day for a base income of 5,000-7,000 cash.

#### 3. Event Participation (Best Burst Income)
Limited-time events offer the highest cash rewards:

- **Cash Rush Events** — 2x cash from all sources for 1 hour
- **Boss Raids** — 10,000-50,000 cash per raid
- **Tournament Rewards** — Up to 100,000 cash for top placements

Always participate in events when they are active — they are the fastest way to earn large amounts of cash.

#### 4. Code Redemption (Free Cash)
Redeeming codes gives you free cash with zero effort. Visit our Codes page for all active codes — many include 5,000-20,000 cash rewards.

### Cash Farming Optimization Tips

- **Stack cash multipliers** — Use cash boost items during Cash Rush Events
- **Prioritize daily quests** — They reset every day, so never miss them
- **Upgrade cash-earning characters** — Some characters boost your passive cash income
- **Join an active guild** — Guild bonuses can increase your cash earnings by 10-20%

## Frequently Asked Questions

**How much cash can I earn per hour?**
With optimized AFK farming and active event participation, you can earn 20,000-50,000 cash per hour.

**Is AFK farming safe?**
Yes, AFK farming is a built-in game mechanic. Just make sure your team is strong enough to survive the zone you choose.
`);

// 7. Expired Codes
writeMdx(path.join(raaDir, 'expired-codes.mdx'), {
  title: 'Roll an Anime Expired Codes (2026) – List of All Inactive Codes',
  description: 'Complete list of expired Roll an Anime codes. Check which codes no longer work before trying to redeem them.',
  date: '2026-05-26', category: 'codes', game: raa,
}, `
## Roll an Anime Expired Codes List

This page maintains a complete record of all expired Roll an Anime codes. If a code is listed here, it no longer works and cannot be redeemed for rewards. We keep this list updated so you do not waste time trying inactive codes.

### Recently Expired Codes

| Code | Previous Reward | Expired Date |
|------|-----------------|--------------|
| WINTER2025 | 1,000 Free Rolls | January 2026 |
| HOLIDAY | 15,000 Cash | January 2026 |
| NEWYEAR26 | 3x Luck Boost | February 2026 |
| ROLLKING | 5,000 Cash | February 2026 |
| GACHA50 | 50 Free Rolls | March 2026 |
| LUCKYDAY | 2x Luck Boost | March 2026 |
| SPRING26 | 8,000 Cash + 200 Rolls | April 2026 |
| EASTEREGG | 500 Free Rolls | April 2026 |
| APRILFOOLS | 1,000 Cash | April 2026 |
| ANIME100 | 100 Free Rolls | May 2026 |

### Older Expired Codes

| Code | Previous Reward | Expired Date |
|------|-----------------|--------------|
| LAUNCHDAY | 2,000 Free Rolls | December 2025 |
| ROLLOUT | 5,000 Cash | December 2025 |
| BETA2025 | 10,000 Cash | November 2025 |
| EARLYBIRD | 3x Luck Boost | November 2025 |
| FIRSTCODE | 500 Rolls | October 2025 |

### Why Do Codes Expire?

Roll an Anime codes expire for several reasons:

- **Update cycles** — Old codes are deactivated when new updates launch
- **Balance reasons** — Some rewards may be too generous for the current game economy
- **Limited-time events** — Event-specific codes expire when the event ends
- **Anti-abuse measures** — Expired codes prevent botted accounts from stockpiling rewards

### How to Avoid Missing Future Codes

To make sure you never miss an active code:

1. **Bookmark our Codes page** — We update it daily with all working codes
2. **Follow the developers on Twitter/X** — New codes are announced there first
3. **Join the official Discord** — Get instant notifications when codes drop
4. **Check back regularly** — Codes can appear at any time without announcement

## Frequently Asked Questions

**Can expired codes come back?**
Rarely, developers might reactivate old codes during special events, but this is uncommon. Always focus on currently active codes.

**How do I know if a code is expired?**
If a code gives you an error message when trying to redeem it, it has likely expired. You can also check our Active Codes page for all currently working codes.
`);

// ===== ANIME STORY 2 =====
const as2 = 'anime-story-2';
const as2Dir = path.join(CONTENT_DIR, as2);
ensureDir(as2Dir);

// 1. Codes
writeMdx(path.join(as2Dir, 'codes.mdx'), {
  title: 'Anime Story 2 Codes (2026) – Free Gems, Upgrades & Unlocks',
  description: 'All active Anime Story 2 codes for free gems, upgrades, and unit unlocks. Updated daily with new rewards.',
  date: '2026-05-26', category: 'codes', game: as2,
}, `
## Active Anime Story 2 Codes

Here are all the currently working codes for Anime Story 2. Redeem them as soon as possible to claim your free rewards!

| Code | Reward | Status |
|------|--------|--------|
| STORY2026 | 500 Free Gems | Active |
| UPGRADE1 | 5 Upgrade Tokens | Active |
| ANIMEHERO | 300 Gems + 2 Upgrade Tokens | Active |
| NEWCHAPTER | 1,000 Gems | Active |
| POWERUP | 10 Upgrade Tokens | Active |
| UNITUNLOCK | 3 Unit Shards | Active |
| STORYMODE | 800 Gems + 5 Upgrade Tokens | Active |

## How to Redeem Anime Story 2 Codes

Redeeming codes in Anime Story 2 is straightforward. Follow these steps:

1. Open Anime Story 2 on Roblox
2. Tap the Settings or Menu button (gear icon)
3. Look for the Codes or Promo Code text box
4. Type or paste the code exactly as shown above
5. Press Submit or Redeem
6. Your rewards will be added to your account immediately

Codes are case-sensitive, so enter them exactly as displayed. If a code does not work, double-check the spelling and try again.

## How to Get More Anime Story 2 Codes

Stay ahead of the curve with these methods for finding new codes:

- **Follow the developers on Twitter/X** — Codes are often posted with update announcements
- **Join the official Discord server** — Get codes in the announcements channel
- **Bookmark this page** — We update our code list daily so you never miss free rewards
- **Subscribe to YouTubers** — Content creators sometimes share exclusive codes
- **Check in-game events** — Special events may include bonus codes as rewards

## Why Are My Anime Story 2 Codes Not Working?

Common reasons codes fail to work:

- **Code has expired** — Most codes are time-limited and removed after updates
- **Typing errors** — Codes are case-sensitive; copy and paste to avoid mistakes
- **Already redeemed** — Each code can only be used once per account
- **Wrong game version** — Make sure you are on the latest game version

## Frequently Asked Questions

**How often are new Anime Story 2 codes released?**
New codes are typically released with game updates, which happen every 1-2 weeks. Special events and milestones may bring additional codes.

**Can I use Anime Story 2 codes on mobile?**
Yes, the code redemption process works the same on all platforms including mobile, tablet, and desktop.
`);

// 2. Tier List
writeMdx(path.join(as2Dir, 'tier-list.mdx'), {
  title: 'Anime Story 2 Tier List (2026) – All Units Ranked from S to D',
  description: 'Complete Anime Story 2 tier list ranking all units from best to worst. Find the strongest characters for your team.',
  date: '2026-05-26', category: 'tier-list', game: as2,
}, `
## Anime Story 2 Unit Tier List

Our Anime Story 2 tier list ranks every unit in the game based on their overall performance in PvE, PvP, and endgame content. Use this guide to build the strongest team and invest your upgrade resources wisely.

### S Tier — Must-Have Units

These units dominate the meta and should be your top priority for unlocking and upgrading.

- **Dragon Emperor** — The strongest DPS unit with devastating AoE and single-target attacks. His Dragon Breath ability melts bosses and clears waves with ease. Essential for both PvE and PvP.
- **Celestial Knight** — The ultimate tank with team-wide damage reduction and self-healing. Can solo tank most content while protecting your entire team.
- **Phoenix Healer** — Best support in the game with powerful healing, resurrection, and attack buffs. Every team needs Phoenix Healer.

### A Tier — Excellent Units

These units are strong and versatile, performing well in most game modes.

- **Shadow Assassin** — High burst damage with stealth mechanics
- **Thunder Lord** — Great AoE damage with stun effects
- **Ice Sorceress** — Excellent crowd control and sustained damage
- **Nature Druid** — Solid support with regeneration and debuff removal
- **Flame Samurai** — Consistent melee DPS with burning effects

### B Tier — Good Units

Solid performers that are effective with proper team composition and upgrades.

- **Wind Ranger** — Decent ranged DPS with slow effects
- **Earth Guardian** — Reliable tank with moderate damage
- **Water Priestess** — Good healing support
- **Lightning Mage** — Average AoE damage with chain attacks

### C Tier — Average Units

Usable but generally outclassed. Only invest if you lack better options.

- **Stone Warrior** — Basic tank with limited utility
- **Fire Dancer** — Mediocre AoE damage

### D Tier — Below Average

Not recommended for any serious content. Replace as soon as possible.

- **Leaf Sprite** — Very low impact in all game modes
- **Mud Golem** — Slow and ineffective compared to other tanks

## Team Building Tips

The best teams in Anime Story 2 typically follow this structure:
- 1 Main DPS (S or A Tier)
- 1 Tank (S or A Tier)
- 1 Support/Healer (S or A Tier)
- 1-2 Flex picks based on content type

## Frequently Asked Questions

**Is the tier list the same for PvE and PvP?**
Not always. Some units perform differently in PvP due to player behavior versus AI patterns. We factor both modes into our rankings.
`);

// 3. Best Units
writeMdx(path.join(as2Dir, 'best-units.mdx'), {
  title: 'Anime Story 2 Best Units (2026) – Top 10 Units for Every Game Mode',
  description: 'Discover the best units in Anime Story 2. Top 10 rankings with detailed analysis of abilities, upgrades, and best team compositions.',
  date: '2026-05-26', category: 'tier-list', game: as2,
}, `
## Top 10 Best Units in Anime Story 2

Choosing the right units to invest in is crucial for progression in Anime Story 2. This guide ranks the top 10 units and explains why they deserve a spot on your team.

### 1. Dragon Emperor
The absolute best unit in Anime Story 2. Dragon Emperor delivers unmatched DPS with his Dragon Breath and Dragon Storm abilities. His ultimate, Emperor\'s Wrath, deals catastrophic damage to all enemies. He dominates in PvE story chapters, raids, and PvP arena. Upgrade him to max level as your first priority.

### 2. Celestial Knight
The best tank in the game and possibly the most durable unit. Celestial Knight\'s Divine Shield reduces all incoming damage by 40% for the entire team, and his self-healing makes him nearly unkillable. He is essential for difficult boss fights and PvP.

### 3. Phoenix Healer
No team is complete without Phoenix Healer. Her Healing Rain restores massive HP to all allies, and her unique Resurrection ability can revive a fallen teammate once per battle. She also provides a 20% attack buff to the entire team.

### 4. Shadow Assassin
The premier burst damage dealer. Shadow Assassin can eliminate key targets in seconds with his Backstab ability, which deals 3x damage from stealth. In PvP, he can take out enemy healers and supports before they can react.

### 5. Thunder Lord
AoE damage king. Thunder Lord\'s Thunder Storm ability hits all enemies with lightning bolts that chain between targets, making him incredible for wave-based PvE content and raids.

### 6. Ice Sorceress
The best crowd control unit. Ice Sorceress can freeze entire groups of enemies, giving your team time to deal damage safely. Her Blizzard ability is essential for the hardest PvE content.

### 7. Nature Druid
A versatile support that provides healing, regeneration, and debuff removal. Nature Druid is especially valuable in longer fights where sustained healing matters more than burst healing.

### 8. Flame Samurai
Consistent melee DPS with burning damage over time. Flame Samurai pairs well with units that benefit from enemies taking continuous damage, like Shadow Assassin.

### 9. Wind Ranger
Excellent ranged DPS with the ability to slow enemies. Wind Ranger is a safe pick for any team composition and performs consistently across all game modes.

### 10. Lightning Mage
Good AoE damage with chain lightning that bounces between enemies. Lightning Mage is particularly effective in dungeon content with many enemies.

## Best Team Compositions

**PvE Team:** Dragon Emperor + Celestial Knight + Phoenix Healer + Ice Sorceress
**PvP Team:** Dragon Emperor + Shadow Assassin + Phoenix Healer + Celestial Knight
**Speed Team:** Dragon Emperor + Thunder Lord + Lightning Mage + Wind Ranger

## How to Unlock These Units

Most top-tier units are obtained through story progression, boss defeats, or gem summoning. Check our How to Unlock Units guide for specific unlock methods for each character.

## Frequently Asked Questions

**Should I spread upgrades across many units or focus on a few?**
Focus on upgrading your core team of 3-4 units first. Spreading resources too thin slows your progression significantly.
`);

// 4. Beginner Guide
writeMdx(path.join(as2Dir, 'beginner-guide.mdx'), {
  title: 'Anime Story 2 Beginner Guide (2026) – Complete Walkthrough for New Players',
  description: 'Complete beginner guide for Anime Story 2. Learn the basics of story progression, unit unlocking, upgrading, and team building.',
  date: '2026-05-26', category: 'guides', game: as2,
}, `
## Anime Story 2 Beginner Guide

Welcome to Anime Story 2! This comprehensive beginner guide will help you understand the game mechanics, build a strong team, and progress efficiently through the story chapters.

### Getting Started — Your First Steps

When you begin Anime Story 2, you will choose a starter unit and enter the first story world. Here is your priority checklist:

1. **Redeem all active codes** — Visit our Codes page and enter every working code for free gems, upgrade tokens, and unit shards.
2. **Complete the tutorial** — The tutorial teaches core mechanics and gives bonus rewards.
3. **Progress through Story Chapter 1** — This unlocks your first additional units and introduces the upgrade system.

### Understanding the Story System

Anime Story 2 is divided into story worlds, each containing multiple chapters:

- **World 1: Spirit Academy** — Chapters 1-10, beginner difficulty
- **World 2: Dark Forest** — Chapters 11-25, intermediate difficulty
- **World 3: Demon Castle** — Chapters 26-40, advanced difficulty
- **World 4: Celestial Realm** — Chapters 41-60, endgame difficulty

Each chapter rewards you with gems, upgrade materials, and sometimes unit shards. Completing all chapters in a world unlocks the next world and bonus rewards.

### Unit Unlocking Basics

There are several ways to unlock new units:

- **Story completion** — Some units are guaranteed rewards for finishing certain chapters
- **Gem summoning** — Spend gems for a chance to pull random units
- **Boss drops** — Defeating world bosses may drop unit shards
- **Event rewards** — Limited-time events often offer exclusive units
- **Shard collection** — Collect enough shards to unlock a unit

### The Upgrade System Explained

Upgrading units is essential for progression. Each unit has multiple upgrade tiers:

- **Tier 1-3** — Basic stat boosts (HP, ATK, DEF)
- **Tier 4-6** — Stat boosts + new ability unlocks
- **Tier 7-10** — Major stat increases + ability enhancements
- **Tier 11+** — Endgame upgrades with unique bonuses

Upgrade materials come from story chapters, daily quests, and events. Focus on upgrading your main DPS first, then your tank and healer.

### Team Building for Beginners

The optimal beginner team composition:
- **1 Main DPS** — Your primary damage dealer
- **1 Tank** — Absorbs damage and protects the team
- **1 Healer/Support** — Keeps the team alive with healing and buffs
- **1 Flex** — Additional DPS, support, or utility based on content

### Daily Routine for New Players

Follow this daily routine for maximum progression:

1. Redeem any new codes
2. Complete all daily quests
3. Run story chapters for upgrade materials
4. Participate in any active events
5. Spend remaining energy on farming

### Common Beginner Mistakes

- **Upgrading too many units** — Focus on 3-4 core units first
- **Skipping story chapters** — Story rewards are essential for progression
- **Ignoring upgrade materials** — Always farm materials when available
- **Not using codes** — Free gems and tokens are too valuable to skip

## Frequently Asked Questions

**How long does it take to reach endgame?**
Most players reach endgame content in 2-4 weeks with consistent play. Using our guides can speed this up significantly.
`);

// 5. Upgrade Guide
writeMdx(path.join(as2Dir, 'upgrade-guide.mdx'), {
  title: 'Anime Story 2 Upgrade Guide (2026) – Fastest Upgrade Paths & Materials',
  description: 'Complete upgrade guide for Anime Story 2. Learn the fastest upgrade paths, material farming, and priority order for every unit.',
  date: '2026-05-26', category: 'guides', game: as2,
}, `
## Anime Story 2 Upgrade Guide

The upgrade system is the backbone of progression in Anime Story 2. Understanding how to efficiently upgrade your units will determine how fast you clear story chapters and compete in PvP. This guide covers everything from upgrade basics to advanced optimization strategies.

### How the Upgrade System Works

Every unit in Anime Story 2 can be upgraded through multiple tiers. Each tier requires specific materials and currency:

- **Upgrade Tokens** — The primary currency for upgrades, earned from quests and events
- **Unit Shards** — Character-specific shards needed for higher tiers
- **Elemental Crystals** — Match the unit\'s element (Fire, Water, Earth, Wind, Light, Dark)
- **Gold** — Basic currency that scales with tier level

### Upgrade Tier Breakdown

| Tier | Materials Needed | Stat Increase | Unlock |
|------|-----------------|---------------|--------|
| 1-3 | Upgrade Tokens + Gold | +10% per tier | Basic abilities |
| 4-6 | Tokens + Unit Shards + Gold | +15% per tier | New ability |
| 7-9 | Tokens + Shards + Crystals + Gold | +20% per tier | Ability enhancement |
| 10-12 | All materials (large quantities) | +25% per tier | Unique bonus |
| 13+ | Rare materials from endgame | +30% per tier | Ultimate ability |

### Upgrade Priority Order

Not all units should be upgraded equally. Follow this priority list:

1. **Main DPS (Dragon Emperor, Shadow Assassin)** — Maximum priority, upgrades directly increase clear speed
2. **Tank (Celestial Knight)** — Second priority, survivability enables harder content
3. **Healer (Phoenix Healer)** — Third priority, healing scales significantly with upgrades
4. **Support/Utility** — Fourth priority, buff effectiveness increases with tiers
5. **Secondary DPS** — Fifth priority, only after core team is strong

### Fastest Material Farming Routes

#### Upgrade Tokens
- **Daily Quests** — 50-100 tokens per day
- **Story Chapters (Hard Mode)** — 20-30 tokens per clear
- **Event Shop** — Exchange event currency for tokens
- **Raid Bosses** — 30-50 tokens per raid

#### Unit Shards
- **Boss Drops** — Specific bosses drop shards for their associated unit
- **Shard Shop** — Exchange duplicate shards for the ones you need
- **Story Rewards** — Certain chapters guarantee shard drops

#### Elemental Crystals
- **Crystal Dungeons** — Open daily, match the element you need
- **World Events** — Random crystal drops from world activities
- **Guild Shop** — Exchange guild points for crystals

### Upgrade Efficiency Tips

- **Wait for 2x upgrade events** — Material costs are halved during special events
- **Use upgrade boost codes** — Some codes give bonus upgrade materials
- **Plan ahead** — Save materials for when you unlock a new unit rather than spending randomly
- **Focus on one unit at a time** — Completing a unit to Tier 7+ is more impactful than spreading upgrades

## Frequently Asked Questions

**Can I reset upgrades on a unit?**
Yes, but you only get back 50% of the materials. Only reset if you absolutely need to switch focus to a better unit.

**Is it worth upgrading lower-tier units?**
Only upgrade lower-tier units as placeholders until you unlock better ones. Do not invest heavily in units ranked C or below on our Tier List.
`);

// 6. How to Unlock Units
writeMdx(path.join(as2Dir, 'how-to-unlock-units.mdx'), {
  title: 'Anime Story 2 How to Unlock Units (2026) – All Unlock Methods & Requirements',
  description: 'Complete guide to unlocking all units in Anime Story 2. Story rewards, boss drops, gem summoning, shard collection, and event exclusives.',
  date: '2026-05-26', category: 'guides', game: as2,
}, `
## How to Unlock Units in Anime Story 2

Unlocking new units is essential for building a powerful team in Anime Story 2. There are multiple ways to obtain units, and understanding each method will help you plan your progression and avoid wasting resources.

### Method 1: Story Chapter Rewards

The most reliable way to unlock units is by progressing through story chapters. Many units are guaranteed rewards for completing specific chapters.

| Unit | Chapter | World | Requirement |
|------|---------|-------|-------------|
| Flame Samurai | Chapter 3 | Spirit Academy | Complete chapter |
| Water Priestess | Chapter 7 | Spirit Academy | Complete chapter |
| Earth Guardian | Chapter 12 | Dark Forest | Complete chapter |
| Wind Ranger | Chapter 18 | Dark Forest | Complete chapter |
| Thunder Lord | Chapter 28 | Demon Castle | Complete chapter on Hard |
| Ice Sorceress | Chapter 35 | Demon Castle | Complete chapter on Hard |

Story-guaranteed units are your baseline team. Prioritize story progression to unlock these reliable units before spending gems on summoning.

### Method 2: Gem Summoning

The gacha system in Anime Story 2 lets you spend gems for a chance to pull random units:

- **Single Summon** — 100 gems per pull
- **10x Summon** — 900 gems (10% discount)
- **Featured Banner** — Higher rates for specific units, rotates weekly

Summon rates by rarity:
- Common: 60%
- Uncommon: 25%
- Rare: 10%
- Epic: 4%
- Legendary: 0.9%
- Secret: 0.1%

**Tips for summoning wisely:**
- Save for 10x pulls for the discount
- Pull on featured banners when a unit you want is rated up
- Use codes for free gems to supplement your summoning budget
- Never spend all your gems at once — save for limited banners

### Method 3: Boss Drops

World bosses and raid bosses have a chance to drop unit shards:

- **World Bosses** — Drop 1-3 shards per defeat, respawn every 30 minutes
- **Raid Bosses** — Drop 3-5 shards per raid, available 3 times per day
- **Event Bosses** — Guaranteed shard drops for event-exclusive units

Collect enough shards (usually 10-50 depending on rarity) to unlock the unit.

### Method 4: Event Rewards

Limited-time events often offer exclusive units that cannot be obtained elsewhere:

- **Story Events** — Complete event chapters for unit rewards
- **Tournament Events** — Reach milestones for unit shards
- **Holiday Events** — Special themed units available for a limited time
- **Collaboration Events** — Crossover units from other anime games

### Method 5: Shard Collection

Even without events or bosses, you can collect shards over time:

- **Daily Shard Quests** — Earn random shards by completing daily tasks
- **Shard Exchange** — Trade duplicate shards for ones you need (3:1 ratio)
- **Guild Shop** — Purchase shards with guild points
- **Login Rewards** — Weekly login milestones give shard bonuses

### Unlock Priority Recommendations

Focus on unlocking these units first for the strongest team foundation:

1. Dragon Emperor (Gem Summoning — Featured Banner)
2. Celestial Knight (Story Chapter 22)
3. Phoenix Healer (Story Chapter 15)
4. Shadow Assassin (Gem Summoning — Featured Banner)

## Frequently Asked Questions

**Can I unlock every unit for free?**
Most units can be obtained through gameplay, but some event-exclusive units may only be available during limited-time events. Save gems for featured banners to maximize your chances.
`);

console.log('All 13 MDX files created successfully!');
