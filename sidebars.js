module.exports = {
  knowledgeBase: [
    "entrypoint",
    {
      type: "category",
      label: "Infra",
      collapsed: false,
      items: [
        "knowledge-base/infra/terraform",
        "knowledge-base/infra/packer",
        "knowledge-base/infra/kubernetes",
        "knowledge-base/infra/aws",
        "knowledge-base/infra/gcp",
      ],
    },
    {
      type: "category",
      label: "DevOps",
      collapsed: true,
      items: [
        "knowledge-base/devops/devops",
        "knowledge-base/devops/apache2",
        "knowledge-base/devops/caddy",
        "knowledge-base/devops/docker",
        "knowledge-base/devops/git",
        "knowledge-base/devops/github",
        "knowledge-base/devops/unix",
      ],
    },
    {
      type: "category",
      label: "Data Engineering",
      collapsed: true,
      items: ["knowledge-base/data-engineering/data-engineering"],
    },
    {
      type: "category",
      label: "Data Science",
      collapsed: true,
      items: [
        "knowledge-base/data-science/data-science",
        "knowledge-base/data-science/jupyter",
        "knowledge-base/data-science/visualizations",
        "knowledge-base/data-science/data",
        {
          type: "category",
          label: "Data Wrangling",
          collapsed: true,
          items: [
            "knowledge-base/data-science/data-wrangling/numpy",
            "knowledge-base/data-science/data-wrangling/pandas",
            "knowledge-base/data-science/data-wrangling/pyspark",
          ],
        },
        {
          type: "category",
          label: "Machine Learning",
          collapsed: false,
          items: [
            "knowledge-base/data-science/machine-learning/machine-learning",
            "knowledge-base/data-science/machine-learning/sklearn",
          ],
        },
        {
          type: "category",
          label: "GIS",
          collapsed: true,
          items: [
            "knowledge-base/data-science/gis/gis",
            "knowledge-base/data-science/gis/postgis",
            "knowledge-base/data-science/gis/folium",
            "knowledge-base/data-science/gis/gdal",
            "knowledge-base/data-science/gis/geopandas",
            "knowledge-base/data-science/gis/shapely",
          ],
        },
        {
          type: "category",
          label: "NLP",
          collapsed: true,
          items: ["knowledge-base/data-science/nlp/nlp"],
        },
        {
          type: "category",
          label: "SQL",
          collapsed: true,
          items: ["knowledge-base/data-science/sql/sql"],
        },
        {
          type: "category",
          label: "Web Scraping",
          collapsed: true,
          items: [
            "knowledge-base/data-science/web-scraping/web-scraping",
            "knowledge-base/data-science/web-scraping/requests",
            "knowledge-base/data-science/web-scraping/selenium",
            "knowledge-base/data-science/web-scraping/scrapy",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "MLOps",
      collapsed: true,
      items: ["knowledge-base/mlops/mlops", "knowledge-base/mlops/dvc"],
    },
    {
      type: "category",
      label: "Database",
      collapsed: true,
      items: [
        "knowledge-base/database/database",
        "knowledge-base/database/postgres",
      ],
    },
    {
      type: "category",
      label: "Software Engineering",
      collapsed: true,
      items: ["knowledge-base/software-engineering/software-engineering"],
    },
    {
      type: "category",
      label: "Python",
      items: [
        "knowledge-base/python/python",
        "knowledge-base/python/recipes",
        {
          type: "category",
          label: "Libraries",
          collapsed: false,
          items: [
            "knowledge-base/python/database",
            "knowledge-base/python/pdf",
            "knowledge-base/python/termcolor",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Shell",
      items: [
        "knowledge-base/shell/fish",
        "knowledge-base/shell/iterm",
        "knowledge-base/shell/hyperjs",
      ],
    },
    {
      type: "category",
      label: "CLI Tools",
      items: [
        "knowledge-base/cli-tools/cli-tools",
        "knowledge-base/cli-tools/chocolatey",
        "knowledge-base/cli-tools/ffmpeg",
        "knowledge-base/cli-tools/pandoc",
        "knowledge-base/cli-tools/youtube-dl",
      ],
    },
    {
      type: "category",
      label: "Misc",
      collapsed: true,
      items: [
        "knowledge-base/misc/misc",
        "knowledge-base/misc/useful-links",
        {
          type: "category",
          label: "Desktop Applications",
          items: [
            "knowledge-base/misc/desktop-app/calibre",
            "knowledge-base/misc/desktop-app/foobar",
            "knowledge-base/misc/desktop-app/mp3tag",
          ],
        },
        "knowledge-base/misc/android",
        "knowledge-base/misc/neovim",
        "knowledge-base/misc/osx",
        "knowledge-base/misc/windows",
      ],
    },
    {
      type: "category",
      label: "Career",
      items: [
        "knowledge-base/career/career",
        "knowledge-base/career/one-on-one",
        "knowledge-base/career/standup",
      ],
    },
  ],
  life: [
    "life/celiac",
    "life/repair-shops",
    "life/shopping",
    {
      type: "category",
      label: "Gaming",
      items: [
        "life/gaming/skyrim-mod-list",
        "life/gaming/thesims4",
        "life/gaming/witcher3",
      ],
    },
  ],
  food: ["food/food", "food/easy", "food/desserts"],
};
