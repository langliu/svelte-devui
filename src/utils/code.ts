import { getHighlighter } from 'shikiji';

async function transform([path, fileContent]: [string, string]) {
  const fileName = path.split('/src/snippets/').at(-1)!;
  const lang = fileName.split('.').at(-1);
  const highlighter = await getHighlighter({
    themes: ['nord', 'github-light', 'github-dark'],
    langs: ['javascript', 'bash', 'shell', 'css', 'html', 'typescript', 'tsx', 'jsx', 'svelte']
  });

  const code = highlighter.codeToHtml(fileContent, {
    lang: lang ?? 'plaintext',
    themes: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  });
  return [fileName, code];
}

export async function getAllSnippets() {
  const snippets = import.meta.glob('$snippets/**/*', {
    as: 'raw',
    eager: true
  });
  const posts = await Promise.all(Object.entries(snippets).map(transform));
  return Object.fromEntries(posts);
}
