import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <main className="flex  w-full items-center  justify-center bg-black p-5 ">
     <SignUp/>;
  </main>
  )
}
