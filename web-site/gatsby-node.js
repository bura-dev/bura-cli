// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

// const path = require('path');

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules']
//     }
//   });
// };

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
  })
}

// exports.onCreateWebpackConfig = ({
//   stage,
//   getConfig,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   const config = getConfig();

//   config.module.rules.find(
//     (rule) =>
//       rule.test &&
//       rule.test.toString() ===
//         "/\\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\\?.*)?$/"
//   ).test = /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/;

//   config.module.rules.push({
//     test: /\.svg/,
//     use: {
//       loader: "svg-url-loader",
//       options: {
//         limit: 4096,
//         iesafe: true,
//       },
//     },
//   });

//   actions.replaceWebpackConfig(config);  
// };