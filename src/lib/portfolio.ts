export const profile = {
  name: "Nuttanon Ungkachan",
  role: "Full-Stack Software Engineer",
  location: "Bangkok, Thailand",
  email: "nuttanon.u@proton.me",
  introduction:
    "I’m a software engineer who builds applications for high-volume banking workflows. My experience spans a software house and one of Thailand’s leading banks.",
  stack: [
    "Angular",
    "Next.js",
    "Zoral Platform",
    "Node.js (Express)",
    "Java Spring Boot",
    "GraphQL",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Convex",
    "MUI",
    "Chakra UI",
    "Tailwind CSS",
    "shadcn/ui",
    "WorkOS",
    "Vercel",
  ],};

export const projects = [
  {
    slug: "nleads",
    name: "Nextgen Lendings",
    category: "Web Application",
    year: "2024",
    type: "Bank Teller System",
    theme: "daylight",
    tagline: "Modernizing lending workflows for bank tellers.",
    description:
      "Nextgen Lendings replaces a legacy application used by bank tellers. It is built on Zoral Platform, a low-code platform with a React and MUI frontend and a Node.js (Express) and GraphQL backend.",
    responsibility:
      "I developed frontend pages, backend APIs, internal reports, and Azure Data Factory batch jobs. I optimized a migration feature working with approximately 10 million database records, reducing a slow query from minutes to under a millisecond by adding a database index and refining the GraphQL query. I also cut the runtime of a loan application task report from more than five minutes to under three seconds by using DBeaver to analyze the query bottleneck and adding a targeted database index.",
    challenge:
      "Zoral Platform has limited documentation, which made syntax errors and platform issues difficult to diagnose. Some problems required support from the platform team, slowing development.",
    approach:
      "I drew on my Angular, Next.js, and Node.js experience to understand the platform’s React and Node.js foundations. That helped me troubleshoot issues and deliver features more efficiently.",
    stack: ["Zoral Platform", "Node.js (Express)", "MUI", "GraphQL", "PostgreSQL"],
  },
  {
    slug: "ias",
    name: "Internal Audit System",
    category: "Web Application",
    year: "2023",
    type: "Internal Audit Back-Office System",
    theme: "ias",
    tagline: "Moving internal audits from paper and spreadsheets to a web application.",
    description:
      "The Internal Audit System (IAS) helps teams manage audit workflows through role-based access, structured records, and traceable activity logs. Built with Angular, Spring Boot, and MySQL, it replaces manual paperwork and spreadsheet-based processes.",
    responsibility:
      "I contributed frontend and backend features, including workflow screens, service integrations, role-based behavior, and email notifications for task handoffs. I also resolved issues identified during reviews and testing.",
    challenge:
      "This was my first professional software engineering project. I had to learn Angular 14, Spring Boot, and MySQL while applying classroom knowledge to real business workflows.",
    approach:
      "I worked closely with senior engineers, learned the system through assigned tasks, and used feedback from reviews and testing to improve my implementation.",
    stack: ["Angular 14", "Tailwind CSS", "Java Spring Boot", "MySQL"],
  },
  {
    slug: "rfs",
    name: "Referral System",
    category: "Web Application",
    year: "2024",
    type: "Healthcare Patient Referral System",
    tagline: "A prototype for coordinating patient referrals between hospitals.",
    description:
      "The Referral System (RFS) is a demo project designed to help hospitals exchange referral information and patient histories. It explores a digital alternative to referral letters and manual handoffs. The prototype uses Next.js, Chakra UI, Prisma, Neon (PostgreSQL), and WorkOS authentication with role-based permissions.",
    responsibility:
      "I built parts of the full-stack prototype, including referral pages and APIs, the SQL database schema, and role-based authorization for referral workflows.",
    challenge:
      "This was my first React application built with Next.js. As a pitching prototype, it also had to demonstrate the referral flow clearly within a limited timeframe.",
    approach:
      "I applied concepts from my Angular work to React and learned Next.js’s server-side patterns as I built the prototype. This helped me move quickly while adapting to a new stack.",
    stack: ["Next.js", "Chakra UI", "Prisma (SQL ORM)", "Neon (PostgreSQL)", "WorkOS"],
  },
  {
    slug: "salarycal",
    name: "Salary Cal",
    category: "Web Application",
    year: "2026",
    type: "Payroll Back-Office System",
    theme: "daylight",
    tagline: "An internal salary calculation tool for a family business.",
    description:
      "Salary Cal helps my family’s window film business calculate employee pay. Built with Next.js and Convex, it uses Better Auth for sign-in and role-based access. Convex’s reactive queries keep the interface up to date as data changes.",
    responsibility:
      "I handled the project end to end: gathering requirements, designing the architecture, building salary calculations and admin pages, configuring access control, exporting monthly data to XLSX, integrating Convex, and deploying the application.",
    challenge:
      "Convex was new to me, and I was the sole engineer responsible for requirements, design, implementation, and deployment.",
    approach:
      "I built the calculation workflow first, then added configurable formulas, administration features, authentication, and access controls for approved users. I used documentation and AI-assisted research to learn the new stack as I worked.",
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Convex", "Vercel"],
  },
];
