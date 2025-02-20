import { Box, Flex, Text } from "@radix-ui/themes";

const DateTag = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Flex justify="end">
      <Text size="3">
        <i>- Precious Guard - </i>
        <i>{children}</i>
        <i> -</i>
      </Text>
    </Flex>
  );
};

const ContactInfo = () => {
  return (
    <Flex direction="column">
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

const Post1 = () => (
  <>
    <Text>
      Our <b>first show</b> is coming up! We're excited to see you all there!
      We're also working on our first EP. Stay tuned for more details!
    </Text>
    <Box>
      <img src="images/shows/01.28.25.jpg" alt="show poster" />
    </Box>
    <Text>
      <i>Show Details:</i>
    </Text>
    <Text as="p" mt="-5">
      January 18th, 8pm @ Not Not
    </Text>

    <Text mt="-5">3950 West Grand Ave, Chicago, IL</Text>

    <ContactInfo />
    <DateTag>Dec 22, 2024</DateTag>
  </>
);

const Post2 = () => (
  <>
    <Text>Thanks to all who came out to our first show 💝</Text>
    <Text>
      What a wonderful thing it was! Of course, as it goes, you have to take the
      good with the bad; apparently one cannot exist without the other.
    </Text>
    <Text>
      Alas, we are saddened to inform you that this was our last show with our
      keyboard player, Leah, who has chosen to move on from the project. We wish
      her all the best, but we must move forward as well.
    </Text>
    <Text>
      Therefore, we are putting out a casting call, so to speak, in search of a
      new keyboard player. 🎹
    </Text>
    <Text>
      In addition to keys, we are open to other instruments as well. If you are
      a musician and are interested in joining our band, please reach out!
    </Text>
    <Text>
      We are open to all melodic instruments, be it strings, brass, or
      woodwinds. 🎸 🎺 🪈
    </Text>
    <ContactInfo />
    <DateTag>Feb 19, 2025</DateTag>
  </>
);

export type Post = {
  id: string;
  post: () => JSX.Element;
};

export const posts: Post[] = [
  { id: "1", post: Post1 },
  { id: "2", post: Post2 },
];
