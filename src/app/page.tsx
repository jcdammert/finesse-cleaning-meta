import { ShieldCheck, MessageCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Expect a text from us",
    badge: "Within minutes",
    description: "You'll get a text shortly confirming we received your request.",
  },
  {
    number: 2,
    title: "We confirm the details",
    badge: "Same day",
    description:
      "We'll reach out to go over your property, square footage, and what you need.",
  },
  {
    number: 3,
    title: "You get a custom quote",
    badge: "Fast turnaround",
    description:
      "No surprise fees. Clear, upfront pricing based on your exact job.",
  },
  {
    number: 4,
    title: "We lock in your date",
    badge: "You pick the time",
    description:
      "Once you're happy with the quote, we schedule you. We don't cut corners.",
  },
];

const reviews = [
  {
    quote:
      '"Night and day difference on our driveway. Looked brand new after they were done. Super professional crew."',
    name: "Carlos M.",
    city: "Fort Lauderdale",
  },
  {
    quote:
      '"They pressure washed our entire house exterior and pool deck. Neighbors thought we repainted. Highly recommend."',
    name: "Amanda R.",
    city: "Coral Springs",
  },
  {
    quote:
      '"Quick, clean, and reasonably priced. They were careful around our landscaping too. Will definitely use again."',
    name: "James T.",
    city: "Pembroke Pines",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 opacity-0 animate-fade-in">
        <span className="font-syne text-xl font-bold text-white">Finesse.</span>
        <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-sm">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="text-off-white">Request received</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <p className="text-teal text-sm font-semibold tracking-[0.2em] uppercase mb-6 opacity-0 animate-fade-in-delay-1">
          You&apos;re in
        </p>
        <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-2">
          Your property is about
          <br />
          to get <span className="text-teal">seriously clean.</span>
        </h1>
        <p className="text-gray-400 text-lg opacity-0 animate-fade-in-delay-3">
          We got your request. Here&apos;s exactly what happens from here.
        </p>
      </section>

      {/* Steps */}
      <section className="px-6 py-16 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
        <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase text-center mb-12">
          What happens next
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-teal/30" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 border-teal flex items-center justify-center text-sm font-semibold text-teal bg-bg">
                  {step.number}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-syne font-bold text-lg text-white">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-teal border border-teal/30 rounded-full px-3 py-0.5">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 py-16 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-5">
        <div className="bg-card-bg border border-white/10 rounded-2xl p-10 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-teal/10 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-teal" />
          </div>
          <h2 className="font-syne text-2xl sm:text-3xl font-bold mb-4">
            100% satisfaction guarantee
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
            If you&apos;re not completely happy with the job, we come back and
            redo it — free. No questions, no hassle. That&apos;s the Finesse
            standard.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-16 max-w-4xl mx-auto opacity-0 animate-fade-in-delay-6">
        <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase text-center mb-4">
          What our clients say
        </p>
        <h2 className="font-syne text-3xl sm:text-4xl font-bold text-center mb-12">
          5.0 on Google &middot; 120+ reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card-bg border border-white/10 rounded-xl p-6"
            >
              <Stars />
              <p className="text-off-white text-sm leading-relaxed mt-4 mb-4">
                {review.quote}
              </p>
              <p className="text-gray-500 text-sm">
                {review.name} &middot; {review.city}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-card-bg border-t border-white/10 px-6 py-16 text-center">
        <h2 className="font-syne text-3xl sm:text-4xl font-bold mb-4">
          Questions before your call?
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          We&apos;re happy to answer anything. Shoot us a text and we&apos;ll
          get back to you fast.
        </p>
        <a
          href="sms:+19545551234"
          className="inline-flex items-center gap-2 bg-teal text-bg font-semibold px-8 py-3 rounded-full hover:bg-teal/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Text us now
        </a>
        <p className="text-gray-500 text-sm mt-6">
          Or call us at (954) 555-1234 &middot; Mon–Sat 8am–6pm
        </p>
        <p className="text-gray-500/60 text-xs mt-4">
          &copy; 2026 Finesse Cleaning &middot; South Florida
        </p>
      </footer>
    </main>
  );
}
