import { Logo } from "./components/Logo";

const founders = [
  {
    name: "Thomas Jiralerspong",
    href: "https://superkaiba.github.io/",
    photo: "/team/thomas.webp",
    bio: "PhD at Mila advised by Yoshua Bengio and Research Fellow at Anthropic via the Astra Fellowship. Publishes at ICML on representation learning, model-based RL, and chain-of-thought monitoring; previously Vector Institute and Waabi.",
  },
  {
    name: "Siddarth Venkatraman",
    href: "https://hyperpotatoneo.github.io/",
    photo: "/team/siddarth.webp",
    bio: "PhD at Mila with Glen Berseth and Nikolay Malkin, collaborating closely with Yoshua Bengio. Currently at Mistral working on RL post-training; previously built ML for the Mars Rover at NASA JPL and earned his MSR at CMU Robotics.",
  },
  {
    name: "Benjamin Thérien",
    href: "https://bentherien.github.io/",
    photo: "/team/benjamin.webp",
    bio: "PhD at Mila and Université de Montréal with Irina Rish and Eugene Belilovsky. Author of PyLO (a PyTorch library for learned optimization) and papers on continual pretraining of mixture-of-experts; previously Meta AI and Waterloo's WISE Lab.",
  },
  {
    name: "Emiliano Penaloza",
    href: "https://emilianopp.com/",
    photo: "/team/emiliano.webp",
    bio: "PhD at Mila with Laurent Charlin, currently at Microsoft Research. Publishes on concept bottleneck models, LLM alignment, and web agents; previously ServiceNow AI Research and KU Leuven.",
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
        <Contact />
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
/* Hero — brand wordmark dominant, tagline supporting           */
/* ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-20 pb-32 sm:px-10 sm:pt-32 sm:pb-44"
    >
      {/* Static ambient amber glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,165,36,0.4) 0%, rgba(245,165,36,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        <h1
          className="reveal font-display font-normal leading-[0.9] tracking-[-0.03em] text-ink text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem]"
          style={{ animationDelay: "0ms" }}
        >
          Sandbox{" "}
          <span className="italic text-amber" style={{ fontWeight: 400 }}>
            AI
          </span>
        </h1>

        <p
          className="reveal mt-12 max-w-3xl font-display leading-tight tracking-tight text-ink text-2xl sm:text-3xl md:text-4xl"
          style={{ animationDelay: "120ms" }}
        >
          Reinforcement-learning environments and datasets for{" "}
          <span className="italic">safer</span> frontier AI.
        </p>

        <div
          className="reveal mt-10 grid gap-6 lg:grid-cols-12 lg:items-end"
          style={{ animationDelay: "260ms" }}
        >
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted lg:col-span-8 sm:text-lg">
            We design the controlled worlds where labs surface, measure, and
            patch dangerous model behavior — before deployment.
          </p>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-amber bg-amber px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-canvas transition-colors hover:bg-transparent hover:text-amber"
            >
              Contact
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
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

                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-muted">
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
/* Contact                                                      */
/* ============================================================ */
function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b border-line px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <a
          href="mailto:contact@sand-box-ai.com"
          className="group block"
        >
          <p className="font-display font-normal leading-[0.95] tracking-[-0.03em] text-ink transition-colors group-hover:text-amber text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="italic text-amber group-hover:text-ink transition-colors">
              contact
            </span>
            <span className="text-ink-muted">@</span>sand-box-ai
            <span className="text-ink-muted">.</span>com
          </p>
        </a>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
              Investors
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink">
              We&apos;re raising a pre-seed to ship our first set of
              environments. Email for the deck or to set up a call.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
              Labs
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink">
              Tell us what you&apos;re testing for — model family, behavior to
              surface, data format, timeline.
            </p>
          </div>
        </div>
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
