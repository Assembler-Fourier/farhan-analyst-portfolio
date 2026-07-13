import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import farhanPortrait from "@/assets/farhan-ahmad-portrait-v2.png";
import { Navigation } from "@/components/Navigation";
import {
  academicHighlights,
  contact,
  experience,
  roleFits,
} from "@/data/profile";

const siteUrl = "https://farhananalyst.com";

const skillCards = [
  {
    icon: LineChart,
    title: "Financial modelling",
    detail: "Forecasting, projections and structured decision models.",
    proof: "91% MSc result",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & QuickBooks",
    detail: "Reliable records, reconciliations and operational reporting.",
    proof: "Hands-on tools",
  },
  {
    icon: BarChart3,
    title: "Reporting & analysis",
    detail: "Account summaries, sales reporting and margin analysis.",
    proof: "Practical experience",
  },
  {
    icon: Landmark,
    title: "Treasury & finance",
    detail: "Risk, liquidity and advanced financial management foundations.",
    proof: "75% treasury risk",
  },
  {
    icon: ShieldCheck,
    title: "Controls & accuracy",
    detail: "Careful documentation, governance awareness and follow-through.",
    proof: "Work-tested",
  },
] as const;

const heroProof = [
  ["91%", "Financial modelling"],
  ["75%", "Treasury risk"],
  ["MSc", "NFQ Level 9"],
  ["1G", "Ireland work-ready"],
] as const;

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Farhan Ahmad",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: `mailto:${contact.email}`,
    telephone: contact.phone,
    jobTitle: [
      "Finance and Accounting Graduate",
      "Graduate Financial Analyst",
      "Trainee Accountant",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Dublin Business School" },
      {
        "@type": "CollegeOrUniversity",
        name: "National University of Modern Languages",
      },
    ],
    sameAs: [contact.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Farhan Ahmad — Financial Analyst Portfolio",
    url: siteUrl,
    inLanguage: "en-IE",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    dateModified: "2026-07-13",
    inLanguage: "en-IE",
    mainEntity: { "@id": `${siteUrl}/#person` },
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>
      <Navigation />

      <main id="content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="availability">
                <span aria-hidden="true" />
                Dublin based · Open across Ireland
              </p>
              <h1 id="hero-title">
                <span>Finance &amp; Accounting</span> analyst with practical
                experience.
              </h1>
              <p className="hero-lede">
                MSc-qualified with standout results in financial modelling and
                treasury risk—plus hands-on experience across invoices,
                receivables, transactions, stock and operational reporting.
              </p>

              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#experience">
                  View my experience
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="button button-secondary" href={`mailto:${contact.email}`}>
                  <Mail aria-hidden="true" size={18} />
                  Email Farhan
                </a>
              </div>

              <div className="hero-links">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Network aria-hidden="true" size={17} />
                  LinkedIn
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" size={17} />
                  WhatsApp
                </a>
                <span>
                  <MapPin aria-hidden="true" size={17} />
                  Stamp 1G
                </span>
              </div>
            </div>

            <div className="portrait-frame">
              <div className="portrait-image">
                <Image
                  src={farhanPortrait}
                  alt="Farhan Ahmad, finance and accounting graduate based in Dublin"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 760px) 92vw, 47vw"
                />
              </div>
              <div className="portrait-nameplate">
                <div>
                  <span>Farhan Ahmad</span>
                  <small>Finance &amp; accounting</small>
                </div>
                <ArrowUpRight aria-hidden="true" size={19} />
              </div>
              <div className="portrait-badge">
                <TrendingUp aria-hidden="true" size={16} />
                91% modelling
              </div>
            </div>
          </div>

          <div className="shell proof-strip" aria-label="Academic and work proof">
            {heroProof.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section shell" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <p className="kicker">Top skills &amp; tools</p>
              <h2 id="skills-title">
                Built for <span>clear financial thinking.</span>
              </h2>
            </div>
            <p>
              A practical blend of accounting fundamentals, quantitative finance
              and reliable day-to-day execution.
            </p>
          </div>

          <div className="skills-grid">
            {skillCards.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-top">
                    <Icon aria-hidden="true" size={22} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                  <small>{skill.proof}</small>
                </article>
              );
            })}
          </div>
        </section>

        <section id="proof" className="proof-section">
          <div className="shell proof-layout">
            <div className="scoreboard" aria-label="Transcript highlights">
              <div className="scoreboard-head">
                <span>DBS · Final transcript</span>
                <CheckCircle2 aria-hidden="true" size={18} />
              </div>
              {academicHighlights.slice(0, 3).map((metric) => (
                <div className="score-row" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <div>
                    <span>{metric.label}</span>
                    <small>{metric.detail}</small>
                  </div>
                  <div className="score-line" aria-hidden="true">
                    <i style={{ width: metric.value }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="proof-copy">
              <p className="kicker">Qualifications</p>
              <h2>
                Strong academic proof. <span>Grounded work habits.</span>
              </h2>
              <p>
                Farhan combines an international finance master&apos;s with an
                accounting and finance bachelor&apos;s—and a record of accurate,
                trusted operational work.
              </p>

              <div className="education-list">
                <article>
                  <GraduationCap aria-hidden="true" size={21} />
                  <div>
                    <span>2025–2026 · Dublin Business School</span>
                    <h3>MSc International Accounting &amp; Finance</h3>
                    <p>NFQ Level 9 · Second Class Honours · 90 ECTS</p>
                  </div>
                </article>
                <article>
                  <GraduationCap aria-hidden="true" size={21} />
                  <div>
                    <span>2019–2023 · NUML</span>
                    <h3>BS Accounting &amp; Finance</h3>
                    <p>Core accounting and financial management foundation</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section shell" aria-labelledby="experience-title">
          <div className="section-heading experience-heading">
            <div>
              <p className="kicker">Experience</p>
              <h2 id="experience-title">
                Work that translates into <span>finance value.</span>
              </h2>
            </div>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              Full profile
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article key={`${item.company}-${item.role}`}>
                <span className="experience-number">0{index + 1}</span>
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <p>{item.company} · {item.location}</p>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <time>{item.period}</time>
              </article>
            ))}
          </div>

          <div className="role-band" aria-label="Target finance roles">
            <div>
              <BriefcaseBusiness aria-hidden="true" size={20} />
              <strong>Target roles</strong>
            </div>
            <div className="role-tags">
              {roleFits.map((role) => (
                <span key={role.id}>{role.title}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section shell" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="kicker">Available for opportunities</p>
            <h2 id="contact-title">
              Looking for a finance graduate who is <span>ready to contribute?</span>
            </h2>
            <p>
              Farhan is Dublin-based, Stamp 1G work-ready and open to graduate
              finance and accounting roles across Ireland.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${contact.email}`}>
              Start a conversation
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <a href="#top" className="footer-brand">Farhan Ahmad</a>
        <p>Finance &amp; Accounting · Dublin, Ireland</p>
        <div>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
