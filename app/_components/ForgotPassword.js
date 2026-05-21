"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { forgotPasswordAction, resetPassword } from "../_lib/actions";
import { startTransition, useActionState, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const searchParams = useSearchParams();

  const { register, formState, getValues, handleSubmit } = useForm();

  const [state, formAction, pending] = useActionState(async (state, input) => {
    return await forgotPasswordAction(input);
  });

  // const supabase = createClient();
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const [emailUsed, setEmailUsed] = useState(searchParams.get("email") ?? "");
  // const [loading, setLoading] = useState(false);
  // const initialState = {
  //   user: "",
  // };
  const emailIsValid = isValidEmail(emailUsed);
  const canSubmit = emailIsValid;

  // async function handleSubmit() {
  //   e.preventDefault();
  //   if (!canSubmit) return;
  //   setLoading(true);
  //   await supabase.auth.resetPasswordForEmail(email, {
  //     redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  //   });
  //   setLoading(false);
  // }

  return (
    <form action={(formData) => formAction(formData)} className="space-y-4">
      <h1 className="mb-3">Reset Your Password</h1>
      <input
        type="email"
        name="email"
        value={emailUsed}
        onChange={(e) => setEmailUsed(e.target.value)}
        className="w-full rounded-md border px-3 py-2"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-md bg-black py-2 text-white
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        Send reset link
      </button>
    </form>
  );
}

export default ForgotPassword;
