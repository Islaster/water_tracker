import { useState } from "react";
import SignupForm from "../components/auth/signupForm";
import LoginForm from "../components/auth/loginForm";

export default function Auth() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Pills Container */}
      <div className="relative flex justify-center mb-6 bg-blue-100/30 rounded-full p-1">
        {/* Sliding Background */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-blue-500 rounded-full transition-transform duration-300 ${
            activeTab === "signup" ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        {/* Buttons */}
        <button
          onClick={() => setActiveTab("login")}
          className={`relative w-1/2 py-2 font-semibold text-center transition-colors duration-300 ${
            activeTab === "login" ? "text-white" : "text-blue-700"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`relative w-1/2 py-2 font-semibold text-center transition-colors duration-300 ${
            activeTab === "signup" ? "text-white" : "text-blue-700"
          }`}
        >
          Signup
        </button>
      </div>

      {/* Forms */}
      <div className="bg-white/80 rounded-2xl p-6 shadow-md backdrop-blur-sm">
        {activeTab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
