import { Suspense } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

// 2. Export the component wrapped in a Suspense boundary
export default function ForgotPassword() {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading form...</div>}>
      <ForgotPasswordForm />
    </Suspense>
  );
}
