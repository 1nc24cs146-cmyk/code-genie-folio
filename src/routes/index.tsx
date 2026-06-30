import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Wrench, Brain,
  Moon, Sun, Menu, X, ArrowRight, GraduationCap, Award, Lightbulb, Users,
  Zap, Rocket, Sparkles, BookOpen, Terminal, Download,
} from "lucide-react";
import resumeAsset from "@/assets/resume.docx.asset.json";

const RESUME_URL = resumeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nitinkumar Hiremath — Full Stack Developer & GenAI Enthusiast" },
      { name: "description", content: "Portfolio of Nitinkumar Hiremath: full stack developer, CSE student, building with Generative AI, AI agents, and automation." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const LEETCODE_URL = "https://leetcode.com/u/Nitin_810";
const GITHUB_URL = "https://github.com/1nc24cs146-cmyk";
const LINKEDIN_URL = "https://www.linkedin.com/in/nitin-kumar-701157381";
const EMAIL = "nitinkumarnitin3767@gmail.com";
const PHONE = "8496843611";

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  };
  return { dark, toggle };
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function Navbar() {
  const { dark, toggle } = useTheme();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-md bg-background/75 border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); go("home"); }} className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">N</span>itin<span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active === n.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/50 hover:bg-accent transition"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${active === n.id ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50"}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-hero-glow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Nitinkumar</span><br />
            <span className="text-foreground">Hiremath.</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground font-medium">
            Full Stack Developer <span className="text-primary">/</span> CSE Student <span className="text-primary">/</span> GenAI Enthusiast
          </p>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Building innovative and scalable applications with a passion for Generative AI and Intelligent Systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
              Contact Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 backdrop-blur px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent transition">
              View Projects
            </a>
            <a href={RESUME_URL} download="Nitinkumar_Hiremath_Resume.docx" className="group inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20 transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            {[
              { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
              { href: GITHUB_URL, icon: Github, label: "GitHub" },
              { href: LEETCODE_URL, icon: LeetCodeIcon, label: "LeetCode" },
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="A bit about me." />
        <div className="grid md:grid-cols-3 gap-8">
          <p className="md:col-span-2 text-lg leading-relaxed text-muted-foreground">
            I'm a Computer Science Engineering student skilled in <span className="text-foreground font-medium">Java, Python, SQL, HTML, CSS, JavaScript, and Node.js</span>,
            with a strong foundation in software development, database management, and problem-solving.
            I love turning ideas into products — especially at the intersection of <span className="text-foreground font-medium">Generative AI, agents, and automation</span>.
          </p>
          <div className="space-y-4">
            {[
              { icon: Rocket, label: "500+", sub: "Problems solved" },
              { icon: Sparkles, label: "7+", sub: "Certifications" },
            ].map((s) => (
              <div key={s.sub} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <s.icon className="h-5 w-5 text-primary mb-2" />
                <div className="font-display text-2xl font-bold">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  { icon: Code2, title: "Languages", items: ["C", "Java", "Python", "SQL", "NoSQL"] },
  { icon: Terminal, title: "Web Technologies", items: ["HTML", "CSS", "Node.js"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB"] },
  { icon: Wrench, title: "Developer Tools", items: ["GitHub", "VS Code"] },
  { icon: Brain, title: "Concepts", items: ["DBMS", "Data Structures & Algorithms"] },
];

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Skills" title="Tools I work with." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <span key={i} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-mono text-foreground">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Blockchain-Based Digital Credential Verification System",
    tech: ["Blockchain", "Database Management", "Face Verification", "Thumb Verification"],
    description:
      "A blockchain-based platform for secure verification of academic and personal credentials, using face and thumb verification for authentication, reducing fake certificates and document forgery through decentralized validation.",
  },
  {
    title: "CertiEngine – Online Certification Platform",
    tech: ["React.js", "Node.js", "HTML", "CSS"],
    description:
      "A web-based certification platform for Java, Python, and C programming courses with an interactive enrollment/certification UI and a Node.js-powered backend for managing users, courses, and records.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Work" title="Selected projects." />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-xl border border-border bg-card p-6 sm:p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-primary/10 px-2 py-1 text-xs font-mono text-primary">{t}</span>
                ))}
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                View on GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const ACHIEVEMENTS = [
  { text: "Oracle Java Certificate" },
  { text: "Red Hat Java Course Completion Certificate" },
  { text: "Oracle Applied Database Systems 23AI (English)" },
  { text: "Solved 500+ rated problems on CodeChef" },
  { text: "Google Cloud – Introduction to Generative AI Studio" },
  { text: "Cisco Python Essentials 1 Certification" },
  { text: "Red Hat Python Course Completion Certificate" },
  { text: "Active problem solver on LeetCode", href: LEETCODE_URL },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Achievements" title="Certifications & milestones." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((a) => {
            const inner = (
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-card h-full transition hover:border-primary/60">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-snug min-w-0">{a.text}</span>
              </div>
            );
            return a.href ? (
              <a key={a.text} href={a.href} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <div key={a.text}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const EDUCATION = [
  {
    period: "2024 – 2028",
    title: "Bachelor of Engineering, Computer Science",
    place: "Nagarjuna College of Engineering and Technology",
    detail: "CGPA: 6.2",
  },
  {
    period: "2022 – 2024",
    title: "Pre-University Course",
    place: "Benakatti PU College, Vijayapura",
    detail: "94%",
  },
  {
    period: "2022",
    title: "Secondary School (10th)",
    place: "Kendriya Vidyalaya, Chikodi",
    detail: "59%",
  },
];

function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="My academic journey." />
        <ol className="relative border-l-2 border-border ml-3 space-y-10">
          {EDUCATION.map((e) => (
            <li key={e.title} className="pl-8 relative">
              <span className="absolute -left-[11px] top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary shadow-glow">
                <GraduationCap className="h-3 w-3 text-primary-foreground" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">{e.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.place}</p>
              <p className="mt-1 text-sm font-medium">{e.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <SectionHeading eyebrow="Strengths" title="What I bring to the table." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Lightbulb, label: "Problem Solving" },
              { icon: Users, label: "Team Collaboration" },
              { icon: Zap, label: "Quick Learning Ability" },
              { icon: Brain, label: "Analytical Thinking" },
              { icon: BookOpen, label: "Software Development Fundamentals" },
              { icon: Sparkles, label: "Adaptability & Continuous Learning" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-card">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`Hi Nitinkumar,\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something." />
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-muted-foreground max-w-md">
              Have an idea, an opportunity, or just want to say hi? My inbox is open.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
                { href: GITHUB_URL, icon: Github, label: "GitHub" },
                { href: LEETCODE_URL, icon: LeetCodeIcon, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
              {sent ? "Opening your mail app…" : "Send Message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nitinkumar Hiremath. Built with care.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: LINKEDIN_URL, icon: Linkedin, label: "LinkedIn" },
            { href: GITHUB_URL, icon: Github, label: "GitHub" },
            { href: LEETCODE_URL, icon: LeetCodeIcon, label: "LeetCode" },
            { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
