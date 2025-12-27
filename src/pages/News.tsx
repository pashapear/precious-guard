import { Text, Button, Flex, Separator } from "@radix-ui/themes";
import { posts } from "../data/posts";
import { useState } from "react";
import { BevelBox } from "../components/BevelBox";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence mode="wait">
          {readMore ? (
            <motion.div
              key="all-posts"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Flex gap="5" direction="column">
                <RestOfPosts />
                <Button
                  className="primary-btn"
                  variant="classic"
                  onClick={() => setReadMore(false)}
                >
                  See Less
                </Button>
              </Flex>
            </motion.div>
          ) : (
            <motion.div
              key="latest-post"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <Flex gap="5" direction="column">
                <LatestPost />
                <Button
                  className="primary-btn"
                  variant="classic"
                  onClick={() => setReadMore(true)}
                >
                  See More
                </Button>
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </BevelBox>
  );
};
