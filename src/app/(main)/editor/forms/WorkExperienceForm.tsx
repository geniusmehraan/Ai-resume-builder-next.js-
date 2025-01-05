import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/Types";
import { workExperiencesSchema, WorkExperiencesValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { GripHorizontal } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";

const WorkExperienceForm = ({ resumeData, setResumeData }: EditorFormProps) => {
  const form = useForm<WorkExperiencesValues>({
    resolver: zodResolver(workExperiencesSchema),
    defaultValues: {
      workExperiences: resumeData.workExperiences || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();

      if (!isValid) {
        return;
      }
      setResumeData({
        ...resumeData,

        workExperiences:
          values.workExperiences?.filter((exp) => exp !== undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "workExperiences",
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-lg font-semibold">Work Experience</h2>
      </div>
      <Form {...form}>
        <form className="spce-y-3">
          {fields.map((field, index) => (
            <WorkExperience
              key={field.id}
              index={index}
              form={form}
              remove={remove}
            />
          ))}
          <div className="mt-6">
            <Button
              type="button"
              onClick={() =>
                append({
                  position: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  descrption: "",
                })
              }
            >
              Add Experience
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WorkExperienceForm;

interface WorkExperieneProps {
  form: UseFormReturn<WorkExperiencesValues>;
  index: number;
  remove: (index: number) => void;
}

const WorkExperience = ({ form, index, remove }: WorkExperieneProps) => {
  return (
    <div className="space-y-3 mb-2 border bg-background p-3">
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Work Experience {index + 1}</span>
        <GripHorizontal className="cursor-grab"></GripHorizontal>
      </div>

      

      <div className="grid grid-cols-2 gap-2">
      <FormField
        control={form.control}
        name={`workExperiences.${index}.position`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Work Title</FormLabel>
            <FormControl>
              <Input {...field} autoFocus></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`workExperiences.${index}.company`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input {...field} autoFocus></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>

      <FormField
        control={form.control}
        name={`workExperiences.${index}.descrption`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} autoFocus/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`workExperiences.${index}.startDate`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Start Date</FormLabel>
            <FormControl>
              <Input {...field} type="date" autoFocus></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      

      <FormField
        control={form.control}
        name={`workExperiences.${index}.endDate`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>End Date</FormLabel>
            <FormControl>
              <Input {...field} type="date" autoFocus></Input>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<Button variant={"destructive"} onClick={()=>remove(index)}>Remove</Button>

    </div>
  );
};
