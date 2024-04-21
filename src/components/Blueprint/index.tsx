import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

Card
import { Steps, Response, Presentation } from "../icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Steps />,
    title: "Sharpen Your Skills and Answers",
    description:
      "Combines mastering your art and practicing responses.",
  },
  {
    icon: <Response />,
    title: "Craft Engaging Responses",
    description:
      "Tailor your narrative to each specific job description.",
  },
  {
    icon: <Presentation />,
    title: "Project Confidence and Polish",
    description:
      "Combines confidence and professional presence.",
  }
];


export const Blueprint = () => {
  return (
    <section
      id="blueprint"
      className="container text-center py-24 sm:py-32"
    >
      {/* <h2 className="text-3xl md:text-4xl font-bold "> */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Welcome to{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Career Accelerator Program<br />
        </span>
        Where Ambitions Meet Endless Possibilities
      </h2>
      {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};