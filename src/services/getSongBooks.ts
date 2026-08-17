import { connectToDatabase } from "@/repository/mongodb";
import { SongBookModel } from "@/repository/schema";
import type {
  DatabasePopulatedSongBookSong,
  DatabaseSongBookResult,
} from "@/repository/types";
import type { UiSongBook } from "@/types/song-book";
import { connection } from "next/server";

export async function getSongBooks() {
  await connection();
  await connectToDatabase();

  const songBooks = await SongBookModel.find()
    .populate({
      path: "songs.song",
      select: "_id title artist stanzas",
    })
    .lean<DatabaseSongBookResult[]>();

  return songBooks.map((songBook) => ({
    id: songBook._id.toString(),
    title: songBook.title,
    songs: songBook.songs
      .filter((item): item is DatabasePopulatedSongBookSong =>
        Boolean(item.song),
      )
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        id: item.song._id.toString(),
        title: item.song.title,
        artist: item.song.artist,
        stanzas: item.song.stanzas,
      })),
  })) as UiSongBook[];
}
