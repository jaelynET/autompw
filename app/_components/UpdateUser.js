"use client";

import { useEffect, useRef, useState } from "react";
import VerifyItsYou from "./VerifyItsYou";
import { useVerify } from "./VerifyContext";
import UpdateUserEmail from "./UpdateUserEmail";
import UpdateUserPassword from "./UpdateUserPassword";

function UpdateUser({ user }) {
  const { fullName, email } = user;
  const { isVerified, setIsVerified, show, setShow } = useVerify();

  return (
    <div>
      <form>
        <div>
          <h3>Name</h3>
          <input
            name="fullName"
            className="border border-primary-400 rounded-sm py-3 px-3"
            defaultValue={fullName}
          />
        </div>
        {/* <div>
          <label>Password</label>
          <input name="password" disabled={!isVerified} />
        </div> */}
      </form>
      <UpdateUserEmail userEmail={email} />
      <UpdateUserPassword />
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShow(false)}
          />
          <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <VerifyItsYou userEmail={email} />
          </div>
        </div>
      )}
    </div>
  );
}
export default UpdateUser;
