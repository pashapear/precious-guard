import "@radix-ui/themes/styles.css";
import "./App.css";
import { characters, MusicGroupMember } from "./data/characters.ts";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
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
          {/* <Box className="gray-card" minWidth="100px">{` `}</Box> */}
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
        <Flex align="center">
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

const TimePanel = () => {
  return (
    <Box mt="3">
      <BevelBox>
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
            <Flex justify="center" gap="2">
              <Text>💰</Text>
              <Text>188994G</Text>
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
        <a href="https://www.instagram.com/precious.guard">Instagram</a>
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
