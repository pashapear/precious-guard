import { Flex, Box, Grid, Text } from "@radix-ui/themes";
import { useParams } from "react-router";
import { BevelBox } from "../../components/BevelBox";
import { SmallHeader } from "../../components/SmallHeader";
import { characters, MusicGroupMember } from "../../data/characters";

const charactersMap = characters.reduce((acc, character) => {
  acc[character.id] = character;
  return acc;
}, {} as Record<string, MusicGroupMember>);

export const Character = () => {
  const { id = "othello" } = useParams();
  const character = charactersMap[id];
  return (
    <BevelBox>
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
                      <span style={{ textTransform: "capitalize" }}>{key}</span>
                      : {value}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </BevelBox>
  );
};
