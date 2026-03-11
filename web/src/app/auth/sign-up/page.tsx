import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            Start your 14-day free trial
          </h1>
          <p className="text-sm text-zinc-500">
            Create your account to set up your review funnel. No credit card
            required.
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-zinc-700"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-zinc-700"
            >
              Work email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              placeholder="you@business.com"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-zinc-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              className="block w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              placeholder="At least 8 characters"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-xs text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

