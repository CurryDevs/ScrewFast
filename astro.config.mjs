// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://torquecraft.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", fr: "fr" },
      },
    }),
    starlight({
      title: "Torque Craft Docs",
      locales: {
        root: { label: "English", lang: "en" },
        de: { label: "Deutsch", lang: "de" },
        es: { label: "Español", lang: "es" },
        fa: { label: "Persian", lang: "fa", dir: "rtl" },
        fr: { label: "Français", lang: "fr" },
        ja: { label: "日本語", lang: "ja" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      sidebar: [
        {
          label: "Quick Start Guides",
          translations: {
            de: "Schnellstartanleitungen",
            es: "Guías de Inicio Rápido",
            fa: "راهنمای شروع سریع",
            fr: "Guides de Démarrage Rapide",
            ja: "クイックスタートガイド",
            "zh-cn": "快速入门指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        { label: "Construction Services", autogenerate: { directory: "construction" } },
        { label: "Advanced Topics", autogenerate: { directory: "advanced" } },
      ],
      social: [{ icon: "github", label: "GitHub", href: "#" }],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter: "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://torquecraft.uk/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://torquecraft.uk/social.webp",
          },
        },
      ],
    }),
    compressor({ gzip: false, brotli: true }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    headers: {
      // 🔓 Allow embedding in iframes
      "X-Frame-Options": "ALLOWALL", 
      "Content-Security-Policy": "frame-ancestors *", 
    },
  },
});
