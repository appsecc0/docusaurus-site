/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mobile Security',
  tagline: 'Mobile security testing documentation',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.appsecco.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Appsecco', // Usually your GitHub org/user name.
  projectName: 'MobSecDocs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '#',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/logo.png',
      navbar: {
        //title: 'MobSec',
        logo: {
          alt: 'MobSec',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {href: 'https://appsecco.com/blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/appsecco',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'SSL Pinning - Bypass',
                to: 'docs/ssl-pinning-bypass',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Appsecco/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/appseccouk',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/appsecco/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://appsecco.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/appsecco',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://appsecco.com/privacy-policy',
              },
              {
                label: 'About Us',
                href: 'https://appsecco.com/about',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/logo.png',
          href: 'https://appsecco.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Appsecco, Awesome-Security-Adive. Pragmatic cyber security insight and advice.`,
      },
    }),
};

module.exports = config;
