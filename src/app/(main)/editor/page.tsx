import React, { Suspense } from "react";
import ResumeEditor from "./ResumeEditor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design your resume",
};

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense Wrapper */}
        <ResumeEditor />
      </Suspense>
    </div>
  );
};

export default page;
