import { Logo } from "./components/Logo";

const founders = [
  {
    name: "Thomas Jiralerspong",
    affil: "Mila",
    prev: "Anthropic · Astra · Vector",
    href: "https://superkaiba.github.io/",
    photo: "/team/thomas.webp",
    id: "01",
    bio: "PhD at Mila and Research Fellow at Anthropic via the Astra Fellowship. Works on model-based reinforcement learning, causality, and NeuroAI; previously Vector Institute and Waabi.",
  },
  {
    name: "Siddarth Venkatraman",
    affil: "Mila",
    prev: "CMU Robotics · NASA JPL",
    href: "https://hyperpotatoneo.github.io/",
    photo: "/team/siddarth.webp",
    id: "02",
    bio: "PhD at Mila with Glen Berseth and Nikolay Malkin; collaborates closely with Yoshua Bengio. Researches reinforcement learning and generative models; previously CMU Robotics and NASA JPL.",
  },
  {
    name: "Benjamin Thérien",
    affil: "Mila",
    prev: "Meta · Waterloo",
    href: "https://bentherien.github.io/",
    photo: "/team/benjamin.webp",
    id: "03",
    bio: "PhD at Mila and Université de Montréal with Irina Rish and Eugene Belilovsky. Focuses on efficient foundation-model pretraining, learned optimization, and continual learning; previously Meta and Waterloo's WISE Lab.",
  },
  {
    name: "Emiliano Penaloza",
    affil: "Mila",
    prev: "ServiceNow · KU Leuven",
    href: "https://emilianopp.com/",
    photo: "/team/emiliano.webp",
    id: "04",
    bio: "PhD at Mila with Laurent Charlin. Researches user autonomy, NLP, and AI alignment in recommender systems and language models; previously ServiceNow Research and KU Leuven.",
  },
] as const;

const modules = [
  {
    n: "01",
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
    n: "02",
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
    n: "03",
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

const tickerItems = [
  "RAISING · PRE-SEED 2026",
  "BUILDING · ENVIRONMENTS / DATASETS",
  "BASED · MONTRÉAL",
  "CONTACT · CONTACT@SAND-BOX-AI.COM",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="dotgrid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-canvas"
      >
        Skip to content
      </a>

      <StatusBar />
      <Nav />
      <main id="main" className="relative z-10">
        <Hero />
        <Thesis />
        <Modules />
        <Crew />
        <Console />
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================ */
/* Status bar — short, real signals                             */
/* ============================================================ */
function StatusBar() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative z-20 border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-2 sm:px-10">
        <span className="flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-live">
          <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live" />
          LIVE
        </span>
        <span className="h-3 w-px bg-line-strong" />
        <div className="relative flex flex-1 overflow-hidden font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
          <div className="ticker-track flex shrink-0 gap-10 whitespace-nowrap pr-10">
            {items.map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-ink-faint">/</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================ */
/* Nav                                                          */
/* ============================================================ */
function Nav() {
  return (
    <header className="relative z-20 border-b border-line">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="flex items-center gap-3 text-ink"
          aria-label="Sandbox AI home"
        >
          <Logo className="h-5 w-5 text-amber" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]">
            sandbox<span className="text-ink-muted">/</span>ai
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted sm:flex">
          <a href="#thesis" className="hover:text-ink transition-colors">
            Thesis
          </a>
          <a href="#modules" className="hover:text-ink transition-colors">
            What we build
          </a>
          <a href="#crew" className="hover:text-ink transition-colors">
            Team
          </a>
          <a
            href="#console"
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
/* Hero                                                         */
/* ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative px-6 pt-24 pb-32 sm:px-10 sm:pt-32 sm:pb-44"
    >
      {/* Ambient amber glow */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,165,36,0.45) 0%, rgba(245,165,36,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        <p
          className="reveal font-mono text-[11px] uppercase tracking-[0.32em] text-ink-muted"
          style={{ animationDelay: "0ms" }}
        >
          Sandbox AI — Montréal
        </p>

        <h1
          className="reveal mt-10 max-w-6xl font-display font-light leading-[0.95] tracking-[-0.025em] text-ink text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          style={{ animationDelay: "120ms" }}
        >
          Reinforcement-learning environments
          and datasets for{" "}
          <span className="italic text-amber" style={{ fontWeight: 300 }}>
            safer
          </span>{" "}
          frontier AI.
        </h1>

        <div
          className="reveal mt-14 grid gap-8 lg:grid-cols-12"
          style={{ animationDelay: "260ms" }}
        >
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted lg:col-span-8 sm:text-xl">
            We design the controlled worlds where labs surface, measure, and
            patch dangerous model behavior — before deployment.
          </p>
          <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">
            <a
              href="#console"
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
/* Thesis pull-quote                                            */
/* ============================================================ */
function Thesis() {
  return (
    <section
      id="thesis"
      className="relative border-y border-line bg-canvas-2 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <SectionLabel n="00" label="Thesis" />
          </div>
          <div className="lg:col-span-9">
            <p className="font-display leading-[1.15] tracking-tight text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Frontier models ship on benchmarks that don&apos;t measure the
              failures we actually fear. Sandbox AI builds the missing
              infrastructure — environments, trajectories, and evaluations
              that turn safety claims into{" "}
              <span className="italic">testable behavior</span>.
            </p>
          </div>
        </div>
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
      id="modules"
      className="relative border-b border-line px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel n="01" label="What we build" />
            <h2 className="mt-6 font-display text-4xl font-light leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Three product lines.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink-muted">
              License individually or compose them. Each is shipped under
              version control with reproducibility guarantees.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-line">
              {modules.map((m, i) => (
                <article
                  key={m.n}
                  className={`group grid grid-cols-12 gap-6 p-8 transition-colors hover:bg-canvas-2 sm:p-10 ${
                    i !== 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div className="col-span-12 sm:col-span-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
                      M.{m.n}
                    </span>
                    <h3 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                      {m.title}
                    </h3>
                  </div>

                  <div className="col-span-12 sm:col-span-5">
                    <p className="text-base leading-relaxed text-ink">
                      {m.purpose}
                    </p>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                      Output
                      <br />
                      <span className="mt-1 inline-block text-ink">
                        {m.output}
                      </span>
                    </p>
                  </div>

                  <div className="col-span-12 sm:col-span-4">
                    <pre className="schematic overflow-x-auto rounded-sm border border-line bg-canvas p-4">
                      {m.schematic}
                    </pre>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/* Crew                                                         */
/* ============================================================ */
function Crew() {
  return (
    <section
      id="crew"
      className="relative border-b border-line bg-canvas-2 px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel n="02" label="Team" />
            <h2 className="mt-6 font-display text-4xl font-light leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Four researchers, from{" "}
              <a
                href="https://mila.quebec"
                target="_blank"
                rel="noreferrer"
                className="link-underline italic"
              >
                Mila
              </a>
              .
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:items-end lg:justify-end">
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Mila is the Quebec AI Institute, founded by Yoshua Bengio. The
              four of us met training and breaking models there. Each card
              links to personal research.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f) => (
            <li key={f.name}>
              <a
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col border border-line bg-canvas p-5 transition-colors hover:border-amber"
              >
                <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink-faint">
                    SBX · {f.id}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink-faint group-hover:text-amber transition-colors">
                    ↗
                  </span>
                </div>

                <div className="my-5 aspect-square overflow-hidden border border-line bg-canvas-3 group-hover:border-line-strong transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.photo}
                    alt={f.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="font-display text-xl leading-tight tracking-tight text-ink">
                  {f.name}
                </h3>
                <div className="mt-3 space-y-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <p className="text-ink">
                    <span className="text-ink-faint">Affil · </span>
                    {f.affil}
                  </p>
                  <p className="text-ink-muted">
                    <span className="text-ink-faint">Prev · </span>
                    {f.prev}
                  </p>
                </div>

                <p className="mt-4 flex-1 border-t border-dashed border-line pt-4 text-[13px] leading-relaxed text-ink-muted">
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
/* Console — terminal-style contact                             */
/* ============================================================ */
function Console() {
  return (
    <section
      id="console"
      className="relative border-b border-line px-6 py-24 sm:px-10 sm:py-40"
    >
      <div className="tape pointer-events-none absolute inset-x-0 top-0 h-1 opacity-50" />

      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="03" label="Contact" />

        <div className="mt-12 border border-line bg-canvas-2">
          <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live" />
              <span className="text-live">Session open</span>
            </div>
            <span>sandbox // tty.001</span>
          </div>

          <div className="px-6 py-12 sm:px-10 sm:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
              <span className="text-ink">guest@sandbox</span>
              <span className="text-ink-faint"> :~ $ </span>
              ./contact
            </p>

            <a
              href="mailto:contact@sand-box-ai.com"
              className="group mt-8 block"
            >
              <p className="font-display font-light leading-[0.95] tracking-[-0.03em] text-ink transition-colors group-hover:text-amber text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="italic text-amber group-hover:text-ink transition-colors">
                  contact
                </span>
                <span className="text-ink-muted">@</span>sand-box-ai
                <span className="text-ink-muted">.</span>com
                <span className="cursor ml-2 inline-block h-[0.85em] w-[0.45em] translate-y-[-0.05em] bg-amber align-middle" />
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted group-hover:text-ink transition-colors">
                Click to compose →
              </p>
            </a>

            <div className="mt-16 grid gap-px bg-line sm:grid-cols-2">
              <div className="bg-canvas-2 p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
                    Investors
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink">
                  We&apos;re raising a pre-seed to ship our first set of
                  environments. Email for the deck or to set up a call.
                </p>
              </div>
              <div className="bg-canvas-2 p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
                    Labs
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink">
                  Tell us what you&apos;re testing for. Useful to include:
                </p>
                <ul className="mt-3 space-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  <li>· Model family</li>
                  <li>· Behavior to surface</li>
                  <li>· Data format / interface</li>
                  <li>· Timeline</li>
                </ul>
              </div>
            </div>
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
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo className="h-4 w-4 text-amber" />
          <span>© 2026 Sandbox AI · Montréal</span>
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

/* ============================================================ */
/* Shared section label                                         */
/* ============================================================ */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-ink-muted">
      <span className="text-ink-faint">§ {n}</span>
      <span className="h-px w-8 bg-line" />
      {label}
    </p>
  );
}
