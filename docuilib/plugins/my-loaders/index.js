const path = require('path');
const webpack = require('webpack');
module.exports = function myLoaders(context, options) {
  return {
    name: 'my-loaders',
    configureWebpack(config, isServer) {
      console.log(`Nitzan - sdlkfgjslkdfjgklsdfgjlsjdfgkl`, path.resolve(__dirname, '../../node_modules'));
      return {
        resolve: {
          alias: {
            'react-native$': 'react-native-web'
          },
          plugins: [
            new webpack.ProvidePlugin({
              React: 'react'
            })],
        },
        externals: { "react-native": true },
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              include: path.resolve(__dirname, '../../node_modules'), // Adjust path if necessary
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript', "@babel/preset-flow"]
                  // Add other required plugins or configurations
                }
              }
            }
          ]
        }
      };
    }
  };
};
