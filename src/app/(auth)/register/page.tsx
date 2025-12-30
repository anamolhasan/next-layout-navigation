import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 px-4">
      {/* Register Card */}
      <div className=" p-10 rounded-xl shadow-lg max-w-md w-full text-center backdrop-blur-3xl">
        <h1 className="text-4xl font-bold mb-6 text-green-700">Register</h1>
        <p className=" mb-6">
          Sign up to get started with Bike Sharing
        </p>

        {/* Register Button (dummy) */}
        <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition mb-4">
          Register
        </button>

        {/* Option to go Home without registration */}
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link href="/" className="text-green-700 font-semibold hover:underline">
            Go to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
