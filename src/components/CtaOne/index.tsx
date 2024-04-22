import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

export const CtaOne = () => {
  return (
    <section
      id="ctaOne"
      className="bg-secondary py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-3 place-items-center">
        <div className="lg:col-start-1 lg:col-span-2">
          {/* <h2 className="text-3xl md:text-4xl font-bold "> */}
          {/* <h2 className="text-3xl md:text-4xl  font-bold mb-8 lg:mb-0 ">
            Make
            Your Job Search{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Chaos Free {" "}
            </span>
            Today
          </h2> */}
          <h2 className="text-3xl md:text-4xl  font-bold mb-8 lg:mb-0 ">
            Stop
            knocking on {" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Hundreds  {" "}
            </span>
            of Doors!{/* Today */}
          </h2>

          {/* <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            beatae. Ipsa tempore ipsum iste quibusdam illum ducimus eos. Quasi,
            sed!
          </p> */}
        </div>

        {/* <div className="space-y-4 lg:col-start-2"> */}
        <div className="space-y-4 ">
          <Link
            to="/enroll"
            className={`w-full md:mr-4 md:w-auto ${buttonVariants({ variant: "default" })} `}
          >
            Enroll Now
          </Link>
          <Link
            to="/about"
            className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};