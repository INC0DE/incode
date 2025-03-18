export default {
  output: "export",
  distDir: "out", // Carpeta de salida
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes (necesario para GitHub Pages)
  },
  basePath: "/incode", // Reemplaza con el nombre de tu repositorio
  assetPrefix: "/incode/", // Ajusta las rutas de los assets
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": __dirname,
    };
  },
};
