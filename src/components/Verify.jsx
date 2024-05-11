import React, { useState } from "react";
import { useAuthValue } from "../AuthContext";

export const Verify = () => {
  const [verify, setVerify] = useState("");

  const handleVerifyInput = (e) => {
    setVerify(e.target.value);
  };

  const { currentUser } = useAuthValue();
  // implementing verification Logic
  const handleVerify = (e) => {
    e.preventDefault();
    if (verify !== "") {
    }
  };
  return (
    <div>
      <h2>Verify Your email</h2>
      <form onSubmit={handleVerify}>
        <p className="text-white">
          A message has sent to {currentUser?.email} please confirm
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
