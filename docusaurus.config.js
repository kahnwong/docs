/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Fringe Division",
  // tagline: 'The tagline of my site',
  url: "https://docs.karnwong.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "kahnwong", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Knowledge Base",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "life/",
          activeBasePath: "life",
          label: "Life",
          position: "left",
        },
        {
          to: "food/",
          activeBasePath: "food",
          label: "Food",
          position: "left",
        },
        {
          href: "https://github.com/kahnwong/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fringe Division. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "3211c2ba91e4ed60dd3d7fbb64647fbe",
      indexName: "docusaurus-2",
      appId: "YRGQIFKA99",
    },
    prism: {
      theme: require("prism-react-renderer/themes/okaidia"),
      darkTheme: require("prism-react-renderer/themes/vsLight"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
