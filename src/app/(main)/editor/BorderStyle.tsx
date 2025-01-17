import { Button } from "@/components/ui/button";
import { Squircle } from "lucide-react";


export const BorderStyles={
    SQUARE:"square",
    CIRCLE:"circle",
    SQUIRCLE:"squircle"
}

const borderStyles = Object.values(BorderStyles)

interface BorderStyleProps {
  borderStyle: string | undefined;
  onChange: (borderStyle: string) => void;
}
const BorderStyle = ({ borderStyle, onChange }: BorderStyleProps) => {
  function onChangeHandle() {
   const currentIndex = borderStyle ? borderStyles.indexOf(borderStyle):0 

  }
  return (
    <Button variant={"outline"} size={"icon"} onClick={onChangeHandle}>
      <Squircle />
    </Button>
  );
};

export default BorderStyle;
