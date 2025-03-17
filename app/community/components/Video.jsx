const Video = () => {
  return (
    <section className="relative w-full">
      <video
        className="h-92 w-full shadow-lg brightness-80"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/marketing.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </section>
  );
};

export default Video;
