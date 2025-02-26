import { Flex, Text } from "@radix-ui/themes";
import { NavLink } from "react-router";
import { MusicGroupMember, characters } from "../data/characters";
import { BevelBox } from "../components/BevelBox";

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

export const Characters = () => {
  return (
    <BevelBox>
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
    </BevelBox>
  );
};
