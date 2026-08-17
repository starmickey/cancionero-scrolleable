import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import mongoose from "mongoose";

const rootDir = process.cwd();
const envPath = path.join(rootDir, ".env");
const dataPath = path.join(rootDir, "src", "data", "song-books.json");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    process.env[key] ??= value.replace(/^["']|["']$/g, "");
  }
}

function readSongBooks() {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

async function seedDatabase() {
  loadEnvFile(envPath);

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI. Add it to .env before seeding.");
  }

  const songBooks = readSongBooks();

  await mongoose.connect(uri);

  const db = mongoose.connection.db;

  if (!db) {
    throw new Error("MongoDB connection did not provide a database handle.");
  }

  const songsCollection = db.collection("songs");
  const songBooksCollection = db.collection("songbooks");

  await songBooksCollection.deleteMany({});
  await songsCollection.deleteMany({});

  const songIdsByJsonId = new Map();
  const now = new Date();

  for (const songBook of songBooks) {
    for (const song of songBook.songs) {
      if (songIdsByJsonId.has(song.id)) {
        continue;
      }

      const result = await songsCollection.insertOne({
        title: song.title,
        artist: song.artist ?? null,
        stanzas: song.stanzas,
        createdAt: now,
        updatedAt: now,
      });

      songIdsByJsonId.set(song.id, result.insertedId);
    }
  }

  for (const songBook of songBooks) {
    await songBooksCollection.insertOne({
      title: songBook.title,
      songs: songBook.songs.map((song, index) => ({
        song: songIdsByJsonId.get(song.id),
        order: index + 1,
      })),
      createdAt: now,
      updatedAt: now,
    });
  }

  console.log(
    `Seeded ${songIdsByJsonId.size} songs and ${songBooks.length} song books.`,
  );
}

seedDatabase()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
