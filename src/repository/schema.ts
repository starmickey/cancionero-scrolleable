import mongoose from 'mongoose';

const { Schema } = mongoose;

// Sub-schema for individual lines of lyrics
const lyricSchema = new Schema(
  {
    text: { type: String, required: true }
  },
  { _id: false }
);

// Sub-schema for stanzas (verses, chorus, bridge, etc.)
const stanzaSchema = new Schema(
  {
    id: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ['verse', 'chorus', 'bridge', 'pre-chorus', 'intro', 'outro'],
      default: 'verse'
    },
    lyrics: [lyricSchema]
  },
  { _id: false }
);

// ----------------------------------------------------------------------
// Song Schema
// ----------------------------------------------------------------------
const songSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, default: null },
    stanzas: [stanzaSchema]
  },
  { timestamps: true }
);

export const SongModel = mongoose.models.Song || mongoose.model('Song', songSchema);

// ----------------------------------------------------------------------
// SongBook Schema
// ----------------------------------------------------------------------
const songBookSchema = new Schema(
  {
    title: { type: String, required: true },
    // Maintains ordered sequence of songs and their positions
    songs: [
      {
        _id: false,
        song: { type: Schema.Types.ObjectId, ref: 'Song', required: true },
        order: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

// Indexing order field within the songs array for efficient sorted lookup
songBookSchema.index({ 'songs.order': 1 });

export const SongBookModel = mongoose.models.SongBook || mongoose.model('SongBook', songBookSchema);
