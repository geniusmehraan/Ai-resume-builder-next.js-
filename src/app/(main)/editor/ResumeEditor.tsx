"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralInform from "./forms/GeneralInform";
import PersonalInform from "./forms/PersonalInform";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Brudscrumb from "./Brudscrumb";
import Footer from "./Footer";



const ResumeEditor = () => {
   const searchParams = useSearchParams();

   const  currentStep = searchParams.get("step") || steps[0].key
   
   function setStep(key:string){
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.set("step",key)
        window.history.pushState(null, "",`?${newSearchParams.toString()}`)
   }

   const FormComponent = steps.find(
    steps => steps.key === currentStep
    
   )?.component;
  return (
    <div className="flex grow flex-col h-full">

<header className=" space-y-1.5 border-b text-center">
        <div className="flex flex-col text-center justify-center p-2">
          <h1 className="lg:text-xl xl:text-xl md:text-xl font-bold">Design your resume</h1>
          <span className="text-muted-foreground text-sm">
            Follow the steps to design your resume. Progress will be saved
            automatically
          </span>
        </div>
      </header>

      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full ">
          <div className="w-full md:w-1/2 space-y-2">
       <Brudscrumb currentStep={currentStep} setCurrentStep={setStep}></Brudscrumb>
       {
        FormComponent&&<FormComponent/>
       }
          </div>
          <div className="grow border-r"></div>
          <div className="hidden w-1/2 md:flex">left</div>
        </div>
      </main>     
      <Footer currentStep={currentStep} setCurrentStep={setStep}/>
    </div>
  );
};

export default ResumeEditor;
