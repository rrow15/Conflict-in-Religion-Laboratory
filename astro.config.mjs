// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },

    build: {
        inlineStylesheets: 'always',
    },

    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://rrow15.github.io',
    base: '/Conflict-in-Religion-Laboratory/',

    integrations: [sitemap()],
});