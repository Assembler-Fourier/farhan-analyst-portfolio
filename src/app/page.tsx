import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
} from "lucide-react";
import farhanPortrait from "@/assets/farhan-ahmad.jpg";
import { FinanceOrb } from "@/components/FinanceOrb";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farhan Ahmad",
  url: "https://farhananalyst.com",
  email: `mailto:${contact.email}`,
  telephone: contact.phoneDisplay,
  jobTitle: "Finance and Accounting Graduate",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Dublin Business School",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "National University of Modern Languages",
    },
  ],
  knowsAbout: [
    "Financial modelling",
    "Treasury risk management",
    "International financial reporting",
    "Microsoft Excel",
    "QuickBooks",
  ],
  sameAs: [contact.linkedin],
  image: "https://farhananalyst.com/opengraph-image",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="live-dot" />
              Dublin-based · Open across Ireland
            </div>
            <h1 id="hero-title">
              Numbers,
              <br />
              <em>made useful.</em>
            </h1>
            <p className="hero-intro">
              Farhan Ahmad is an MSc-qualified finance and accounting graduate
              building a career at the intersection of <strong>modelling</strong>,
              <strong> treasury</strong> and <strong>reliable operations</strong>.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${contact.email}`}>
                Start a conversation
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="text-link" href="#role-fit">
                View evidence
                <ArrowDown aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="hero-status" aria-label="Professional status">
              <span>
                <MapPin aria-hidden="true" size={14} /> Dublin 1
              </span>
              <span>
                <ShieldCheck aria-hidden="true" size={14} /> Stamp 1G
              </span>
              <span>
                <BriefcaseBusiness aria-hidden="true" size={14} /> Available now
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <FinanceOrb />
            <div className="hero-visual-label" aria-hidden="true">
              <span>FA / 26</span>
              <span>Finance signal</span>
            </div>
          </div>

          <div className="hero-side-note" aria-hidden="true">
            <span>SCROLL TO</span>
            <span>EXPLORE</span>
          </div>
        </section>

        <div className="ticker" aria-label="Core professional strengths">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
                <span>FINANCIAL MODELLING</span>
                <i>✦</i>
                <span>TREASURY RISK</span>
                <i>✦</i>
                <span>IFRS</span>
                <i>✦</i>
                <span>EXCEL + QUICKBOOKS</span>
                <i>✦</i>
              </div>
            ))}
          </div>
        </div>

        <section id="profile" className="profile-section section-shell reveal-section">
          <div className="section-index">01 / PROFILE</div>
          <div className="profile-grid">
            <figure className="portrait-frame">
              <div className="portrait-orbit" aria-hidden="true" />
              <Image
                src={farhanPortrait}
                alt="Farhan Ahmad wearing a formal suit"
                sizes="(max-width: 760px) 88vw, 38vw"
                placeholder="blur"
              />
              <figcaption>
                <span>Farhan Ahmad</span>
                <span>Dublin, Ireland</span>
              </figcaption>
            </figure>

            <div className="profile-copy">
              <div className="eyebrow">THE SHORT VERSION</div>
              <h2>
                Analytical by training.
                <br />
                <em>Dependable by experience.</em>
              </h2>
              <p className="lead-copy">
                A finance graduate with a quantitative edge — and the practical
                discipline that comes from handling transactions, invoices,
                receivables, operational records and high-trust reporting.
              </p>
              <p>
                Farhan completed an MSc in International Accounting and Finance at
                Dublin Business School after a BS in Accounting and Finance. His
                strongest results sit exactly where modern finance teams are hiring:
                modelling, treasury risk and financial management.
              </p>
              <div className="profile-principle">
                <span>Working principle</span>
                <strong>Make the detail accurate. Make the insight clear.</strong>
              </div>
              <a
                className="inline-arrow-link"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn profile
                <Network aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="academic-section section-shell reveal-section" aria-labelledby="academic-title">
          <div className="section-heading-row">
            <div>
              <div className="section-index">02 / ACADEMIC SIGNAL</div>
              <h2 id="academic-title">
                Results that say
                <br />
                <em>“ready to analyse.”</em>
              </h2>
            </div>
            <p>
              Verified against the final DBS transcript issued in February 2026.
              Second Class Honours · 60.39% weighted average.
            </p>
          </div>

          <div className="metric-grid">
            {academicHighlights.map((metric, index) => (
              <article key={metric.label} className="metric-card">
                <span className="metric-index">0{index + 1}</span>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
                <div className="metric-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="role-fit" className="role-section section-shell reveal-section" aria-labelledby="role-title">
          <div className="role-section-intro">
            <div>
              <div className="section-index light">03 / ROLE RADAR</div>
              <h2 id="role-title">
                Where Farhan
                <br />
                <em>fits now.</em>
              </h2>
            </div>
            <p>
              This is a skills-to-role map, not an inflated title list. Select a
              pathway to see the verified evidence behind it.
            </p>
          </div>
          <RoleRadar />
        </section>

        <section id="experience" className="experience-section section-shell reveal-section" aria-labelledby="experience-title">
          <div className="section-heading-row compact">
            <div>
              <div className="section-index">04 / EXPERIENCE</div>
              <h2 id="experience-title">
                Operations experience,
                <br />
                <em>translated for finance.</em>
              </h2>
            </div>
            <p>
              Four roles. One consistent pattern: accurate records, calm execution
              and reliable coordination.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-marker">
                  <span>0{index + 1}</span>
                </div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.role}</h3>
                  <div className="timeline-company">
                    {item.company} <span>·</span> {item.location}
                  </div>
                  <p>{item.summary}</p>
                  <div className="transferable-list">
                    {item.transferable.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capability-section reveal-section" aria-labelledby="capability-title">
          <div className="capability-word" aria-hidden="true">CAPABILITY</div>
          <div className="section-shell capability-content">
            <div className="section-index light">05 / WORKING TOOLKIT</div>
            <div className="capability-grid">
              <h2 id="capability-title">
                Technical foundations.
                <br />
                <em>Human follow-through.</em>
              </h2>
              <p>
                Farhan combines finance coursework with the communication and
                process discipline learned in real customer and operations roles.
              </p>
            </div>
            <div className="skill-cloud">
              {skills.map((skill, index) => (
                <span key={skill} className={index % 4 === 0 ? "accent" : ""}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="market-section section-shell reveal-section" aria-labelledby="market-title">
          <div className="market-intro">
            <div className="eyebrow">MARKET INTELLIGENCE / IRELAND</div>
            <h2 id="market-title">
              The signal is real.
              <br />
              <em>The strategy is specific.</em>
            </h2>
            <p>
              Irish market evidence points toward finance talent that can combine
              accounting fundamentals with Excel, analysis, data visualisation,
              compliance awareness and communication.
            </p>
          </div>
          <div className="market-stat-row">
            {marketSignals.map((signal) => (
              <article key={signal.label}>
                <strong>{signal.value}</strong>
                <h3>{signal.label}</h3>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
          <div className="market-callout">
            <div>
              <span>Research → positioning</span>
              <p>
                Job-matching research increasingly distinguishes between core and
                contextual skills. This portfolio therefore leads with evidence —
                marks, tasks and outcomes — rather than unsupported claims.
              </p>
            </div>
            <div className="source-list">
              {researchLinks.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="ireland" className="ireland-section section-shell reveal-section" aria-labelledby="ireland-title">
          <div className="section-heading-row">
            <div>
              <div className="section-index light">06 / IRELAND OPPORTUNITY MAP</div>
              <h2 id="ireland-title">
                Dublin-based.
                <br />
                <em>Ireland-open.</em>
              </h2>
            </div>
            <p>
              Explore realistic hiring ecosystems and the role families that best
              match Farhan&apos;s current evidence.
            </p>
          </div>
          <IrelandMap />
        </section>

        <section className="education-section section-shell reveal-section" aria-labelledby="education-title">
          <div className="section-index">07 / EDUCATION</div>
          <h2 id="education-title" className="sr-only">Education</h2>
          <div className="education-grid">
            <article>
              <div className="education-icon">
                <GraduationCap aria-hidden="true" strokeWidth={1.4} />
              </div>
              <span>2025 — 2026 · NFQ Level 9</span>
              <h3>MSc International Accounting &amp; Finance</h3>
              <p>Dublin Business School · Awarded by QQI</p>
              <strong>Second Class Honours · 90 ECTS</strong>
            </article>
            <article>
              <div className="education-icon">
                <BookOpen aria-hidden="true" strokeWidth={1.4} />
              </div>
              <span>2019 — 2023</span>
              <h3>BS Accounting &amp; Finance</h3>
              <p>National University of Modern Languages</p>
              <strong>Accounting and finance foundation</strong>
            </article>
            <article className="education-note">
              <Award aria-hidden="true" strokeWidth={1.4} />
              <p>
                Farhan is especially interested in structured training pathways
                toward ACA, ACCA or CIMA alongside practical finance experience.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true" />
          <div className="eyebrow">AVAILABLE FOR FINANCE OPPORTUNITIES</div>
          <h2 id="contact-title">
            Put a quantitative
            <br />
            <em>mind to work.</em>
          </h2>
          <p>
            For graduate finance, trainee accounting, fund operations, treasury,
            reporting or accounts roles across Ireland.
          </p>
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
            <ArrowRight aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`tel:${contact.phone}`}>
              <Phone aria-hidden="true" size={18} />
              {contact.phoneDisplay}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Network aria-hidden="true" size={18} />
              LinkedIn
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={18} />
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="footer-mark">FA<span>.</span></div>
        <p>Finance &amp; accounting graduate · Dublin, Ireland</p>
        <a href="#top">
          Back to top
          <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
