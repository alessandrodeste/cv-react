var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: "index.js"
  },
  module: {
    loaders: [
     {
        test: /\.js$/,
        include: path.resolve(__dirname, "app"), 
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]      
      },
      { 
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3|\.pdf|\.vcf$/, 
        loader: "file-loader?name=/assets/[name].[ext]", 
        include: path.resolve(__dirname, "assets") 
      },
      //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', include: path.resolve(__dirname, "assets") },
      //{ test: /\.pdf$|\.vcf$/, loader: "file" } ,
      {test: /\.json$/, loader: "json-loader", include: path.resolve(__dirname, "assets")}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};