import { Link } from "react-router";

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/landing/water.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          💧 Water Tracker
        </h1>

        <section className="text-white text-lg sm:text-xl max-w-xl">
          Create an account to keep track of how much water you&apos;re drinking
          and stay hydrated every day.
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Primary button */}
          <Link to="auth">
            <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
              Login / Signup
            </button>
          </Link>

          {/* Secondary button */}
          <Link to="calc">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-100 transition">
              Estimate Water Intake
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
