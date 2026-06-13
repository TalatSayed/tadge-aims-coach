import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, Star, MapPin, GraduationCap, Atom,
  Calculator, BookOpen, Sparkles, Target, Users, Award,
  ClipboardCheck, FileCheck2, UserCheck, Trophy, Layers,
  HeartHandshake, Menu, X, ChevronRight, Mail, Clock,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chetan Tadge Coaching Centre — IIT-JEE & MHT-CET Coaching, Pune" },
      { name: "description", content: "Premium coaching for IIT-JEE Main, Advanced, MHT-CET & Foundation in Pune. Experienced faculty, strong concepts, personalized guidance. ⭐ 5.0 rating." },
      { property: "og:title", content: "Chetan Tadge Coaching Centre" },
      { property: "og:description", content: "IIT-JEE Main | Advanced | MHT-CET | Foundation — quality coaching in Pune." },
    ],
  }),
  component: Index,
});

const PHONE = "+91 96650 18788";
const PHONE_TEL = "+919665018788";
const WHATSAPP = "https://wa.me/919665018788";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "courses", label: "Courses" },
  { id: "why", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-hero shadow-elegant">
            <GraduationCap className="h-6 w-6 text-gold" />
          </span>
          <span className="min-w-0">
            <span className={`block font-display text-base font-bold leading-tight ${scrolled ? "text-primary-deep" : "text-white"}`}>
              Chetan Tadge
            </span>
            <span className={`block text-[11px] font-medium uppercase tracking-wider ${scrolled ? "text-muted-foreground" : "text-gold"}`}>
              Coaching Centre
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-smooth hover:bg-foreground/5 ${
                scrolled ? "text-foreground" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {n.label}
            </button>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-lg p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background shadow-elegant">
          <div className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 font-semibold text-gold-foreground shadow-gold"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.14_80/0.18),transparent_55%)]" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Pune's Trusted Coaching Institute
            </span>
          </div>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Chetan Tadge
            <span className="block bg-gradient-to-r from-gold via-[oklch(0.85_0.14_85)] to-gold-deep bg-clip-text text-transparent">
              Coaching Centre
            </span>
          </h1>

          <p className="animate-fade-up mt-5 text-lg font-medium text-white/90 sm:text-xl" style={{ animationDelay: "0.2s" }}>
            IIT-JEE Main · IIT-JEE Advanced · MHT-CET · Foundation
          </p>

          <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg" style={{ animationDelay: "0.3s" }}>
            Quality coaching, strong conceptual learning, and dedicated guidance to help students
            achieve success in competitive examinations and build a rock-solid academic foundation.
          </p>

          <div className="animate-fade-up mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 backdrop-blur">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">5.0</span>
              <span className="text-sm text-white/70">· 76+ Reviews</span>
            </div>
          </div>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.5s" }}>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-smooth hover:bg-white/20"
            >
              Get Admission Details <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="animate-fade-up mt-6 flex items-center gap-2 text-sm text-white/70" style={{ animationDelay: "0.6s" }}>
            <Phone className="h-4 w-4 text-gold" /> {PHONE}
          </div>
        </div>
      </div>

      {/* floating accents */}
      <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-24 w-24 animate-float-slow rounded-2xl border border-gold/30 bg-white/5 backdrop-blur lg:grid place-items-center">
        <Atom className="h-12 w-12 text-gold" />
      </div>
      <div className="pointer-events-none absolute right-[22%] top-[55%] hidden h-20 w-20 animate-float-slow rounded-2xl border border-white/15 bg-white/5 backdrop-blur lg:grid place-items-center" style={{ animationDelay: "1.5s" }}>
        <Calculator className="h-10 w-10 text-white/80" />
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-deep">
            <Sparkles className="h-3.5 w-3.5 text-gold-deep" /> {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-primary-deep sm:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { icon: Star, value: "5.0", label: "Star Rating" },
    { icon: Users, value: "76+", label: "Happy Reviews" },
    { icon: Trophy, value: "4", label: "Major Programs" },
    { icon: Award, value: "100%", label: "Concept Focused" },
  ];
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="About Chetan Tadge Coaching Centre"
      subtitle="Committed to helping students excel in competitive examinations through structured learning, concept-based teaching, and personalized academic support — building the strong fundamentals, problem-solving skills, and confidence required for IIT-JEE, MHT-CET, and Foundation-level preparation."
    >
      <div data-reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="group rounded-2xl bg-gradient-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero shadow-elegant">
              <s.icon className="h-6 w-6 text-gold" />
            </div>
            <div className="mt-4 font-display text-4xl font-bold text-primary-deep">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Courses() {
  const courses = [
    { icon: Atom, title: "IIT-JEE Main Preparation", desc: "Comprehensive coverage of Physics, Chemistry & Maths aligned with the latest JEE Main pattern." },
    { icon: Target, title: "IIT-JEE Advanced Preparation", desc: "Advanced problem-solving, deep conceptual clarity, and rigorous practice for IIT entry." },
    { icon: GraduationCap, title: "MHT-CET Preparation", desc: "Speed, accuracy & strategy tailored for the Maharashtra Common Entrance Test." },
    { icon: BookOpen, title: "Foundation Courses", desc: "Strong base for Classes 8–10 in Maths & Science with early competitive exposure." },
    { icon: Calculator, title: "Mathematics Excellence Program", desc: "Dedicated track to master Mathematics — from fundamentals to olympiad-level questions." },
    { icon: FileCheck2, title: "Board Examination Support", desc: "Structured revision, sample papers, and writing practice for top board results." },
  ];
  return (
    <Section id="courses" eyebrow="Our Programs" title="Courses That Shape Future Achievers" subtitle="Choose the program that fits your goal — every course is designed for clarity, confidence, and consistent results.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <div
            key={c.title}
            data-reveal
            style={{ animationDelay: `${i * 0.05}s` }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 shadow-card-soft transition-smooth hover:-translate-y-1.5 hover:shadow-elegant"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-2xl transition-smooth group-hover:opacity-30" />
            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-hero shadow-elegant transition-smooth group-hover:scale-110">
                <c.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <a href={`tel:${PHONE_TEL}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:text-gold-deep">
                Enquire Now <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const items = [
    { icon: UserCheck, title: "Experienced Faculty", desc: "Mentors with years of expertise guiding competitive aspirants." },
    { icon: Layers, title: "Strong Conceptual Teaching", desc: "Build understanding from the roots — not rote memorization." },
    { icon: ClipboardCheck, title: "Regular Assessments", desc: "Frequent tests to track progress and plug learning gaps early." },
    { icon: FileCheck2, title: "Practice Tests", desc: "Exam-pattern mocks that build speed, accuracy, and exam temperament." },
    { icon: HeartHandshake, title: "Personalized Guidance", desc: "One-on-one mentoring tailored to each student's strengths." },
    { icon: Target, title: "Competitive Exam Focus", desc: "Laser-focused curriculum mapped to JEE, CET & Foundation goals." },
    { icon: BookOpen, title: "Foundation Building", desc: "Early-stage clarity that becomes a lifelong academic advantage." },
    { icon: Users, title: "Student-Centric Learning", desc: "An environment that nurtures curiosity, discipline, and confidence." },
  ];
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-hero py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.14_80/0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Why Choose Us
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            The <span className="text-gold">Chetan Tadge</span> Advantage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Eight reasons parents and students trust us with their academic future.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              style={{ animationDelay: `${i * 0.05}s` }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-smooth hover:-translate-y-1 hover:border-gold/40 hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold transition-smooth group-hover:scale-110">
                <it.icon className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const hl = [
    { icon: Star, value: "5.0", label: "Star Rating", note: "Top rated by students" },
    { icon: Users, value: "76+", label: "Reviews", note: "From parents & students" },
    { icon: Atom, value: "JEE", label: "Main", note: "Structured preparation" },
    { icon: Target, value: "JEE", label: "Advanced", note: "Deep concept mastery" },
    { icon: GraduationCap, value: "MHT", label: "CET", note: "State exam ready" },
    { icon: BookOpen, value: "Found.", label: "Class 8-10", note: "Strong fundamentals" },
  ];
  return (
    <Section id="highlights" eyebrow="Highlights" title="Trusted Results, Proven Programs">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {hl.map((h, i) => (
          <div
            key={h.label}
            data-reveal
            style={{ animationDelay: `${i * 0.05}s` }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-card p-6 text-center shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
              <h.icon className="h-6 w-6 text-gold-foreground" />
            </div>
            <div className="mt-4 font-display text-2xl font-bold text-primary-deep">{h.value}</div>
            <div className="text-sm font-semibold text-foreground">{h.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{h.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Location() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Laxmi+Balwant+Chambers+Jangali+Maharaj+Road+Pune";
  return (
    <Section id="location" eyebrow="Visit Us" title="Centrally Located in Pune" subtitle="Easy to reach from Shivajinagar and surrounding areas.">
      <div className="grid gap-6 lg:grid-cols-5">
        <div data-reveal className="lg:col-span-2 rounded-2xl bg-gradient-card p-8 shadow-card-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero shadow-elegant">
            <MapPin className="h-6 w-6 text-gold" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold text-primary-deep">Our Address</h3>
          <address className="mt-3 not-italic text-base leading-relaxed text-muted-foreground">
            3rd Floor, Laxmi Balwant Chambers,<br />
            Jangali Maharaj Road,<br />
            Above Hotel Surabhi,<br />
            Revenue Colony,<br />
            Pune, Maharashtra 411005
          </address>
          <div className="mt-5 rounded-xl border border-gold/30 bg-accent p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-deep">Service Area</div>
            <div className="mt-1 text-sm text-foreground">Shivajinagar and surrounding areas</div>
          </div>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]">
            <MapPin className="h-4 w-4" /> Open in Google Maps
          </a>
        </div>
        <div data-reveal className="lg:col-span-3 relative overflow-hidden rounded-2xl border border-border shadow-card-soft">
          <iframe
            title="Chetan Tadge Coaching Centre Location"
            src="https://www.google.com/maps?q=Jangali+Maharaj+Road+Pune+411005&output=embed"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,oklch(0.78_0.14_80/0.18),transparent_55%)]" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Contact
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl">
            Start Your <span className="text-gold">Success Journey</span> Today
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Speak with our team about courses, schedules, and admissions.
          </p>
        </div>

        <div data-reveal className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
              <Phone className="h-6 w-6 text-gold-foreground" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-white">Call our admissions desk</h3>
            <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-display text-3xl font-bold text-gold sm:text-4xl">{PHONE}</a>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <Clock className="h-4 w-4 text-gold" /> Mon–Sat, available during institute hours
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>3rd Floor, Laxmi Balwant Chambers, Jangali Maharaj Road, Pune 411005</span>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_TEL}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.02]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-smooth hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-gold p-8 shadow-gold">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-deep">
              <GraduationCap className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-gold-foreground">Admissions Open</h3>
            <p className="mt-3 text-sm leading-relaxed text-gold-foreground/85">
              IIT-JEE Main · IIT-JEE Advanced · MHT-CET · Foundation. Limited seats per batch to maintain
              personalized attention. Reach out today for syllabus, schedule, and fee details.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-gold-foreground/90">
              {["Personalized counselling", "Diagnostic test on enquiry", "Flexible batch timings", "Parent-teacher updates"].map((x) => (
                <li key={x} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4" /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.04_262)] py-14 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold shadow-gold">
              <GraduationCap className="h-6 w-6 text-gold-foreground" />
            </span>
            <div>
              <div className="font-display text-lg font-bold text-white">Chetan Tadge Coaching Centre</div>
              <div className="text-xs uppercase tracking-widest text-gold">Pune · Since trust matters</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            Helping students achieve academic excellence and competitive exam success through
            concept-based teaching, regular practice, and personalized mentoring.
          </p>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-gold">Courses</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>IIT-JEE Main</li>
            <li>IIT-JEE Advanced</li>
            <li>MHT-CET</li>
            <li>Foundation (Class 8–10)</li>
            <li>Mathematics Excellence</li>
            <li>Board Exam Support</li>
          </ul>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-widest text-gold">Reach Us</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">{PHONE}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Laxmi Balwant Chambers, JM Road, Pune 411005</li>
            <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" /> <a href={WHATSAPP} className="hover:text-gold">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Chetan Tadge Coaching Centre · All rights reserved
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 lg:hidden">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-elegant" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
      <a href={`tel:${PHONE_TEL}`} className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold" aria-label="Call">
        <Phone className="h-6 w-6 text-gold-foreground" />
      </a>
    </div>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Courses />
        <Why />
        <Highlights />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
