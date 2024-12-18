import { Box } from "@radix-ui/themes";

export const BevelBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      className="bevel"
      style={{
        padding: "0.25rem",
        borderRadius: "var(--border-radius)",
      }}
    >
      {children}
    </Box>
  );
};
