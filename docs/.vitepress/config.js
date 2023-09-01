import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital_Knight",
  lang: 'pl-PL',
  description: "Zadania Technical Copywriter / Tester",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Zadania', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Markdown',
        items: [
          { text: 'Przykłady rozszerzeń Markdown', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Zadania',
        items: [
          { text: 'aplikowanie o prace ', link: '/msi-examples' },
          { text: 'zakładanie konta gmail', link: '/gmail-examples' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/digital-knight1103/vitepress-docs' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/pawe%C5%82bokszczanin/' }
    ],

    footer: {
      message: "Stworzone z Honorami",
      copyright: "Copyright © 2023 Digital_Knight",
    },
  }
})
