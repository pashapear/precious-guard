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

const pasha: MusicGroupMember = {
  id: "pasha",
  name: "Pasha Pear",
  class: "Mystic Knight",
  shortName: "Pasha",
  instrument: "Drum Kit",
  abilities: ["Spin Attack", "Time Expansion", "Steal", "Flee"],
  stats: {
    level: 45,
    hp: 150,
    mp: 30,
    ap: 20,
  },
  equipment: {
    weapon: "🗡️ Excalibur",
    accessory: "🧑‍🎄 Yuletide Cap",
    outfit: ":🧥 Fine coat",
    footwear: "🛼 Heelys",
  },
};

const othello: MusicGroupMember = {
  id: "othello",
  name: "Othello Senecharles",
  class: "Monk",
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
  class: "Summoner",
  instrument: "Saxophone",
  abilities: ["Reed Swap", "Overtones", "Summon Ostinato", "Toad"],
  stats: {
    level: 40,
    hp: 130,
    mp: 55,
    ap: 35,
  },
  equipment: {
    weapon: "🎷 Saxophone",
    accessory: "🖋️ Fancy pen",
    outfit: "👖 Canadian tuxedo",
    footwear: "👞 Loafers",
  },
};

// const leah: MusicGroupMember = {
//   id: "leah",
//   name: "Leah McNamee",
//   class: 'Dragoon',
//   shortName: "Leah",
//   instrument: "Piano",
//   abilities: ["Yap", "Cry", "Escalate"],
//   stats: {
//     level: 50,
//     hp: 16,
//     mp: 65,
//     ap: 45,
//   },
//   equipment: {
//     weapon: "💅 Acrylic nails",
//     accessory: "🔗 Chain belt",
//     outfit: "👖 Shiny pants",
//     footwear: "🦶 Toes",
//   }
// };

export const newMember: MusicGroupMember = {
  id: "new-member",
  name: "New Member",
  shortName: "You?",
  class: "???",
  instrument: "Bass",
  abilities: ["Pluck", "Slap", "Feel"],
  stats: {
    level: 1,
    hp: 100,
    mp: 50,
    ap: 20,
  },
  equipment: {
    weapon: "𝄢 Bass Guitar",
    accessory: "🎩 ???",
    outfit: "👕 ???",
    footwear: "👟 ???",
  },
};

export const characters = [othello, jordan, pasha];
