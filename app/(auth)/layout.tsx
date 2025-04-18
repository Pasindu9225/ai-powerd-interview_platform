import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const authlayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect("/");

  return <div className=" auth-layout">{children}</div>;
};

export default authlayout;
