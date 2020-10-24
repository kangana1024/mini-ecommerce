const withCSS = require("@zeit/next-css");
const { withPlugins } = require('next-compose-plugins');


const nextConfig = {
  env: {
    graphqlUrl: process.env.PUBLIC_GRAPHQL_URL || '/api/graphql',
    mongoConnUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/myapp'
  },
  webpack(config) {
    return config;
  }
}
module.exports = withPlugins([
  withCSS,
  nextConfig,
])