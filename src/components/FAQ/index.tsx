import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  
  {
    question: "Can I make a bank Transfer or UPI  Payment?",
    answer: "Yes, Sure, you can do a bank transfer or UPI payment for India only using the Pay button provided below. After successful payment, you have to send a request through email at jshubhangi.official@gmail.com. Make sure to mention the course name in the email subject and attach a screenshot of thepayment with the transaction ID. This mode of payment generally takes 24 hours to process.",
    value: "item-1",
  },
  {
    question: "Can I choose a flexible time to complete the career connect program?",
    answer:
      "Some parts of the programs are flexible whereas, coaching sessions are scheduled, which we expect you to follow.",
    value: "item-2",
  },
  {
    question:
      "What is the usual timeline for seeing results and progress in my career after completing the Career Connect course? ",
    answer:
      "(Within 60-90 days) usual recruitment process time",
    value: "item-3",
  },
  {
    question: "Are there any additional costs beyond the stated course charges for materials, resources, or assessments? ",
    answer: "No hidden charges",
    value: "item-4",
  },
  {
    question:
      "Are there any discounts or promotions currently available for the Career Connect program? ",
    answer:
      "Yes we have discounts occassionally.",
    value: "item-5",
  },
  {
    question:
      "How does Career Connect ensure my job search is chaos-free, especially for freshers? ",
    answer:
      "A: We understand the unique challenges freshers face. At Career Connect, our method involves personalized strategies, easy-to-follow steps,, making your job search stress-free.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-16 sm:pb-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <Link
          to="/contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </Link>
      </h3>
    </section>
  );
};