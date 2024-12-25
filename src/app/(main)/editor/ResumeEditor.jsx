"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralInform from "./forms/GeneralInform";



const ResumeEditor = () => {
  return (
    <div className="flex grow flex-col h-full">

<header className=" space-y-1.5 border-b text-center">
        <div className="flex flex-col text-center justify-center p-4">
          <h1 className="lg:text-2xl xl:text-2xl md:text-xl font-bold">Design your resume</h1>
          <span className="text-muted-foreground">
            Follow the steps to design your resume. Progress will be saved
            automatically
          </span>
        </div>
      </header>

      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full ">
          <div className="p-3 w-full md:w-1/2">
          <GeneralInform></GeneralInform>
          </div>
          <div className="grow border-r"></div>
          <div className="hidden w-1/2 md:flex">left</div>
        </div>
      </main>


     
      <footer className="w-full p-4">
        <div className="flex  justify-between md:px-4 sm:px-2 lg:px-32 xl:px-38 space-y-1.5 items-center   w-full">
          <div className="flex gap-2">
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
