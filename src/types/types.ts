export interface LyricLine {
  text: string;
}

export interface Stanza {
  id: string;
  type: "verse" | "chorus";
  lyrics: LyricLine[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  stanzas: Stanza[];
}

export interface SongBook {
  id: string;
  title: string;
  songs: Song[];
}
