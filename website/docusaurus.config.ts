import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organization = 'fintan-contents';
const project = 'gai-dev-guide';
const urlWithBase = `https://${organization}.github.io/${project}/`;
const ogpImageUrl = `${urlWithBase}img/OGP.png`;


const copyright = `
<div class="no-content">
  <div class="copyright">
    ドキュメントは、<a rel="license" href="https://fintan.jp/?page_id=201" target="_blank">Fintan コンテンツ 使用許諾条項</a>の下に提供されています。
  </div>
  <div class="supplementary">
    <a href="/${project}/trademark/" class="footer__link-item">商標について</a>
  </div>
</div>`;

const config: Config = {
  title: 'Fintan » Development Guide with Generative AI',
  tagline: '',
  url: `https://${organization}.github.io`,
  baseUrl: `/${project}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  noIndex: false,

  organizationName: organization, // Usually your GitHub org/user name.
  projectName: project, // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      }

    },
    metadata: [
      // OGP: 既存の生成AI活用ガイド(https://gen-ai-docs.jp/)のOGPを流用
      { name: 'og:url', content: urlWithBase},
      { name: 'og:site_name', content: 'Fintan » 生成AI活用ガイド' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:image', content: ogpImageUrl },
      { name: 'og:image:alt', content: 'Fintan » 生成AI活用ガイド' },
      { name: 'og:type', content: 'website' },

      // Twitter Card: 既存の生成AI活用ガイド(https://gen-ai-docs.jp/)のOGPを流用
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Fintan » 生成AI活用ガイド' },
      { name: 'twitter:description', content: `AI技術を使って日常の業務をスムーズに進めたいですか？
生成AI活用ガイドはTIS株式会社が作成している生成AIを活用するためのガイドラインです。
ChatGPTやGitHub Copilotなどの導入方法、基本的な操作、効果的な使い方などを提供します。
どなたでも無償で利用いただけます。` },
      { name: 'twitter:image', content: ogpImageUrl },
      { name: 'twitter:image:alt', content: 'Fintan » 生成AI活用ガイド' },
    ],
    image: 'img/OGP.png',
    navbar: {
      title: '生成AI活用ガイド',
      logo: {
        alt: 'Fintan » 生成AI活用ガイド',
        src: 'img/fintan-logo.jpg',
        href: urlWithBase,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'githubCopilotSidebar',
          position: 'left',
          label: 'GitHub Copilot ガイド',
        },
        // TODO: レビュー後削除
        {
          type: 'docSidebar',
          sidebarId: 'githubCopilotCurrentSidebar',
          position: 'left',
          label: 'GitHub Copilot ガイド（現状）',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developmentProcessSidebar',
          position: 'left',
          label: '開発プロセス',
        },
        {
          href: `https://github.com/${organization}/${project}`,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'GitHub Copilotガイド',
              to: 'github-copilot',
            },
            {
              label: '開発プロセス',
              to: 'development-process',
            },
          ],
        },
        {
          title: 'Related Work',
          items: [
            {
              label: 'Fintan',
              href: 'https://fintan.jp',
            },
          ],
        },
      ],
      copyright,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
