import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMeta {
  title: string;
  description: string;
  date: string;
  category: string;
  game: string;
  slug: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), 'content');

function getMdxFiles(dir: string): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

export function getAllArticles(): ArticleMeta[] {
  const files = getMdxFiles(contentDir);
  const articles: ArticleMeta[] = [];

  for (const filePath of files) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    // Compute slug from file path relative to content dir
    const relativePath = path.relative(contentDir, filePath);
    const parts = relativePath.replace(/\.mdx?$/, '').split(path.sep);

    // parts = ['blox-fruits', 'codes'] or ['blox-fruits', 'tier-list']
    const gameSlug = parts[0];
    const articleSlug = parts.slice(1).join('/');

    articles.push({
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      category: data.category || '',
      game: gameSlug,
      slug: articleSlug,
    });
  }

  // Sort by date descending
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticlesByGame(gameSlug: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.game === gameSlug);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getArticle(gameSlug: string, articleSlug: string): Article | null {
  // Try .mdx first, then .md
  const possiblePaths = [
    path.join(contentDir, gameSlug, `${articleSlug}.mdx`),
    path.join(contentDir, gameSlug, `${articleSlug}.md`),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || '',
        game: gameSlug,
        slug: articleSlug,
        content,
      };
    }
  }

  return null;
}

export function getAllGameSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function getAllArticleSlugs(): { game: string; article: string }[] {
  const files = getMdxFiles(contentDir);
  const slugs: { game: string; article: string }[] = [];

  for (const filePath of files) {
    const relativePath = path.relative(contentDir, filePath);
    const parts = relativePath.replace(/\.mdx?$/, '').split(path.sep);
    const gameSlug = parts[0];
    const articleSlug = parts.slice(1).join('/');
    slugs.push({ game: gameSlug, article: articleSlug });
  }

  return slugs;
}
