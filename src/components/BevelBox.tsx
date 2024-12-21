import { Box } from "@radix-ui/themes";

export const BevelBox = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}) => {
  return (
    <Box
      className="bevel"
      style={{
        ...style,
        padding: "0.25rem",
        borderRadius: "var(--border-radius)",
      }}
    >
      {children}
    </Box>
  );
};
