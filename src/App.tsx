import "@radix-ui/themes/styles.css";
import "./App.css";
import { characters, MusicGroupMember } from "./data/characters.ts";
import { Box, Flex, Grid, IconButton, Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { SmallHeader } from "./components/SmallHeader.tsx";
import { BevelBox } from "./components/BevelBox.tsx";
import { NavLink, Route, Routes } from "react-router";

// Removed from package.json
// "typescript-eslint": "^8.11.0",

const Stats = ({ character }: { character: MusicGroupMember }) => {
  return (
    <Flex direction="column" p="1" pr="4" width="100%" justify="center" gap="1">
      <Flex justify="between">
        <Text>{character.shortName}</Text>
        <Flex gap="2">
          <Text className="text-outline">LV {character.stats.level}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text className="text-outline">
          HP {character.stats.hp} / {character.stats.hp}
        </Text>
      </Flex>
      <Flex justify="between">
        <Text className="text-outline">
          MP {character.stats.mp} / {character.stats.hp}
        </Text>
        <Flex align="center" gap="2">
          <Text>💎</Text>
          <Text>
            {character.stats.ap} / {character.stats.ap}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const Character = ({ character }: { character: MusicGroupMember }) => {
  return (
    <Flex className="gray-card" gapX="3" pl="2">
      <img
        style={{ maxWidth: "100px" }}
        src={`/images/${character.id}.png`}
        alt={character.shortName}
      />
      <Stats character={character} />
    </Flex>
  );
};

const CharacterList = () => {
  return (
    <Flex direction="column">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </Flex>
  );
};

const NavCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex className="gray-card" align="center" justify="center" p="3">
      <Text>{children}</Text>
    </Flex>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Text>{time.toLocaleTimeString()}</Text>;
};

const Sticker = ({
  coords,
  icon = "💋",
}: {
  coords: [string, string];
  icon?: string;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${coords[0]}`,
        left: `${coords[1]}`,
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.7,
      }}
    >
      <Text style={{ fontSize: "700%" }}>{icon}</Text>
    </div>
  );
};

const initialGill = 25000;

const newStickerPosition = () => {
  // number between 0 and 100
  const result = `${Math.floor(Math.random() * 100)}%`;
  console.log(result);
  return result;
};

const TimePanel = () => {
  const [gill, setGill] = useState(initialGill);
  const [dropAmount, setDropAmount] = useState(5);
  const [clicks, setClicks] = useState(0);
  const [stickers, setStickers] = useState<[string, string][]>([]);
  const [walletColor, setWalletColor] = useState<any>("unset");

  useEffect(() => {
    if (!gill) {
      setStickers([]);
      return;
    }
    if (clicks && clicks % 2 === 0) {
      setStickers((prev) => [
        ...prev,
        [newStickerPosition(), newStickerPosition()],
      ]);
    }
    if (clicks && clicks % 5 === 0) {
      setDropAmount((prev) => prev * 2);
    }
  }, [clicks]);

  const formattedGill = new Intl.NumberFormat("en-US", {
    currency: "USD",
  }).format(gill);

  const spend = () => {
    setClicks((prev) => prev + 1);
    setGill((prev) => {
      const result = prev - dropAmount;
      if (result <= 0) {
        setWalletColor("unset");
        return 0;
      }
      if (result < 15000) {
        setWalletColor("red");
      }
      return result;
    });
  };

  return (
    <Box mt="3">
      <BevelBox>
        {stickers.map((coords, index) => (
          <Sticker
            key={index}
            coords={coords}
            icon={gill < 10000 ? "😵" : undefined}
          />
        ))}
        <Box position="relative">
          <SmallHeader>Time & Gil</SmallHeader>
          <Flex
            className="rounded-card gray-card"
            direction="column"
            p="2"
            gap="1"
          >
            <Flex justify="center" gap="2">
              <Text>🕒</Text>
              <Clock />
            </Flex>
            <Flex justify="center" align="center" gap="5">
              <Text>💰</Text>
              <Text color={walletColor}>{formattedGill}G</Text>
              <IconButton onClick={spend} variant="ghost">
                <Text>🫰</Text>
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </BevelBox>
    </Box>
  );
};

const Location = () => {
  return (
    <Box mt="3">
      <BevelBox>
        <Box position="relative">
          <SmallHeader>Location</SmallHeader>
          <Flex
            className="rounded-card gray-card"
            position="relative"
            direction="column"
            p="2"
          >
            <Text size="5">Chicago</Text>
          </Flex>
        </Box>
      </BevelBox>
    </Box>
  );
};

const PageHeader = () => {
  return (
    <Flex width="80vw" justify="center" align="center" pb="3">
      <img src="/images/logo.png" alt="logo" />
    </Flex>
  );
};

const Navigation = () => {
  return (
    <BevelBox>
      <Flex className="rounded-card" direction="column">
        <NavLink to="/">
          <NavCard>Home</NavCard>
        </NavLink>
        <NavLink to="/about">
          <NavCard>About</NavCard>
        </NavLink>
        {/* <NavCard>Shows</NavCard> */}
        {/* <NavCard>Merch</NavCard> */}
        {/* <NavCard>Contact</NavCard> */}
      </Flex>
    </BevelBox>
  );
};

const News = () => {
  return (
    <Flex className="gray-card" gap="5" p="5" height="100%" direction="column">
      <Text>✨News✨</Text>
      <Text>
        Our first show is coming up! We're excited to see you all there! We're
        also working on our first EP. Stay tuned for more details!
      </Text>
      <Text>
        <i>Show Details</i>
      </Text>
      <Text>January 18th @ Not Not, Chicago, IL</Text>
      <span>
        <Text>Message us for the address: </Text>
        <a href="https://www.instagram.com/precious.guard" target="#">
          Instagram
        </a>
      </span>
    </Flex>
  );
};

const MainMenu = () => {
  return (
    <Grid
      columns={{
        initial: "1fr",
        sm: "2fr 1fr",
      }}
      gapX="3"
    >
      <Flex direction="column" gapY="1">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<CharacterList />} />
        </Routes>
        <Location />
      </Flex>
      <Flex width="100%" direction="column" gapY="1">
        <Navigation />
        <TimePanel />
      </Flex>
    </Grid>
  );
};

function App() {
  return (
    <Box style={{ fontSize: "125%" }}>
      {/* <ThemePanel /> */}
      <PageHeader />
      <MainMenu />
    </Box>
  );
}

export default App;
