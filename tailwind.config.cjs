/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      secondary: {
        20: "#D6EFFF",
        40: "#CCEBFF",
        60: "#C7E9FF",
        80: "#BDE4FF",
        100: "#B3E0FF",
        130: "#A3DAFF",
        200: "#85CEFF",
        300: "#57BCFF",
        400: "#29A9FF",
        500: "#0096FA",
        600: "#007ACC",
        700: "#006EB8",
        760: "#0065A8",
        780: "#0062A3",
        800: "#005F9E",
        830: "#005C99",
        880: "#00568F",
        900: "#00538A",
        940: "#004D80",
        960: "#00497A",
      },
      crux: {
        20: "#D2E1F9",
        40: "#C9DBF8",
        60: "#C0D5F6",
        80: "#BCD2F6",
        100: "#B3CCF4",
        130: "#A5C3F3",
        200: "#86AEEE",
        300: "#5E93E9",
        400: "#3175E2",
        500: "#1C5FCA",
        600: "#164A9E",
        700: "#13418B",
        760: "#123D82",
        780: "#113B7D",
        800: "#113979",
        830: "#103774",
        880: "#0F326B",
        900: "#0F326B",
        940: "#0E2E63",
        960: "#0D2C5E",
      },
      neutralVariant: {
        20: "#F2F2F3",
        40: "#ECECEE",
        60: "#E7E7E9",
        80: "#E4E5E7",
        100: "#DFDFE2",
        130: "#DADADD",
        200: "#CACACE",
        300: "#B2B2B9",
        400: "#9C9DA5",
        500: "#84858F",
        600: "#70717B",
        700: "#64646D",
        760: "#5C5D65",
        780: "#5A5B63",
        800: "#575860",
        830: "#53535B",
        880: "#4E4E55",
        900: "#4B4C53",
        940: "#46474D",
        960: "#44454B",
      },
      forestGreen: {
        20: "#ADFFDD",
        40: "#A3FFD9",
        60: "#99FFD5",
        80: "#8FFFD0",
        100: "#85FFCC",
        130: "#70FFC4",
        200: "#4DFFB5",
        300: "#14FF9D",
        400: "#00DB80",
        500: "#00A35F",
        600: "#006D40",
        700: "#006139",
        760: "#005C36",
        780: "#005733",
        800: "#005733",
        830: "#005230",
        880: "#004D2D",
        900: "#00472A",
        940: "#004227",
        960: "#004227",
      },
      error: {
        20: "#F8CECE",
        40: "#F7C5C5",
        60: "#F5BCBC",
        80: "#F4B3B3",
        100: "#F4AFAF",
        130: "#F2A1A1",
        200: "#ED8282",
        300: "#E75555",
        400: "#E12929",
        500: "#C01B1B",
        600: "#941515",
        700: "#811212",
        760: "#791111",
        780: "#741111",
        800: "#741111",
        830: "#701010",
        880: "#670F0F",
        900: "#620E0E",
        940: "#5E0D0D",
        960: "#590D0D",
      },
      neutral: {
        20: "#D5DBE7",
        40: "#CED5E3",
        60: "#C8CFE0",
        80: "#C1CADC",
        100: "#BBC4D8",
        130: "#AEB9D1",
        200: "#97A5C4",
        300: "#7689B1",
        400: "#596E9C",
        500: "#445578",
        600: "#323E58",
        700: "#2C374E",
        760: "#293248",
        780: "#293248",
        800: "#273044",
        830: "#252E41",
        880: "#232C3E",
        900: "#21293B",
        940: "#1F2737",
        960: "#1E2534",
      },
      peeishYellow: {
        20: "#FFF2B3",
        40: "#FFF0A3",
        60: "#FFEE99",
        80: "#FFEC8F",
        100: "#FFEB85",
        130: "#FFE875",
        200: "#FFE14D",
        300: "#FFD814",
        400: "#E0BB00",
        500: "#A88C00",
        600: "#705D00",
        700: "#665500",
        760: "#5C4D00",
        780: "#5C4D00",
        800: "#574800",
        830: "#524400",
        880: "#4D4000",
        900: "#4D4000",
        940: "#473C00",
        960: "#423700",
      },
      nascentGreen: {
        20: "#ADFFB0",
        40: "#A3FFA6",
        60: "#99FF9C",
        80: "#8FFF93",
        100: "#85FF89",
        130: "#75FF7A",
        200: "#4DFF52",
        300: "#14FF1C",
        400: "#00DB07",
        500: "#00A305",
        600: "#006E04",
        700: "#006103",
        760: "#005C03",
        780: "#005703",
        800: "#005703",
        830: "#005203",
        880: "#004D03",
        900: "#004702",
        940: "#004202",
        960: "#004202",
      },
      andWhyHeOurple: {
        20: "#E5D2F4",
        40: "#E1CAF2",
        60: "#DCC2F0",
        80: "#D7B9EE",
        100: "#D2B1EC",
        130: "#CBA5E9",
        200: "#BB88E2",
        300: "#A45FD8",
        400: "#8F3ACF",
        500: "#742AAC",
        600: "#582083",
        700: "#4D1C73",
        760: "#481A6B",
        780: "#481A6B",
        800: "#451966",
        830: "#421862",
        880: "#3D165A",
        900: "#3A1556",
        940: "#371452",
        960: "#34134E",
      },
      orang: {
        20: "#FCD8BA",
        40: "#FCD2B1",
        60: "#FBCDA7",
        80: "#FBC79D",
        100: "#FBC293",
        130: "#FAB780",
        200: "#F8A35D",
        300: "#F6872C",
        400: "#E16A09",
        500: "#B05307",
        600: "#7B3A05",
        700: "#6C3304",
        760: "#673104",
        780: "#622E04",
        800: "#622E04",
        830: "#5D2C04",
        880: "#532703",
        900: "#532703",
        940: "#4E2503",
        960: "#4A2303",
      },
    },
    fontFamily: {
      sans: ["var(--font-roboto-flex)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-jetbrains-mono)", "mono"],
    },
  },
  plugins: [],
};
