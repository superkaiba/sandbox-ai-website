import { Logo } from "./components/Logo";

const founders = [
  {
    name: "Thomas Jiralerspong",
    href: "https://superkaiba.github.io/",
    photo: "/team/thomas.webp",
    bio: "PhD with Yoshua Bengio at Mila.\nPrev Anthropic, GDM, Waabi.",
  },
  {
    name: "Siddarth Venkatraman",
    href: "https://hyperpotatoneo.github.io/",
    photo: "/team/siddarth.webp",
    bio: "PhD with Glen Berseth and Nikolay Malkin at Mila.\nPrev Mistral, CMU, NASA JPL.",
  },
  {
    name: "Benjamin Thérien",
    href: "https://bentherien.github.io/",
    photo: "/team/benjamin.webp",
    bio: "PhD with Irina Rish and Eugene Belilovsky at Mila.\nPrev Meta, Waterloo.",
  },
  {
    name: "Emiliano Penaloza",
    href: "https://emilianopp.com/",
    photo: "/team/emiliano.webp",
    bio: "PhD with Laurent Charlin at Mila.\nPrev Microsoft Research, ServiceNow, KU Leuven.",
  },
] as const;

const modules = [
  {
    title: "Environments",
    purpose:
      "Procedurally generated reinforcement-learning worlds engineered to elicit specific failure modes — deception, reward hacking, sycophancy, sandbagging, situational awareness.",
    output: "Gym-compatible env · containerized rollout",
    schematic: `┌─────────────────────┐
│ · · ◇ · · · · · · · │
│ · · · · ◆ · · · · · │
│ · ◇ · · · · · · ◇ · │
│ · · · · · ◇ · · · · │
│ ◇ · · · ◇ · · · · · │
│ · · · ◇ · · · ◆ · · │
└─────────────────────┘
  ◆ agent  ◇ goal  · void`,
  },
  {
    title: "Datasets",
    purpose:
      "Versioned trajectory and evaluation datasets — audit-ready, reproducible — licensed to frontier labs and academic safety groups.",
    output: "Parquet · HF dataset card · evals manifest",
    schematic: `[τ₀]──[τ₁]──[τ₂]──[τ₃]──▶
 │     │     │     │
v.4   v.4   v.4   v.4
 │     │     │     │
sha   sha   sha   sha`,
  },
  {
    title: "Custom engagements",
    purpose:
      "Bespoke environments built to your safety case. Joint research, internal evaluations, red-team infrastructure for in-house teams.",
    output: "6–12 weeks · NDA available · scoped proposal",
    schematic: `┌─[INPUT]───┐    ┌─[OUTPUT]──┐
│ spec.md   │ ─▶ │ env.tar   │
│ threats   │    │ traces    │
│ budgets   │    │ report    │
└───────────┘    └───────────┘`,
  },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grain" aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-canvas"
      >
        Skip to content
      </a>

      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <Thesis />
        <Modules />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================ */
/* Nav                                                          */
/* ============================================================ */
function Nav() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-ink"
          aria-label="Sandbox AI home"
        >
          <Logo className="h-6 w-6 text-amber" />
          <span className="font-display text-lg tracking-tight">
            Sandbox <span className="italic text-amber">AI</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted sm:flex">
          <a href="#what" className="hover:text-ink transition-colors">
            What we build
          </a>
          <a href="#team" className="hover:text-ink transition-colors">
            Team
          </a>
          <a
            href="#contact"
            className="border border-amber px-3 py-1.5 text-amber hover:bg-amber hover:text-canvas transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ============================================================ */
/* Hero — fits brand, tagline, email, and intake panels in one  */
/* viewport (the first thing visitors see)                      */
/* ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col px-6 pt-6 pb-12 sm:px-10 sm:pt-10 sm:pb-16"
    >
      {/* Static ambient amber glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,165,36,0.4) 0%, rgba(245,165,36,0) 70%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        {/* Brand + tagline */}
        <div>
          <h1
            className="reveal font-display font-normal leading-[0.9] tracking-[-0.03em] text-ink text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]"
            style={{ animationDelay: "0ms" }}
          >
            Sandbox{" "}
            <span className="italic text-amber" style={{ fontWeight: 400 }}>
              AI
            </span>
          </h1>

          <p
            className="reveal mt-6 max-w-3xl font-display leading-tight tracking-tight text-ink text-xl sm:text-2xl md:text-3xl"
            style={{ animationDelay: "120ms" }}
          >
            Reinforcement-learning environments and datasets for{" "}
            <span className="italic">safer</span> frontier AI.
          </p>
        </div>

        {/* Contact: email + intake panels, anchored to bottom of viewport */}
        <div
          id="contact"
          className="reveal mt-auto pt-12"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="mailto:contact@sand-box-ai.com"
            className="group block"
            aria-label="Email contact@sand-box-ai.com"
          >
            <p className="font-display font-normal leading-[0.95] tracking-[-0.03em] text-ink transition-colors group-hover:text-amber text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="italic text-amber group-hover:text-ink transition-colors">
                contact
              </span>
              <span className="text-ink-muted">@</span>sand-box-ai
              <span className="text-ink-muted">.</span>com
            </p>
          </a>

          <div className="mt-8 grid gap-x-10 gap-y-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber">
                Investors
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink sm:text-base">
                We&apos;re raising a pre-seed to ship our first set of
                environments. Email for the deck or to set up a call.
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber">
                Labs
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink sm:text-base">
                Tell us what you&apos;re testing for — model family, behavior
                to surface, data format, timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Thesis                                                       */
/* ============================================================ */
function Thesis() {
  return (
    <section className="relative border-y border-line bg-canvas-2 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-display leading-[1.15] tracking-tight text-ink text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-5xl">
          Frontier models ship on benchmarks that don&apos;t measure the
          failures we actually fear. Sandbox AI builds the missing
          infrastructure — environments, trajectories, and evaluations that
          turn safety claims into{" "}
          <span className="italic">testable behavior</span>.
        </p>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Modules                                                      */
/* ============================================================ */
function Modules() {
  return (
    <section
      id="what"
      className="relative border-b border-line px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display text-4xl font-normal leading-tight tracking-tight text-ink sm:text-5xl">
          What we build
        </h2>

        <div className="mt-16 border border-line">
          {modules.map((m, i) => (
            <article
              key={m.title}
              className={`p-8 transition-colors hover:bg-canvas-2 sm:p-10 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <h3 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                {m.title}
              </h3>
              <div className="mt-8 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-ink">
                    {m.purpose}
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                    Output
                    <br />
                    <span className="mt-1 inline-block text-ink">
                      {m.output}
                    </span>
                  </p>
                </div>
                <div className="md:col-span-5">
                  <pre className="schematic overflow-x-auto rounded-sm border border-line bg-canvas p-4">
                    {m.schematic}
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Team                                                         */
/* ============================================================ */
function Team() {
  return (
    <section
      id="team"
      className="relative border-b border-line bg-canvas-2 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f) => (
            <li key={f.name}>
              <a
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-line bg-canvas p-5 transition-colors hover:border-amber"
              >
                <div className="aspect-square overflow-hidden border border-line bg-canvas-3 group-hover:border-line-strong transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.photo}
                    alt={f.name}
                    width={900}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mt-5 font-display text-xl leading-tight tracking-tight text-ink">
                  {f.name}
                </h3>

                <p className="mt-3 flex-1 whitespace-pre-line text-[13px] leading-relaxed text-ink-muted">
                  {f.bio}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Footer                                                       */
/* ============================================================ */
function Footer() {
  return (
    <footer className="relative px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
        <div className="flex items-center gap-3">
          <Logo className="h-4 w-4 text-amber" />
          <span>Sandbox AI</span>
        </div>
        <a
          href="mailto:contact@sand-box-ai.com"
          className="link-underline text-ink-muted hover:text-ink"
        >
          contact@sand-box-ai.com
        </a>
      </div>
    </footer>
  );
}
