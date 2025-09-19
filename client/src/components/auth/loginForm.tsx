import { useUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const { updateUserState, userState, setLoggedInState } = useUserContext();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      //send data to the server
      const res = await fetch("http://localhost:3001/api/login/", {
        // endpoint
        method: "POST", //needed to send data to the server
        headers: {
          "Content-Type": "application/json", //type of data im sending
        },
        //data being sent
        body: JSON.stringify({
          username: userState.user,
          password: userState.pass,
        }),
      });
      //transforms promsise to data
      const data = await res.json();
      localStorage.setItem("user", data.id);
      setLoggedInState(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
