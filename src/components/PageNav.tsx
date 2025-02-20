import { Flex, Text } from "@radix-ui/themes";
import { useParams } from "react-router";
import { NavButton } from "./NavButton";

export const PageNav = ({ items }: { items: Array<{ id: string }> }) => {
  const { id = items[0].id } = useParams();
  const index = items.findIndex((item) => item.id === id);
  let prevIndex = index - 1;
  let nextIndex = index + 1;

  if (prevIndex < 0) {
    prevIndex = items.length - 1;
  }

  if (nextIndex > items.length - 1) {
    nextIndex = 0;
  }

  const prevItem = items[prevIndex];
  const nextItem = items[nextIndex];
  const prevUrl = `/about/${prevItem.id}`;
  const nextUrl = `/about/${nextItem.id}`;

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
