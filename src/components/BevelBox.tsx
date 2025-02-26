import { Box } from "@radix-ui/themes";

export const BevelBox = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  style?: any;
  className?: string;
}) => {
  return (
    <Box
      className={`bevel ${className}`}
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
