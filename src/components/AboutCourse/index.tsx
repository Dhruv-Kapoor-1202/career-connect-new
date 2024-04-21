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
        What will you learn?
      </h3>

      <ul className="list-none space-y-4">
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Master the fundamentals of web development.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Build interactive and responsive user interfaces.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Create dynamic web applications using modern frameworks.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Tick /> Prepare for a successful career in web development.
        </li>
      </ul>
    </section>
  );
};

export default AboutCourse;