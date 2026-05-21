import { useState } from "react";
import { useVerify } from "./VerifyContext";
import { useForm } from "react-hook-form";
import { createClient } from "../utils/supabase/client";

function VerifyItsYou({ userEmail }) {
  const [authError, setAuthError] = useState(null);

  const { isVerified, setIsVerified, show, setShow } = useVerify();
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  async function onSubmit({ password }) {
    setAuthError(null);

    const supabase = createClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email: userEmail,
        password: password,
      },
    );

    if (signInError) {
      setAuthError("Incorrect password. Please try again");
      return;
    }

    setIsVerified(true);
    setShow(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="font-bold">Verify Its You</h1>
      {authError && <p className="text-sm text-red-500">{authError}</p>}
      <input
        type="text"
        placeholder="Enter your password"
        {...register("password", {
          required: "Password is required",
        })}
      />

      <button
        type="submit"
        className="rounded-md bg-blue-500 py-3 px-3 cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
}

export default VerifyItsYou;
