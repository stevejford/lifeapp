import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <SignIn appearance={{
        elements: {
          rootBox: "flex flex-col items-center justify-center",
          card: "w-full max-w-md",
        }
      }} path="/forgot-password" routing="path" />
    </div>
  );
}
