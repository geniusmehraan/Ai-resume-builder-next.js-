import ResumePreview from "@/components/ResumePreview";
import { ResumeValues } from "@/lib/validation";

interface ResumePreviewSection {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

const ResumePreviewSection = ({
  resumeData,
  setResumeData,
}: ResumePreviewSection) => {
  return <div className="hidden w-1/2 md:flex ">
<div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
<ResumePreview resumeData={resumeData} className="max-w-2xl  shadow-md"></ResumePreview>
</div>
  </div>;
};

export default ResumePreviewSection;
