import { Link } from "react-router-dom";
import { Gift } from "../icons";

const WhyThisCourse = () => {
  return (
    <section className="container  py-16 flex flex-col gap-8 justify-start items-start">
      <h2
        className="text-3xl md:text-4xl font-bold"
      >
        About the Course
      </h2>

      <h3
        className="text-xl  text-muted-foreground text-start"
      >
        This course is designed to equip you with the skills and knowledge you need to excel in your chosen field. Whether you're a beginner looking to get started or a seasoned professional wanting to level up your skills, this course has something to offer everyone.
      </h3>

      <ul className="list-none space-y-4">
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Gift /> Learn from industry experts with real-world experience.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Gift /> Gain practical skills applicable to real-world scenarios.
        </li>
        <li
          className="flex items-center justify-start gap-4 text-muted-foreground text-xl"
        >
          <Gift /> Build a strong foundation for your future career.
        </li>
      </ul>
      <h3
        className="text-xl  text-muted-foreground"
      >
        Don't miss out on this opportunity to take your skills to the next level. <Link to="/enroll" className={`text-primary hover:underline text-xl`}>Enroll</Link> today!
      </h3>
    </section>
  );
};

export default WhyThisCourse;