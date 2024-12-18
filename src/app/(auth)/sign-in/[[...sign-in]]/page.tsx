import { SignIn } from "@clerk/nextjs";
export default function page() {
  return (
    <main className="flex   w-full    justify-center bg-black p-5">
        <SignIn/>;
    </main>
  );
}
