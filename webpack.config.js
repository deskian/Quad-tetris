module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 9001
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}