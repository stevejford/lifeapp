import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold">Dashboard</h1>
      <p className="mb-4 text-xl">Welcome to your Memorial App dashboard, {user.firstName}!</p>
      <p className="text-lg">Here you can manage your memorials and life stories.</p>
      <p className="mt-4 text-sm">User ID: {user.id}</p>
    </div>
  );
}
