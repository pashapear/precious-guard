import { NavLink, Route, Routes, useParams } from "react-router";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { characters, MusicGroupMember } from "./data/characters.ts";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { SmallHeader } from "./components/SmallHeader.tsx";
import { BevelBox } from "./components/BevelBox.tsx";
import { TimePanel } from "./components/TimePanel.tsx";

const charactersMap = characters.reduce((acc, character) => {
  acc[character.id] = character;
  return acc;
}, {} as Record<string, MusicGroupMember>);

// Removed from package.json
// "typescript-eslint": "^8.11.0",

const Stats = ({ character }: { character: MusicGroupMember }) => {
  return (
    <Flex direction="column" p="1" pr="4" width="100%" justify="center" gap="1">
      <Flex justify="between">
        <Text>{character.shortName}</Text>
        <Text className="text-outline">LV {character.stats.level}</Text>
      </Flex>
      <Flex>
        <Text className="text-outline">
          HP {character.stats.hp} / {character.stats.hp}
        </Text>
      </Flex>
      <Flex justify="between">
        <Text className="text-outline">
          MP {character.stats.mp} / {character.stats.mp}
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

const CharacterDetails = () => {
  const { id = "othello" } = useParams();
  const character = charactersMap[id];
  return (
    <Flex
      className="gray-card rounded-card"
      gapX="3"
      width="100%"
      position="relative"
    >
      <Flex
        className="command-list"
        id="command-list"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1,
          fontSize: "85%",
        }}
      >
        <SmallHeader top="-8px">command</SmallHeader>
        <BevelBox>
          <Flex direction="column" gap="1" p="3">
            {character.abilities.map((ability) => {
              return <Text key={ability}>{ability}</Text>;
            })}
          </Flex>
        </BevelBox>
      </Flex>
      <Flex id="main-stats" direction="column" gapY="1" width="100%">
        <Flex gap="3">
          <img
            style={{ maxWidth: "150px", maxHeight: "200px" }}
            src={`/images/${character.id}.png`}
            alt={character.shortName}
          />
          <Flex direction="column" pt="2">
            <Box pb="2">
              <Text>{character.name}</Text>
            </Box>
            <Text className="text-outline">LV {character.stats.level}</Text>
            <Text className="text-outline">
              HP {character.stats.hp} / {character.stats.hp}
            </Text>
            <Text className="text-outline">
              MP {character.stats.mp} / {character.stats.mp}
            </Text>
          </Flex>
        </Flex>
        <Flex
          id="detailed-stats"
          style={{ fontSize: "85%" }}
          direction="column"
          gap="1"
        >
          <Grid
            columns="1fr 1fr"
            gap="1"
            pl="1"
            style={{ borderTop: "var(--white-border)" }}
          >
            <Flex direction="column" gap="1" pt="2" pl="2">
              {character.abilities.map((ability) => {
                // random number between 0 and 80
                const randomValue = Math.floor(Math.random() * 80);
                return (
                  <Text key={ability}>
                    {ability}: {randomValue}
                  </Text>
                );
              })}
            </Flex>
            <Flex
              id="class-role-equipment"
              direction="column"
              gap="1"
              pt="2"
              pb="2"
              style={{ borderLeft: "var(--white-border)" }}
            >
              <Flex direction="column" pb="2" pl="2">
                <Text>Class: {character.class}</Text>
                <Text>Role: {character.instrument}</Text>
              </Flex>
              <hr />
              <Flex direction="column" gap="1" pt="2" pl="2">
                {/* Equipment List */}
                {Object.entries(character.equipment).map(([key, value]) => (
                  <Text key={key}>
                    <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
                    {value}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

const CharacterSummary = ({ character }: { character: MusicGroupMember }) => {
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
      {characters.map((character) => {
        const url = `/about/${character.id}`;
        return (
          <NavLink to={url}>
            <CharacterSummary key={character.id} character={character} />
          </NavLink>
        );
      })}
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
            <Text>Chicago</Text>
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
        <BevelBox>
          <Routes>
            <Route index element={<News />} />
            <Route path="about" element={<CharacterList />} />
            <Route path="about/:id" element={<CharacterDetails />} />
          </Routes>
        </BevelBox>
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
    <Box className="app">
      {/* <ThemePanel /> */}
      <PageHeader />
      <MainMenu />
    </Box>
  );
}

export default App;
