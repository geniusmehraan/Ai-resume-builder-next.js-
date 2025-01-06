import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation"

interface ResumePreviewProps {
  resumeData:ResumeValues;
  className?:String;
}

const ResumePreview = ({resumeData,className}:ResumePreviewProps) => {
  return (
    <div className={cn("bg-white text-black h-fit w-full aspect-[210/297]",className,)}>
      <h1 className="p-6 text-3xl font-semibold">This text should change with size of the container div</h1>
    </div>
  )
}

export default ResumePreview
