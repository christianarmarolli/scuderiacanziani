import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Scuderia Canziani',
  description: 'Il sito ufficiale della Scuderia Canziani',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Podcast', link: '/podcast' },
      { text: 'Chi siamo', link: '/about' }
    ],
    siteTitle: 'Scuderia Canziani'
  }
})
