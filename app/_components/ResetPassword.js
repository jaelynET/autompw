"use client";

import { useForm } from "react-hook-form";
import { updatePasswordAction } from "../_lib/actions";
import { startTransition, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function ResetPassword({ isEditProfile = false }) {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    async (prevState, formAction) => {
      const password = formAction.get("password");
      return await updatePasswordAction(password);
    },
    { success: false },
  );

  useEffect(() => {
    if (state?.success && !isEditProfile) {
      toast.success("Updated successfully!");
    }
    if (!isEditProfile) {
      const timer = setTimeOut(() => {
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state?.success, router, isEditProfile]);

  return (
    <>
      {!state.success && (
        <form action={formAction}>
          <div>
            <h3>Enter New Password</h3>
            <p className="text-red-500">{errors?.password?.message}</p>

            <input
              type="text"
              placeholder="password"
              id="password"
              className=" border border-primary-400 rounded-sm py-3 px-3"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message:
                    "Password needs to have a minimum length of 8 characters",
                },
              })}
            />
          </div>
          <div>
            <h3>Confirm password</h3>
            <p className="text-red-500">{errors?.passwordConfirm?.message}</p>

            <input
              type="text"
              placeholder="confirm password"
              id="passwordConfirm"
              className=" border border-primary-400 rounded-sm py-3 px-3"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 py-3 px-3 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Updating..." : "Reset your password"}
          </button>
        </form>
      )}
      {state?.success && isEditProfile && (
        <p className="text-green-600 text-sm mt-2">
          Your password has been updated
        </p>
      )}
    </>
  );
}

export default ResetPassword;
