const SHAPES = {
  coolStar: [["M44 41Q49 14 56 41Q85 30 65 49Q77 73 55 59Q32 74 45 52Q18 50 44 41", "#131047", 2, "#5b5e8b","noflip"]],
  triangle: [["M24 59L50 13L73 56L44 49Z", "#131047", 2, "#5b5e8b","noflip"]],
  rocket: [
    ["M42 30L42 69L57 69L54 30", "black", 2, "white", "noflip"],
    ["M44 69L45 96L48 96L46 68", "black", 2, "brown", "noflip"],
    ["M54 69Q50 72 53 76Q60 76 58 81Q55 83 57 85", "black", 2, "none", "noflip"],
    ["M54 38L42 49L42 58L56 49Z", "black", 2, "red", "noflip"],
    ["M49 15L36 30L59 30Z", "black", 2, "red", "noflip"],
    ["M49 30L42 38L42 29L48 30","black", 2, "red", "noflip"],
    ["M57 58L42 69L57 69Z","black", 2, "red", "noflip"]
  ],
  mineral: [
    ["C",
    50, 50, 14, "#e700dd", 3, "#9a007e",
    "noflip"]
  ],
  ship: [
    [
      // Thruster 2
      "M49 82L28 82L26 88L49 88Z",
      "#131047", 2, "#5b5e8b"
    ],
    [
      // Thruster 1
      "M49 77L26 77L24 85L49 85Z",
      "#131047", 2, "#5b5e8b"
    ],
    [
      // Wing
      "M28 71L15 69Q16 53 31 46Z",
      "#b82782", 2, "#eb29a4"
    ],
    [
      // Body
      "M49 13Q33 17 30 35L25 73L28 76Q30 79 49 79Z",
      "#dadde2", 2, "#dadde2"
    ],
    [
      // Window
      "C",
      50, 50, 14, "#6772dc", 3, "#100e1b",
      "noflip"
    ],
    [
      // Purple Cover
      "M27 58L36 67L49 58L49 81L21 80Z",
      "#b82782", 2, "#eb29a4"
    ],
  ],
  cat : [
    [ // ear1
      "M37 15Q36 11 27 10Q22 19 29 26Z",
      "#e7ad3f", 2, "#e7ad3f",
      // TODO: Flipside with different colors "#ede9ea", 2, "#ede9ea"
    ],
    [ // ear2
      "M34 18Q33 14 29 14Q26 18 31 25Z",
      "#d66ead", 2, "#d66ead"
    ],
    [ // head
      "M50 10Q28 15 24 37A4 6 0 0 0 24 52Q34 59 50 58Z",
      "#eeeaeb", 2, "#eeeaeb"
    ],
    [ // band
      "M50 10Q28 16 24 37Q47 33 57 14Z",
      "#ecae41", 2, "#ecae41"
    ],
    [ // eye
      "M42 34Q38 20 31 34",
      "#733621", 2, false
    ],
    [ // nose
      "M50 38Q40 41 50 44",
      "#dc7ab7", 2, "#dc7ab7"
    ],
    [ // mouth
      "M50 47Q45 47 42 45Q40 54 50 55",
      "#c52c5a", 2, "#c52c5a"
    ]
  ],
  asteroid1: [
    [
      "M63 23Q56 18 45 19Q38 26 32 27Q21 31 20 42Q30 51 29 58Q29 70 48 69Q52 60 59 61Q71 66 78 56Q68 45 80 36Q88 21 77 21Q68 19 63 23",
      "#25242a", 2, "#858390", "noflip"
    ]
  ],
  suit: [
    [
      "M50 50L34 52Q23 56 20 65L50 65",
      "#9c96c9", 2, "#dfe4ec",
    ]
  ],
  city: [
    [
      "M79 84L79 45L72 45L72 47L68 47L68 32L63 32L63 41L57 41L57 45L53 45L53 28A2 3 0 0 0 46 28L46 37L41 37L41 42L33 42A5 8 0 0 0 23 42L19 42L19 85",
      "#0d1852", 2, "#0d1852"
    ]
  ]
}