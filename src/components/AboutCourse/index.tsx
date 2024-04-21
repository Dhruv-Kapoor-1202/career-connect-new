import { Tick } from "../icons";

const AboutCourse = () => {
  return (
    <section className="container  py-16 flex flex-col gap-8 justify-start items-start">
      <h2
        className="text-3xl md:text-4xl font-bold"
      >
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">About{" "}</span>the Course
      </h2>

      <h3
        className="text-xl  text-muted-foreground"
      >
        What the course entails?
      </h3>

      <ul className="list-none space-y-4">
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> We get to know you, assessing your skills and career aspirations to tailor our approach.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Your resume should reflect you. We tailor it to highlight your strength and goals.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Get specific training for the company you desire to be in.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> We dig through job opportunities to find the best match for your skills and ambitions
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> We prepare you for interviews thoroughly, covering all possible scenarios.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Get specific training for the companies you're targeting to stand out from the crowd.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Continous assessments help us identify and improve your weak spots.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> If you land the job great! If not, we reassess and gear up for another shot at success.
        </li>
      </ul>
    </section>
  );
};

export default AboutCourse;