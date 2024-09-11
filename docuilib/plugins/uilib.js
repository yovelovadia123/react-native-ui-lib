const path = require('path');
const webpack = require('webpack');

module.exports = ({siteDir}, options) => {
  const baseProjectSource = [
    path.resolve(siteDir, 'src'),
    path.resolve(siteDir, 'node_modules/react-native-web'),
    path.resolve(siteDir, 'node_modules/react-native-ui-lib'),
    // // just for not getting warnings
    path.resolve(siteDir, 'node_modules/react-native-shimmer-placeholder'),
    path.resolve(siteDir, 'node_modules/react-native-linear-gradient')
    // // end just for not getting warnings
    // path.resolve(siteDir, 'node_modules/react-native-haptic-feedback'),
    // path.resolve(siteDir, 'node_modules/react-native-animatable'),
    // path.resolve(siteDir, 'node_modules/react-native-reanimated'),
    // path.resolve(siteDir, 'node_modules/react-native-svg'),
    // path.resolve(siteDir, 'node_modules/react-native-svg-transformer'),
    // path.resolve(siteDir, 'node_modules/@react-native-community/netinfo'),
    // path.resolve(siteDir, 'node_modules/@react-native-community/datetimepicker'),
    // path.resolve(siteDir, 'node_modules/react-native-color'),

    // path.resolve(siteDir, 'node_modules/postcss'),
    // path.resolve(siteDir, 'node_modules/postcss-js')
  ];

  const useBabelForRN = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: false,
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web', 'react-native-reanimated/plugin']
    }
  };

  const babelLoaderAppConfiguration = {
    test: /\.(js|jsx|ts|tsx)$/,
    include: baseProjectSource,
    use: useBabelForRN
  };

  return {
    name: 'uilib-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        mergeStrategy: {
          'resolve.extensions': 'prepend'
        },
        plugins: [
          new webpack.DefinePlugin({
            process: {env: {}},
            __DEV__: 'false',
            setImmediate: () => {}
          })
        ],
        module: {
          rules: [babelLoaderAppConfiguration]
        },
        resolve: {
          alias: {
            'react-native$': 'react-native-web'
          },
          extensions: ['.web.js']
        }
      };
    }
  };
};
