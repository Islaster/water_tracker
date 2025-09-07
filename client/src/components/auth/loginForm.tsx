import { useUserContext } from "../../contexts/userContext";

export default function LoginForm() {
  const { updateUserState, userState } = useUserContext();
  function handleSubmit() {
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userState }),
    });
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={() => handleSubmit}>
      {/* Username */}
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700 font-medium mb-1">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="username"
          placeholder="Enter your username"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => updateUserState("user", e.target.value)}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700 font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => updateUserState("pass", e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
      >
        Login
      </button>
    </form>
  );
}
