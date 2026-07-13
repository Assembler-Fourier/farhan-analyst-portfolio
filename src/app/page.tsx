import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileSpreadsheet,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";
import farhanPortrait from "@/assets/farhan-ahmad.jpg";
import { DeferredFinanceOrb } from "@/components/DeferredFinanceOrb";
import { IrelandMap } from "@/components/IrelandMap";
import { Navigation } from "@/components/Navigation";
import { RoleRadar } from "@/components/RoleRadar";
import {
  academicHighlights,
  contact,
  experience,
  marketSignals,
  researchLinks,
  skills,
} from "@/data/profile";

const siteUrl = "https://farhananalyst.com";

const recruiterProof = [
  ["Location", "Dublin, Ireland"],
  ["Education", "MSc · NFQ Level 9"],
  ["Top result", "91% modelling"],
  ["Finance tools", "Excel + QuickBooks"],
  ["Work status", "Stamp 1G"],
  ["Search", "Ireland-wide"],
];

const financeFlow = [
  {
    icon: FileSpreadsheet,
    number: "01",
    title: "Capture",
    stack: "Records + source data",
    detail: "Start with complete, traceable inputs.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Model",
    stack: "Excel + finance logic",
    detail: "Turn detail into a useful structure.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Control",
    stack: "Accuracy + governance",
    detail: "Check assumptions, totals and exceptions.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Explain",
    stack: "Insight + communication",
    detail: "Make the result clear enough to act on.",
  },
];

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
    knowsAbout: skills,
    sameAs: [contact.linkedin],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Farhan Ahmad — Finance & Accounting",
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
          <div className="hero-network" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <div className="eyebrow-row">
                <span className="eyebrow">
                  <MapPin aria-hidden="true" size={15} />
                  Dublin, Ireland
                </span>
                <span className="eyebrow muted">
                  Open to Ireland · Stamp 1G
                </span>
              </div>

              <p className="intro-label">Farhan Ahmad · Finance &amp; Accounting</p>
              <h1 id="hero-title">
                Finance graduate turning complex numbers into{" "}
                <span>clear decisions.</span>
              </h1>
              <p className="hero-lede">
                MSc-qualified in International Accounting &amp; Finance, with a
                <strong> 91% result in Financial Modelling</strong> and practical
                experience across invoices, receivables, transactions, stock and
                operational reporting.
              </p>

              <div className="stack-chips" aria-label="Core finance capabilities">
                {skills.slice(0, 10).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="hero-actions" aria-label="Primary contact actions">
                <a className="button primary" href={`mailto:${contact.email}`}>
                  <Mail aria-hidden="true" size={18} />
                  Email Farhan
                </a>
                <a
                  className="button secondary"
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  WhatsApp
                </a>
                <a className="button secondary" href="#proof">
                  <Sparkles aria-hidden="true" size={18} />
                  View proof
                </a>
                <a
                  className="icon-link"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Farhan Ahmad on LinkedIn"
                >
                  <Network aria-hidden="true" size={20} />
                </a>
              </div>
            </div>

            <div className="candidate-card" aria-label="Farhan Ahmad verified finance profile">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <strong>candidate-proof.json</strong>
              </div>
              <div className="candidate-grid">
                <div className="candidate-photo" style={{ position: "relative" }}>
                  <Image
                    src={farhanPortrait}
                    alt="Farhan Ahmad, finance and accounting graduate based in Dublin"
                    fill
                    priority
                    sizes="(max-width: 760px) 40vw, 190px"
                    placeholder="blur"
                  />
                  <div className="candidate-photo-overlay" />
                  <div className="candidate-caption">
                    <span>Based in</span>
                    <strong>Dublin, Ireland</strong>
                  </div>
                </div>

                <div className="proof-console">
                  <p className="console-label">Verified, not vague</p>
                  <div className="signal-list">
                    <div className="proof-signal">
                      <span>01</span>
                      <div>
                        <strong>Financial Modelling</strong>
                        <small>DBS final transcript</small>
                      </div>
                      <b>91%</b>
                    </div>
                    <div className="proof-signal">
                      <span>02</span>
                      <div>
                        <strong>Treasury Risk</strong>
                        <small>Distinction-level result</small>
                      </div>
                      <b>75%</b>
                    </div>
                    <div className="proof-signal">
                      <span>03</span>
                      <div>
                        <strong>MSc Finance</strong>
                        <small>NFQ Level 9 · 90 ECTS</small>
                      </div>
                      <b>2026</b>
                    </div>
                    <div className="proof-signal compact-signal">
                      <span>04</span>
                      <div>
                        <strong>Work ready</strong>
                        <small>Dublin-based · Ireland-open</small>
                      </div>
                      <b>1G</b>
                    </div>
                  </div>
                  <div className="console-flow" aria-hidden="true">
                    <span>Capture</span>
                    <i />
                    <span>Model</span>
                    <i />
                    <span>Explain</span>
                    <i />
                    <span>Act</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="recruiter-proof" aria-label="Recruiter proof strip">
          <div className="shell proof-grid">
            {recruiterProof.map(([label, value]) => (
              <article key={label} className="proof-item">
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="finance-system" aria-labelledby="system-title">
          <div className="finance-system-scene" aria-hidden="true">
            <DeferredFinanceOrb />
          </div>
          <div className="shell system-shell">
            <div className="system-copy">
              <div className="section-eyebrow">
                <WalletCards aria-hidden="true" size={16} />
                Finance operating system
              </div>
              <h2 id="system-title">
                From raw numbers to a decision{" "}
                <span>someone can use.</span>
              </h2>
              <p>
                Farhan&apos;s strongest signal is the combination of quantitative
                training and operational discipline: build the model, check the
                detail, explain the result and follow through.
              </p>
              <dl className="scene-specs" aria-label="Interactive scene information">
                <div>
                  <dt>Signal</dt>
                  <dd>91% modelling</dd>
                </div>
                <div>
                  <dt>Mode</dt>
                  <dd>Analyse → explain</dd>
                </div>
                <div>
                  <dt>Motion</dt>
                  <dd>Reduced when requested</dd>
                </div>
              </dl>
            </div>
            <div className="system-visual-space" aria-hidden="true" />
            <ol className="finance-flow" aria-label="Farhan's finance workflow">
              {financeFlow.map((stage) => {
                const Icon = stage.icon;
                return (
                  <li key={stage.number}>
                    <span>{stage.number}</span>
                    <Icon aria-hidden="true" size={18} />
                    <div>
                      <strong>{stage.title}</strong>
                      <small>{stage.stack}</small>
                      <p>{stage.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="academic-proof shell" aria-labelledby="academic-title">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">
                <CheckCircle2 aria-hidden="true" size={16} />
                Transcript-backed proof
              </div>
              <h2 id="academic-title">
                The numbers behind the <span>analyst signal.</span>
              </h2>
            </div>
            <p>
              Final DBS transcript issued February 2026 · Second Class Honours ·
              60.39% weighted average · no resit attempts.
            </p>
          </div>

          <div className="academic-grid">
            {academicHighlights.map((metric, index) => (
              <article key={metric.label} className="academic-card">
                <span>0{index + 1}</span>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
                <div className="metric-trace" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="role-fit" className="role-section" aria-labelledby="role-title">
          <div className="shell">
            <div className="section-heading light-heading">
              <div>
                <div className="section-eyebrow">
                  <Target aria-hidden="true" size={16} />
                  Recruiter role map
                </div>
                <h2 id="role-title">
                  Focused enough to place. <span>Broad enough to grow.</span>
                </h2>
              </div>
              <p>
                Select a role pathway to see the exact academic or practical
                evidence behind the match.
              </p>
            </div>
            <RoleRadar />
          </div>
        </section>

        <section id="experience" className="experience-section shell" aria-labelledby="experience-title">
          <div className="section-heading">
            <div>
              <div className="section-eyebrow">
                <BriefcaseBusiness aria-hidden="true" size={16} />
                Experience translated
              </div>
              <h2 id="experience-title">
                Practical work, mapped to <span>finance value.</span>
              </h2>
            </div>
            <p>
              A consistent record of accurate documentation, transactions,
              coordination and trusted operational follow-through.
            </p>
          </div>

          <div className="experience-grid">
            {experience.map((item, index) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div className="experience-topline">
                  <span>0{index + 1}</span>
                  <time>{item.period}</time>
                </div>
                <h3>{item.role}</h3>
                <p className="experience-company">
                  {item.company} <span>·</span> {item.location}
                </p>
                <p>{item.summary}</p>
                <div className="tag-list" aria-label={`${item.role} transferable skills`}>
                  {item.transferable.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="market-section" aria-labelledby="market-title">
          <div className="shell market-shell">
            <div className="market-copy">
              <div className="section-eyebrow">
                <BarChart3 aria-hidden="true" size={16} />
                Ireland market signal
              </div>
              <h2 id="market-title">
                The search strategy is <span>evidence-led.</span>
              </h2>
              <p>
                Irish labour-market evidence points toward finance talent that
                combines accounting fundamentals with Excel, analysis, compliance
                awareness and communication.
              </p>
              <div className="source-links">
                {researchLinks.map((source) => (
                  <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                    {source.label}
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div className="market-metrics">
              {marketSignals.map((signal) => (
                <article key={signal.label}>
                  <strong>{signal.value}</strong>
                  <h3>{signal.label}</h3>
                  <p>{signal.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ireland" className="ireland-section" aria-labelledby="ireland-title">
          <div className="shell">
            <div className="section-heading light-heading">
              <div>
                <div className="section-eyebrow">
                  <MapPin aria-hidden="true" size={16} />
                  Opportunity explorer
                </div>
                <h2 id="ireland-title">
                  Dublin-based. <span>Ireland-open.</span>
                </h2>
              </div>
              <p>
                Explore realistic finance ecosystems and role families across the
                country.
              </p>
            </div>
            <IrelandMap />
          </div>
        </section>

        <section className="education-section shell" aria-labelledby="education-title">
          <div className="section-eyebrow">
            <GraduationCap aria-hidden="true" size={16} />
            Education
          </div>
          <h2 id="education-title">
            Accounting foundation. <span>International finance edge.</span>
          </h2>
          <div className="education-grid">
            <article>
              <span>2025 — 2026 · NFQ Level 9</span>
              <h3>MSc International Accounting &amp; Finance</h3>
              <p>Dublin Business School · Awarded by QQI</p>
              <strong>Second Class Honours · 90 ECTS</strong>
            </article>
            <article>
              <span>2019 — 2023</span>
              <h3>BS Accounting &amp; Finance</h3>
              <p>National University of Modern Languages</p>
              <strong>Accounting and finance foundation</strong>
            </article>
            <aside>
              <ShieldCheck aria-hidden="true" size={24} />
              <p>
                Interested in structured ACA, ACCA or CIMA pathways alongside
                practical finance experience.
              </p>
            </aside>
          </div>
        </section>

        <div className="keyword-strip" aria-label="Recruiter keyword strip">
          <div>
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill}-${index}`} aria-hidden={index >= skills.length}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <section id="contact" className="contact-section shell" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            Available for finance opportunities
          </div>
          <h2 id="contact-title">
            Send the role. Farhan will map his <span>evidence to it.</span>
          </h2>
          <p>
            For graduate finance, trainee accounting, fund operations, treasury,
            reporting and accounts roles across Ireland.
          </p>
          <div className="contact-actions">
            <a className="button primary large" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={19} />
              Email Farhan
            </a>
            <a
              className="button secondary large"
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" size={19} />
              WhatsApp
            </a>
          </div>
          <div className="contact-meta">
            <a href={`tel:${contact.phone}`}>
              <Phone aria-hidden="true" size={17} />
              {contact.phoneDisplay}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Network aria-hidden="true" size={17} />
              LinkedIn profile
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={17} />
              {contact.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <div className="footer-brand">
          <span>FA</span>
          <div>
            <strong>Farhan Ahmad</strong>
            <small>Finance &amp; accounting · Dublin</small>
          </div>
        </div>
        <a href="#top">
          Back to top
          <ArrowRight aria-hidden="true" size={15} />
        </a>
        <span>farhananalyst.com</span>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
