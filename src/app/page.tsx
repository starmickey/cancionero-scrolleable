import BackgroundTextLayout from "@/components/background-text-layout";
import { getSongBooks } from "@/services/getSongBooks";
import type { UiStanza } from "@/types/song-book";

export default async function HomePage() {
  const songBooks = await getSongBooks();

  return (
    <BackgroundTextLayout>
      <main className="px-10 py-10">
        <h1 className="title">Cancionero</h1>
        <p className="subtitle -mt-4 mb-8">Jornada Diocesana de Niños 2026</p>

        <div className="flex flex-col gap-8">
          {songBooks.map((songBook) => (
            <section key={songBook.id}>
              <h2 className="section-title mb-2 mx-auto">{songBook.title}</h2>

              <div className="w-full flex flex-col gap-6">
                {songBook.songs.map((song) => (
                  <article key={song.id} className="py-6 text-center">
                    <header className="mb-4">
                      <h2 className="song-title">{song.title}</h2>
                      {song.artist && (
                        <p className="song-author">{song.artist}</p>
                      )}
                    </header>

                    {/* Vertical Lyrics Stack */}
                    <div className="flex flex-col gap-6">
                      {song.stanzas.map((stanza: UiStanza) => (
                        <div key={stanza.id}>
                          {stanza.lyrics.map((line, idx) => (
                            <p
                              key={idx}
                              className={`song-lyric song-lyric-${stanza.type}`}
                            >
                              {line.text}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </BackgroundTextLayout>
  );
}
