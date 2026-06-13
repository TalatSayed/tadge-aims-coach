import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone, MessageCircle, Star, MapPin, GraduationCap, Atom, Calculator,
  BookOpen, Sparkles, Target, Users, Award, ClipboardCheck, FileCheck2,
  UserCheck, Trophy, Layers, HeartHandshake, Menu, X, ChevronRight, Mail,
  Clock, ShieldCheck, Laptop, Home, Globe2, Languages, FlaskConical,
  Plus, Minus, CheckCircle2, Quote, TrendingUp,
} from "lucide-react";
import heroBg from "@/assets/lp-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learning Potato — Home Tuition & Online Classes in Pune | CBSE, ICSE, SSC, IGCSE, IB" },
      { name: "description", content: "Pune's most trusted home tuition & online learning platform. Verified expert tutors for CBSE, ICSE, SSC, IGCSE, IB, NIOS & State Board. ⭐ 4.8 rating, 469+ reviews, 1000+ students assisted." },
      { property: "og:title", content: "Learning Potato — Home Tuition & Online Classes in Pune" },
      { property: "og:description", content: "Verified expert tutors for CBSE, ICSE, SSC, IGCSE, IB & State Board. ⭐ 4.8 | 469+ reviews | 1000+ students assisted." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Learning Potato",
        description: "Home Tuition & Online Classes in Pune for CBSE, ICSE, SSC, IGCSE, IB, NIOS & State Board.",
        url: "https://tadge-aims-coach.lovable.app/",
        telephone: "+91-96650-18788",
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "469" },
      }),
    }],
  }),
  component: Index,
});

const PHONE = "+91 96650 18788";
const PHONE_TEL = "+919665018788";
const WHATSAPP = "https://wa.me/919665018788?text=Hi%20Learning%20Potato%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class.";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "subjects", label: "Subjects" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQ" },
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
            (e.target as HTMLElement).style.opacity = "1";
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

function useCounter(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setVal(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-smooth ${scrolled ? "glass-card shadow-card-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-white shadow-elegant">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-base font-extrabold text-primary-deep sm:text-lg">Learning Potato</div>
            <div className="text-[10px] font-medium text-muted-foreground sm:text-xs">Home Tuition · Online Classes · Pune</div>
          </div>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:bg-secondary hover:text-primary-deep">
              {n.label}
            </button>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition-smooth hover:opacity-95">
            <Phone className="h-4 w-4" /> Book Free Demo
          </a>
        </nav>
        <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => { scrollTo(n.id); setOpen(false); }} className="rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-secondary">
                {n.label}
              </button>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-gold">
              <Phone className="h-4 w-4" /> Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-screen" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating decorative blobs */}
      <div className="absolute -left-20 top-32 -z-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-float-slow" />
      <div className="absolute -right-20 top-48 -z-10 h-80 w-80 rounded-full bg-[var(--orange)]/30 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-white" data-reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-[var(--orange)]" /> Pune's #1 Trusted Learning Platform
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Pune's Most Trusted <span className="bg-gradient-to-r from-[var(--orange)] to-[var(--gold)] bg-clip-text text-transparent">Home Tuition</span> & Online Learning Platform
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Expert tutors for <strong className="text-white">CBSE, ICSE, SSC, IGCSE, IB, NIOS & State Board</strong>. Personalised learning at home or online — taught by verified, experienced educators.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <Badge icon={<Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />} text="4.8 Rating" />
              <Badge icon={<MessageCircle className="h-4 w-4 text-[var(--orange)]" />} text="469+ Reviews" />
              <Badge icon={<Users className="h-4 w-4 text-[var(--primary-glow)]" />} text="1000+ Students Assisted" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-orange px-6 py-3.5 text-sm font-semibold text-white shadow-gold transition-smooth hover:scale-[1.02]">
                Book Free Demo Class <ChevronRight className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3.5 text-sm font-semibold text-primary-deep transition-smooth hover:bg-white">
                <Phone className="h-4 w-4" /> Talk to an Academic Advisor
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-white/75">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-gradient-to-br from-primary-glow to-[var(--orange)] text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by parents across Kothrud, Baner, Viman Nagar, Hadapsar & more</span>
            </div>
          </div>

          {/* Hero card cluster */}
          <div className="relative" data-reveal>
            <div className="glass-card rounded-3xl p-6 shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live Demo Booking</div>
                  <div className="mt-1 font-display text-xl font-bold text-primary-deep">Reserve Your Slot</div>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                  <Laptop className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { i: <ShieldCheck className="h-4 w-4" />, t: "Verified, background-checked tutors" },
                  { i: <Target className="h-4 w-4" />, t: "Personalised learning plan" },
                  { i: <Clock className="h-4 w-4" />, t: "Flexible timings — at home or online" },
                  { i: <Trophy className="h-4 w-4" />, t: "Track record of board toppers" },
                ].map((r, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-xl bg-secondary/70 px-3 py-2.5 text-sm text-foreground">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-orange text-white">{r.i}</span>
                    {r.t}
                  </div>
                ))}
              </div>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 text-sm font-semibold text-white shadow-elegant transition-smooth hover:opacity-95">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
              </a>
            </div>

            {/* Floating review badge */}
            <div className="absolute -left-4 -top-4 hidden glass-card rounded-2xl px-4 py-3 shadow-card-soft animate-float-slow sm:block">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
                <div>
                  <div className="text-sm font-bold text-primary-deep">4.8 / 5</div>
                  <div className="text-[10px] font-medium text-muted-foreground">469 verified reviews</div>
                </div>
              </div>
            </div>

            {/* Floating success counter */}
            <div className="absolute -bottom-4 -right-2 hidden glass-card rounded-2xl px-4 py-3 shadow-card-soft animate-float-slow sm:block" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[var(--orange)]" />
                <div>
                  <div className="text-sm font-bold text-primary-deep">1000+ Students</div>
                  <div className="text-[10px] font-medium text-muted-foreground">Successfully mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1.5 font-semibold text-white">
      {icon} {text}
    </span>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-3xl font-extrabold text-primary-deep sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="About Learning Potato" title="Where personalised learning meets proven results" sub="Learning Potato connects students across Pune with India's most rigorously screened tutors — for one-to-one home tuition and live online classes that actually move grades." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { icon: <HeartHandshake className="h-6 w-6" />, t: "Personalised mentorship", d: "Every student gets a learning plan built around their syllabus, pace and weak areas." },
            { icon: <ShieldCheck className="h-6 w-6" />, t: "Verified expert tutors", d: "Each tutor clears background checks, academic screening and a demo evaluation before joining." },
            { icon: <Trophy className="h-6 w-6" />, t: "Outcome obsessed", d: "Regular tests, parent feedback loops, and tutor reviews to keep every student on track." },
          ].map((c) => (
            <div key={c.t} data-reveal className="group rounded-3xl bg-gradient-card p-7 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-elegant transition-smooth group-hover:scale-110">{c.icon}</div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: <UserCheck className="h-5 w-5" />, t: "100% verified tutors" },
    { icon: <Target className="h-5 w-5" />, t: "Personalised learning roadmap" },
    { icon: <Home className="h-5 w-5" />, t: "Home tuition across Pune" },
    { icon: <Laptop className="h-5 w-5" />, t: "Live online interactive classes" },
    { icon: <ClipboardCheck className="h-5 w-5" />, t: "Weekly progress reports" },
    { icon: <HeartHandshake className="h-5 w-5" />, t: "Dedicated academic advisor" },
    { icon: <Award className="h-5 w-5" />, t: "Board-topper teaching methodology" },
    { icon: <ShieldCheck className="h-5 w-5" />, t: "Money-back demo guarantee" },
  ];
  return (
    <section id="why" className="relative bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Why Choose Us" title="Built for parents who refuse to compromise" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} data-reveal className="flex items-start gap-3 rounded-2xl glass-card p-5 shadow-card-soft transition-smooth hover:-translate-y-0.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-orange text-white">{i.icon}</span>
              <div className="min-w-0">
                <div className="font-semibold text-primary-deep">{i.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  const subs = [
    { icon: <Calculator className="h-6 w-6" />, t: "Mathematics" },
    { icon: <Atom className="h-6 w-6" />, t: "Physics" },
    { icon: <FlaskConical className="h-6 w-6" />, t: "Chemistry" },
    { icon: <BookOpen className="h-6 w-6" />, t: "Biology" },
    { icon: <Languages className="h-6 w-6" />, t: "English" },
    { icon: <Globe2 className="h-6 w-6" />, t: "Social Studies" },
    { icon: <Layers className="h-6 w-6" />, t: "Accountancy" },
    { icon: <TrendingUp className="h-6 w-6" />, t: "Economics" },
    { icon: <Laptop className="h-6 w-6" />, t: "Computer Science" },
    { icon: <Sparkles className="h-6 w-6" />, t: "Hindi & Marathi" },
    { icon: <Target className="h-6 w-6" />, t: "Business Studies" },
    { icon: <Award className="h-6 w-6" />, t: "Foundation 5-8" },
  ];
  return (
    <section id="subjects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Subjects We Teach" title="15+ subjects across every major board" sub="From Maths and Sciences to languages and commerce — pick any subject, any grade, any board." />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {subs.map((s) => (
            <div key={s.t} data-reveal className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-smooth hover:-translate-y-0.5 hover:border-[var(--orange)] hover:shadow-card-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary-deep transition-smooth group-hover:bg-gradient-orange group-hover:text-white">{s.icon}</span>
              <span className="text-sm font-semibold text-foreground">{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      tag: "Home Tuition",
      icon: <Home className="h-6 w-6" />,
      t: "1-on-1 Home Tuition in Pune",
      d: "Hand-picked tutors visit your home for distraction-free, personalised lessons tailored to your child's pace.",
      f: ["Verified local tutors", "Flexible scheduling", "Choose male/female tutor", "Trial demo class"],
    },
    {
      tag: "Online Classes",
      icon: <Laptop className="h-6 w-6" />,
      t: "Live Online Classes",
      d: "Interactive 1-to-1 and small-group live sessions with India's best educators — from anywhere in Pune.",
      f: ["Live whiteboard sessions", "Recorded class access", "Doubt-clearing on chat", "Weekly mock tests"],
    },
  ];
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Our Services" title="Choose how your child learns best" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map((c) => (
            <div key={c.t} data-reveal className="group relative overflow-hidden rounded-3xl bg-gradient-card p-8 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-brand opacity-10 transition-smooth group-hover:scale-150" />
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-elegant">{c.icon}</span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.tag}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-primary-deep">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {c.f.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition-smooth hover:scale-[1.02]">
                Book Free Demo <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Board-wise programs */}
        <div className="mt-16">
          <SectionHeader eyebrow="Board-wise Programs" title="Specialised teaching for every curriculum" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "CBSE", d: "Class 1-12, NCERT-aligned." },
              { t: "ICSE / ISC", d: "Concept-first depth for Class 1-12." },
              { t: "SSC (Maharashtra)", d: "State board mastery, Marathi medium options." },
              { t: "IGCSE / Cambridge", d: "Cambridge curriculum specialists." },
              { t: "IB (PYP, MYP, DP)", d: "Inquiry-based, IA & EE mentoring." },
              { t: "NIOS", d: "Open schooling support, exam-ready." },
              { t: "HSC Science / Commerce", d: "JEE/NEET/CET integrated prep." },
              { t: "Foundation 5-8", d: "Strong base in maths, science & languages." },
            ].map((b) => (
              <div key={b.t} data-reveal className="rounded-2xl border border-border bg-card p-5 transition-smooth hover:-translate-y-0.5 hover:border-primary-glow hover:shadow-card-soft">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white text-xs font-bold">{b.t.split(" ")[0].slice(0,2)}</span>
                  <div className="font-display font-bold text-primary-deep">{b.t}</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const reviews = useCounter(469, start);
  const rating = useCounter(48, start);
  const students = useCounter(1000, start);
  const tutors = useCounter(50, start);
  const subjects = useCounter(15, start);

  const items = [
    { n: `${reviews}+`, l: "Verified Reviews" },
    { n: `${(rating / 10).toFixed(1)}★`, l: "Average Rating" },
    { n: `${students}+`, l: "Students Supported" },
    { n: `${tutors}+`, l: "Expert Tutors" },
    { n: `${subjects}+`, l: "Subjects Taught" },
  ];
  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-hero py-16 text-white">
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[var(--orange)]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary-glow/40 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.l} className="glass-dark rounded-2xl p-5">
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">{i.n}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">{i.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Verification() {
  const steps = [
    { n: "01", icon: <ShieldCheck className="h-5 w-5" />, t: "Background Verification", d: "Identity, address & criminal record checks via verified partners." },
    { n: "02", icon: <ClipboardCheck className="h-5 w-5" />, t: "Demo Evaluation", d: "Every tutor delivers a live demo evaluated by our academic team." },
    { n: "03", icon: <FileCheck2 className="h-5 w-5" />, t: "Academic Screening", d: "Degrees, board familiarity and subject-matter expertise verified." },
    { n: "04", icon: <UserCheck className="h-5 w-5" />, t: "Parent Feedback Tracking", d: "Continuous parent reviews & monthly performance audits." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Tutor Verification" title="Only the top 8% of tutors make it through" sub="A four-stage process designed to protect your child and guarantee teaching quality." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} data-reveal className="relative overflow-hidden rounded-3xl bg-gradient-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute right-3 top-3 font-display text-4xl font-extrabold text-secondary">{s.n}</div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-orange text-white shadow-gold">{s.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary-deep">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { n: "Priya S.", r: "Parent · CBSE Class 10", t: "Excellent service and quality teachers. My daughter's maths jumped from 62% to 91%." },
  { n: "Rajesh K.", r: "Parent · ICSE Class 8", t: "Great work ethics and prompt communication. The advisor genuinely cares." },
  { n: "Sneha M.", r: "Student · IGCSE Y10", t: "Value for money and highly professional. My tutor explains every doubt patiently." },
  { n: "Amit P.", r: "Parent · SSC Class 9", t: "Found a verified Marathi-medium tutor within 2 days. Smooth and trustworthy." },
  { n: "Neha D.", r: "Parent · IB DP", t: "IB Math AA HL was scary. Learning Potato's tutor made it manageable." },
  { n: "Karan V.", r: "Parent · CBSE Class 12", t: "Weekly tests + parent updates kept us in the loop. Highly recommended." },
];

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Student & Parent Reviews" title="469+ five-star reviews and counting" sub="Real words from real Pune parents and students." />
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="flex w-max gap-5 animate-marquee">
          {[...REVIEWS, ...REVIEWS].map((r, idx) => (
            <div key={idx} className="w-[320px] shrink-0 rounded-3xl bg-card p-6 shadow-card-soft sm:w-[380px]">
              <Quote className="h-7 w-7 text-[var(--orange)]" />
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{r.t}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                  {r.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-primary-deep">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.r}</div>
                </div>
                <div className="ml-auto flex">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const stories = [
    { n: "Aarav, Class 10 CBSE", s: "68% → 94%", t: "Cracked board exams with distinction in Maths & Science." },
    { n: "Isha, Class 12 HSC Science", s: "AIR <5000 in CET", t: "Joined a top engineering college in Pune." },
    { n: "Rohan, IGCSE Y11", s: "5 A*s", t: "Scored A* across all sciences in Cambridge boards." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Student Success Stories" title="Real students. Real results." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((s) => (
            <div key={s.n} data-reveal className="rounded-3xl bg-gradient-brand p-7 text-white shadow-elegant transition-smooth hover:-translate-y-1">
              <Trophy className="h-8 w-8 text-[var(--gold)]" />
              <div className="mt-4 font-display text-3xl font-extrabold">{s.s}</div>
              <div className="mt-1 text-sm font-medium text-white/80">{s.n}</div>
              <p className="mt-3 text-sm text-white/85">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How quickly can a home tutor start in Pune?", a: "In most localities we match a verified tutor within 24-48 hours. Demo class is free." },
    { q: "Do you cover all boards including IGCSE and IB?", a: "Yes — CBSE, ICSE, SSC (Maharashtra), IGCSE, IB (PYP/MYP/DP), NIOS and HSC are all supported." },
    { q: "Are tutors background-verified?", a: "Every tutor passes a 4-stage process: background check, academic screening, demo evaluation and ongoing parent feedback." },
    { q: "What if I don't like the assigned tutor?", a: "Tell your academic advisor — we'll replace the tutor at no cost. Your satisfaction is guaranteed." },
    { q: "Do you offer online classes?", a: "Yes, live 1-on-1 and small-group online classes with recorded access for revision." },
    { q: "What are the fees?", a: "Fees depend on grade, board and frequency. Talk to an advisor for a transparent custom quote." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently asked by Pune parents" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} data-reveal className="rounded-2xl bg-card shadow-card-soft">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-display text-base font-bold text-primary-deep sm:text-lg">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-orange text-white">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", grade: "", board: "", message: "" });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const text = encodeURIComponent(
      `Hi Learning Potato!\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nGrade: ${form.grade}\nBoard: ${form.board}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919665018788?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Get In Touch" title="Book your free demo class today" sub="Tell us about your child and we'll match the perfect tutor — usually within 24 hours." />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} data-reveal className="rounded-3xl bg-card p-7 shadow-elegant sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Parent / Student Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Phone Number *" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Grade / Class" value={form.grade} onChange={(v) => setForm({ ...form, grade: v })} placeholder="e.g. Class 10" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Board</label>
                <select value={form.board} onChange={(e) => setForm({ ...form, board: e.target.value })} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/30">
                  <option value="">Select board</option>
                  {["CBSE", "ICSE", "SSC (Maharashtra)", "IGCSE", "IB", "NIOS", "HSC", "Other"].map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} placeholder="Subjects, timings, any specific needs…" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/30" />
              </div>
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-orange py-3.5 text-sm font-bold text-white shadow-gold transition-smooth hover:scale-[1.01] sm:w-auto sm:px-10">
              {submitted ? "Sent ✓ We'll Call You Soon" : "Book Free Demo Class"}
              <ChevronRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to receive WhatsApp & call from Learning Potato's academic advisors.</p>
          </form>

          <div className="space-y-4" data-reveal>
            <div className="rounded-3xl bg-gradient-brand p-7 text-white shadow-elegant">
              <div className="font-display text-2xl font-bold">Talk to an Advisor</div>
              <p className="mt-1 text-sm text-white/80">Open Mon–Sun, 9 AM – 9 PM</p>
              <div className="mt-5 space-y-3">
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Call" value={PHONE} href={`tel:${PHONE_TEL}`} />
                <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp" value="Chat instantly" href={WHATSAPP} />
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="hello@learningpotato.in" href="mailto:hello@learningpotato.in" />
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Service Area" value="All of Pune & PCMC" />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-card-soft">
              <iframe title="Pune location" src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed" loading="lazy" className="h-64 w-full border-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} required={required} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} maxLength={120} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/30" />
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl glass-dark px-4 py-3 transition-smooth hover:bg-white/15">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 text-white">{icon}</span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-white/70">{label}</div>
        <div className="truncate text-sm font-semibold text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-primary-deep py-12 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-orange text-white shadow-gold">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="font-display text-lg font-extrabold text-white">Learning Potato</div>
            </div>
            <p className="mt-3 text-sm text-white/70">Helping students achieve academic excellence through personalised home tuition and live online classes across Pune.</p>
          </div>
          <div>
            <div className="font-display font-bold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Home Tuition</li>
              <li>Online Classes</li>
              <li>Board Prep (CBSE, ICSE, SSC, IGCSE, IB)</li>
              <li>Foundation Programs</li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold text-white">Contact</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={`tel:${PHONE_TEL}`} className="hover:text-white">{PHONE}</a></li>
              <li><a href="mailto:hello@learningpotato.in" className="hover:text-white">hello@learningpotato.in</a></li>
              <li>Serving all of Pune & PCMC</li>
            </ul>
          </div>
          <div>
            <div className="font-display font-bold text-white">Local SEO</div>
            <p className="mt-3 text-xs text-white/60">Home Tuition Pune · Online Classes Pune · CBSE Tuition Pune · ICSE Tuition Pune · SSC Tuition Pune · IGCSE & IB Tutors Pune.</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Learning Potato. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingCTAs() {
  return (
    <>
      {/* Side review badge - desktop */}
      <div className="fixed left-4 bottom-24 z-40 hidden glass-card rounded-2xl px-3 py-2 shadow-elegant md:block">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
          <div className="text-xs">
            <div className="font-bold text-primary-deep">4.8 · 469 Reviews</div>
            <div className="text-[10px] text-muted-foreground">Verified parents</div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3">
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-pulse-ring transition-smooth hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </a>
        <a href={`tel:${PHONE_TEL}`} aria-label="Call" className="grid h-14 w-14 place-items-center rounded-full bg-gradient-orange text-white shadow-gold transition-smooth hover:scale-110">
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
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
        <WhyUs />
        <Subjects />
        <Services />
        <Stats />
        <Verification />
        <SuccessStories />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}