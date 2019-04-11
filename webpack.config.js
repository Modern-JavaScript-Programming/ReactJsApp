const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const _entry = {
  index: ['./resources/assets/js/index.js', './resources/assets/scss/main.scss']
}

const _module = {
  rules: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader'
        }
      ]
    }
  ]
}

module.exports = {
  // This is the "main" file which should include all other modules
  mode: 'development',
  entry: _entry,
  // Where should the compiled file go?
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: _module,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    })
  ]
}
