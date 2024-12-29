import ResumeEditor from "./ResumeEditor"
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Design your resume",
  };

const page = () => {
  return (
    <div className="h-[91vh]">
 <ResumeEditor></ResumeEditor>
 </div>
  
  );
};

export default page;
