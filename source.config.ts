import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import type { Node, Parent, Literal } from 'unist';

// Version strings injected into code snippets at build time.
// CI stamps these from gradle.properties (see release.yml).
const PLUGIN_VERSION = process.env.PLUGIN_VERSION || '0.1.0';

// Replaces PLUGIN_VERSION tokens in all text/code nodes before syntax
// highlighting, so snippets stay copy-pasteable with the real version.
function remarkPluginVersion() {
  return (tree: Node) => {
    const walk = (node: Node) => {
      const literal = node as Literal;
      if (typeof literal.value === 'string') {
        literal.value = literal.value.split('PLUGIN_VERSION').join(PLUGIN_VERSION);
      }
      const parent = node as Parent;
      if (Array.isArray(parent.children)) parent.children.forEach(walk);
    };
    walk(tree);
  };
}

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkPluginVersion],
    rehypeCodeOptions: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
});
