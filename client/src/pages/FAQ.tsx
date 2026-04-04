import { useState } from 'react';
import { useLocation } from 'wouter';
import { ChevronLeft, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is Government Process Guide?',
    answer: 'Government Process Guide is a free website that simplifies confusing public-service processes into clear, step-by-step guides. We break down complex government procedures into easy-to-understand instructions with required documents, fees, official links, and common mistakes to avoid.'
  },
  {
    question: 'Which government processes are covered?',
    answer: 'Currently, we cover three essential processes: Passport Application (Fresh), PAN Card Correction, and Driving Licence Renewal. We are continuously adding more processes to help you navigate various government services.'
  },
  {
    question: 'Is the information on this website official?',
    answer: 'Yes, all information on this website is based on official government sources and portals. We compile information from official government websites like Passport Seva, NSDL, and MoRTH Parivahan. However, we recommend verifying critical information on the official portals before applying.'
  },
  {
    question: 'Do I need to pay to use this website?',
    answer: 'No, Government Process Guide is completely free to use. We do not charge any fees for accessing our guides or using our checklists. The fees mentioned are only the official government fees for the respective services.'
  },
  {
    question: 'How do I use the checklist feature?',
    answer: 'Each process page has interactive checklists for documents and steps. Simply click on the checkbox next to each item as you collect documents or complete steps. Your progress is tracked automatically, and you can see your completion percentage at a glance.'
  },
  {
    question: 'What should I do if I encounter an error or issue?',
    answer: 'If you face any issues while applying for a government service, we recommend contacting the official government portal or visiting your nearest government office. The "Common Mistakes to Avoid" section on each process page may also help you troubleshoot common issues.'
  },
  {
    question: 'Can I print the guides?',
    answer: 'Yes, you can print the process guides from your browser. Simply use the print function (Ctrl+P or Cmd+P) to save or print the page. The guides are designed to be print-friendly.'
  },
  {
    question: 'How often is the information updated?',
    answer: 'We regularly update our guides to reflect changes in government procedures, fees, and requirements. However, government policies can change, so we always recommend verifying information on the official government portals before applying.'
  },
  {
    question: 'What if I have a question not covered in the FAQ?',
    answer: 'If you have a question that is not covered in our FAQ, we recommend visiting the official government portal for that service or contacting the relevant government office. You can find the official links on each process page.'
  },
  {
    question: 'Is my personal information safe on this website?',
    answer: 'Government Process Guide does not collect, store, or use any personal information. We do not require you to create an account or provide any personal details. Your privacy is completely protected.'
  }
];

export default function FAQ() {
  const [, navigate] = useLocation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container py-4">
          <button onClick={() => navigate('/')} className="text-primary hover:underline flex items-center gap-2 mb-4">
            <ChevronLeft className="h-5 w-5" /> Back
          </button>
          <h1 className="text-2xl font-bold text-primary">Frequently Asked Questions</h1>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about Government Process Guide and how to use our resources effectively.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              >
                <button
                  onClick={() => toggleExpanded(index)}
                  className="w-full p-6 flex items-start justify-between text-left hover:bg-muted/30 transition-all"
                >
                  <h3 className="font-bold text-foreground pr-4">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedIndex === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 rounded-lg border border-border bg-card">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you cannot find the answer you are looking for, please visit the official government portals or contact your nearest government office.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-foreground mb-1">Passport Services</p>
                <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://www.passportindia.gov.in
                </a>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">PAN Services</p>
                <a href="https://www.nsdl.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://www.nsdl.co.in
                </a>
              </div>
              <div>
                <p className="font-bold text-foreground mb-1">Driving Licence Services</p>
                <a href="https://sarathi.parivahan.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://sarathi.parivahan.gov.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-3">About</h4>
              <p className="text-sm text-muted-foreground">Simplifies confusing public-service processes into clear, actionable steps.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-primary hover:underline">Home</a></li>
                <li><a href="/faq" className="text-primary hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Official Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Passport</a></li>
                <li><a href="https://www.nsdl.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PAN</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>Government Process Guide. Based on official government sources.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
