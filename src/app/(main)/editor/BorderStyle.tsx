import { Button } from "@/components/ui/button";
import { Circle, Square, Squircle } from "lucide-react";

export const BorderStyles = {
  SQUARE: "square",
  CIRCLE: "circle",
  SQUIRCLE: "squircle",
};

const borderStyles = Object.values(BorderStyles);

interface BorderStyleProps {
  borderStyle: string | undefined;
  onChange: (borderStyle: string) => void;
}
const BorderStyle = ({ borderStyle, onChange }: BorderStyleProps) => {
  function onChangeHandle() {
    const currentIndex = borderStyle ? borderStyles.indexOf(borderStyle) : 0;

    const nextIndex = (currentIndex + 1) % borderStyles?.length;

    onChange(borderStyles[nextIndex]);
  }

  const Icon =
    borderStyle === "square"
      ? Square
      : borderStyle === "circle"
        ? Circle
        : Squircle;

  return (
    <Button variant={"outline"} size={"icon"} onClick={onChangeHandle}>
      {<Icon className="size-5" />}
    </Button>
  );
};

export default BorderStyle;
