import Image from 'next/image'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'

/* ── DATA ─────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: '💻',
    name: 'Software Development',
    tagline: 'Web, Mobile & Enterprise Platforms',
    desc: 'We architect and build software that scales with your ambitions. From high-traffic consumer apps to complex enterprise platforms — every line is written for performance, security, and longevity.',
    subs: [
      'Custom Web Application Development',
      'iOS & Android Mobile Apps',
      'Enterprise SaaS Platform Engineering',
      'REST & GraphQL API Design',
      'Legacy System Modernization',
      'UI/UX Design & Interactive Prototyping',
      'QA Automation & Performance Testing',
    ],
  },
  {
    icon: '☁️',
    name: 'Cloud Services',
    tagline: 'AWS · GCP · Custom Infrastructure',
    desc: 'Whether you need to migrate aging infrastructure or build cloud-native from day one, our certified cloud engineers design environments that are secure, highly available, and cost-optimized.',
    subs: [
      'AWS Architecture, Migration & Optimization',
      'Google Cloud Platform (GCP) Solutions',
      'Custom Private & Hybrid Cloud Build',
      'DevOps & CI/CD Pipeline Automation',
      'Kubernetes & Container Orchestration',
      'Cloud Security, Compliance & Cost Governance',
      'Managed Cloud Services & 24/7 Monitoring',
    ],
  },
  {
    icon: '🤖',
    name: 'AI & Machine Learning',
    tagline: 'Production AI That Moves the Needle',
    desc: 'We build AI that earns its place in your product — not just impressive demos, but systems that automate operations, surface actionable intelligence, and create genuinely smarter user experiences.',
    subs: [
      'Custom ML Model Development & Training',
      'LLM Integration, RAG & Fine-Tuning',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Demand Forecasting',
      'Intelligent Process Automation (AI + RPA)',
      'AI Strategy & Feasibility Assessment',
    ],
  },
  {
    icon: '📡',
    name: 'IoT & Embedded Systems',
    tagline: 'Hardware Intelligence, Fully Connected',
    desc: 'From PCB schematics to real-time cloud dashboards, we engineer complete IoT ecosystems. Our hardware engineers and embedded developers work as one team — so your physical product and its digital brain always speak the same language.',
    subs: [
      'IoT Hardware Design & PCB Prototyping',
      'Embedded Firmware Development (FreeRTOS, Zephyr)',
      'IoT Platform, Dashboard & Real-Time Analytics',
      'Industrial IoT (IIoT) & SCADA Systems',
      'Smart Device Connectivity (MQTT, BLE, Zigbee)',
      'Edge Computing & On-Device AI Inference',
      'IoT Security, OTA Updates & Device Management',
    ],
  },
  {
    icon: '📈',
    name: 'Digital Marketing & Growth',
    tagline: 'Compounding Growth Engines',
    desc: "Great software deserves to be found. We combine data-driven performance marketing with compelling creative strategy to build growth systems that attract, convert, and retain customers — consistently.",
    subs: [
      'Search Engine Optimization (Technical + Content)',
      'Performance Marketing — Google, Meta, LinkedIn',
      'Social Media Strategy & Content Management',
      'Email Marketing Automation & Lifecycle Flows',
      'Conversion Rate Optimization (CRO)',
      'Brand Positioning & Messaging Strategy',
      'Analytics, Attribution & Reporting',
    ],
  },
  {
    icon: '🎨',
    name: 'UI/UX & Prototyping',
    tagline: 'Design That Converts & Delights',
    desc: "Great software starts with great design. We craft intuitive, visually stunning interfaces backed by user research and rapid prototyping — so you validate ideas fast and ship products people actually love using.",
    subs: [
      'User Research & Journey Mapping',
      'Wireframing & Low-Fidelity Prototyping',
      'High-Fidelity UI Design (Figma)',
      'Interactive Prototype Development',
      'Design System & Component Library',
      'Usability Testing & Iteration',
      'Handoff-Ready Design Specs for Developers',
    ],
  },
  {
    icon: '📊',
    name: 'Data Engineering & Analytics',
    tagline: 'From Raw Data to Strategic Advantage',
    desc: "Most companies are data-rich and insight-poor. We build the pipelines, warehouses, and visualization layers that transform scattered data into a reliable competitive advantage your leadership team actually uses.",
    subs: [
      'Data Pipeline Design & ETL/ELT Development',
      'Cloud Data Warehouse (Snowflake, BigQuery, Redshift)',
      'BI Dashboards (Power BI, Looker, Tableau)',
      'Real-Time Streaming Analytics (Kafka, Spark)',
      'Data Quality Frameworks & Governance',
      'Customer Data Platform (CDP) Engineering',
      'Data Strategy & Roadmap Consulting',
    ],
  },
  {
    icon: '⛓️',
    name: 'Blockchain & Web3',
    tagline: 'Decentralized. Transparent. Trustless.',
    desc: "When your business model demands immutability, transparency, or decentralized trust, we architect and build blockchain solutions that are practical, auditable, and built to survive beyond the hype cycle.",
    subs: [
      'Smart Contract Development & Security Auditing',
      'DeFi Protocol Engineering',
      'NFT Marketplace & Digital Asset Platforms',
      'Private, Public & Consortium Blockchain',
      'Web3 dApp Frontend Development',
      'Tokenomics Design & Launch Support',
      'Blockchain Integration with Legacy Systems',
    ],
  },
  {
    icon: '👥',
    name: 'Staff Augmentation',
    tagline: 'Elite Engineers on Your Terms',
    desc: "Need senior talent fast without the six-month hiring cycle? We embed battle-tested engineers directly into your team — fully aligned with your stack, culture, and delivery cadence from week one.",
    subs: [
      'Dedicated Offshore Engineering Teams',
      'Senior Full-Stack & Backend Developer Placement',
      'Technical Lead, Architect & CTO-as-a-Service',
      'Short-Term & Sprint-Based Specialist Hire',
      'Full-Time Offshore Developer Contracts',
      'Talent Vetting, Screening & Onboarding',
      'Flexible Team Scaling (Ramp Up / Wind Down)',
    ],
  },
]

const stats = [
  { value: '150', suffix: '+', label: 'Projects Delivered Globally' },
  { value: '8', suffix: '+', label: 'Years of Engineering Excellence' },
  { value: '40', suffix: '+', label: 'Engineers & Specialists' },
  { value: '95', suffix: '%', label: 'Client Retention Rate' },
]

const whyItems = [
  {
    num: '01',
    title: 'Transparent Agile Delivery',
    desc: 'Two-week sprints with demo calls, Jira access, and documented velocity. You see exactly where every hour goes — no black boxes, no surprise delays at the finish line.',
  },
  {
    num: '02',
    title: 'Senior-Led Engineering on Every Project',
    desc: 'Every project is architected and led by engineers with 5+ years of production experience. Junior developers are mentored and code-reviewed before anything reaches your repository.',
  },
  {
    num: '03',
    title: 'Dual-Timezone Coverage',
    desc: 'Our Utah and Dhaka offices give you near-24-hour development coverage. Critical issues get resolved while your team sleeps — no SLA compromise, no timezone excuse.',
  },
  {
    num: '04',
    title: 'Airtight IP Protection',
    desc: 'We sign comprehensive NDAs and IP assignment agreements before a single line is written. Your code, business logic, and data belong entirely to you — always and unconditionally.',
  },
  {
    num: '05',
    title: '40–60% Cost Advantage',
    desc: "Our offshore model delivers rates 40–60% below US market without cutting corners. Lower overhead, same standards — the savings pass directly to your project budget.",
  },
  {
    num: '06',
    title: 'Post-Launch Partnership',
    desc: 'Launch is not the finish line. We provide ongoing maintenance, feature development, performance monitoring, and scaling support for every product we build together.',
  },
]

const process = [
  { num: '01', title: 'Discovery Call', desc: 'We map requirements, goals, constraints, and success metrics in a structured session.' },
  { num: '02', title: 'Proposal & Scope', desc: 'Detailed technical proposal with fixed timelines, resource plan, and milestone-based delivery.' },
  { num: '03', title: 'Team Assembly', desc: 'Dedicated team matched to your tech stack, with a senior lead engineer assigned from day one.' },
  { num: '04', title: 'Agile Sprints', desc: 'Two-week sprints, daily standups, continuous delivery into staging environments.' },
  { num: '05', title: 'QA & Launch', desc: 'Automated testing, performance audits, security scanning, and production deployment.' },
  { num: '06', title: 'Support & Scale', desc: 'Post-launch SLA, monitoring, incident response, and continued feature roadmap.' },
]

const industries = [
  { icon: '🏦', name: 'FinTech & Banking', desc: 'Payment systems, lending platforms, compliance tools, and core banking modernization.' },
  { icon: '🏥', name: 'Healthcare & MedTech', desc: 'HIPAA-compliant EHR systems, telemedicine platforms, medical IoT, and clinical decision support.' },
  { icon: '🛒', name: 'eCommerce & Retail', desc: 'High-conversion storefronts, OMS, AI recommendation engines, and supply chain tooling.' },
  { icon: '🏭', name: 'Manufacturing & IIoT', desc: 'Smart factory automation, predictive maintenance, SCADA, and digital supply chain.' },
  { icon: '📚', name: 'EdTech & E-Learning', desc: 'LMS platforms, adaptive learning engines, virtual classrooms, and credentialing systems.' },
  { icon: '🚚', name: 'Logistics & Supply Chain', desc: 'Fleet tracking, route optimization, WMS, and real-time visibility platforms.' },
  { icon: '🏗️', name: 'PropTech & Real Estate', desc: 'Property management, listing platforms, virtual tours, and investment analytics.' },
  { icon: '🎯', name: 'SaaS & Startups', desc: 'MVPs, product iteration, growth engineering, and scale-ready architecture from day one.' },
]

const techStack = [
  {
    label: 'Frontend',
    pills: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Backend',
    pills: ['Node.js', 'Python', 'Go', 'Java', '.NET', 'FastAPI', 'GraphQL', 'gRPC'],
  },
  {
    label: 'Cloud & DevOps',
    pills: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD'],
  },
  {
    label: 'AI & Data',
    pills: ['PyTorch', 'TensorFlow', 'LangChain', 'OpenAI', 'Hugging Face', 'Apache Spark', 'dbt'],
  },
  {
    label: 'IoT & Embedded',
    pills: ['ESP32', 'Arduino', 'Raspberry Pi', 'FreeRTOS', 'MQTT', 'BLE', 'Zephyr'],
  },
]

const engagementModels = [
  { name: 'Dedicated Team', tag: 'Most Popular' },
  { name: 'Fixed-Price Project', tag: 'Defined Scope' },
  { name: 'Time & Materials', tag: 'Maximum Flexibility' },
  { name: 'Staff Augmentation', tag: 'Scale Your Team' },
]

/* ── PAGE ─────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-16 overflow-hidden"
        aria-label="Hero"
      >
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-sky-500/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-50px] w-[500px] h-[500px] bg-sky-400/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-7">
              <span className="w-6 h-px bg-sky-400" />
              Agile Offshore Development · Utah, USA &amp; Dhaka, Bangladesh
            </div>

            <h1 className="font-heading font-black text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.93] tracking-tight mb-7">
              <span className="block text-white">Engineering</span>
              <span className="block text-white">Tomorrow&apos;s</span>
              <span className="block text-gradient">Enterprises,</span>
              <span className="block text-white">Today.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-9 max-w-lg">
              Devskamp is a young, enthusiastic tech company on a mission to transform how businesses
              operate — delivering enterprise software, cloud systems, AI, and IoT solutions with
              agility, transparency, and genuine care for outcomes.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 font-heading"
              >
                Start a Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-sky-500/30 text-sky-300 hover:border-sky-400/60 hover:text-sky-200 font-medium px-7 py-3.5 rounded-lg transition-colors duration-200"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Software Dev', 'Cloud & DevOps', 'AI & ML', 'IoT & Hardware', 'UI/UX & Prototyping', 'Blockchain'].map((b) => (
                <span key={b} className="text-xs text-slate-400 border border-navy-700 bg-navy-850/60 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Visual cards ── */}
          <div className="hidden lg:flex flex-col gap-4 relative">

            {/* Glow behind cards */}
            <div className="absolute inset-0 bg-sky-500/5 rounded-3xl blur-2xl pointer-events-none" />

            {/* Card 1 — Active project sprint */}
            <div className="relative bg-navy-800 border border-navy-700/80 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Sprint</span>
                </div>
                <span className="text-xs text-sky-400 font-semibold bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">Sprint 14</span>
              </div>
              <div className="space-y-3">
                {[
                  { task: 'API Gateway Integration', prog: 92, color: 'bg-sky-500' },
                  { task: 'ML Model Fine-tuning', prog: 67, color: 'bg-purple-500' },
                  { task: 'Cloud Migration — Phase 2', prog: 45, color: 'bg-emerald-500' },
                ].map((t) => (
                  <div key={t.task}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-300">{t.task}</span>
                      <span className="text-slate-500">{t.prog}%</span>
                    </div>
                    <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
                      <div className={`h-full ${t.color} rounded-full`} style={{ width: `${t.prog}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Global team + stats row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Global Team</p>
                <div className="space-y-2.5">
                  {[
                    { flag: '🇺🇸', loc: 'Utah, USA', role: 'Strategy & Client' },
                    { flag: '🇧🇩', loc: 'Dhaka, BD', role: 'Engineering Hub' },
                  ].map((o) => (
                    <div key={o.loc} className="flex items-center gap-2.5">
                      <span className="text-lg">{o.flag}</span>
                      <div>
                        <p className="text-white text-xs font-semibold leading-tight">{o.loc}</p>
                        <p className="text-slate-500 text-[10px]">{o.role}</p>
                      </div>
                      <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Projects Delivered</p>
                  <p className="font-heading font-black text-4xl text-white leading-none">
                    150<span className="text-sky-400">+</span>
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full ${i < 10 ? 'bg-sky-500' : 'bg-navy-600'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 — Tech stack pills */}
            <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Technologies We Master</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'AWS', 'GCP', 'Python', 'Node.js', 'Kubernetes', 'TensorFlow', 'Flutter', 'Go', 'Terraform', 'ESP32'].map((t) => (
                  <span key={t} className="text-xs text-slate-300 bg-navy-900 border border-navy-700/80 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4 — Client satisfaction */}
            <div className="bg-gradient-to-br from-sky-600/20 to-sky-500/5 border border-sky-500/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#0EA5E9" />
                </svg>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">95% Client Retention</p>
                <p className="text-slate-400 text-xs mt-0.5">8+ years · 150+ global projects · 40+ engineers</p>
              </div>
              <div className="ml-auto flex -space-x-2">
                {['#0EA5E9', '#38BDF8', '#7DD3FC', '#BAE6FD'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-navy-800 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c }}>
                    {['JS', 'TS', 'PY', 'GO'][i]}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs tracking-widest uppercase text-slate-500">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-sky-500 to-transparent" />
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────── */}
      <div className="border-y border-navy-700/60 bg-navy-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-navy-700/60">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-d${i} px-8 py-10`}>
              <p className="font-heading font-black text-5xl tracking-tight text-white leading-none mb-2">
                <span className="text-sky-400">{s.value}</span>{s.suffix}
              </p>
              <p className="text-slate-400 text-sm leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-sky-400" /> About Devskamp
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight text-white mb-6">
              Built for Enterprises.<br />
              <span className="text-gradient">Priced for Startups.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Devskamp LLC was founded with a singular belief: that the gap between what businesses
              need from technology and what they can actually build should not exist. We set out to
              close that gap — combining the strategic thinking of a US-headquartered firm with the
              engineering excellence and cost efficiency of our Dhaka team.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Today, we serve enterprises, fast-scaling startups, IT consulting vendors, and digital
              agencies across North America, Europe, and Asia-Pacific. Our mission is simple: help
              our clients transform the way they do business and increase overall productivity and
              efficiency through smart, well-crafted technology.
            </p>
            <ul className="space-y-3">
              {[
                'Agile-first with transparent sprint delivery and live reporting',
                'Dedicated teams that integrate into your existing workflow',
                'Time-zone friendly communication — US, EU & APAC clients',
                'Full-cycle delivery: architecture → design → code → deployment → support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="reveal reveal-d2">
            <div className="relative bg-navy-800 border border-navy-700/80 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/5 rounded-full blur-2xl" />

              <p className="font-heading font-bold text-xl text-white leading-snug mb-4">
                &ldquo;Our mission is to help transform the way people do business and increase overall
                productivity and efficiency via delivering{' '}
                <span className="text-sky-400">smart enterprise solutions.</span>&rdquo;
              </p>
              <p className="text-slate-500 text-sm mb-8">— The Devskamp Team</p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { flag: '🇺🇸', city: 'Utah', country: 'United States', role: 'HQ & Client Relations' },
                  { flag: '🇧🇩', city: 'Dhaka', country: 'Bangladesh', role: 'Engineering Hub' },
                ].map((o) => (
                  <div key={o.city} className="bg-navy-900 border border-navy-700/60 rounded-xl p-4">
                    <span className="text-2xl block mb-2">{o.flag}</span>
                    <p className="font-heading font-bold text-white text-lg">{o.city}</p>
                    <p className="text-slate-500 text-xs">{o.country}</p>
                    <p className="text-sky-400 text-xs mt-1">{o.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 md:px-16 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="reveal">
              <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center gap-2 mb-4">
                <span className="w-5 h-px bg-sky-400" /> What We Build
              </p>
              <h2 className="font-heading font-black text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight text-white">
                Full-Spectrum<br />Technology Services
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed reveal reveal-d2">
              From first commit to ongoing scale — we cover every layer of your technology stack
              so you can focus on building the business, not managing vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-sky-500/[0.07] rounded-2xl overflow-hidden border border-sky-500/[0.07]">
            {services.map((service, i) => (
              <article
                key={service.name}
                className={`reveal reveal-d${Math.min(i % 3, 4)} bg-navy-800 p-8 flex flex-col group hover:bg-navy-750 transition-colors duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-2xl mb-6 flex-shrink-0">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{service.name}</h3>
                <p className="text-sky-400 text-xs font-semibold tracking-wide uppercase mb-3">{service.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                <ul className="mt-auto space-y-0">
                  {service.subs.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-center gap-2.5 text-slate-500 text-sm py-2 border-b border-navy-700/80 last:border-0 group-hover:text-slate-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60 flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sky-400 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Get a Quote
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────── */}
      <section id="why" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left: sticky card */}
          <div className="md:sticky md:top-24 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-sky-400" /> Why Devskamp
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-white mb-6">
              The Offshore Partner That Works<br />
              <span className="text-gradient">Like an In-House Team</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm mb-10">
              Offshore development only works when trust, communication, and quality are non-negotiable.
              We&apos;ve built our entire operation around eliminating the friction that makes most
              offshore engagements fail.
            </p>

            <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/5 rounded-full blur-xl" />
              <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">Engagement Models</p>
              <div className="space-y-2">
                {engagementModels.map((m) => (
                  <div
                    key={m.name}
                    className="flex justify-between items-center bg-navy-900 border border-navy-700/60 rounded-lg px-4 py-3"
                  >
                    <span className="font-medium text-sm text-white">{m.name}</span>
                    <span className="text-xs text-sky-400 font-semibold bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full">
                      {m.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: numbered list */}
          <div>
            {whyItems.map((item, i) => (
              <div
                key={item.num}
                className={`reveal reveal-d${Math.min(i, 4)} flex gap-5 py-7 border-b border-navy-700/60 first:border-t first:border-navy-700/60`}
              >
                <span className="font-heading font-bold text-sky-400 text-xs tracking-widest mt-1 min-w-[28px]">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section id="stack" className="py-24 px-6 md:px-16 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center justify-center gap-2 mb-4">
              <span className="w-5 h-px bg-sky-400" /> Technologies <span className="w-5 h-px bg-sky-400" />
            </p>
            <h2 className="font-heading font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
              Battle-Tested Stack,<br />Modern by Default
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We pick the right tool for every job — not the trendiest one. Our stack spans frontend,
              backend, cloud, AI, and embedded systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-px bg-sky-500/[0.06] rounded-2xl overflow-hidden border border-sky-500/[0.06]">
            {techStack.map((cat, i) => (
              <div key={cat.label} className={`reveal reveal-d${i} bg-navy-800 p-6`}>
                <p className="text-xs font-bold tracking-widest uppercase text-sky-400 mb-4">{cat.label}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.pills.map((p) => (
                    <span
                      key={p}
                      className="text-xs text-slate-400 border border-navy-600/80 bg-navy-900/50 px-2.5 py-1 rounded-md"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section id="process" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center justify-center gap-2 mb-4">
              <span className="w-5 h-px bg-sky-400" /> How We Work <span className="w-5 h-px bg-sky-400" />
            </p>
            <h2 className="font-heading font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white">
              From Kickoff to Production<br />in Weeks, Not Months
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {process.map((step, i) => (
              <div key={step.num} className={`reveal reveal-d${Math.min(i, 4)}`}>
                <div className="w-10 h-10 rounded-full bg-navy-800 border border-sky-500/30 flex items-center justify-center font-heading font-bold text-sky-400 text-sm mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section id="industries" className="py-24 px-6 md:px-16 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center gap-2 mb-4">
              <span className="w-5 h-px bg-sky-400" /> Industries
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight text-white">
              We Speak Your<br />Industry&apos;s Language
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sky-500/[0.06] rounded-2xl overflow-hidden border border-sky-500/[0.06]">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className={`reveal reveal-d${i % 4} bg-navy-800 p-6 group hover:bg-navy-750 transition-colors duration-300`}
              >
                <span className="text-3xl block mb-4">{ind.icon}</span>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{ind.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL PRESENCE ─────────────────────────────────────────────── */}
      <section id="presence" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center justify-center gap-2 mb-4">
              <span className="w-5 h-px bg-sky-400" /> Global Offices <span className="w-5 h-px bg-sky-400" />
            </p>
            <h2 className="font-heading font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight text-white mb-4">
              Two Offices. One Unified Team.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Strategic locations in the US and Bangladesh give us geographic reach and near-24-hour
              development capability that single-office teams simply cannot match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-sky-500/[0.07] rounded-2xl overflow-hidden border border-sky-500/[0.07]">
            {[
              {
                flag: '🇺🇸',
                country: 'United States — North America',
                city: 'Utah, USA',
                desc: "Our US headquarters in Utah serves as the primary client-facing hub for North American and European clients. The Utah office manages strategic partnerships, enterprise accounts, and project leadership — ensuring every client feels like they have a local team.",
                details: [
                  { label: 'Focus', value: 'Client Relations, Strategy & Enterprise Sales' },
                  { label: 'Time Zone', value: 'MT (UTC-7)' },
                  { label: 'Markets', value: 'USA, Canada, UK, Europe, Australia' },
                ],
              },
              {
                flag: '🇧🇩',
                country: 'Bangladesh — South Asia',
                city: 'Dhaka, BD',
                desc: "Our Dhaka engineering center is the technical heart of Devskamp — housing a growing team of developers, architects, QA engineers, and UI designers who build world-class software at exceptional value. Bangladesh's technology sector is one of the fastest-growing in Asia.",
                details: [
                  { label: 'Focus', value: 'Engineering, Design, QA & DevOps' },
                  { label: 'Time Zone', value: 'BST (UTC+6)' },
                  { label: 'Capacity', value: '40+ Engineers & Growing' },
                ],
              },
            ].map((office, i) => (
              <div key={office.city} className={`reveal reveal-d${i * 2} bg-navy-800 p-10 relative overflow-hidden`}>
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/80 to-transparent" />
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-sky-500/[0.04] rounded-full blur-2xl" />
                <span className="text-4xl block mb-4">{office.flag}</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 mb-2">{office.country}</p>
                <h3 className="font-heading font-black text-4xl tracking-tight text-white mb-5 leading-none">{office.city}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8">{office.desc}</p>
                <div className="space-y-2">
                  {office.details.map((d) => (
                    <div key={d.label} className="flex gap-3 text-sm">
                      <span className="text-slate-500 min-w-[80px]">{d.label}:</span>
                      <span className="text-slate-300 font-medium">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 md:px-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14 reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-sky-400 flex items-center justify-center gap-2 mb-4">
              <span className="w-5 h-px bg-sky-400" /> Let&apos;s Build Together <span className="w-5 h-px bg-sky-400" />
            </p>
            <h2 className="font-heading font-black text-[clamp(2rem,4vw,3.2rem)] leading-tight tracking-tight text-white mb-4">
              Ready to{' '}
              <span className="text-gradient">Transform</span>
              <br />Your Business?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tell us about your project. We respond within 24 hours with a clear path forward —
              no sales pressure, no vague timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Info column */}
            <div className="md:col-span-2 reveal space-y-6">
              <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
                <div className="bg-white/95 rounded-lg px-3 py-1.5 inline-flex items-center mb-6">
                  <Image
                    src="/devskamp-logo.png"
                    alt="Devskamp LLC"
                    width={150}
                    height={38}
                    className="h-7 w-auto"
                  />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Agile offshore software development for enterprises, startups, and agencies. Utah, USA &amp; Dhaka, Bangladesh.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'General', value: 'hello@devskamp.com' },
                    { label: 'Projects', value: 'shamim@devskamp.com' },
                    { label: 'US Office', value: 'Utah, United States' },
                    { label: 'BD Office', value: 'Dhaka, Bangladesh' },
                  ].map((c) => (
                    <div key={c.label}>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{c.label}</p>
                      <p className="text-sm text-sky-300 font-medium">{c.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 border border-navy-700/80 rounded-2xl p-6">
                <p className="font-heading font-bold text-white text-sm mb-3">What happens next?</p>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'Schedule a free 30-minute discovery call',
                    'Receive a detailed proposal & timeline',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-xs text-slate-400">
                      <span className="font-bold text-sky-400 font-heading min-w-[16px]">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 reveal reveal-d2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-navy-700/60 pt-16 pb-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-navy-700/60">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/devskamp-logo.png"
                alt="Devskamp LLC"
                width={160}
                height={40}
                className="h-9 w-auto brightness-0 invert mb-4"
              />
              <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                Agile offshore software development. Utah, USA &amp; Dhaka, Bangladesh.
              </p>
            </div>

            {[
              {
                title: 'Services',
                links: ['Software Development', 'Cloud Services', 'AI & Machine Learning', 'IoT & Embedded', 'Digital Marketing', 'UI/UX & Prototyping', 'Data Engineering', 'Blockchain & Web3', 'Staff Augmentation'],
              },
              {
                title: 'Company',
                links: ['About Us', 'Why Devskamp', 'Our Process', 'Industries', 'Global Offices', 'Contact Us'],
              },
              {
                title: 'Technologies',
                links: ['React & Next.js', 'AWS & GCP', 'Python & FastAPI', 'Node.js', 'Machine Learning', 'Kubernetes', 'IoT Hardware'],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-heading font-bold text-sm text-white mb-4">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-500 text-sm hover:text-sky-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Devskamp LLC. All rights reserved. Utah, USA &amp; Dhaka, Bangladesh.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
                <a key={l} href="#" className="text-slate-600 text-sm hover:text-sky-400 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
