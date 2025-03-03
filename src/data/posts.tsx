import { Box, Flex, Separator, Text } from "@radix-ui/themes";
import { Link } from "react-router";

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

const InstagramLink = () => (
  <a
    href="https://www.instagram.com/precious.guard"
    target="#"
    style={{ textDecoration: "underline" }}
  >
    Instagram
  </a>
);

const ContactInfo = () => {
  return (
    <Flex direction="column">
      <Text>
        Get in touch: <InstagramLink />
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
      What a wonderful thing it was! We had a blast playing for you all, and
      we're so grateful for the support.
    </Text>
    <Text>
      Alas, we are saddened to inform you that this was our last show with our
      keyboard player, Leah, who is moving on from the project. We wish her all
      the best, but we must move forward as well.
    </Text>
    <Separator size="4" color="cyan" />
    <Text>
      We are officially putting out a casting call, in search of a{" "}
      <Link to="about/new-member" style={{ textDecoration: "underline" }}>
        bass player
      </Link>{" "}
      𝄢 to join our party. We are queer, you don’t have to be queer to join,
      just be cool.
    </Text>
    <Text>
      If you are interested, or know anyone who would be, we hope to hear from
      you. Just shoot us a DM or email us at{" "}
      <a
        href="mailto:guardprecious@gmail.com"
        target="#"
        style={{ textDecoration: "underline" }}
      >
        guardprecious@gmail.com
      </a>
    </Text>
    <Text>
      You can find samples of our music on the{" "}
      <Link to="media" style={{ textDecoration: "underline" }}>
        Media
      </Link>{" "}
      page
    </Text>
    <DateTag>Feb 25, 2025</DateTag>
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
