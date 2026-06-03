import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConnectWithUs() {
  return (
    <section className="relative overflow-hidden bg-[#b58b32] px-5 py-16 text-black md:px-8 md:py-20">
      <span className="absolute left-0 top-10 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-black/45">
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
      </span>

      <div className="mx-auto grid max-w-7xl gap-10 pr-0 md:grid-cols-[1fr_auto] md:items-center md:pr-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.14em] text-black/60">
            Festival Community
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-black md:text-4xl">
            Connect with us
            <br />
            for festival updates, partnerships, and participation.
          </h2>
          <div className="mt-8 h-px max-w-5xl bg-black/35" />
          <p className="mt-8 max-w-2xl text-sm font-semibold leading-7 text-black/70 md:text-base">
            Reach the Ganga Literature Festival team for registrations, speaker
            enquiries, media, partnerships, volunteering, and cultural collaborations.
          </p>
        </div>

        <Link
          to="/about/contact-us"
          className="group inline-flex min-w-[200px] items-center justify-center gap-3 rounded-md bg-black px-7 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#b58b32] transition hover:bg-white"
        >
          <span className="text-[#b58b32]">Contact Us</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
