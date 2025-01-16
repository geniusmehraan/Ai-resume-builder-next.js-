import ResumePreview from "@/components/ResumePreview";
import { ResumeValues } from "@/lib/validation";
import ColorPiker from "./ColorPiker";

interface ResumePreviewSection {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

const ResumePreviewSection = ({
  resumeData,
  setResumeData,
}: ResumePreviewSection) => {
  return (
    <div className="relative hidden w-1/2 md:flex ">
      <div className="absolute left-1 top-1 lg:left-3 flex flex-col gap-3 flex-none lg:top-3">
        <ColorPiker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />
      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <ResumePreview
          resumeData={resumeData}
          className="max-w-2xl  shadow-md"
        ></ResumePreview>
      </div>
    </div>
  );
};

export default ResumePreviewSection;
