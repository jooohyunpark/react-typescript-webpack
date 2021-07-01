import { Configuration, DefinePlugin } from 'webpack'
// import ESLintPlugin from 'eslint-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import path from 'path'

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })]
  },
  plugins: [
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx', 'ts', 'tsx']
    // })
  ]
}

export default config
