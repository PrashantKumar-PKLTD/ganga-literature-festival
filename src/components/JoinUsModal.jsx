import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { FORMSPREE_ENDPOINT, submitToFormspree } from "../utils/formspree";

export default function JoinUsModal() {
  const [open, setOpen] = useState(() => {
    return !sessionStorage.getItem("glf_modal_dismissed");
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleClose = () => {
    sessionStorage.setItem("glf_modal_dismissed", "true");
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }


  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-us-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close join us form"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/88 p-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.45)] md:p-9">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'linear-gradient(140deg, rgba(181,139,50,0.24), transparent 34%), url("/heroimage.png") center/cover',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-black/74" />

        <button
          type="button"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
          aria-label="Close join us form"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10">
          {submitted ? (
            <div className="py-14 text-center">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b58b32]">
                Received
              </p>
              <h2
                id="join-us-title"
                className="mt-4 font-serif text-4xl font-semibold leading-none md:text-5xl"
              >
                Thank you for joining us.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/75">
                We have noted your details and will share festival updates soon.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2
                  id="join-us-title"
                  className="font-serif text-4xl font-semibold uppercase leading-none md:text-5xl"
                >
                  Join Us
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/80 md:text-base">
                  Share your details to receive festival updates, registration
                  announcements, and opportunities to participate.
                </p>
              </div>

              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="mt-8 grid gap-5"
                onSubmit={async (event) => {
                  setSubmitError("");
                  try {
                    await submitToFormspree(event, () => setSubmitted(true));
                  } catch {
                    setSubmitError("Something went wrong. Please try again.");
                  }
                }}
              >
                <input type="hidden" name="form_source" value="Join us modal" />
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-white/80 bg-black/70 px-4 py-4 text-white outline-none placeholder:text-white/55 focus:border-[#b58b32]"
                  placeholder="Your Name"
                />
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/80 bg-black/70 px-4 py-4 text-white outline-none placeholder:text-white/55 focus:border-[#b58b32]"
                  placeholder="Your Email"
                />
                <input
                  name="phone"
                  className="w-full rounded-xl border border-white/80 bg-black/70 px-4 py-4 text-white outline-none placeholder:text-white/55 focus:border-[#b58b32]"
                  placeholder="Your Phone (optional)"
                />
                <textarea
                  name="message"
                  className="min-h-28 w-full rounded-xl border border-white/80 bg-black/70 px-4 py-4 text-white outline-none placeholder:text-white/55 focus:border-[#b58b32]"
                  placeholder="How would you like to be part of the festival?"
                />
                {submitError && <p className="text-sm font-bold text-white">{submitError}</p>}
                <button className="rounded-lg bg-[#b58b32] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-white">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
