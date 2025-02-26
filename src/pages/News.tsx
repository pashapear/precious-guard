import { Text, Button, Flex, Separator } from "@radix-ui/themes";
import { posts } from "../data/posts";
import { useState } from "react";
import { BevelBox } from "../components/BevelBox";

const LatestPost = posts[posts.length - 1].post;

const RestOfPosts = () => {
  const reverseChronoPosts = [...posts].reverse();
  return reverseChronoPosts.map(({ post: Post }, index) => {
    return index === posts.length - 1 ? (
      <Post key={index} />
    ) : (
      <>
        <Post key={index} />
        <Separator size="4" color="cyan" />
      </>
    );
  });
};

export const News = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <BevelBox>
      <Flex
        className="gray-card rounded-card"
        gap="5"
        p="5"
        height="100%"
        direction="column"
      >
        <Text style={{ fontSize: "120%" }}>✨News✨</Text>
        {readMore ? (
          <>
            <RestOfPosts />
            <Button
              className="primary-btn"
              variant="classic"
              onClick={() => setReadMore(false)}
            >
              Close
            </Button>
          </>
        ) : (
          <>
            <LatestPost />
            <Button
              className="primary-btn"
              variant="classic"
              onClick={() => setReadMore(true)}
            >
              Older Posts
            </Button>
          </>
        )}
      </Flex>
    </BevelBox>
  );
};
