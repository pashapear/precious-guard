
type Equipment = {
  weapon: string;
  accessory: string;
  outfit: string;
  footwear: string;
};

type Stats = {
  level: number;
  hp: number;
  mp: number;
  ap: number;
};


export type MusicGroupMember = {
  id: string;
  name: string;
  shortName: string;
  class: string;
  instrument: string;
  abilities: string[];
  stats: Stats;
  equipment: Equipment;
};

// Example usage
const pasha: MusicGroupMember = {
  id: "pasha",
  name: "Pasha Pear",
  class: 'Mystic Knight',
  shortName: "Pasha",
  instrument: "Drums",
  abilities: ["Roll", "Blast", "Beatbox", "Flee" ],
  stats: {
    level: 30,
    hp: 120,
    mp: 40,
    ap: 30,
  },
  equipment: {
    weapon: "🥪 sandwich",
    accessory: "🧑‍🎄 yule tide cap",
    outfit: "🤿 wet suit",
    footwear: "🐙 octopi",
  },
};

const othello: MusicGroupMember = {
  id: "othello",
  name: "Othello Senecharles",
  class: 'Monk',
  shortName: "Othello",
  instrument: "Vocals",
  abilities: ["Yell", "Growl", "Hum", "Monologue"],
  stats: {
    level: 40,
    hp: 150,
    mp: 10,
    ap: 40,
  },
  equipment: {
    weapon: "🤛🏿 Bare handed",
    accessory: "🧣 Red flag",
    outfit: "🧥 Black robe",
    footwear: "👢 BOOTS",
  },
};

const jordan: MusicGroupMember = {
  id: "jordan",
  name: "Jordan Wright",
  shortName: "Jordan",
  class: 'Summoner',
  instrument: "Saxophone",
  abilities: ["The Saxman", "Spit", "Rest", "Solo"],
  stats: {
    level: 40,
    hp: 130,
    mp: 55,
    ap: 35,
  },
  equipment: {
    weapon: "🎷 Saxophone",
    accessory: "🌸 Pussy hat",
    outfit: "👖 Canadian tuxedo",
    footwear: "👞 loafers",
  },
};

const leah: MusicGroupMember = {
  id: "leah",
  name: "Leah McNamee",
  class: 'Dragoon',
  shortName: "Leah",
  instrument: "Piano",
  abilities: ["Yap", "Cry", "Escalate"],
  stats: {
    level: 50,
    hp: 16,
    mp: 65,
    ap: 45,
  },
  equipment: {
    weapon: "💅 acrylic nails",
    accessory: "🔗 chain belt",
    outfit: "👖 shiny pants",
    footwear: "🦶 toes",
  }
};

export const characters = [othello, leah, jordan, pasha];
