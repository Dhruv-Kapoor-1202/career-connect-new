import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

export const AboutCta = () => {
  return (
    <section
      id="ctaOne"
      className="bg-muted/50 py-24 sm:py-32 my-24"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          {/* <h2 className="text-3xl md:text-4xl font-bold "> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-0">

            Master your job search with our simple{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              step-by-step{" "}
            </span>
            approach.
          </h2>
          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
            sed!
          </p> */}
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Link
            to="/course"
            className={`w-full md:mr-4 md:w-auto ${buttonVariants({ variant: "default" })} `}
          >
            Enroll Now
          </Link>
          <Link
            to="/course"
            className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
          >
            Explore More Courses
          </Link>
        </div>
      </div>
    </section>
  );
};