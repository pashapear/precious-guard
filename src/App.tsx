import { NavLink, Route, Routes, useParams } from "react-router";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { characters, MusicGroupMember } from "./data/characters.ts";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { SmallHeader } from "./components/SmallHeader.tsx";
import { BevelBox } from "./components/BevelBox.tsx";
import { TimePanel } from "./components/TimePanel.tsx";
import { ReactNode } from "react";

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
        <Text weight="bold">{character.shortName}</Text>
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
      <Flex
        id="main-stats"
        direction="column"
        gapY="1"
        width="100%"
        pl="2"
        pt="1"
      >
        <Flex gap="3">
          <img
            className="rounded-card"
            style={{
              maxWidth: "150px",
              maxHeight: "200px",
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            src={`/images/${character.id}.png`}
            alt={character.shortName}
          />
          <Flex direction="column" pt="2">
            <Box pb="2">
              <Text weight="bold">{character.name}</Text>
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
            columns={{ initial: "1fr 2fr", sm: "1fr 1fr" }}
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
    <Flex className="gray-card" gapX="3" p="1" pl="2">
      <img
        className="rounded-card"
        style={{
          maxWidth: "100px",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        }}
        src={`/images/${character.id}.png`}
        alt={character.shortName}
      />
      <Stats character={character} />
    </Flex>
  );
};

const CharacterList = () => {
  return (
    <Flex direction="column" className="rounded-card">
      {characters.map((character) => {
        const url = `/about/${character.id}`;
        return (
          <NavLink key={character.id} to={url}>
            <CharacterSummary key={character.id} character={character} />
          </NavLink>
        );
      })}
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

const NavCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      className="gray-card nav-button bevel"
      align="center"
      justify="center"
      p="3"
    >
      <Text>{children}</Text>
    </Flex>
  );
};

const NavButton = ({ children, url }: { children: ReactNode; url: string }) => {
  return (
    <Box
      mt="3"
      width="fit-content"
      className="gray-card rounded-card nav-button bevel"
    >
      <NavLink to={url}>
        <BevelBox>
          <Flex p="2" pr="5" pl="5">
            {children}
          </Flex>
        </BevelBox>
      </NavLink>
    </Box>
  );
};

const CharacterNav = () => {
  const { id = "othello" } = useParams();
  const index = characters.findIndex((character) => character.id === id);
  let prevIndex = index - 1;
  let nextIndex = index + 1;

  if (prevIndex < 0) {
    prevIndex = characters.length - 1;
  }

  if (nextIndex > characters.length - 1) {
    nextIndex = 0;
  }

  const prevCharacter = characters[prevIndex];
  const nextCharacter = characters[nextIndex];
  const prevUrl = `/about/${prevCharacter.id}`;
  const nextUrl = `/about/${nextCharacter.id}`;

  return (
    <Flex width="100%" justify="end" gap="3">
      <NavButton url={prevUrl}>
        <Text>Prev</Text>
      </NavButton>
      <NavButton url={nextUrl}>
        <Text>Next</Text>
      </NavButton>
    </Flex>
  );
};

const PageHeader = () => {
  return (
    <Flex justify="center" align="center" pb="3">
      <img src="/images/logo.png" alt="logo" />
    </Flex>
  );
};

const CustomNavLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {children}
    </NavLink>
  );
};

const Navigation = () => {
  return (
    <BevelBox>
      <Flex className="rounded-card" direction="column">
        <CustomNavLink to="/">
          <NavCard>Home</NavCard>
        </CustomNavLink>
        <CustomNavLink to="/about">
          <NavCard>About</NavCard>
        </CustomNavLink>
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
      <Text style={{ fontSize: "120%" }}>✨News✨</Text>
      <Text>
        Our <b>first show</b> is coming up! We're excited to see you all there!
        We're also working on our first EP. Stay tuned for more details!
      </Text>
      <Text>
        <i>Show Details:</i>
      </Text>
      <Text mt="-5">January 18th, 8pm @ Not Not</Text>

      <Text mt="-5">3950 West Grand Ave, Chicago, IL</Text>

      <Text>
        Get in touch:{" "}
        <a
          href="https://www.instagram.com/precious.guard"
          target="#"
          style={{ textDecoration: "underline" }}
        >
          Instagram
        </a>
      </Text>
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
      gap="3"
    >
      <Flex direction="column" gapY="1">
        <BevelBox>
          <Routes>
            <Route index element={<News />} />
            <Route path="about" element={<CharacterList />} />
            <Route path="about/:id" element={<CharacterDetails />} />
          </Routes>
        </BevelBox>
        <Routes>
          <Route index element={<Location />} />
          <Route path="about" element={<Location />} />
          <Route path="about/:id" element={<CharacterNav />} />
        </Routes>
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
