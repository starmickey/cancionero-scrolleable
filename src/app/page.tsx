import BackgroundTextLayout from "@/components/background-text-layout";
import { songBooks } from "@/data/song-books";

export default async function HomePage() {
  return (
    <BackgroundTextLayout>
      <main className="px-8 py-10">
        <h1 className="title">Cancionero</h1>
        <p className="subtitle -mt-4 mb-8">Jornada Diocesana de Niños 2026</p>

        <div className="flex flex-col gap-12">
          {songBooks.map((songBook) => (
            <section key={songBook.id}>
              <h2 className="section-title mb-2">{songBook.title}</h2>

              <div className="w-full flex flex-col gap-6">
                {songBook.songs.map((song) => (
                  <article key={song.id} className="py-6 text-center">
                    <header className="mb-4">
                      <h2 className="song-title">{song.title}</h2>
                      <p className="song-author">{song.artist}</p>
                    </header>

                    {/* Vertical Lyrics Stack */}
                    <div className="flex flex-col gap-6">
                      {song.stanzas.map((stanza) => (
                        <div
                          key={stanza.id}
                          className={
                            stanza.type === "chorus" ? "font-bold" : ""
                          }
                        >
                          {stanza.lyrics.map((line, idx) => (
                            <p key={idx} className="song-lyric">
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
