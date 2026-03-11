import Link from "next/link";

const tiers = [
  {
    label: "Simple pricing",
    value: "$79/mo per location",
    detail: "14-day free trial, no credit card required.",
  },
  {
    label: "For local businesses",
    value: "Restaurants, salons, dentists, auto shops",
    detail: "Anyone whose revenue depends on Google reviews.",
  },
  {
    label: "Set up in minutes",
    value: "Share a link or QR code",
    detail: "Ask for reviews right after each visit.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-zinc-50 to-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
            Get more 5-star Google reviews on autopilot
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Turn happy customers into{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              5-star Google reviews
            </span>{" "}
            — automatically.
          </h1>
          <p className="max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
            ReviewFlow gives every customer a simple review link or QR code.
            Happy customers go straight to Google. Unhappy ones send private
            feedback to you instead — before they post publicly.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            >
              Start 14-day free trial
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            >
              View sample dashboard
            </Link>
            <p className="w-full text-xs text-zinc-500 sm:w-auto">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                Live review funnel
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                ● Auto routes to Google
              </span>
            </div>
            <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
              <p className="mb-3 text-xs font-medium text-zinc-500">
                How was your experience today?
              </p>
              <p className="mb-4 text-sm font-medium text-zinc-900">
                The Local Kitchen – Downtown
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                      star >= 4
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-zinc-700"
                    } shadow-sm`}
                    type="button"
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    {star}★
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-zinc-500">
                4–5 stars send customers straight to your Google review page.
                1–3 stars collect private feedback instead.
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.label}
                  className="rounded-lg border border-zinc-100 bg-zinc-50 p-3"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    {tier.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900">
                    {tier.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{tier.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
