export type FaqItem = {
  id: string
  question: string
  answer: string
  category: string
}

export const faqCategories = [
  'All',
  'General',
  'Services',
  'Pricing & Insurance',
  'Visiting & Hours',
  'Pain Management',
  'IV Therapy',
  'Weight Loss',
]

export const faqs: FaqItem[] = [
  // General
  {
    id: 'g1',
    category: 'General',
    question: 'Do I need an appointment to be seen?',
    answer:
      'No appointment is needed — we proudly accept walk-ins. Simply come in during our operating hours and our team will see you as quickly as possible. However, if you prefer to schedule in advance, you can book online through our contact form.',
  },
  {
    id: 'g2',
    category: 'General',
    question: 'Is this a physician-led clinic?',
    answer:
      'Yes. Every visit at Aloha Urgent Care & Pain Clinic is supervised and led by a licensed physician. You will be seen, evaluated, and treated by a physician — not just a nurse or medical assistant — ensuring thorough, high-quality care every time.',
  },
  {
    id: 'g3',
    category: 'General',
    question: 'Do you treat children and families?',
    answer:
      'Absolutely. We are a family-friendly clinic and welcome patients of all ages — from young children to elderly adults. Whether your child has a fever or a family member needs a procedure, we have you covered in one convenient visit.',
  },
  {
    id: 'g4',
    category: 'General',
    question: 'Where are you located?',
    answer:
      'We are located at International Market Place, Level 2, in the heart of Waikiki, Honolulu, HI. We are easily accessible for both local residents and tourists staying in the Waikiki area.',
  },
  {
    id: 'g5',
    category: 'General',
    question: 'Do you treat tourists and international visitors?',
    answer:
      'Yes — we specialize in serving international visitors and tourists. Our team is experienced in coordinating care for patients from abroad, providing documentation for insurance reimbursement, and ensuring a smooth experience regardless of where you are from.',
  },

  // Visiting & Hours
  {
    id: 'v1',
    category: 'Visiting & Hours',
    question: 'What are your hours of operation?',
    answer:
      'We are open Monday through Thursday and Saturday from 9:30 AM to 11:00 PM. On Fridays, we open at 4:30 PM and close at 11:00 PM. We are closed on Sundays. We operate extended hours specifically to serve patients after traditional clinics have closed.',
  },
  {
    id: 'v2',
    category: 'Visiting & Hours',
    question: 'How long is the wait time?',
    answer:
      'Our goal is to minimize your wait time. Because we operate a streamlined, physician-led model, most patients are seen and treated faster than a typical urgent care or emergency room visit. We handle everything in one visit — no referrals, no unnecessary back-and-forth.',
  },
  {
    id: 'v3',
    category: 'Visiting & Hours',
    question: 'What should I bring to my visit?',
    answer:
      'Please bring a valid photo ID, your insurance card if applicable, a method of payment, and any relevant medical history or a list of current medications. International visitors should bring their passport and any travel insurance documentation.',
  },
  {
    id: 'v4',
    category: 'Visiting & Hours',
    question: 'Can I be seen late at night?',
    answer:
      'Yes. We are open until 11:00 PM most days — making us one of the latest-operating urgent care clinics in Waikiki. If you experience a medical need after dinner or later in the evening, we are here for you.',
  },
  {
    id: 'v5',
    category: 'Visiting & Hours',
    question: 'Is parking available?',
    answer:
      'We are located inside International Market Place in Waikiki, which has a parking structure on-site. Validated parking may be available — please ask our front desk team upon arrival for current parking details.',
  },

  // Pricing & Insurance
  {
    id: 'p1',
    category: 'Pricing & Insurance',
    question: 'Do you accept insurance?',
    answer:
      'We operate as a direct-pay clinic, which means our pricing is transparent and straightforward. We can provide itemized receipts and documentation so you can submit a claim to your insurance provider directly for potential reimbursement. Please contact us for details regarding your specific plan.',
  },
  {
    id: 'p2',
    category: 'Pricing & Insurance',
    question: 'What forms of payment do you accept?',
    answer:
      'We accept all major credit and debit cards, cash, and digital payment methods. Because we are a direct-pay model, all fees are collected at the time of service. We will provide you with a full, itemized receipt for your records.',
  },
  {
    id: 'p3',
    category: 'Pricing & Insurance',
    question: 'Is pricing transparent? Are there hidden fees?',
    answer:
      'Transparent pricing is one of our core values. We will always inform you of costs before proceeding with any treatment or procedure. There are no surprise bills — what you are told is what you pay.',
  },
  {
    id: 'p4',
    category: 'Pricing & Insurance',
    question: 'Can you provide documentation for travel insurance claims?',
    answer:
      'Yes. We can provide itemized invoices, physician notes, and documentation of diagnoses and treatments to support your travel insurance reimbursement claim. This is a common request from our international and tourist patients, and our team is fully equipped to assist.',
  },

  // Services
  {
    id: 's1',
    category: 'Services',
    question: 'What conditions do you treat?',
    answer:
      'We treat a wide range of non-life-threatening urgent conditions including infections, fevers, flu, injuries, lacerations, sprains, respiratory issues, skin conditions, allergic reactions, and much more. If you are unsure whether your condition is appropriate for urgent care, call us and we will advise you.',
  },
  {
    id: 's2',
    category: 'Services',
    question: 'Do you offer lab testing on-site?',
    answer:
      'Yes. We provide on-site lab testing including blood panels, urinalysis, rapid strep, flu tests, COVID-19 testing, and more. Results are typically available quickly, allowing your physician to diagnose and begin treatment in the same visit.',
  },
  {
    id: 's3',
    category: 'Services',
    question: 'Can you handle procedures?',
    answer:
      'Yes — we are equipped to perform a variety of procedures in-office, including wound care, laceration repair, abscess drainage, splinting, and more. Our physician-led model means these procedures are performed with clinical precision, without requiring an ER visit.',
  },
  {
    id: 's4',
    category: 'Services',
    question: 'Do you carry medications on-site?',
    answer:
      'Yes. We stock a selection of medications on-site, allowing your physician to prescribe and dispense medication during your visit when appropriate. This eliminates the need to visit a separate pharmacy and ensures you receive treatment faster.',
  },
  {
    id: 's5',
    category: 'Services',
    question: 'Do you need to refer me to a specialist?',
    answer:
      'Our philosophy is to handle as much as possible in one visit. We aim to eliminate unnecessary referrals by providing comprehensive evaluation and treatment on-site. In cases that genuinely require specialist follow-up, we will refer you appropriately and assist with coordination.',
  },

  // Pain Management
  {
    id: 'pm1',
    category: 'Pain Management',
    question: 'What types of pain do you treat?',
    answer:
      'We provide physician-led pain management for acute and chronic pain conditions including back pain, joint pain, muscle pain, nerve pain, headaches, and post-injury pain. Our goal is to provide effective, targeted relief — not just temporary masking of symptoms.',
  },
  {
    id: 'pm2',
    category: 'Pain Management',
    question: 'What pain management treatments are available?',
    answer:
      'Our pain management offerings include prescription medications, trigger point injections, nerve blocks, regenerative treatments, and other advanced therapies as appropriate. Your physician will evaluate your condition and recommend the most effective treatment protocol for your specific needs.',
  },
  {
    id: 'pm3',
    category: 'Pain Management',
    question: 'Do I need a referral for pain management?',
    answer:
      'No referral is needed. You can walk in or schedule a visit specifically for pain management. Our physicians will assess your condition directly and begin a treatment plan during your visit.',
  },

  // IV Therapy
  {
    id: 'iv1',
    category: 'IV Therapy',
    question: 'What is IV therapy and who is it for?',
    answer:
      'IV therapy is an intravenous infusion of fluids, vitamins, minerals, and/or medications directly into your bloodstream. It is ideal for rapid rehydration, recovery from illness, fatigue, hangovers, jet lag, athletic recovery, and immune support. Both locals and tourists benefit greatly from IV therapy.',
  },
  {
    id: 'iv2',
    category: 'IV Therapy',
    question: 'What IV drip options do you offer?',
    answer:
      'We offer customized IV drip formulations based on your needs — including hydration drips, vitamin C infusions, NAD+ therapy, immunity boosters, energy enhancement, and more. Your physician will evaluate your condition and recommend the optimal formulation.',
  },
  {
    id: 'iv3',
    category: 'IV Therapy',
    question: 'How long does an IV therapy session take?',
    answer:
      'Most IV therapy sessions take between 30 to 60 minutes depending on the formulation and your individual needs. You can relax comfortably during the infusion in our clinic.',
  },
  {
    id: 'iv4',
    category: 'IV Therapy',
    question: 'Is IV therapy safe?',
    answer:
      'Yes — when administered under physician supervision, IV therapy is safe and effective. At Aloha Urgent Care, all IV therapies are ordered and overseen by our licensed physicians, ensuring proper dosing and monitoring throughout your session.',
  },

  // Weight Loss
  {
    id: 'wl1',
    category: 'Weight Loss',
    question: 'What weight loss programs do you offer?',
    answer:
      'We offer physician-supervised weight loss programs including GLP-1 receptor agonist therapy (such as semaglutide), nutritional guidance, and personalized treatment plans. Our approach is medical, evidence-based, and tailored to your health profile and goals.',
  },
  {
    id: 'wl2',
    category: 'Weight Loss',
    question: 'Am I a candidate for GLP-1 / semaglutide therapy?',
    answer:
      'Candidacy depends on your health history, current medications, and weight loss goals. Your physician will conduct a full evaluation to determine whether GLP-1 therapy is appropriate and safe for you. We encourage you to schedule a consultation to discuss your options.',
  },
  {
    id: 'wl3',
    category: 'Weight Loss',
    question: 'How long does the weight loss program last?',
    answer:
      'Program duration is personalized based on your goals and response to treatment. Some patients see meaningful results within weeks, while a comprehensive program typically spans several months. We provide ongoing follow-up and support to monitor your progress.',
  },
  {
    id: 'wl4',
    category: 'Weight Loss',
    question: 'Do you provide follow-up care for weight loss patients?',
    answer:
      'Yes — ongoing follow-up is built into our weight loss programs. We do not simply prescribe and send you on your way. Your physician will check in on your progress, adjust your plan as needed, and ensure you are achieving safe, sustainable results.',
  },
]
