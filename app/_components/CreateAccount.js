"use client";

import { useForm } from "react-hook-form";
import { startTransition, useActionState, useState } from "react";
import { signupAction } from "../_lib/actions";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import SpinnerMini from "./SpinnerMini";

function CreateAccount({ userEmail }) {
  const { register, formState, getValues, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const { errors } = formState;

  const [state, formAction, isPending] = useActionState(
    async (state, input) => {
      return await signupAction(input);
    },
  );

  function onSubmit({ fullName, email, password }) {
    startTransition(() => {
      formAction({ fullName, email, password });
    });
  }

  async function handleChange() {
    startTransition(() => {
      formAction(null);
    });
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white border border-stone-200/60 rounded-xl shadow-sm p-6 sm:p-8 mt-10 md:mt-16">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* --- FORM HEADER --- */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
            Create Your Account
          </h2>
          <p className="text-xs text-stone-500">
            Join us to save your cart details and track your premium fixture
            orders.
          </p>
        </div>

        {/* =================================================================
            1. EMAIL FIELD 
           ================================================================= */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="text-xs font-bold text-stone-600 uppercase tracking-wide"
            >
              Email Address
            </label>
            {errors?.email?.message && (
              <p className="text-xs font-medium text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <input
            id="email"
            type="email"
            defaultValue={userEmail || ""}
            placeholder="example@email.com"
            className="w-full border border-stone-200 bg-white rounded-md py-3 px-4 text-sm text-stone-900 transition-all placeholder-stone-400
              focus:border-[#625548] focus:ring-1 focus:ring-[#625548] focus:outline-none shadow-sm data-[error=true]:border-red-300"
            data-error={!!errors?.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address!",
              },
            })}
          />
        </div>

        {/* =================================================================
            2. FULL NAME FIELD 
           ================================================================= */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="fullName"
              className="text-xs font-bold text-stone-600 uppercase tracking-wide"
            >
              Full Name
            </label>
            {errors?.fullName?.message && (
              <p className="text-xs font-medium text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <input
            id="fullName"
            type="text"
            placeholder="John Doe"
            className="w-full border border-stone-200 bg-white rounded-md py-3 px-4 text-sm text-stone-900 transition-all placeholder-stone-300
              focus:border-[#625548] focus:ring-1 focus:ring-[#625548] focus:outline-none shadow-sm data-[error=true]:border-red-300"
            data-error={!!errors?.fullName}
            {...register("fullName", { required: "Full name is required" })}
          />
        </div>

        {/* =================================================================
            3. SECURE PASSWORD FIELD 
           ================================================================= */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-xs font-bold text-stone-600 uppercase tracking-wide"
            >
              Password
            </label>
            {errors?.password?.message && (
              <p className="text-xs font-medium text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="relative w-full">
            <input
              id="password"
              type={showPassword ? "text" : "password"} // Fixed: Secure standard masks typing safely
              placeholder="••••••••"
              className="w-full border border-stone-200 bg-white rounded-md py-3 pl-4 pr-11 text-sm text-stone-900 transition-all placeholder-stone-300
                focus:border-[#625548] focus:ring-1 focus:ring-[#625548] focus:outline-none shadow-sm data-[error=true]:border-red-300"
              data-error={!!errors?.password}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {/* Show/Hide password toggle */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* --- SUBMIT ACTIONS ROW --- */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-button hover:bg-[#4d4238] text-white font-bold text-sm py-3.5 px-4 rounded-md shadow-sm 
            transition-all duration-200 tracking-wider uppercase select-none cursor-pointer active:scale-[0.99] mt-2"
        >
          {isPending ? (
            <>
              <SpinnerMini />
              <span>Creating your account...</span>
            </>
          ) : (
            // If you are using a single-step form, use "Continue"
            <span>Create Account</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;

/* 
<div>
      <p onClick={() => setIsOpen((show) => !show)} className="cursor-pointer">
        Create account
      </p>

      {isOpen && (
        // <form action={signupAction}>
        <form action={handleSubmit(onSubmit)}>
          <div>
            <h3>Full name</h3>
            <p className="text-red-500">{errors?.fullName?.message}</p>
            <input
              type="text"
              placeholder="full name"
              id="fullName"
              className=" border border-primary-400 rounded-sm py-3 px-3"
              {...register("fullName", { required: "This field is required" })}
            />
          </div>

          <div>
            <h3>Email</h3>
            <p className="text-red-500">{errors?.email?.message}</p>

            <input
              type="text"
              placeholder="email"
              id="email"
              className=" border border-primary-400 rounded-sm py-3 px-3"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address!",
                },
              })}
            />
          </div>
          <div>
            <h3>Password</h3>
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
          <button className="rounded-md bg-primary-400 py-3 px-3 cursor-pointer">
            Sign up
          </button>
        </form>
      )}
    </div>

*/
