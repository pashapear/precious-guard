type Instrument = "Drums" | "Vocals" | "Saxophone" | "Piano";

type Ability = {
  name: string;
  description: string;
};

type Equipment = {
  instrument: string;
  accessory: string;
  outfit: string;
  footwear: string;
};

type Stats = {
  level: number;
  hp: number;
  mp: number;
  ap: number;
  creativity: number;
  precision: number;
  charisma: number;
  endurance: number;
  dexterity: number;
};

type Story = {
  background: string;
  role: string;
};

export type MusicGroupMember = {
  id: string;
  name: string;
  shortName: string;
  age: number;
  gender: string;
  instrument: Instrument;
  abilities: string[];
  stats: Stats;
  equipment: Equipment;
  skills: Ability[];
  story: Story;
};

// Example usage
const pasha: MusicGroupMember = {
  id: "pasha",
  name: "Pasha Pear",
  shortName: "Pasha",
  age: 25,
  gender: "Non-binary",
  instrument: "Drums",
  abilities: ["Rhythmic Chaos", "Stick Juggling", "Drum Solo Dance-Off"],
  stats: {
    level: 30,
    hp: 150,
    mp: 50,
    ap: 30,
    creativity: 20,
    precision: 18,
    charisma: 15,
    endurance: 22,
    dexterity: 25,
  },
  equipment: {
    instrument: "Glitter Drum Set",
    accessory: "Neon Drum Sticks",
    outfit: "Banana Suit",
    footwear: "Rainbow Sneakers",
  },
  skills: [
    {
      name: "Rhythmic Chaos",
      description: "Creates rhythms so wild, even the band can't follow.",
    },
    {
      name: "Stick Juggling",
      description:
        "Juggles drum sticks while playing, often hitting bandmates.",
    },
    {
      name: "Drum Solo Dance-Off",
      description:
        "Performs a drum solo that turns into a full-blown dance routine.",
    },
  ],
  story: {
    background:
      "Pasha is a drummer with a penchant for the absurd. Their performances are a mix of chaos and comedy, often leaving the audience in stitches.",
    role: "Drummer",
  },
};

const othello: MusicGroupMember = {
  id: "othello",
  name: "Othello Senecharles",
  shortName: "Othello",
  age: 28,
  gender: "Male",
  instrument: "Vocals",
  abilities: ["Operatic Yodeling", "Lyric Improv", "Stage Diving"],
  stats: {
    level: 35,
    hp: 120,
    mp: 60,
    ap: 40,
    creativity: 25,
    precision: 15,
    charisma: 30,
    endurance: 18,
    dexterity: 12,
  },
  equipment: {
    instrument: "Golden Microphone",
    accessory: "Feather Boa",
    outfit: "Sequined Jumpsuit",
    footwear: "Platform Shoes",
  },
  skills: [
    {
      name: "Operatic Yodeling",
      description:
        "Combines opera with yodeling for a unique, if confusing, sound.",
    },
    {
      name: "Lyric Improv",
      description:
        "Makes up lyrics on the spot, often about random objects in the room.",
    },
    {
      name: "Stage Diving",
      description:
        "Dives into the audience, often landing on the wrong side of the stage.",
    },
  ],
  story: {
    background:
      "Othello is the lead singer with a flair for the dramatic. His performances are a mix of opera, yodeling, and improvised lyrics that keep the audience guessing.",
    role: "Singer",
  },
};

const jordan: MusicGroupMember = {
  id: "jordan",
  name: "Jordan Wright",
  shortName: "Jordan",
  age: 24,
  gender: "Non-binary",
  instrument: "Saxophone",
  abilities: ["Jazz Fart", "Saxophone Gymnastics", "Melodic Mimicry"],
  stats: {
    level: 40,
    hp: 130,
    mp: 55,
    ap: 35,
    creativity: 22,
    precision: 16,
    charisma: 18,
    endurance: 20,
    dexterity: 24,
  },
  equipment: {
    instrument: "Rainbow Saxophone",
    accessory: "Silly Hat",
    outfit: "Clown Suit",
    footwear: "Flip-Flops",
  },
  skills: [
    {
      name: "Jazz Fart",
      description: "Plays a saxophone solo that sounds like a series of farts.",
    },
    {
      name: "Saxophone Gymnastics",
      description:
        "Performs acrobatic moves while playing the saxophone, often falling over.",
    },
    {
      name: "Melodic Mimicry",
      description: "Mimics the sounds of everyday objects with the saxophone.",
    },
  ],
  story: {
    background:
      "Jordan is a saxophone player with a quirky sense of humor. Their performances are a mix of jazz, acrobatics, and sound effects that leave the audience in laughter.",
    role: "Saxophone Player",
  },
};

const leah: MusicGroupMember = {
  id: "leah",
  name: "Leah McNamee",
  shortName: "Leah",
  age: 26,
  gender: "Female",
  instrument: "Piano",
  abilities: ["Piano Prankster", "Musical Mashup", "Emotional Rollercoaster"],
  stats: {
    level: 50,
    hp: 140,
    mp: 65,
    ap: 45,
    creativity: 24,
    precision: 20,
    charisma: 16,
    endurance: 19,
    dexterity: 21,
  },
  equipment: {
    instrument: "Toy Piano",
    accessory: "Whoopee Cushion",
    outfit: "Clown Costume",
    footwear: "Bunny Slippers",
  },
  skills: [
    {
      name: "Piano Prankster",
      description:
        "Plays pranks on the audience using the piano, like sudden loud notes.",
    },
    {
      name: "Musical Mashup",
      description:
        "Combines classical music with nursery rhymes and pop songs.",
    },
    {
      name: "Emotional Rollercoaster",
      description:
        "Plays music that makes the audience laugh and cry within seconds.",
    },
  ],
  story: {
    background:
      "Leah is a piano player with a mischievous streak. Her performances are a mix of classical music, pranks, and emotional rollercoasters that keep the audience entertained.",
    role: "Piano Player",
  },
};

export const characters = [othello, leah, jordan, pasha];
