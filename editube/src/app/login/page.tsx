import React from "react";

function Login() {
  return (
    <div className="flex justify-center gap-4 text-3xl pt-48">
      <button className="border rounded-xl shadow-md p-4 pb-16">
        Login as Editor
      </button>
      <button className="border rounded-xl shadow-md p-4 pb-16">
        Login as Creator
      </button>
    </div>
  );
}

export default Login;
