export const primaryColor = "#FBD40E";
export const darkColor = "#212529";
export const grayColor = "#555555";

interface FAQItem {
  question: string;
  answer: string | string[];
}

export const faqData: FAQItem[] = [
  {
    question: "What is the Digital Business Institute (DBI)?",
    answer:
      "Digital Business Institute (DBI) is a trade and investment support institution (TISI) and a Rwanda ICT Chamber capacity-building arm. DBI aims to accelerate the digitalization of Rwandan businesses, expand digital exports, and increase the competitiveness of Rwandan ICT companies in global markets.",
  },
  {
    question: "What are the services DBI provides?",
    answer: [
      "Business diagnostics (Maturity assessment): A business diagnosis is a process that analyzes a company to identify areas for improvement.",
      "Capacity building on e-commerce",
      "The Trust Seal",
    ],
  },
  {
    question: "What is a Trust Seal?",
    answer:
      "DBI offers a trust seal to e-commerce platforms in Rwanda as a label of Reliability, Security, and trustworthiness of the certified platforms on the market.",
  },
  {
    question:
      "Why is e-commerce asking for a Trust Seal? (What benefits does Trust Seal bring to my business?)",
    answer: [
      "Diagnostic: helps identify areas of improvement in the process.",
      "Promotion/PR: promotion of the platform via DBI promotion/marketing campaigns",
      "75% of our certified platforms indicated an increase in website traffic after acquiring the trust seal.",
      "37. 5% of the respondents in our previous impact survey track responded with a high increase of purchasing customers after acquiring the seal, and so did 37.5% of counterparts on the medium increase.",
      "Access to an open dialogue with the regulators",
      "Helps set your company apart in the marketplace and adds established credibility",
      "Offers support through Training Workshops, Capacity Building, Management and Technical Guidance",
      "The Coaching program to address identified gaps.",
      "Increased Business Partnership Opportunities",
    ],
  },
  {
    question: "How Trust Seal Certificate Validation Works?",
    answer:
      "After submitting your application, the DBI team will conduct a site visit to audit and verify the information provided. If everything is accurate, you will receive a confirmation email. If there are any discrepancies, you will receive an email detailing the missing information so you can complete your application.",
  },
  {
    question: "Can the Trust Seal certificate be transferred?",
    answer: "No",
  },
  {
    question:
      "Is the Trust Seal a national, regional, or international certificate?",
    answer: "At the moment, the Trust Seal is recognized at the national level",
  },
  {
    question:
      "Is the Trust Seal certificate accepted by the Rwandan government?",
    answer: "Yes",
  },
  {
    question:
      "Does the Trust Seal certificate replace other certificates I should have to operate in Rwanda as an e-commerce?",
    answer: "No",
  },
  {
    question:
      "Should I have active SSL certification to get a Trust Seal certificate?",
    answer: "Yes",
  },
];
