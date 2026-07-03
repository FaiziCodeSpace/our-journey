import { redirect } from "next/navigation";
import { auth } from "@/auth";
import HomeClient from "./HomeClient";

export default async function Page() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return <HomeClient />;
}