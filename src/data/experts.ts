export interface Expert {
  logo: string;
  title: string;
  description: string;
}

export const experts: Expert[] = [
  {
    logo: "/experts/rhia.png",
    title: "Rwanda Health Informatics Association",
    description:
      "Connects health professionals and data scientists to strengthen Rwanda's health system through the responsible use of technology.",
  },
  {
    logo: "/experts/isaca.png",
    title: "ISACA Rwanda",
    description:
      "A professional association providing certifications and guidance in IT governance, cybersecurity, auditing, and risk management.",
  },
  {
    logo: "/experts/digital-frontiers-institute.png",
    title: "Digital Frontiers Institute",
    description:
      "Equips professionals with advanced knowledge in digital finance, fintech, and financial inclusion through accredited online training.",
  },
  {
    logo: "/experts/project-management-institute.png",
    title: "Project Management Institute (PMI)",
    description:
      "A global professional body advancing project management excellence through standards, certifications, and resources for career growth.",
  },
];
