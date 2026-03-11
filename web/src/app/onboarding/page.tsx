export default function OnboardingPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Set up your business
        </h1>
        <p className="text-sm text-zinc-500">
          This is the core onboarding flow: connect your Google Business
          Profile, add your location, and get your first review link live.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ol className="space-y-4 text-sm text-zinc-700">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                1
              </span>
              <div>
                <p className="font-medium text-zinc-900">
                  Business details & logo
                </p>
                <p className="text-xs text-zinc-500">
                  Business name, address, category, and an optional logo that
                  appears on your review page.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                2
              </span>
              <div>
                <p className="font-medium text-zinc-900">
                  Connect Google Business Profile
                </p>
                <p className="text-xs text-zinc-500">
                  OAuth connection to your Google Business account so we can
                  pull review stats and send customers to the right page.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-medium text-white">
                3
              </span>
              <div>
                <p className="font-medium text-zinc-900">
                  Generate your review link & QR code
                </p>
                <p className="text-xs text-zinc-500">
                  Each location gets a unique link like{" "}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[11px]">
                    yourdomain.com/r/the-local-kitchen
                  </code>{" "}
                  that you can print or share.
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-4 text-xs text-zinc-500">
            This page is intentionally static for now. Next steps will wire it
            up to Supabase auth and your onboarding data model.
          </div>
        </div>
        <aside className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700 shadow-sm">
          <h2 className="text-sm font-semibold text-zinc-900">
            Implementation notes
          </h2>
          <ul className="list-disc space-y-1 pl-4 text-xs text-zinc-600">
            <li>Store business and location data in Supabase.</li>
            <li>
              During Google verification, fall back to a manually pasted Google
              review link.
            </li>
            <li>
              Mark onboarding completion so new users land on the dashboard.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

