import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
// import cubeLeg from "../assets/cube-leg.png";
import Image from "../../assets/AboutCC-2.jpeg";
import { Tick } from "../icons";


interface AboutProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const aboutList: AboutProps[] = [
  {
    title: "Simplifies job searches with personalized guidance.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Tick />,
  },
  {
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Tick />,
  },
  {
    title: "Task Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <Tick />,
  },
];

export const AboutCC = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">

        <img
          src={Image}
          // className="w-full  object-contain"
          className="object-cover h-[450px] w-full  md:h-[600px] lg:h-[600px] rounded-[30px] shrink shadow-md"
          alt="About Career Connect"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Career Connect
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Career Connect addresses early career challenges by simplifying job searches, providing tailored early-career support, and aligning upskilling with career goals.
          </p>

          <div className="flex flex-col gap-8">
            {aboutList.map(({ icon, title, description }: AboutProps) => (
              <Card key={title}>
                {/* <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4"> */}
                <CardHeader className="flex md:flex-row justify-start items-center gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    {/* <CardDescription className="text-md mt-2">
                      {title}
                    </CardDescription> */}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};