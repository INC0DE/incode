const VideoLoop = () => {
  return (
    <section className="relative w-full">
      <video
        className="h-92 w-full rounded-xl shadow-lg brightness-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/loop.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="absolute inset-0 p-5  self-center space-y-5 lg:p-20">
        <div>
          <h1 className="text-4xl text-gold text-left font-bold  md:text-5xl lg:text-6xl xl:text-8xl">
            ¿Estás listo para
          </h1>
        </div>
        <div className="flex flex-row space-x-8">
          <text className="hidden text-gray  pt-5 line-clamp-2  sm:block lg:text-xl md:w-64 xl:text-justify xl:text-2xl">
            ¡Creemos que tu negocio tiene potencial para crecer!
          </text>
          <h1 className="text-3xl font-bold text-white md:4xl lg:text-5xl xl:text-8xl ">
            trabajar juntos?
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VideoLoop;
