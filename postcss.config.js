const path = require("path");

module.exports = {
  entry: "./src/index.js", // Cambia esto a tu punto de entrada
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), // Cambia esto al directorio de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Para archivos CSS
        use: [
          "style-loader", // Inyecta CSS en el DOM
          "css-loader", // Interpreta @import y url() como importaciones
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
      // Otras reglas pueden ir aquí (por ejemplo, para JavaScript, imágenes, etc.)
    ],
  },
  mode: "development", // Cambia a 'production' para producción
  devtool: "source-map", // Para obtener mapas de fuente
};
