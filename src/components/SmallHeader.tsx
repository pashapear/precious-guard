import { Text } from "@radix-ui/themes";

export const SmallHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      className="small-header"
      style={{
        zIndex: 1,
        textShadow: "1px 1px 1px var(--bg-primary)",
        // WebkitTextStroke: "2px var(--bg-primary)",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "800",
        fontSize: "1.25rem",
        position: "absolute",
        textTransform: "uppercase",
        top: "-1.1rem",
        left: "0.5rem",
      }}
    >
      {children}
    </Text>
  );
};
