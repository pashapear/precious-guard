import { Box, Dialog, Text } from "@radix-ui/themes";

export const FloatingPanel = () => {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger
        style={{ cursor: "pointer", padding: "1rem", paddingTop: "2.5rem" }}
        className="floating-panel-trigger"
      >
        <Box className="floating">
          <Text size="8">🎵</Text>
        </Box>
      </Dialog.Trigger>
      <Dialog.Content width="fit-content" style={{ borderRadius: 0 }}>
        <Box>
          <img src="images/shows/01.28.25.jpg" alt="show poster" />
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};
