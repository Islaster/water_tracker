import { Link, useLocation, useNavigate } from "react-router";
import { useWaterContext } from "../contexts/waterContext";
import { useUserContext } from "../contexts/userContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { loggedIn, setLoggedIn, setLoggedInState } = useUserContext();
  const { setChangeUnit, changeUnit } = useWaterContext();

  function logOut() {
    setLoggedIn(false);
    setLoggedInState(undefined);
    navigate("/ ");
  }
  function renderUnits() {
    //pages to render on
    const pages = ["/calc", "/dashboard"];
    const matchedPage = pages.find((page) => page == pathname);
    if (matchedPage) {
      return (
        <button
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 font-medium rounded-full hover:bg-blue-200 transition"
          onClick={() => setChangeUnit(!changeUnit)}
        >
          Switch Units
        </button>
      );
    }
  }

  function renderAuth() {
    if (loggedIn) {
      return (
        <>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <div
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            onClick={() => logOut()}
          >
            Log Out
          </div>
        </>
      );
    } else {
      return (
        <Link
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          to="/auth"
        >
          Log in / Signup
        </Link>
      );
    }
  }

  return (
    <nav className="w-full bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="text-lg sm:text-xl font-semibold text-gray-900">
              💧 Water Tracker
            </div>
          </Link>
        </div>

        {/* Right side: Unit switch + Auth */}
        <div className="flex items-center gap-3">
          {/* your existing button, unchanged */}
          {renderUnits()}

          {/* Auth dropdown (pure HTML/CSS) */}
          <details className="relative">
            <summary
              className="list-none inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Open user menu"
            >
              {/* user icon */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path d="M12 12c2.8 0 5-2.7 5-6s-2.2-6-5-6-5 2.7-5 6 2.2 6 5 6Zm0 2c-5.3 0-9 3.2-9 6.5 0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5 0-3.3-3.7-6.5-9-6.5Z" />
              </svg>
            </summary>

            {/* menu */}
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-gray-200 bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 overflow-hidden">
              <div className="py-1">{renderAuth()}</div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
