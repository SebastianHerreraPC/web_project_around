// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/scripts/index.js", // Tu archivo de entrada principal
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Salida en la carpeta dist
    filename: "main.js", // Nombre del archivo de salida
    publicPath: "", // Ruta pública
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
              importLoaders: 1, // Carga de CSS dentro de CSS
            },
          },
          "postcss-loader", // Procesa CSS con PostCSS
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
      template: "./src/index.html", // Ruta a tu archivo HTML
    }),
    new CleanWebpackPlugin(), // Limpia la carpeta dist antes de construir
    new MiniCssExtractPlugin({ filename: "styles.css" }), // Extrae CSS a un archivo
  ],
};
