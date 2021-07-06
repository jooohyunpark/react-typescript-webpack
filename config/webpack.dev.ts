import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import commonConfig from './webpack.common'
import path from 'path'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  ...commonConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  entry: {
    index: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index']
    }),
    new HotModuleReplacementPlugin()
  ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/,
  //       use: ['style-loader', 'css-loader', 'sass-loader']
  //     }
  //   ]
  // }
}

export default config
