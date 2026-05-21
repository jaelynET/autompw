"use client";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useVerify } from "./VerifyContext";
import { updateEmailAction } from "../_lib/actions";
import { useForm } from "react-hook-form";

function UpdateUserEmail({ userEmail }) {
  const { isVerified, setShow } = useVerify();
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const inputRef = useRef(null);
  useEffect(() => {
    if (isVerified) {
      inputRef.current?.focus();
    }
  }, [isVerified]);

  const [state, formAction, pending] = useActionState(async (state, input) => {
    return await updateEmailAction(input);
  });

  function onSubmit(newEmail) {
    const { email } = newEmail;
    startTransition(() => {
      formAction(email);
    });
  }

  return (
    <div>
      {isVerified ? (
        <form action={handleSubmit(onSubmit)}>
          <p className="text-red-500">{errors?.email?.message}</p>

          <input
            id="email"
            className={`${errors?.email?.message ? "border border-red-500" : " border border-blue-400  rounded-sm py-3 px-3 w-sm"}`}
            defaultValue={userEmail}
            ref={inputRef}
            {...register("email", {
              required: "This field is required",
              validate: (value) =>
                value.toLowerCase() !== userEmail.toLowerCase() ||
                "This email is already in use. Please use a different email address.",
            })}
          />

          <button
            type="submit"
            className="rounded-md bg-blue-500 py-3 px-3 cursor-pointer"
          >
            Save Email Address
          </button>
        </form>
      ) : (
        <div className="flex gap-3">
          <div>
            <h3>Email address</h3>
            <span>{userEmail}</span>
          </div>

          <span
            onClick={() => setShow(true)}
            className="cursor-pointer underline"
          >
            Edit email
          </span>
        </div>
      )}
    </div>
  );
}

export default UpdateUserEmail;
