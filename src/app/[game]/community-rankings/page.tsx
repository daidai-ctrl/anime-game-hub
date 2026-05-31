import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getGame, games } from '@/lib/games';
import { getRankingCategories } from '@/lib/ranking-items';
import { getArticlesByGame } from '@/lib/articles';
import { CommunityRankingContent } from '@/components/community-ranking-content';

interface CommunityRankingPageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  return games.map((game) => ({
    game: game.slug,
  }));
}

export async function generateMetadata({ params }: CommunityRankingPageProps): Promise<Metadata> {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) return {};

  const categories = getRankingCategories(gameSlug);
  const categoryNames = categories.map((c) => c.label.toLowerCase()).join(', ');

  const title = `${game.name} Community Rankings (2026)`;
  const description = gameSlug === 'anime-story-2'
    ? `Vote on Anime Story 2 units and compare community rankings with our editor starter list while player votes are still being collected.`
    : `Vote and view community rankings for ${game.name} ${categoryNames}. Updated daily based on player votes.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | AnimeGameHub`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AnimeGameHub`,
      description,
    },
    alternates: {
      canonical: `/${gameSlug}/community-rankings`,
    },
  };
}

export default async function CommunityRankingPage({ params }: CommunityRankingPageProps) {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) notFound();

  const categories = getRankingCategories(gameSlug);
  if (categories.length === 0) notFound();

  const existingArticles = getArticlesByGame(gameSlug);

  // Build related guide links from existing articles
  const guideLinks: { slug: string; label: string }[] = [];
  const slugSet = new Set(existingArticles.map((a) => a.slug));
  const candidateLinks = [
    { slug: 'codes', label: `${game.name} Codes` },
    { slug: 'tier-list', label: `${game.name} Tier List` },
    { slug: 'best-units', label: `${game.name} Best Units` },
    { slug: 'best-teams', label: `${game.name} Best Teams` },
    { slug: 'best-traits', label: `${game.name} Best Traits` },
    { slug: 'beginner-guide', label: `${game.name} Beginner Guide` },
    { slug: 'pvp-guide', label: `${game.name} PvP Guide` },
    { slug: 'farming-guide', label: `${game.name} Farming Guide` },
    { slug: 'leveling-guide', label: `${game.name} Leveling Guide` },
    { slug: 'upgrade-guide', label: `${game.name} Upgrade Guide` },
    { slug: 'value-list', label: `${game.name} Value List` },
  ];
  for (const candidate of candidateLinks) {
    if (slugSet.has(candidate.slug)) {
      guideLinks.push(candidate);
    }
    if (guideLinks.length >= 6) break;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Interactive voting component (client-side) */}
      <CommunityRankingContent gameSlug={gameSlug} existingArticleSlugs={existingArticles.map((a) => a.slug)} />

      {/* SSR Content Sections — visible to search engines */}
      <div className="mt-12 space-y-8 max-w-3xl">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How {game.name} Community Rankings Work</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The {game.name} community rankings page is designed to collect player opinions and show which units, characters, teams, traits, or items are considered useful by the community. Rankings are based on player votes, but early pages may also include an editor starter list until enough community votes are collected. This helps new players compare popular choices before spending time, currency, or upgrade materials.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            For games like {game.name}, rankings can change when new updates, balance patches, banners, codes, or limited events are released. A unit that performs well in story mode may not always be the best option for raids, PvP, infinite mode, farming, or late-game content. Because of that, this page should be used as a flexible reference instead of a permanent final ranking.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How to Use This Ranking</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Players should use this ranking as a starting point when deciding what to build, summon, upgrade, or trade. Higher-ranked options are usually safer choices because they are useful in more situations, but the best choice still depends on your account progress and team setup.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Beginners should focus on reliable units or characters that help clear early content, farm resources, and progress through story stages. Mid-game players can start comparing damage, support value, survivability, and team synergy. Advanced players should pay closer attention to late-game performance, special abilities, limited availability, and how each option performs after recent updates.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Before investing heavily, players should also check related guides such as tier lists, best units, codes, team guides, and upgrade guides. Community votes are helpful, but they should be combined with practical information about game modes, resource cost, and long-term usefulness.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Affects Community Votes?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Community votes may be influenced by several factors. Some players vote for the strongest meta options, while others vote based on personal favorites, visual design, anime popularity, or how easy a unit is to obtain. This means the ranking reflects real player preference, not only raw performance.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The most important factors usually include damage output, farming speed, support value, survivability, upgrade cost, rarity, availability, and usefulness across different modes. Limited units or event characters may receive higher votes if they are rare or difficult to obtain. However, a rare character is not always better than an easily available option if it does not perform well in actual gameplay.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Beginner Tips for {game.name} Rankings</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you are new to {game.name}, do not copy the top-ranked list blindly. Start by checking which options are easy to obtain and useful in early progression. A strong beginner-friendly unit can be more valuable than a rare unit that requires expensive upgrades or a specific team setup.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Try to build a balanced team instead of only choosing damage dealers. Many Roblox anime games reward players who combine damage, support, control, and defense. If the game includes traits, relics, abilities, or upgrades, check whether your top-ranked unit actually has the right setup before judging its performance.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Also remember that rankings can change after updates. If a new patch adds units, adjusts balance, changes drop rates, or introduces new game modes, the community ranking may shift quickly. Revisit this page after major updates to compare new votes and updated recommendations.
          </p>
        </section>

        {guideLinks.length > 0 && (
          <section>
            <h2 className="mb-3 text-xl font-bold text-foreground">Related {game.name} Guides</h2>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.slug}>
                  <Link href={`/${gameSlug}/${link.slug}`} className="text-sm text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">FAQ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Are community rankings the same as a tier list?</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Not exactly. A tier list is usually an editorial ranking based on performance, while community rankings reflect player votes and preferences. Both are useful, but they should be compared together for a more complete picture.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">How often do {game.name} rankings change?</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Rankings may change when new updates, units, codes, balance changes, or events are released. Popular choices can move up or down as more players vote and the game meta evolves.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Should beginners follow the top-ranked options?</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Beginners can use the top-ranked options as a guide, but they should also consider their own account progress, available resources, and team setup. Some top-ranked options may require expensive upgrades or specific team compositions to perform well.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Why does the editor starter list exist?</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                When a community rankings page is new and has not received many votes yet, the editor starter list provides a helpful reference based on general game knowledge. As more players vote, the community ranking will replace the editor list as the primary source of information.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
