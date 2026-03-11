"use client";

import { useState } from "react";

type Rating = 1 | 2 | 3 | 4 | 5;

export default function ReviewFunnelPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const [rating, setRating] = useState<Rating | null>(null);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const businessName =
    typeof searchParams?.name === "string"
      ? decodeURIComponent(searchParams.name)
      : params.slug.replaceAll("-", " ");

  const googleReviewUrl =
    typeof searchParams?.google === "string"
      ? decodeURIComponent(searchParams.google)
      : "https://www.google.com/search?q=" +
        encodeURIComponent(businessName + " google reviews");

  async function handleSelect(selected: Rating) {
    setRating(selected);

    if (selected >= 4) {
      globalThis.location.href = googleReviewUrl;
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || rating >= 4 || !message.trim()) return;

    setSubmitting(true);

    const payload = {
      slug: params.slug,
      rating,
      message,
    };

    await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).finally(() => {
      setSubmitting(false);
      setSubmitted(true);
    });
  }

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-zinc-50 px-4 py-10">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            {businessName}
          </p>
          <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
            How was your experience today?
          </h1>
          <p className="text-xs text-zinc-500">
            Tap a rating from 1–5 stars. 4–5 stars go to Google, 1–3 stars come
            straight to the owner.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isSelected = rating === star;
                  const isHighRating = star >= 4;

                  let classes =
                    "inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-medium shadow-sm transition ";

                  if (isSelected && isHighRating) {
                    classes += "bg-emerald-500 text-white";
                  } else if (isSelected && !isHighRating) {
                    classes += "bg-amber-500 text-white";
                  } else if (!isSelected && isHighRating) {
                    classes += "bg-emerald-50 text-emerald-700";
                  } else {
                    classes += "bg-zinc-50 text-zinc-600";
                  }

                  return (
            <button
              key={star}
              type="button"
              onClick={() => handleSelect(star as Rating)}
                      className={classes}
              aria-label={`${star} star${star > 1 ? "s" : ""}`}
            >
              {star}★
                    </button>
                  );
                })}
        </div>

        {rating !== null && rating <= 3 && (
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <p className="text-xs font-medium text-zinc-800">
              Thank you for being honest. This feedback is{" "}
              <span className="font-semibold">private</span> and goes only to
              the business owner.
            </p>
            {submitted ? (
              <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
                Thank you — your feedback was sent. The owner will review this
                shortly.
              </p>
            ) : (
              <>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  placeholder="Tell us what went wrong so we can fix it."
                />
                <button
                  type="submit"
                  disabled={submitting || !message.trim()}
                  className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-300"
                >
                  {submitting ? "Sending..." : "Send private feedback"}
                </button>
              </>
            )}
          </form>
        )}

        <p className="mt-2 text-[10px] text-zinc-400">
          Powered by ReviewFlow — review requests that protect your reputation.
        </p>
      </div>
    </div>
  );
}

