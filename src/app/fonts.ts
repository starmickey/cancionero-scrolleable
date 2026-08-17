import localFont from "next/font/local";

export const clearSansFont = localFont({
  src: [
    {
      path: "../../public/fonts/ClearSans-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClearSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClearSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClearSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clear-sans",
  display: "swap",
});

export const xungaSemiExpandedFont = localFont({
  src: [
    {
      path: "../../public/fonts/Xunga-SemiExpandedMiddle.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-xunga-semi-expanded",
  display: "swap",
});

export const cabinSketchFont = localFont({
  src: [
    {
      path: "../../public/fonts/CabinSketch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cabin-sketch",
  display: "swap",
});
