
import GeneralInform from "./forms/GeneralInform";
import PersonalInform from "./forms/PersonalInform";

export const steps :{
       title:string;
       component:React.ComponentType;
       key:string;
}[]=[
    {title:"General info",component:GeneralInform,key:"general-info"},
    {title:"Personal info",component:PersonalInform,key:"personal-info"},

]