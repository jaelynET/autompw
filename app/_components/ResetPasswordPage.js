"use client";
import ResetPassword from "@/app/_components/ResetPassword";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useRef, useState } from "react";

function ResetPasswordPage() {
  const supabase = createClient();
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      // Just check if the route.js successfully logged us in
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("Session not found. Please try the reset link again.");
        return;
      }
      setReady(true);
    };

    checkSession();
  }, [supabase]);
  if (error) return <p className="text-red-600">{error}</p>;
  if (!ready) return <p>Verifying session…</p>;
  return <ResetPassword />;
}

export default ResetPasswordPage;
