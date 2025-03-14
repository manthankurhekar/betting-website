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

        {/* Auth Buttons */}
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
    { title: "My Awesome Landing Page" },
    { name: "description", content: "Welcome to our product or brand!" },
  ];
};

/* ------------------ Home Page ------------------ */
export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      {/* NavBar at the Top */}
      <NavBar />

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center gap-4 px-4 py-16 text-center md:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
          Welcome to Our Landing Page
        </h1>
        <p className="max-w-2xl text-gray-700 dark:text-gray-200">
          Experience the next generation of web apps with our cutting-edge
          platform.
        </p>
        <a
          href="#get-started"
          className="mt-6 inline-block rounded bg-indigo-600 px-8 py-3 font-bold text-white hover:bg-indigo-700 dark:hover:bg-indigo-500"
        >
          Get Started
        </a>
      </header>

      {/* GIF Section */}
      <div className="mainGif flex justify-center">
        <img
          src="https://media1.tenor.com/m/nz3H_V9w618AAAAC/uncut-gems-sports-betting.gif"
          alt="Sports Betting Excitement"
          className="max-w-full rounded shadow"
        />
      </div>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 py-16 md:px-8">
        {/* --------------- Additional Betting Features Section --------------- */}
        <section className="w-full">
          <h2
            id="features"
            className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-gray-100"
          >
            Our Top Betting Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1: Live Odds */}
            <div className="rounded-lg bg-gray-50 p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Live Odds & Real-Time Updates
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Get instant access to live odds and up-to-the-minute statistics.
                Our lightning-fast platform updates you on every play, goal,
                or point scored so you never miss a beat.
              </p>
            </div>
            {/* Feature 2: Wide Range of Sports */}
            <div className="rounded-lg bg-gray-50 p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Wide Range of Sports
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                From football and basketball to esports and horse racing, we
                cover it all. Our comprehensive sportsbook ensures you can find
                the match that excites you the most.
              </p>
            </div>
            {/* Feature 3: Secure Transactions */}
            <div className="rounded-lg bg-gray-50 p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Fast & Secure Transactions
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Deposit and withdraw with ease. We prioritize security, ensuring
                your money and personal data are always safe.
              </p>
            </div>
            {/* Feature 4: Bonuses & Promotions */}
            <div className="rounded-lg bg-gray-50 p-6 shadow dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Bonuses & Promotions
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Enjoy daily boosts, free bets, and seasonal promotions tailored
                just for you. There’s always something special waiting at
                BetMaster.
              </p>
            </div>
          </div>
        </section>

        {/* --------------- CTA Section --------------- */}
        <section className="mt-12 flex w-full flex-col items-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
            Ready to Join the Action?
          </h2>
          <Link
            to="/promotions"
            className="rounded bg-green-600 px-8 py-3 font-bold text-white hover:bg-green-700"
          >
            Check Out Our Latest Promotions
          </Link>
        </section>
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
}
