import UpdateUser from "@/app/_components/UpdateUser";
import { VerifyProvider } from "@/app/_components/VerifyContext";
import { createClient } from "@/app/utils/supabase/server";
//import { createUser, getUser } from "../_lib/apiAuth";

async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const { app_metadata, user_metadata } = data.user;

  return (
    <div>
      <VerifyProvider>
        <h2>Account Details</h2>
        {app_metadata.provider === "email" && (
          <UpdateUser user={user_metadata} />
        )}
      </VerifyProvider>
    </div>
  );
}
export default Page;
