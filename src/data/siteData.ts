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
    value: "15+",
    label: "Years in data engineering",
    detail: "Building and scaling cloud-native data platforms powering AI/ML, analytics, and products.",
  },
  {
    value: "8B+",
    label: "Events/day processed",
    detail: "Real-time Kafka/Flink pipelines at peak throughput.",
  },
  {
    value: "26",
    label: "Engineers led globally",
    detail: "Multi-region teams across the US, India, and Israel.",
  },
  {
    value: "700K+",
    label: "Concurrent IoT devices",
    detail: "Streaming data at 1Hz on a secure, multi-tenant cloud platform.",
  },
] as const;

export const focusAreas = [
  {
    title: "Petabyte-scale data platforms",
    description:
      "Designing secure, multi-tenant platforms for streaming, analytics, AI/ML, and customer-facing data products.",
  },
  {
    title: "Cloud-native & streaming architecture",
    description:
      "Event-sourced ingestion, Kafka/Flink pipelines, and GDPR-compliant multi-region architectures on AWS.",
  },
  {
    title: "Hands-on engineering leadership",
    description:
      "Building and mentoring global teams while staying deeply technical across cloud and streaming technologies.",
  },
] as const;

export const homeHighlights = [
  {
    title: "End-to-end data strategy",
    description:
      "Owning data platform strategy and execution for petabyte-scale systems, from ingestion through analytics and customer delivery.",
  },
  {
    title: "Database architecture & modernization",
    description:
      "Migrating enterprise systems from on-prem Hadoop, Greenplum, and SQL Server to AWS S3, Snowflake, and Redshift while reducing TCO.",
  },
  {
    title: "AI & real-time data products",
    description:
      "Delivering AI-driven solutions with AWS Bedrock and enabling real-time data sharing via REST/GraphQL, Snowflake, and TinyBird.",
  },
] as const;

export const principles = [
  "Build platforms that are observable, operable, and reliable at scale.",
  "Use streaming-first architecture to reduce latency and increase delivery velocity.",
  "Drive FinOps discipline to align architecture with budget constraints.",
  "Stay hands-on while leading globally distributed teams toward measurable outcomes.",
] as const;

export const credentials = [
  { title: "AWS Certified AI Practitioner", detail: "Certification" },
  { title: "AWS Certified Solutions Architect", detail: "Certification" },
  { title: "Machine Learning", detail: "Certification" },
  { title: "ISO27001 Readiness", detail: "Security & Compliance" },
] as const;

export const strengths = [
  "End-to-end data platform strategy and execution at petabyte scale",
  "Database architecture across SQL Server, PostgreSQL, Snowflake, Redshift, and MongoDB",
  "Real-time streaming systems with Kafka, Flink, and event-sourced architectures",
  "Building and leading multi-region engineering teams (US, India, Israel)",
  "GDPR-compliant, multi-region cloud architectures on AWS",
  "FinOps-driven optimization balancing growth with budget constraints",
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
    title: "Multi-Tenant IoT Data Platform",
    description:
      "Scaled a secure, multi-tenant cloud data platform supporting 700K+ concurrent IoT devices streaming at 1Hz, powering analytics, AI/ML, and customer-facing data products.",
    tech: ["Kafka", "Flink", "AWS S3", "Snowflake", "Redshift"],
    category: "Data Platform",
  },
  {
    title: "Real-Time Streaming Pipelines",
    description:
      "Designed Kafka/Flink pipelines processing 8B+ events/day at peak with in-stream enrichment, reducing device-to-consumer latency by 75% to under 60 seconds.",
    tech: ["Kafka", "Flink", "Spark Streaming", "Kinesis"],
    category: "Streaming Architecture",
  },
  {
    title: "Enterprise Systems Modernization",
    description:
      "Led migration from on-prem Hadoop, Greenplum, and SQL Server to AWS S3 and Snowflake/Redshift, reducing platform TCO while increasing delivery velocity.",
    tech: ["SQL Server", "Snowflake", "Redshift", "AWS S3", "Iceberg"],
    category: "Cloud Migration",
  },
  {
    title: "GDPR-Compliant Multi-Region Architecture",
    description:
      "Designed multi-region data architecture isolating EU data ingestion and storage in AWS eu-west-2 while maintaining US platforms, meeting residency requirements.",
    tech: ["AWS", "Kafka", "S3", "GDPR", "Multi-Region"],
    category: "Compliance & Security",
  },
  {
    title: "AI-Driven Coaching Assistant",
    description:
      "Partnered with ML and Labs teams to deliver an AI-driven coaching assistant leveraging AWS Bedrock and proprietary data for intelligent insights.",
    tech: ["AWS Bedrock", "Python", "ML Pipelines"],
    category: "AI/ML",
  },
  {
    title: "Real-Time Customer Data Sharing",
    description:
      "Enabled real-time PUSH deliveries via REST/GraphQL, SFTP, Snowflake/Redshift data shares, and TinyBird (ClickHouse) APIs for near-real-time customer analytics.",
    tech: ["REST", "GraphQL", "TinyBird", "ClickHouse", "Snowflake"],
    category: "Data Products",
  },
] as const;

export const skillCategories = [
  { name: "Languages & Frameworks", items: ["Python", "Java (Spring Boot)", "Node.js", "SQL"] },
  { name: "Streaming & Messaging", items: ["Kafka", "Flink", "Spark Streaming", "Kinesis", "RabbitMQ"] },
  { name: "Data Storage & Formats", items: ["Parquet", "Avro", "Hadoop/HDFS", "Amazon S3", "Apache Iceberg"] },
  { name: "Analytics Databases", items: ["Snowflake", "Redshift", "ClickHouse"] },
  { name: "Relational Databases", items: ["SQL Server", "Oracle", "MySQL", "AWS RDS", "AWS Aurora PostgreSQL"] },
  { name: "NoSQL & Graph", items: ["MongoDB/Atlas", "DynamoDB", "AWS DocumentDB", "HBase", "Neo4j", "AWS Neptune"] },
  { name: "ML/AI", items: ["AWS Bedrock", "Feature Engineering Pipelines"] },
  { name: "Orchestration", items: ["Apache Airflow", "AWS Managed Airflow", "AWS Step Functions"] },
  { name: "Observability & Alerting", items: ["AWS CloudWatch", "SNS", "PagerDuty", "Slack Notifications"] },
  { name: "CI/CD & SCM", items: ["Git", "GitHub Actions", "Liquibase", "Jenkins", "Bitbucket"] },
  { name: "Cloud & Infrastructure", items: ["Terraform / Terragrunt", "AWS CloudFormation", "EKS", "EC2"] },
  { name: "Methodology", items: ["SAFe", "Scrum", "Kanban"] },
] as const;

export const contactTopics = [
  "Data platform architecture & strategy",
  "Database architecture & modernization",
  "Cloud-native streaming systems",
  "Engineering leadership & global team building",
  "AI/ML data infrastructure",
] as const;
