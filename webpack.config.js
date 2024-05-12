const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'svgm.js',
    library: 'SVGM',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
          }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  externals: {
    react: 'react', // Avoid bundling React, expect it to be available in consumer's environment
    'react-dom': 'react-dom'
  }
};
