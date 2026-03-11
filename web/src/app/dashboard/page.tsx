const sampleStats = {
  thisMonth: 42,
  lastMonth: 27,
  avgRating: 4.7,
  privateFeedback: 6,
};

const sampleFeedback = [
  {
    id: 1,
    createdAt: "2 hours ago",
    rating: 2,
    customer: "Anonymous",
    message:
      "Food was great but it took 35 minutes to get our order. Staff was kind though.",
  },
  {
    id: 2,
    createdAt: "Yesterday",
    rating: 3,
    customer: "Anonymous",
    message:
      "Haircut was good but the wait time was longer than expected. I had an appointment.",
  },
];

export default function DashboardPage() {
  const delta =
    sampleStats.lastMonth === 0
      ? 100
      : Math.round(
          ((sampleStats.thisMonth - sampleStats.lastMonth) /
            sampleStats.lastMonth) *
            100,
        );

  return (
    <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Reviews dashboard
          </h1>
          <p className="text-sm text-zinc-500">
            See how many reviews you&apos;re getting, how customers feel, and
            what needs your attention.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          View live review link
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Reviews this month
          </p>
          <p className="mt-2 text-3xl font-semibold text-zinc-900">
            {sampleStats.thisMonth}
          </p>
          <p className="mt-1 text-xs text-emerald-600">
            ▲ {delta}% vs last month
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Average Google rating
          </p>
          <p className="mt-2 text-3xl font-semibold text-zinc-900">
            {sampleStats.avgRating.toFixed(1)}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Pulled from Google Business once the API is connected.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Private negative feedback
          </p>
          <p className="mt-2 text-3xl font-semibold text-zinc-900">
            {sampleStats.privateFeedback}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            These never hit Google. They go straight to you.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.5fr,1.2fr]">
        <section className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <header className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900">
                Private feedback
              </h2>
              <p className="text-xs text-zinc-500">
                1–3 star experiences routed away from Google and into your
                inbox.
              </p>
            </div>
          </header>
          <div className="divide-y divide-zinc-100">
            {sampleFeedback.map((feedback) => (
              <article key={feedback.id} className="py-3 text-sm">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                      {feedback.rating}★ private
                    </span>
                    <span>{feedback.createdAt}</span>
                  </div>
                  <span className="text-xs text-zinc-400">
                    {feedback.customer}
                  </span>
                </div>
                <p className="text-sm text-zinc-700">{feedback.message}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
          <header>
            <h2 className="text-sm font-semibold text-zinc-900">
              QR code & counter card
            </h2>
            <p className="text-xs text-zinc-500">
              Every location gets a printable card and QR code customers can
              scan after their visit.
            </p>
          </header>
          <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center">
            <div className="h-32 w-32 rounded-xl bg-[radial-gradient(circle_at_20%_20%,_#22c55e_0,_#16a34a_40%,_#064e3b_100%)] opacity-80" />
            <p className="text-xs text-zinc-500">
              Next step: wire this up to a QR code component (e.g.{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px]">
                qrcode.react
              </code>
              ) using your unique{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px]">
                /r/[slug]
              </code>{" "}
              link.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

