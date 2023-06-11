import { defineConfig } from "vitepress";
// import { createWriteStream } from "node:fs";
// import { resolve } from "node:path";
// import { SitemapStream } from "sitemap";

// const links = [];

export default defineConfig({
  title: "Fringe Division",
  description: "Personal docs",
  themeConfig: {
    nav: [
      {
        text: "Knowledge Base",
        link: "/knowledge-base/ops/platform-engineering",
      },
      {
        text: "Life",
        link: "/life/celiac",
      },
      {
        text: "Food",
        link: "/food/food",
      },
    ],

    sidebar: {
      "/knowledge-base/": [
        {
          text: "Data",
          collapsed: false,
          items: [
            {
              text: "Data Engineering",
              link: "knowledge-base/data/data-engineering",
            },
            { text: "Data Science", link: "knowledge-base/data/data-science" },
            { text: "MLOps", link: "knowledge-base/data/mlops" },
            {
              text: "Specialization",
              collapsed: true,
              items: [
                { text: "GIS", link: "knowledge-base/data/specialization/gis" },
                { text: "NLP", link: "knowledge-base/data/specialization/nlp" },
                {
                  text: "Visualization",
                  link: "knowledge-base/data/specialization/visualization",
                },
                {
                  text: "Web Scraping",
                  link: "knowledge-base/data/specialization/web-scraping",
                },
              ],
            },
            {
              text: "Tools",
              collapsed: true,
              items: [
                { text: "DVC", link: "knowledge-base/data/tools/dvc" },
                { text: "Jupyter", link: "knowledge-base/data/tools/jupyter" },
                {
                  text: "Matplotlib / Seaborn",
                  link: "knowledge-base/data/tools/matplotlib-seaborn",
                },
                {
                  text: "psycopg2",
                  link: "knowledge-base/data/tools/psycopg2",
                },
                { text: "Sklearn", link: "knowledge-base/data/tools/sklearn" },
                {
                  text: "GIS",
                  collapsed: true,
                  items: [
                    {
                      text: "Folium",
                      link: "knowledge-base/data/tools/gis/folium",
                    },
                    {
                      text: "GDAL",
                      link: "knowledge-base/data/tools/gis/gdal",
                    },
                    {
                      text: "GeoPandas",
                      link: "knowledge-base/data/tools/gis/geopandas",
                    },
                    {
                      text: "PostGIS",
                      link: "knowledge-base/data/tools/gis/postgis",
                    },
                    {
                      text: "QGIS",
                      link: "knowledge-base/data/tools/gis/qgis",
                    },
                    {
                      text: "Shapely",
                      link: "knowledge-base/data/tools/gis/shapely",
                    },
                  ],
                },
                {
                  text: "Web Scraping",
                  collapsed: true,
                  items: [
                    {
                      text: "requests",
                      link: "knowledge-base/data/tools/web-scraping/requests",
                    },
                    {
                      text: "Selenium",
                      link: "knowledge-base/data/tools/web-scraping/selenium",
                    },
                    {
                      text: "Scrapy",
                      link: "knowledge-base/data/tools/web-scraping/scrapy",
                    },
                  ],
                },
                {
                  text: "Wrangling",
                  collapsed: true,
                  items: [
                    {
                      text: "NumPy",
                      link: "knowledge-base/data/tools/wrangling/numpy",
                    },
                    {
                      text: "Pandas",
                      link: "knowledge-base/data/tools/wrangling/pandas",
                    },
                    {
                      text: "PySpark",
                      link: "knowledge-base/data/tools/wrangling/pyspark",
                    },
                    {
                      text: "SQL",
                      link: "knowledge-base/data/tools/wrangling/sql",
                    },
                  ],
                },
              ],
            },
            {
              text: "Misc",
              link: "knowledge-base/data/misc",
            },
          ],
        },
        {
          text: "Ops",
          collapsed: false,
          items: [
            { text: "DevOps", link: "knowledge-base/ops/devops" },
            { text: "SRE", link: "knowledge-base/ops/sre" },
            {
              text: "Platform Engineering",
              link: "knowledge-base/ops/platform-engineering",
            },
            { text: "FinOps", link: "knowledge-base/ops/finops" },
            { text: "SecretOps", link: "knowledge-base/ops/secretops" },
            {
              text: "Base",
              collapsed: true,
              items: [
                {
                  text: "Documentation",
                  link: "knowledge-base/ops/base/documentation",
                },
                {
                  text: "Networking",
                  link: "knowledge-base/ops/base/networking",
                },
                { text: "Security", link: "knowledge-base/ops/base/security" },
              ],
            },
            {
              text: "Cloud",
              collapsed: true,
              items: [
                { text: "AWS", link: "knowledge-base/ops/cloud/aws" },
                { text: "GCP", link: "knowledge-base/ops/cloud/gcp" },
                { text: "Vendors", link: "knowledge-base/ops/cloud/vendors" },
              ],
            },
            {
              text: "Infra",
              collapsed: true,
              items: [
                {
                  text: "Kubernetes",
                  link: "knowledge-base/ops/infra/kubernetes",
                },
                { text: "Packer", link: "knowledge-base/ops/infra/packer" },
                {
                  text: "Terraform",
                  link: "knowledge-base/ops/infra/terraform",
                },
              ],
            },
            {
              text: "Unix",
              collapsed: true,
              items: [
                { text: "Unix", link: "knowledge-base/ops/unix/unix" },
                {
                  text: "Compression",
                  link: "knowledge-base/ops/unix/compression",
                },
                {
                  text: "Networking",
                  link: "knowledge-base/ops/unix/networking",
                },
                { text: "System", link: "knowledge-base/ops/unix/system" },
              ],
            },
            {
              text: "Tools",
              collapsed: true,
              items: [
                { text: "Apache2", link: "knowledge-base/ops/tools/apache2" },
                { text: "Caddy", link: "knowledge-base/ops/tools/caddy" },
                { text: "Docker", link: "knowledge-base/ops/tools/docker" },
                { text: "Git", link: "knowledge-base/ops/tools/git" },
                { text: "GitHub", link: "knowledge-base/ops/tools/github" },
                { text: "Neovim", link: "knowledge-base/ops/tools/neovim" },
                { text: "Postgres", link: "knowledge-base/ops/tools/postgres" },
                {
                  text: "SQL Server",
                  link: "knowledge-base/ops/tools/sqlserver",
                },
                { text: "Misc", link: "knowledge-base/ops/tools/misc" },
              ],
            },
          ],
        },
        {
          text: "Software Engineering",
          collapsed: true,
          items: [
            {
              text: "Software Engineering",
              link: "knowledge-base/software-engineering/software-engineering",
            },
            {
              text: "Web Development",
              link: "knowledge-base/software-engineering/web-development",
            },
            { text: "UI", link: "knowledge-base/software-engineering/ux-ui" },
            {
              text: "Product Development",
              link: "knowledge-base/software-engineering/product-development",
            },
            {
              text: "Management",
              link: "knowledge-base/software-engineering/management",
            },
          ],
        },
        {
          text: "Programming",
          collapsed: true,
          items: [
            { text: "Golang", link: "knowledge-base/programming/golang" },
            {
              text: "Python",
              collapsed: true,
              items: [
                {
                  text: "Python",
                  link: "knowledge-base/programming/python/python",
                },
                {
                  text: "Cookbook",
                  collapsed: true,
                  items: [
                    {
                      text: "Cookbook",
                      link: "knowledge-base/programming/python/cookbook/cookbook",
                    },
                    {
                      text: "datetime",
                      link: "knowledge-base/programming/python/cookbook/datetime",
                    },
                    {
                      text: "Parallel Processing",
                      link: "knowledge-base/programming/python/cookbook/parallel-processing",
                    },
                    {
                      text: "PDF",
                      link: "knowledge-base/programming/python/cookbook/pdf",
                    },
                    {
                      text: "pytest",
                      link: "knowledge-base/programming/python/cookbook/pytest",
                    },
                    {
                      text: "termcolor",
                      link: "knowledge-base/programming/python/cookbook/termcolor",
                    },
                    {
                      text: "YAML",
                      link: "knowledge-base/programming/python/cookbook/yaml",
                    },
                  ],
                },
              ],
            },
          ],
        },
        { text: "Career", link: "knowledge-base/career" },
        {
          text: "Misc",
          collapsed: true,
          items: [
            { text: "Android", link: "knowledge-base/misc/android" },
            { text: "FFMPEG", link: "knowledge-base/misc/ffmpeg" },
            { text: "Linux", link: "knowledge-base/misc/linux" },
            { text: "OSX", link: "knowledge-base/misc/osx" },
            { text: "Pandoc", link: "knowledge-base/misc/pandoc" },
            { text: "Useful Links", link: "knowledge-base/misc/useful-links" },
            { text: "Windows", link: "knowledge-base/misc/windows" },
            { text: "youtube-dl", link: "knowledge-base/misc/youtube-dl" },
            { text: "Misc", link: "knowledge-base/misc/misc" },
            {
              text: "Desktop Apps",
              collapsed: true,
              items: [
                {
                  text: "Calibre",
                  link: "knowledge-base/misc/desktop-app/calibre",
                },
                {
                  text: "Foobar",
                  link: "knowledge-base/misc/desktop-app/foobar",
                },
                {
                  text: "gpodder",
                  link: "knowledge-base/misc/desktop-app/gpodder",
                },
                {
                  text: "MP3Tag",
                  link: "knowledge-base/misc/desktop-app/mp3tag",
                },
              ],
            },
          ],
        },
      ],
      "/life/": [
        { text: "Celiac", link: "life/celiac" },
        { text: "Repair Shops", link: "life/repair-shops" },
        { text: "Shopping", link: "life/shopping" },
        {
          text: "Gaming",
          collapsed: true,
          items: [
            { text: "Skyrim Mod List", link: "life/gaming/skyrim-mod-list" },
            { text: "The Sims 4", link: "life/gaming/thesims4" },
            { text: "Witcher 3", link: "life/gaming/witcher3" },
          ],
        },
      ],
      "/food/": [
        { text: "Food", link: "food/food" },
        { text: "Easy", link: "food/easy" },
        { text: "Desserts", link: "food/desserts" },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/kahnwong/docs" }],

    search: {
      provider: "algolia",
      options: {
        appId: "HCNQHDBB8V",
        apiKey: "9f3d3873c241b739f60fce05bca44a42",
        indexName: "fringe-division",
      },
    },
  },

  // // https://github.com/vuejs/vitepress/issues/520#issuecomment-1566062351
  // transformHtml: (_, id, { pageData }) => {
  //   if (!/[\\/]404\.html$/.test(id))
  //     links.push({
  //       url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, "$2"),
  //       lastmod: pageData.lastUpdated,
  //     });
  // },
  // buildEnd: async ({ outDir }) => {
  //   const sitemap = new SitemapStream({
  //     hostname: "https://docs.karnwong.me/",
  //   });
  //   const writeStream = createWriteStream(resolve(outDir, "sitemap.xml"));
  //   sitemap.pipe(writeStream);
  //   links.forEach((link) => sitemap.write(link));
  //   sitemap.end();
  //   await new Promise((r) => writeStream.on("finish", r));
  // },

  // google analytics
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-M6K7QN1CF6",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-M6K7QN1CF6');",
    ],
  ],
});