import { Route, Routes } from "react-router";
import "@radix-ui/themes/styles.css";
import "./App.css";
import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { SmallHeader } from "./components/SmallHeader.tsx";
import { BevelBox } from "./components/BevelBox.tsx";
import { TimePanel } from "./components/TimePanel.tsx";
import { News } from "./pages/News.tsx";
import { Characters } from "./pages/Characters.tsx";
import { Character } from "./pages/Character/Character.tsx";
import { CustomNavLink } from "./components/CustomNavLink.tsx";
import { PageNav } from "./components/PageNav.tsx";
import { characters } from "./data/characters.ts";
import { SoundCloudPlayer } from "./components/SoundCloudPlayer.tsx";
import { YouTubePlayer } from "./components/YouTubePlayer.tsx";
import { Media } from "./pages/Media.tsx";

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

const PageHeader = () => {
  return (
    <Flex justify="center" align="center" gap="2" pb="3">
      {/* NOTE: Uncomment this for posters, releases, playlists, etc. */}
      {/* <FloatingPanel /> */}
      <img
        style={{ maxWidth: "40rem", minWidth: "15rem" }}
        src="/images/logo.png"
        alt="logo"
      />
    </Flex>
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
        <CustomNavLink to="/media">
          <NavCard>Media</NavCard>
        </CustomNavLink>
        {/* <NavCard>Shows</NavCard> */}
        {/* <NavCard>Merch</NavCard> */}
        {/* <NavCard>Contact</NavCard> */}
      </Flex>
    </BevelBox>
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
        <Routes>
          <Route index element={<News />} />
          <Route path="about" element={<Characters />} />
          <Route path="about/:id" element={<Characters />} />
          <Route path="media" element={<Media />} />
        </Routes>

        <Routes>
          <Route index element={<Location />} />
          <Route path="about" element={<Location />} />
          <Route path="about/:id" element={<PageNav items={characters} />} />
          <Route path="about" element={<Location />} />
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
