// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nectar',
  tagline: 'Returning MEV back to the user.',
  url: 'https://docs.nectar.cash',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nectar-cash', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nectar-cash/docs',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Nectar Documentation',
        // logo: {
        //   alt: 'MEV Marketplace Placeholder',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'user/overview',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'doc',
            docId: 'searcher/intro',
            position: 'left',
            label: 'Searcher Guide',
          },
          {
            type: 'doc',
            docId: 'provider/intro',
            position: 'left',
            label: 'Transaction Provider Guide',
          },
          // { to: '/blog', label: 'Updates', position: 'left' },
          {
            type: 'doc',
            docId: 'whitepaper/whitepaper',
            position: 'right',
            label: 'Whitepaper',
          },
          {
            type: 'doc',
            docId: 'research/overview',
            position: 'right',
            label: 'Research',
          },
          {
            href: 'https://github.com/nectar-cash/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/nectar_cash',
              },
              {
                label: 'Telegram Announcements',
                href: 'https://t.me/nectarcash',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/hu3wA6fUWT',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nectar-cash',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nectar.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
