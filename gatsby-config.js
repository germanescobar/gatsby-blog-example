require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `My Blog German`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": "./src/posts/"
    },
    __key: "blog"
  }, {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: "http://localhost:1337",
      accessToken: process.env.STRAPI_TOKEN,
      collectionTypes: [
        "post"
      ],
      queryLimit: 1000,
    },
  }]
};