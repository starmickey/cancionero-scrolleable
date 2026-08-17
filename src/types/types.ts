export interface LyricLine {
  id: number;
  text: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  lyrics: LyricLine[];
}

export interface SongBook {
  id: string;
  title: string;
  songs: Song[];
}