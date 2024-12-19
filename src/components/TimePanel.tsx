import { useState, useEffect } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import { BevelBox } from "./BevelBox";
import { SmallHeader } from "./SmallHeader";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Text>{time.toLocaleTimeString()}</Text>;
};

const Sticker = ({
  coords,
  icon = "💋",
}: {
  coords: [string, string];
  icon?: string;
}) => {
  const [opacity, setOpacity] = useState(0.7);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div
      style={{
        position: "absolute",
        top: `${coords[0]}`,
        left: `${coords[1]}`,
        zIndex: 1,
        pointerEvents: "none",
        opacity: opacity,
        transition: "opacity 1s",
      }}
    >
      <div style={{ fontSize: "700%" }}>{icon}</div>
    </div>
  );
};

const initialGil = 25000;

const newStickerPosition = () => {
  // number between 0 and 100
  const result = `${Math.floor(Math.random() * 100)}%`;
  return result;
};

export const TimePanel = () => {
  const [gil, setGil] = useState(initialGil);
  const [spendAmount, setSpendAmount] = useState(5);
  const [clicks, setClicks] = useState(0);
  const [stickers, setStickers] = useState<[string, string][]>([]);
  const [walletColor, setWalletColor] = useState<any>("unset");

  useEffect(() => {
    let clearStickers: any;
    if (!gil) {
      clearStickers = setTimeout(() => {
        setStickers([]);
      }, 2000);
      return;
    }
    if (clicks && clicks % 2 === 0) {
      setStickers((prev) => [
        ...prev,
        [newStickerPosition(), newStickerPosition()],
      ]);
    }
    if (clicks && clicks % 5 === 0) {
      setSpendAmount((prev) => prev * 2);
    }
    return () => {
      if (clearStickers) {
        clearTimeout(clearStickers);
      }
    };
  }, [clicks]);

  const formattedGill = new Intl.NumberFormat("en-US", {
    currency: "USD",
  }).format(gil);

  const spend = () => {
    setClicks((prev) => prev + 1);
    setGil((prev) => {
      const result = prev - spendAmount;
      if (result <= 0) {
        setWalletColor("unset");
        return 0;
      }
      if (result < 15000) {
        setWalletColor("red");
      }
      return result;
    });
  };

  return (
    <Box mt="3">
      <BevelBox>
        {stickers.map((coords, index) => (
          <Sticker
            key={index}
            coords={coords}
            icon={gil <= 500 ? "😵" : undefined}
          />
        ))}
        <Box position="relative">
          <SmallHeader>Time & Gil</SmallHeader>
          <Flex
            className="rounded-card gray-card"
            direction="column"
            p="2"
            gap="1"
          >
            <Flex justify="center" gap="2">
              <Text>🕒</Text>
              <Clock />
            </Flex>
            <Flex justify="center" align="center" gap="6">
              <Flex gap="2">
                <Text>💰</Text>
                <Text color={walletColor}>{formattedGill}G</Text>
              </Flex>
              <Button
                onClick={spend}
                variant="ghost"
                style={{ cursor: "pointer" }}
              >
                <Text size="5">🫰</Text>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </BevelBox>
    </Box>
  );
};
