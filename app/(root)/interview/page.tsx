import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const page = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <Agent
        userName={user?.name ?? "Guest"}
        userId={user?.id ?? "unknown"}
        type="generate"
      />
    </>
  );
};

export default page;
