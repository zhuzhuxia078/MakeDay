var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: "development",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    // rules: [
    //   // Process any .js or .jsx file with Babel
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loaders: ['babel-loader']
    //   },
    //   {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader'
    //   },
    //   {
    //     test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //     loader: 'url-loader',
    //     options: {
    //       limit: 10000
    //     }
    //   }
    // ]
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ],
  },
};
