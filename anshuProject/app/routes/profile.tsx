import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

/* ------------------ NavBar Component ------------------ */
function NavBar() {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-2xl font-bold">
          BetMaster
        </Link>

        {/* Main Nav Links */}
        <ul className="flex gap-6">
          <li>
            <Link to="/live-betting" className="hover:underline">
              Live Betting
            </Link>
          </li>
          <li>
            <Link to="/results" className="hover:underline">
              Results
            </Link>
          </li>
          <li>
            <Link to="/promotions" className="hover:underline">
              Promotions
            </Link>
          </li>
        </ul>

        {/* Auth Buttons (Optional) */}
        <div className="flex gap-3">
          <button className="rounded bg-white px-4 py-2 font-bold text-green-600 hover:bg-gray-200">
            Login
          </button>
          <button className="rounded border border-white px-4 py-2 font-bold hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ------------------ Footer Component ------------------ */
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      <p className="mb-1">&copy; 2023 BetMaster. All rights reserved.</p>
      <p className="text-xs">Please gamble responsibly.</p>
    </footer>
  );
}

/* ------------------ Page Meta ------------------ */
export const meta: MetaFunction = () => {
  return [
    { title: "Profile - BetMaster" },
    { name: "description", content: "View and manage your BetMaster account." },
  ];
};

/* ------------------ Profile Page ------------------ */
export default function Profile() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* NavBar at the Top */}
      <NavBar />

      {/* Profile Header */}
      <header className="flex flex-col items-center justify-center gap-2 bg-gray-100 px-4 py-12 shadow dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Your Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your account, review your stats, and update preferences
        </p>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 md:px-8">
        {/* Basic Info & Avatar */}
        <section className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:items-start md:text-left">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Avatar"
              className="h-40 w-40 rounded-full border-2 border-green-600 object-cover shadow"
            />
          </div>
          {/* Basic User Info */}
          <div className="flex flex-col gap-2 md:ml-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              John Doe
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Member since January 2023
            </p>
            <Link
              to="/profile/edit"
              className="mt-4 inline-block rounded bg-green-600 px-6 py-2 font-bold text-white hover:bg-green-700"
            >
              Edit Profile
            </Link>
          </div>
        </section>

        {/* Stats and Recent Activity */}
        <section className="grid gap-8 md:grid-cols-2">
          {/* Quick Stats */}
          <div className="rounded bg-gray-50 p-6 shadow dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              Quick Stats
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                <strong className="font-medium text-gray-800 dark:text-gray-100">
                  Total Bets:
                </strong>{" "}
                124
              </li>
              <li>
                <strong className="font-medium text-gray-800 dark:text-gray-100">
                  Winning Bets:
                </strong>{" "}
                78
              </li>
              <li>
                <strong className="font-medium text-gray-800 dark:text-gray-100">
                  Win Ratio:
                </strong>{" "}
                ~63%
              </li>
              <li>
                <strong className="font-medium text-gray-800 dark:text-gray-100">
                  Total Earnings:
                </strong>{" "}
                $1,250
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="rounded bg-gray-50 p-6 shadow dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
              Recent Activity
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="rounded bg-white p-3 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <p>
                  Placed a bet on{" "}
                  <span className="font-semibold text-green-600">
                    LA Lakers vs. Miami Heat
                  </span>
                </p>
                <small className="text-xs text-gray-500 dark:text-gray-400">
                  2 hours ago
                </small>
              </li>
              <li className="rounded bg-white p-3 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <p>
                  Won $50 on{" "}
                  <span className="font-semibold text-green-600">
                    Premier League
                  </span>
                </p>
                <small className="text-xs text-gray-500 dark:text-gray-400">
                  1 day ago
                </small>
              </li>
              <li className="rounded bg-white p-3 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
                <p>
                  Withdrew $200 to PayPal
                </p>
                <small className="text-xs text-gray-500 dark:text-gray-400">
                  3 days ago
                </small>
              </li>
            </ul>
          </div>
        </section>

        {/* Another CTA or Extra Section */}
        <section className="mt-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
            Ready to place your next bet?
          </h2>
          <Link
            to="/live-betting"
            className="rounded bg-green-600 px-8 py-3 font-bold text-white hover:bg-green-700"
          >
            Go to Live Betting
          </Link>
        </section>
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
}
