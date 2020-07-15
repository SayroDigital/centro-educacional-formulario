module.exports = config => {
  config.module.rules.push({
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[hash]-[name].[ext]',
        },
      },
    ],
  })
  return config;
}