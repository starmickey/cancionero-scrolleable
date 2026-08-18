import BackgroundTextLayout from "@/components/background-text-layout";

const skeletonSongs = Array.from({ length: 4 }, (_, index) => index);

export default function Loading() {
  return (
    <BackgroundTextLayout>
      <main className="px-10 py-10" aria-busy="true" aria-live="polite">
        <h1 className="title">Cancionero</h1>
        <p className="subtitle -mt-4 mb-8">Cargando canciones...</p>

        <div className="loading-progress mb-8" role="progressbar">
          <div className="loading-progress-bar" />
        </div>

        <section>
          <div className="section-title mb-2 loading-section-title" />

          <div className="w-full flex flex-col gap-6">
            {skeletonSongs.map((song) => (
              <article key={song} className="py-6 text-center">
                <header className="mb-4">
                  <div className="loading-line loading-song-title mx-auto" />
                  <div className="loading-line loading-song-author mx-auto mt-2" />
                </header>

                <div className="flex flex-col gap-6">
                  <div>
                    <div className="loading-line loading-lyric mx-auto" />
                    <div className="loading-line loading-lyric loading-lyric-short mx-auto mt-2" />
                    <div className="loading-line loading-lyric mx-auto mt-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </BackgroundTextLayout>
  );
}
