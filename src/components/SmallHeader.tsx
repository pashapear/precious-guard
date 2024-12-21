import { Text } from "@radix-ui/themes";

export const SmallHeader = ({
  children,
  top,
}: {
  children: React.ReactNode;
  top?: string;
}) => {
  return (
    <Text
      className="small-header"
      style={{
        zIndex: 1,
        textShadow: "1px 1px 1px var(--bg-primary)",
        // WebkitTextStroke: "2px var(--bg-primary)",
        fontFamily: "Helvetica, sans-serif",
        fontWeight: "800",
        fontSize: "0.9rem",
        position: "absolute",
        textTransform: "uppercase",
        top: top ?? "-0.8rem",
        left: "0.5rem",
      }}
    >
      {children}
    </Text>
  );
};
