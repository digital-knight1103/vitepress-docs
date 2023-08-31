import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital_Knight",
  description: "Zadania Technical Copywriter / Tester",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Zadania', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Zadania',
        items: [
          { text: 'aplikowanie o prace ', link: '/msi-examples' },
          { text: 'zakładanie konta gmail', link: '/gmail-examples' }
        ]
      },
      {
        text: 'Markdown',
        items: [
          { text: 'ściąga składni markdown', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/digital-knight1103' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/pawe%C5%82bokszczanin/' }
    ]
  }
})
