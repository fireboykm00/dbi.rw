export interface Expert {
  logo: string;
  title: string;
  description: string;
  fullDescription: string;
  website: string;
  contact?: string;
  services: string[];
}

export const experts: Expert[] = [
  {
    logo: "/experts/rhia.png",
    title: "Rwanda Health Informatics Association",
    description:
      "Connects health professionals and data scientists to strengthen Rwanda's health system through technology.",
    fullDescription:
      "RHIA connects health professionals, data scientists, innovators, researchers, and policymakers to strengthen Rwanda’s health system through the responsible use of technology and health data, ensuring that care is efficient, equitable, and evidence-based. RHIA operates in alignment with Rwanda’s Health Sector Strategic Plan V, Smart Rwanda Master Plan, and the vision of Universal Health Coverage (UHC).",
    website: "https://rhia.rw/",
    contact: "+250 788 838 384",
    services: [
      "Designing and Deployment of Standards-based Digital Health solutions",
      "Digital Health Capacity Building and Workforce Development",
      "Research, Innovation and Knowledge exchange",
    ],
  },
  {
    logo: "/experts/isaca.png",
    title: "ISACA Rwanda",
    description:
      "A professional association providing certifications and guidance in IT governance and cybersecurity.",
    fullDescription:
      "ISACA is a professional association providing certifications, training, and guidance in IT governance, cybersecurity, auditing, risk management, and compliance.",
    website: "https://engage.isaca.org/home",
    contact: "0788308207",
    services: [
      "Provides global certifications and capacity-building in IT audit, cybersecurity, governance, and risk management",
      "Creates best-practice frameworks like COBIT to guide organizations in governance, security, and compliance",
      "Organizes conferences, workshops, and chapter events to connect professionals",
    ],
  },
  {
    logo: "/experts/digital-frontiers-institute.png",
    title: "Digital Frontiers Institute",
    description:
      "Equips professionals with advanced knowledge in digital finance and fintech through accredited training.",
    fullDescription:
      "DFI is a capacity-building organization that equips professionals especially in emerging markets with advanced knowledge and practical skills in digital finance, fintech, digital transformation, and financial inclusion through accredited online training and professional development programs.",
    website: "https://digitalfrontiersinstitute.org/",
    services: [
      "Offers specialized courses in digital financial services, fintech, regulation, and cybersecurity",
      "Creates networks for practitioners to share knowledge and solve real-world challenges",
      "Produces insights, case studies, and industry research on digital finance trends",
    ],
  },
  {
    logo: "/experts/project-management-institute.png",
    title: "Project Management Institute (PMI)",
    description:
      "A global organization providing standards, certifications, and networking for project managers.",
    fullDescription:
      "PMI (Project Management Institute) is a global professional organization for project management. It provides standards, certifications, resources, and networking for project managers to enhance skills, improve project delivery, and advance careers.",
    website: "https://pmirwanda.rw/",
    services: [
      "Develops globally recognized project management standards and frameworks like PMBOK® Guide",
      "Provides professional certifications and training programs such as PMP® and CAPM®",
      "Organizes knowledge-sharing events, webinars, and conferences globally",
    ],
  },
];
