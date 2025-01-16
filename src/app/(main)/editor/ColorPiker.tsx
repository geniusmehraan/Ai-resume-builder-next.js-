import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";
import { Color ,ColorChangeHandler, TwitterPicker} from "react-color"

interface ColorPickerProps{
    color:Color|undefined;
    onChange:ColorChangeHandler
}

const ColorPiker = ({color,onChange}:ColorPickerProps) => {
    const [showPopover,setShowpopover] = useState(false)
  return (
    <Popover open={showPopover} onOpenChange={setShowpopover}>
<PopoverTrigger asChild>
<Button variant={"outline"} size={"icon"} title="Change resume color" onClick={()=>setShowpopover(true)}>
    <PaletteIcon className="size-5"/>
</Button>
</PopoverTrigger>
<PopoverContent className="border-none bg-transparent shadow-none" align="end">
  <TwitterPicker color={color} onChange={onChange} triangle="top-right"/>
  </PopoverContent>
    </Popover>
  )
}

export default ColorPiker
