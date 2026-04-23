import { Logo } from "./components/Logo";

const founders = [
  {
    name: "Thomas Jiralerspong",
    affil: "MILA",
    prev: "Anthropic · Astra · Vector",
    href: "https://superkaiba.github.io/",
    initials: "TJ",
    id: "SBX-001",
  },
  {
    name: "Siddarth Venkatraman",
    affil: "MILA",
    prev: "CMU Robotics · NASA JPL",
    href: "https://hyperpotatoneo.github.io/",
    initials: "SV",
    id: "SBX-002",
  },
  {
    name: "Benjamin Thérien",
    affil: "MILA",
    prev: "Meta · Waterloo",
    href: "https://bentherien.github.io/",
    initials: "BT",
    id: "SBX-003",
  },
  {
    name: "Emiliano Penaloza",
    affil: "MILA",
    prev: "ServiceNow · KU Leuven",
    href: "https://emilianopp.com/",
    initials: "EP",
    id: "SBX-004",
  },
] as const;

const modules = [
  {
    n: "M.01",
    title: "Environments",
    purpose:
      "Procedurally generated reinforcement-learning worlds engineered to elicit specific failure modes — deception, reward hacking, sycophancy, sandbagging, situational awareness.",
    output: "Gym-compatible env / containerized rollout",
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
    n: "M.02",
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
    n: "M.03",
    title: "Custom work",
    purpose:
      "Bespoke environments built to your safety case. Joint research, internal evaluations, red-team infrastructure for in-house teams.",
    output: "Engagement · 6–12 weeks · NDA available",
    schematic: `┌─[INPUT]───┐    ┌─[OUTPUT]──┐
│ spec.md   │ ─▶ │ env.tar   │
│ threats   │    │ traces    │
│ budgets   │    │ report    │
└───────────┘    └───────────┘`,
  },
] as const;

const tickerItems = [
  "STATUS · ACTIVE",
  "PRE-SEED · 2026",
  "MTL 45.50°N · 73.57°W",
  "UPLINK · SECURE",
  "BUILDING · M.01 / M.02 / M.03",
  "INTAKE · OPEN",
  "CONTACT · SAND-BOX-AI.COM",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="dotgrid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <StatusBar />
      <Nav />
      <main className="relative z-10">
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
/* Status bar — fixed-feeling ticker at the very top            */
/* ============================================================ */
function StatusBar() {
  const items = [...tickerItems, ...tickerItems]; // doubled for seamless loop
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
                <span className="text-amber">▸</span>
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
          T+ 2026.04.23
        </span>
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
            sandbox<span className="text-amber">/</span>ai
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted sm:flex">
          <a href="#thesis" className="hover:text-ink transition-colors">
            <span className="text-ink-faint">00 ·</span> Thesis
          </a>
          <a href="#modules" className="hover:text-ink transition-colors">
            <span className="text-ink-faint">01 ·</span> Modules
          </a>
          <a href="#crew" className="hover:text-ink transition-colors">
            <span className="text-ink-faint">02 ·</span> Crew
          </a>
          <a
            href="#console"
            className="border border-amber px-3 py-1.5 text-amber hover:bg-amber hover:text-canvas transition-colors"
          >
            <span className="opacity-60">03 ·</span> Console
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
      className="relative px-6 pt-20 pb-32 sm:px-10 sm:pt-28 sm:pb-44"
    >
      {/* Corner registration marks */}
      <span className="regmark" style={{ top: "1.5rem", left: "1.5rem" }} />
      <span className="regmark" style={{ top: "1.5rem", right: "1.5rem" }} />

      {/* Ambient amber glow */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,165,36,0.5) 0%, rgba(245,165,36,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-[1400px]">
        {/* Top metadata strip */}
        <div
          className="reveal grid grid-cols-2 gap-6 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted sm:grid-cols-4"
          style={{ animationDelay: "0ms" }}
        >
          <div>
            <span className="text-ink-faint">FILE</span>{" "}
            <span className="text-ink">README.001</span>
          </div>
          <div>
            <span className="text-ink-faint">CLASS</span>{" "}
            <span className="text-amber">CTRL</span>
          </div>
          <div>
            <span className="text-ink-faint">ORIGIN</span>{" "}
            <span className="text-ink">MTL · 45.50°N</span>
          </div>
          <div>
            <span className="text-ink-faint">REV</span>{" "}
            <span className="text-ink">001</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="reveal mt-16 max-w-6xl font-display text-[14vw] font-light leading-[0.92] tracking-[-0.025em] text-ink sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem]"
          style={{ animationDelay: "120ms" }}
        >
          Training{" "}
          <span className="italic text-amber" style={{ fontWeight: 300 }}>
            grounds
          </span>
          <br />
          for{" "}
          <span className="italic" style={{ fontWeight: 300 }}>
            safer
          </span>{" "}
          frontier AI.
        </h1>

        {/* Subhead with rule */}
        <div
          className="reveal mt-14 grid gap-8 lg:grid-cols-12"
          style={{ animationDelay: "260ms" }}
        >
          <div className="lg:col-span-1">
            <div className="hidden h-px w-full bg-amber lg:block lg:mt-4" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-amber lg:inline-block lg:mt-2">
              §
            </span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted lg:col-span-7 sm:text-xl">
            We design the reinforcement-learning environments and datasets that
            let labs surface, measure, and patch dangerous model behaviors —{" "}
            <span className="text-ink">before</span> they reach the real world.
          </p>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#console"
              className="group inline-flex items-center gap-3 border border-amber bg-amber px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-canvas transition-colors hover:bg-transparent hover:text-amber"
            >
              <span className="opacity-70">▸</span>
              Open console
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
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-faint">
              Lines 01–04
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-amber font-mono text-2xl mr-3 align-top sm:text-3xl">
                ❝
              </span>
              Frontier models are deployed on{" "}
              <span className="italic text-amber">vibes</span>. Safety claims
              should rest on something stronger — reproducible behavior,
              measured in worlds designed to make failure{" "}
              <span className="italic">visible</span>.
            </p>
            <p className="mt-10 max-w-2xl border-l border-amber pl-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
              Sandbox AI is a research company building that infrastructure.
              We ship the environments, trajectories, and evaluations that turn
              alignment from rhetoric into evidence.
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
            <SectionLabel n="01" label="Modules" />
            <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Three{" "}
              <span className="italic text-amber">primitives</span>
              <br />
              one stack.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink-muted">
              Each module is a self-contained deliverable. Compose them, or
              license them individually.
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
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber">
                        {m.n}
                      </span>
                      <span className="h-px w-8 bg-line-strong" />
                    </div>
                    <h3 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                      {m.title}
                    </h3>
                  </div>

                  <div className="col-span-12 sm:col-span-5">
                    <p className="text-base leading-relaxed text-ink">
                      {m.purpose}
                    </p>
                    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      <span className="text-ink-faint">▸ Output</span>
                      <br />
                      <span className="mt-1 inline-block text-amber">
                        {m.output}
                      </span>
                    </p>
                  </div>

                  <div className="col-span-12 sm:col-span-4">
                    <pre className="schematic overflow-x-auto rounded-sm border border-line-strong bg-canvas p-4">
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
/* Crew — access-badge style founder cards                      */
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
            <SectionLabel n="02" label="Crew" />
            <h2 className="mt-6 font-display text-5xl font-light leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Four researchers,
              <br />
              from <span className="italic text-amber">Mila</span>.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:flex lg:items-end lg:justify-end">
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              We met training and breaking models. Now we build the
              infrastructure that lets others do it more safely. Each badge
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
                className="group block border border-line bg-canvas p-5 transition-colors hover:border-amber"
              >
                {/* Badge header */}
                <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-ink-faint group-hover:text-amber transition-colors">
                    SANDBOX · CREW
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-amber">
                    {f.id}
                  </span>
                </div>

                {/* Avatar */}
                <div className="my-6 flex aspect-square items-center justify-center border border-line-strong bg-canvas-3 group-hover:border-amber transition-colors">
                  <span className="font-display text-6xl italic text-ink-muted group-hover:text-amber transition-colors">
                    {f.initials}
                  </span>
                </div>

                {/* Footer */}
                <h3 className="font-display text-xl leading-tight tracking-tight text-ink">
                  {f.name}
                </h3>
                <div className="mt-3 space-y-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <p>
                    <span className="text-ink-faint">AFFIL · </span>
                    <span className="text-amber">{f.affil}</span>
                  </p>
                  <p className="text-ink-muted">
                    <span className="text-ink-faint">PREV · </span>
                    {f.prev}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-ink-faint">
                  <span>↗ profile</span>
                  <span className="text-amber group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
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
      {/* Warning tape */}
      <div className="tape pointer-events-none absolute inset-x-0 top-0 h-1 opacity-50" />

      <div className="mx-auto max-w-[1400px]">
        <SectionLabel n="03" label="Console" />

        <div className="mt-12 border border-line bg-canvas-2">
          {/* Console chrome */}
          <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-live" />
              <span className="text-live">SESSION OPEN</span>
            </div>
            <span>SANDBOX // tty.001</span>
          </div>

          {/* Terminal body */}
          <div className="px-6 py-12 sm:px-10 sm:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
              <span className="text-amber">guest@sandbox</span>
              <span className="text-ink-faint"> :~ $ </span>
              ./contact --invest --license
            </p>

            <a href="mailto:contact@sand-box-ai.com" className="group mt-8 block">
              <p className="font-display text-[10vw] font-light leading-[0.95] tracking-[-0.03em] text-ink transition-colors group-hover:text-amber sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="italic text-amber group-hover:text-ink transition-colors">
                  contact
                </span>
                <span className="text-ink-muted">@</span>sand-box-ai
                <span className="text-ink-muted">.</span>com
                <span className="cursor ml-2 inline-block h-[0.85em] w-[0.45em] translate-y-[-0.05em] bg-amber align-middle" />
              </p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted group-hover:text-amber transition-colors">
                ▸ click to compose →
              </p>
            </a>

            {/* Two intake lanes */}
            <div className="mt-16 grid gap-px bg-line sm:grid-cols-2">
              <IntakeLane
                code="01"
                tag="For investors"
                copy="We&apos;re raising a pre-seed to ship our first set of environments to frontier labs. Reach out to learn more, see the deck, or book time with the founders."
              />
              <IntakeLane
                code="02"
                tag="For labs"
                copy="Need targeted environments or evaluation datasets for a specific safety case? Tell us what you&apos;re testing for and we&apos;ll come back with a scoped proposal."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntakeLane({
  code,
  tag,
  copy,
}: {
  code: string;
  tag: string;
  copy: string;
}) {
  return (
    <div className="bg-canvas-2 p-8">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-amber">
          INTAKE.{code}
        </span>
        <span className="h-px flex-1 bg-line-strong" />
      </div>
      <p className="mt-4 font-display text-2xl italic leading-tight text-ink sm:text-3xl">
        {tag}
      </p>
      <p
        className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted"
        dangerouslySetInnerHTML={{ __html: copy }}
      />
    </div>
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
          <span>
            <span className="text-amber">▸</span> 2026 SANDBOX AI · MTL ·
            ALL SIGNALS GREEN
          </span>
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
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
      <span className="text-amber">SEC.{n}</span>
      <span className="h-px w-8 bg-line-strong" />
      {label}
    </p>
  );
}
