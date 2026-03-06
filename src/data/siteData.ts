export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const homeStats = [
  {
    value: "20+",
    label: "Years in software",
    detail: "Across data, middleware, cloud, and platform engineering.",
  },
  {
    value: "8",
    label: "Companies",
    detail: "From consulting and product teams to global enterprises.",
  },
  {
    value: "3",
    label: "AWS certifications",
    detail: "Architecture, AI, and machine learning credentials.",
  },
  {
    value: "3",
    label: "Core pillars",
    detail: "Data platforms, cloud systems, and technical leadership.",
  },
] as const;

export const focusAreas = [
  {
    title: "Data platforms that stay practical",
    description:
      "I design systems that can handle scale without becoming fragile, opaque, or painful to operate.",
  },
  {
    title: "Cloud architecture with operational clarity",
    description:
      "AWS and Kubernetes decisions are most useful when they reduce complexity for the team running them every day.",
  },
  {
    title: "Leadership grounded in delivery",
    description:
      "Architecture, mentoring, and code quality only matter if they move teams toward reliable outcomes.",
  },
] as const;

export const homeHighlights = [
  {
    title: "Platform architecture",
    description:
      "From Hadoop-era data systems to modern cloud-native services, the focus stays the same: durability, throughput, and clean ownership boundaries.",
  },
  {
    title: "Engineering leadership",
    description:
      "I help teams make stronger technical decisions, raise quality bars, and keep delivery disciplined without slowing momentum.",
  },
  {
    title: "Business alignment",
    description:
      "The best technical plans are understandable to stakeholders and measurable against product and operational goals.",
  },
] as const;

export const principles = [
  "Prefer systems that are observable, operable, and easy to reason about.",
  "Use architecture to remove bottlenecks, not to add ceremony.",
  "Set standards through execution, reviews, and mentorship.",
  "Keep teams close to outcomes, not just outputs.",
] as const;

export const credentials = [
  { title: "AWS Certified AI Practitioner", detail: "Certification" },
  { title: "AWS Certified Solutions Architect", detail: "Certification" },
  { title: "Machine Learning", detail: "Certification" },
  { title: "MCA, Computer Application", detail: "Sardar Patel University, 2000 - 2003" },
  { title: "BCS, Computer Science", detail: "VP & RPTP Science College, 1997 - 2000" },
] as const;

export const strengths = [
  "Technical and thought leadership for architecture and delivery decisions",
  "Mentoring engineers and raising the quality bar through direct feedback",
  "Ownership of critical initiatives with proactive risk management",
  "Communication that keeps stakeholders aligned on tradeoffs and outcomes",
  "Deep hands-on experience with Big Data frameworks and distributed systems",
  "Cloud-native engineering on AWS with an emphasis on reliability and scale",
] as const;

export const experience = [
  {
    company: "University of Phoenix",
    location: "Phoenix, Arizona",
    role: "Technologist",
    period: "Jun 2019 - Present",
    items: [
      "Provide technical and thought leadership by influencing design decisions and driving engineering best practices.",
      "Mentor and guide team members while improving collaboration, execution discipline, and technical depth.",
      "Take ownership of critical initiatives, manage delivery risk, and drive high-impact solutions to completion.",
      "Align technical direction with business strategy through clear stakeholder communication.",
    ],
  },
  {
    company: "Clairvoyant",
    location: "Phoenix, Arizona",
    role: "Lead Software Engineer",
    period: "Jan 2017 - Jun 2019",
    items: [
      "Drove the design, implementation, and delivery of robust, secure, and scalable software platforms.",
      "Shaped architecture, conducted reviews, and enforced engineering best practices across teams.",
      "Coached engineers while maintaining strong expectations around code quality, performance, and reliability.",
      "Partnered with product and cross-functional stakeholders to deliver solutions tied to business goals.",
    ],
  },
  {
    company: "American Express",
    location: "Phoenix, Arizona",
    role: "Lead Engineer",
    period: "Aug 2016 - Jan 2017",
    items: [
      "Led design and delivery of secure, scalable, and high-performance software solutions.",
      "Provided technical leadership through architecture decisions, reviews, and engineering standards.",
      "Mentored engineers and drove consistency in code quality and reliability.",
      "Worked closely with product and business teams to deliver on concrete business outcomes.",
    ],
  },
  {
    company: "Amazon",
    location: "Seattle, Washington",
    role: "SDE II",
    period: "Feb 2016 - Aug 2016",
    items: [
      "Designed, developed, and owned scalable software systems end to end with minimal supervision.",
      "Solved ambiguous problems and delivered maintainable systems with strong operational discipline.",
      "Supported production systems through monitoring, on-call ownership, and root-cause analysis.",
      "Collaborated across teams, mentored engineers, and operated within a high-accountability environment.",
    ],
  },
  {
    company: "Apollo Education Group",
    location: "Phoenix, Arizona",
    role: "Senior Consultant",
    period: "May 2013 - Feb 2016",
    items: [],
  },
  {
    company: "Credit Suisse",
    location: "Pune, India",
    role: "Senior Consultant",
    period: "Apr 2010 - Apr 2013",
    items: [],
  },
  {
    company: "Symantec Corporation",
    location: "Pune, India",
    role: "Software Engineer",
    period: "Feb 2007 - Feb 2010",
    items: [],
  },
  {
    company: "Unikaihatsu Software Pvt. Ltd.",
    location: "Vadodara, India",
    role: "Senior Software Programmer",
    period: "Dec 2003 - Feb 2007",
    items: [],
  },
] as const;

export const projects = [
  {
    title: "Enterprise Hadoop Data Platform",
    description:
      "Implemented complete Hadoop solutions for acquisition, storage, transformation, analysis, and business intelligence using the broader Hadoop ecosystem.",
    tech: ["Hadoop", "MapReduce", "HDFS", "HBase", "Hive", "Sqoop", "Flume"],
    category: "Data Infrastructure",
  },
  {
    title: "Cloud-Native Platform on AWS",
    description:
      "Architected and deployed scalable cloud-native applications using AWS services and Kubernetes for resilient, high-availability delivery.",
    tech: ["AWS", "Kubernetes", "Python", "Docker", "CI/CD"],
    category: "Cloud Architecture",
  },
  {
    title: "Scalable Software Systems at Amazon",
    description:
      "Designed, built, and operated scalable software systems end to end, with strong focus on maintainability, ambiguity handling, and operational excellence.",
    tech: ["Java", "AWS", "Distributed Systems", "Monitoring"],
    category: "Platform Engineering",
  },
  {
    title: "Oracle SOA & Middleware Solutions",
    description:
      "Built enterprise integration solutions connecting disparate systems for reliable data flow across business-critical environments.",
    tech: ["Oracle SOA", "Middleware", "Integration"],
    category: "Enterprise Integration",
  },
  {
    title: "Data Mining & Analytics Platform",
    description:
      "Developed large-scale querying and data mining workflows to help teams extract insights from complex datasets across multiple domains.",
    tech: ["Hive", "Pig", "SQL", "Data Mining"],
    category: "Analytics",
  },
  {
    title: "Investment Banking Data Systems",
    description:
      "Delivered technology solutions for financial workflows, supporting robust data processing and reporting in a high-stakes domain.",
    tech: ["Java", "SQL", "Data Processing"],
    category: "Financial Systems",
  },
] as const;

export const skillCategories = [
  { name: "Languages", items: ["Python", "Java", "SQL"] },
  { name: "Big Data & Hadoop", items: ["Hadoop", "MapReduce", "HDFS", "HBase", "Hive", "Pig", "Sqoop", "Flume"] },
  { name: "Cloud & Infrastructure", items: ["Amazon Web Services (AWS)", "Kubernetes", "Docker", "CI/CD"] },
  { name: "Data & Analytics", items: ["Data Mining", "Data Querying", "ETL", "Business Intelligence", "Data Transformation"] },
  { name: "Middleware & SOA", items: ["Oracle SOA Platform", "Middleware Technologies", "Enterprise Integration"] },
  { name: "Machine Learning", items: ["AWS AI Services", "ML Pipelines", "Feature Engineering"] },
  { name: "Certifications", items: ["AWS Certified AI Practitioner", "AWS Certified Solutions Architect", "Machine Learning"] },
  { name: "Domain Expertise", items: ["Investment Banking", "Storage", "Education", "Financial Services"] },
  { name: "Methodology", items: ["SDLC", "Scrum", "Agile"] },
  { name: "Languages (Spoken)", items: ["English", "Japanese"] },
] as const;

export const contactTopics = [
  "Data platform architecture",
  "Cloud modernization on AWS",
  "Engineering leadership and mentoring",
  "Distributed systems and platform delivery",
] as const;
