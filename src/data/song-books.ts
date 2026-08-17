import { SongBook } from "@/types/types";

export const songBooks: SongBook[] = [
  {
    id: "animaciones",
    title: "Animaciones",
    songs: [
      {
        id: "las-llaves-del-cielo-talita-kum",
        title: "Las Llaves del Cielo",
        artist: "Talita Kum",
        stanzas: [
          {
            id: "verse-1",
            type: "verse",
            lyrics: [
              { text: "Las llaves del cielo están" },
              { text: "En tu corazón, en mi corazón" },
              { text: "Poniendo las manos así" },
              { text: "Apuntando hacia allí" },
              { text: "Se abre el corazón" },
            ],
          },
          {
            id: "chorus-1",
            type: "chorus",
            lyrics: [
              { text: "Alabando, se abre el cielo así" },
              { text: "Alabando, se abre el cielo así" },
            ],
          },
          {
            id: "verse-2",
            type: "verse",
            lyrics: [
              { text: "Jesús sos las llaves del cielo" },
              { text: "Quédate a jugar en mi corazón" },
              { text: "Jesús sos las llaves del cielo" },
              { text: "Quédate a vivir, En mi corazón" },
            ],
          },
          {
            id: "chorus-2",
            type: "chorus",
            lyrics: [
              { text: "Alabando, se abre el cielo así" },
              { text: "Alabando, se abre el cielo así" },
            ],
          },
        ],
      },
    ],
  },
];
