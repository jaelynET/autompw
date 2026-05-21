"use client";

import ResetPassword from "./ResetPassword";
import { useVerify } from "./VerifyContext";

function UpdateUserPassword() {
  const { setShow, isVerified } = useVerify();
  return (
    <div>
      {isVerified ? (
        <ResetPassword isEditProfile={true} />
      ) : (
        <>
          <div className="flex gap-3">
            <h3>Password</h3>
            <span
              onClick={() => setShow(true)}
              className="cursor-pointer underline"
            >
              Edit password
            </span>
          </div>
          <span className="tracking-widest font-extrabold text-2xl">.....</span>
        </>
      )}
    </div>
  );
}

export default UpdateUserPassword;
