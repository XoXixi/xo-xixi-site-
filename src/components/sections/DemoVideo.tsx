export function DemoVideo() {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center px-4">
      {/* Título da Seção */}
      <div className="text-center mb-10">
        <span className="text-[#ff6b00] font-bold uppercase tracking-wider text-sm bg-orange-100 px-4 py-1.5 rounded-full">
          Veja na prática
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-6">
          A mágica acontece em <span className="text-[#ff6b00] underline decoration-orange-200 decoration-4 underline-offset-4">segundos</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
          Aperte o play e confira a velocidade que o pó seca o xixi, permitindo varrer tudo sem usar água ou deixar cheiro.
        </p>
      </div>

      {/* Container do Vídeo YouTube */}
      <div className="w-full max-w-4xl mx-auto hover:scale-[1.01] transition-transform duration-300">
        <div className="relative aspect-video bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            /* 👇 SUBSTITUA 'ID_DO_SEU_VIDEO_AQUI' PELO CÓDIGO DO YOUTUBE 👇 */
            src="https://www.youtube.com/embed/r7-7kcu9W0o?controls=1&rel=0&modestbranding=1" 
            title="Demonstração Xô Xixi na prática"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}