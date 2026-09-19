import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import type { Node, Parent, Literal } from 'unist';

// Plugin version injected into code snippets at build time. The deploy workflow sets
// PLUGIN_VERSION from the latest plugin release, or from gradle.properties on main.
const PLUGIN_VERSION = process.env.PLUGIN_VERSION || '0.1.0';

// Replaces PLUGIN_VERSION tokens in text and code nodes before syntax highlighting.
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
