import { Button } from "@/components/ui/button";
import { steps } from "./steps";
import Link from "next/link";

interface FooterProps {
    currentStep:String;
    setCurrentStep:(step:string) => void;
}

export default function Footer({currentStep,setCurrentStep}:FooterProps) {

    const previousStep = steps.find(
        (_,i)=>steps[i+1]?.key===currentStep
    )?.key

    const nextStep = steps.find(
        (_,i)=>steps[i-1]?.key===currentStep
    )?.key


  return (
    <footer className="w-full   p-2 border-t">
      <div className="flex  justify-between md:px-4 sm:px-2 lg:px-32 xl:px-38  items-center   w-full">
        <div className="flex gap-2">
          <Button disabled={!previousStep} variant={"secondary"} onClick={()=>previousStep?setCurrentStep(previousStep):undefined}>Prevoius step</Button>
          <Button disabled={!nextStep} onClick={()=>nextStep?setCurrentStep(nextStep):undefined}>Next step</Button>
        </div>
        <div className="text-muted-foreground ">
          <Link href={"/resumes"}>Close</Link>
        </div>
      </div>
    </footer>
  );
}
