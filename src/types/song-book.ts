export type UiStanzaType =
  | "verse"
  | "chorus"
  | "bridge"
  | "pre-chorus"
  | "intro"
  | "outro";

export interface UiLyricLine {
  text: string;
}

export interface UiStanza {
  id: string;
  type: UiStanzaType;
  lyrics: UiLyricLine[];
}

export interface UiSong {
  id: string;
  title: string;
  artist?: string | null;
  stanzas: UiStanza[];
}

export interface UiSongBook {
  id: string;
  title: string;
  songs: UiSong[];
}
