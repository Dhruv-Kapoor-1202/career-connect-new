import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 } from "../icons";

interface StepsProps {
  index: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: StepsProps[] = [
  {
    index: 1,
    title: "Profile Screening",
    description:
      "We begin by getting to know you and assessing your skills and career aspirations. This allows us to tailor our approach to your specific needs.",
    icon: <Step1 />,
  },
  {
    index: 2,
    title: "Customizing Resume",
    description:
      "Your resume is a reflection of you. We work with you to tailor it in a way that highlights your strengths and goals, making it stand out to potential employers.",
    icon: <Step2 />,
  },
  {
    index: 3,
    title: "Finding Right Opportunities For You",
    description:
      "Our team digs through job opportunities to find the best match for your skills and ambitions. We take into account your preferences and requirements to ensure we find the perfect fit.",
    icon: <Step3 />,
  },
  {
    index: 4,
    title: "360° Preparation For Interviews",
    description:
      "We believe in thorough preparation. Our program covers all aspects of interview preparation, including mock interviews, commonly asked questions, and strategies for handling different scenarios.",
    icon: <Step4 />,
  },
  {
    index: 5,
    title: "Tailer-Made Training For Specific Companies",
    description:
      "Stand out from the crowd by receiving specific training for the companies you're targeting. We provide insights into the company's culture, values, and interview processes to help you make a lasting impression.",
    icon: <Step5 />,
  },
  {
    index: 6,
    title: "Pulse Check & Improving Weak Areas",
    description:
      "Continuous assessment is key to your success. We regularly evaluate your progress and identify any weak areas that need improvement. Our team provides guidance and resources to help you strengthen your skills.",
    icon: <Step6 />,
  },
  {
    index: 7,
    title: "Follow-Up With Hiring Managers",
    description:
      "We take the lead in keeping you on the radar of hiring managers. We follow up on your behalf, ensuring that you stay top-of-mind throughout the hiring process.",
    icon: <Step7 />,
  },
  {
    index: 8,
    title: "No Need If You Get Hired; Otherwise Improvise & Prep For Another Opportunity",
    description:
      "If you land the job, congratulations! However, if you don't, we reassess your approach and gear up for another opportunity. We help you learn from the experience and improve your chances for future success.",
    icon: <Step8 />,
  }
];

export const EightSteps = () => {
  return (
    <>
      <section className="container text-center py-24 sm:py-32">

        <h2 className="text-3xl md:text-4xl font-bold">
          Career{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Accelerator{" "}
          </span>
          Program
        </h2>

        <p className="mt-4 mb-10 text-xl text-muted-foreground">
          Our Comprehensive 8-step process ensures that you land your dream job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 gap-y-10">
          {steps.map(({ index, title, description, icon }: StepsProps) => (
            <Card
              key={index}
              className="bg-muted/50 relative mt-8 flex flex-col justify-start items-center p-10 duration-300 hover:bg-primary/5 hover:"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                {/* <div className="absolute -top-12 rounded-full w-24 h-24 bg-secondary ring flex items-center justify-center"> */}
                <div className="absolute -top-5 rounded-full w-24 h-10 bg-primary flex items-center justify-center text-white font-bold">
                  Step{" "}{index}
                </div>
                <CardTitle className="grid gap-10 place-items-center">
                  <div className="outline-primary/50 outline flex justify-center items-center  rounded-full p-4 bg-primary/5 dark:bg-primary/10">
                    {icon}
                  </div>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-xl mt-4 mb-8">{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
};
