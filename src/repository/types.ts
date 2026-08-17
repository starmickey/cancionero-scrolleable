import type { UiStanza } from "@/types/song-book";

export type DatabaseId = {
  toString(): string;
};

export type DatabasePopulatedSong = {
  _id: DatabaseId;
  title: string;
  artist?: string | null;
  stanzas: UiStanza[];
};

export type DatabaseSongBookSongRef = {
  song: DatabasePopulatedSong | null;
  order: number;
};

export type DatabaseSongBookResult = {
  _id: DatabaseId;
  title: string;
  songs: DatabaseSongBookSongRef[];
};

export type DatabasePopulatedSongBookSong = DatabaseSongBookSongRef & {
  song: DatabasePopulatedSong;
};
