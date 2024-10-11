const path = require("path");

module.exports = {
  entry: "./src/scripts/index.js", // Cambia la ruta al archivo JavaScript de entrada
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Busca archivos CSS
        use: [
          "style-loader", // Inyecta CSS en el DOM
          "css-loader", // Permite importar archivos CSS en JS
          {
            loader: "postcss-loader", // Procesa CSS con PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer", // Añade prefijos automáticamente
                  "cssnano", // Minifica el CSS
                ],
              },
            },
          },
        ],
      },
    ],
  },
  mode: "development", // Cambia a 'production' para producción
  devtool: "source-map", // Para obtener mapas de fuente
};
