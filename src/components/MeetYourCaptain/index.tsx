// import { Link } from "react-router-dom";
import Image from "../../assets/pics/Pic-1.jpg";
import { buttonVariants } from "../ui/button";

export const MeetYourCaptain = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Meet Your{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Career Captain
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Meet the coach who keeps it real. With certifications from the
            National Skills Development Corporation and Career Development
            Alliance-USA.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            I’m not just here to guide your career, I’m here to turn it into a
            blockbuster.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            7+ Years of Experience, 5000+ Wins
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Let’s make your journey as impressive as your goals!
          </p>

          <a
            href="https://about.careerconnect.co.in/"
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Learn More
          </a>
        </div>

        <img
          src={Image}
          // className="w-full  object-contain"
          className="object-cover h-[450px] w-full  md:h-[600px] lg:h-[600px] rounded-[30px] shrink shadow-md"
          alt="About Career Connect"
        />
      </div>
    </section>
  );
};
