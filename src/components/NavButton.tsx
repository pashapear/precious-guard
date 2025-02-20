import { Box, Flex } from "@radix-ui/themes";
import { ReactNode } from "react";
import { NavLink } from "react-router";
import { BevelBox } from "./BevelBox";

export const NavButton = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
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
