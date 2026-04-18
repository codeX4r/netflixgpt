
import { useRouteError } from "react-router-dom";


// Utility: safe navigation without requiring Router
function safeNavigate(path) {
  if (window.history.length > 1) {
    if (path === -1) {
      window.history.back();
    } else {
      window.location.href = path;
    }
  } else {
    window.location.href = "/";
  }
}

export default function Error() {
  let error;

  try {
    error = useRouteError();
  } catch (e) {
    // If not inside Router, fallback
    error = null;
  }

  // Extract dynamic error info safely
  const status = error?.status || error?.response?.status || 500;

  const message =
    error?.statusText ||
    error?.message ||
    error?.response?.data?.message ||
    "Something went wrong.";

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black z-10" />

      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
        alt="background"
        onError={(e) => (e.target.style.display = "none")}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="z-20 text-center px-6 animate-fadeIn">
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-600 animate-slideDown">
          {status}
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold mt-4 animate-fadeUp delay-200">
          {status === 404
            ? "Lost your way?"
            : status === 401
              ? "Unauthorized"
              : status === 403
                ? "Access Denied"
                : "Unexpected Error"}
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto animate-fadeUp delay-400">
          {message}
        </p>

        <div className="mt-8 flex justify-center gap-4 animate-scaleIn delay-600">
          <button
            onClick={() => safeNavigate("/")}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold"
          >
            Go Home
          </button>

          <button
            onClick={() => safeNavigate(-1)}
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Go Back
          </button>
        </div>

        <p className="mt-10 text-gray-500 text-sm">Error Code: NSES-{status}</p>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-slideDown { animation: slideDown 0.6s ease forwards; }
        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
