import { Box, Flex, Heading } from "@radix-ui/themes";
import { SoundCloudPlayer } from "../components/SoundCloudPlayer";
import { YouTubePlayer } from "../components/YouTubePlayer";
import { BevelBox } from "../components/BevelBox";

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <BevelBox className="gray-card">
      <Flex p="2" justify="center">
        <Heading as="h1" size="4">
          {text}
        </Heading>
      </Flex>
    </BevelBox>
  );
};

export const Media = () => {
  return (
    <Flex direction="column" gap="2">
      <SectionHeader text="Audio" />
      <BevelBox className="gray-card">
        <SoundCloudPlayer />
      </BevelBox>
      <SectionHeader text="Video" />
      <BevelBox className="gray-card">
        <YouTubePlayer src="https://www.youtube.com/embed/gzNUlvB8MmQ?si=jx3YzTtc8aQFK3zA" />
      </BevelBox>

      <BevelBox className="gray-card">
        <YouTubePlayer src="https://www.youtube.com/embed/jLEKo7XpSCY?si=GevegfwOivJYP5wy" />
      </BevelBox>
    </Flex>
  );
};
