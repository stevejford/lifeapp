import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <p className="text-xl mb-4">Welcome to your Memorial App dashboard, {user.firstName}!</p>
      <p className="text-lg">Here you can manage your memorials and life stories.</p>
      <p className="text-sm mt-4">User ID: {user.id}</p>
    </div>
  );
}
