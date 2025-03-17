export default {
  output: "export", 
  distDir: "out", // Carpeta de salida
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes (necesario para GitHub Pages)
  },
  basePath: "/<REPO_NAME>", // Reemplaza con el nombre de tu repositorio
  assetPrefix: "/<REPO_NAME>/", // Ajusta las rutas de los assets
};