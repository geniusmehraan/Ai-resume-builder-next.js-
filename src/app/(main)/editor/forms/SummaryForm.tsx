import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/Types";
import {summarySchema, SummaryValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const SummaryForm = ({resumeData,setResumeData}:EditorFormProps) => {

    const form = useForm<SummaryValues>({
        resolver:zodResolver(summarySchema),
        defaultValues:{
            summary:resumeData.summary||""
        }
    })

     useEffect(() => {
        const { unsubscribe } = form.watch(async (values) => {
          const isValid = await form.trigger();
    
          if (!isValid) {
            return;
          }
          setResumeData({...resumeData,summary:values.summary})
        });
        return unsubscribe;
      }, [form,resumeData,setResumeData]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
    <div className="space-y-1.5 text-center">
      <h2 className="text-lg font-semibold">Skills</h2>
    </div>

    <Form {...form}>
        <form>
            <FormField control={form.control} name="summary" render={({field})=>(
                <FormItem>
                    <FormLabel className="sr-only">Summary</FormLabel>
                    <FormControl>
                        <Textarea {...field} placeholder="Tell about your self in brief"/>
                    </FormControl>
                </FormItem>
            )}/>
        </form>
    </Form>
   
  </div>    
);
}

export default SummaryForm
