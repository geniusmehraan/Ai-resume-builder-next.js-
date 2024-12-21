"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";



const ResumeEditor = () => {
  return (
    <div className="flex grow flex-col h-full">

<header className="p-2 ">
        <div className="flex flex-col text-center justify-center p-4">
          <h1 className="text-2xl font-bold">Design your resume</h1>
          <span className="text-muted-foreground">
            Follow the steps to design your resume. Progress will be saved
            automatically
          </span>
        </div>
      </header>

      <main className="flex h-full w-full">
        <div className="flex h-full w-full "></div>
      </main>


     
      <footer className="w-full border-t p-4">
        <div className="flex justify-between items-center px-32 gap-2 w-full">
          <div>
            <Button variant={"secondary"}>Prevoius step</Button>
            <Button>Next step</Button>
          </div>
          <div className="text-muted-foreground "><Link href={"/resumes"}>Close</Link></div>
        </div>
      </footer>

    </div>
  );
};

export default ResumeEditor;
