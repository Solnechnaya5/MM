const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            use: 'html-loader'
        },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            
            ],
},
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name][ext]'
          } 
    },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name][ext]'
          } 
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "template.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    new FileManagerPlugin({
               events: {
                 onStart: {
                   delete: ['dist'],
                 },
               },
             }),
             
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 5050,
  },
  optimization: {
         minimizer: [
           new ImageMinimizerPlugin({
             minimizer: {
               implementation: ImageMinimizerPlugin.imageminMinify,
               options: {
                 plugins: [
                   ['gifsicle', { interlaced: true }],
                   ['jpegtran', { progressive: true }],
                   ['optipng', { optimizationLevel: 5 }],
                   ['svgo', { name: 'preset-default' }],
                 ],
               },
             },
           }),
         ],
       },
};
