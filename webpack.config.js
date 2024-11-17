// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/scripts/index.js", 
  },
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "main.js",
    publicPath: "", 
  },
  target: ["web", "es5"], // Compatibilidad con navegadores
  stats: { children: true },
  mode: "development", // Modo de desarrollo
  devServer: {
    static: path.resolve(__dirname, "./dist"), // Carpeta estática para servir
    compress: true,
    port: 8080, // Puerto del servidor
    open: true, // Abre el navegador al iniciar
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1, 
            },
          },
          "postcss-loader", 
        ],
      },
      {
        // Procesa imágenes y fuentes
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", 
    }),
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin({ filename: "styles.css" }), 
  ],
};
