{/* <section className="flex flex-col-reverse md:flex-row justify-between items-center px-4 py-16">
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-xl font-bold mb-4">Our Story</h2>
          <p>
            CareerConnect was founded with the mission of making quality education accessible to everyone. We believe that education is the key to unlocking career potential and achieving personal goals.
          </p>
          <p>
            Our platform offers a wide range of courses taught by industry experts. Whether you're looking to develop new skills, advance your career, or simply learn something new, CareerConnect has something for you.
          </p>
        </div>
        <img
          src="path/to/your/story_image.jpg" // Replace with your image path
          alt="CareerConnect - Story"
          className="w-full md:w-1/2 rounded-md shadow-md object-cover"
        />
      </section> */}

// import { Link } from "react-router-dom";
import Image from "../../assets/360-degree-prepration-of-interview.jfif.jpg";
// import { buttonVariants } from "../ui/button";

export const AboutStory = () => {
  return (
    <section className="container pb-24 pt-16 ">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Story
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            CareerConnect was founded with the mission of making quality education accessible to everyone. We believe that education is the key to unlocking career potential and achieving personal goals.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Our platform offers a wide range of courses taught by industry experts. Whether you're looking to develop new skills, advance your career, or simply learn something new, CareerConnect has something for you.
          </p>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            CareerConnect was founded with the mission of making quality education accessible to everyone. We believe that education is the key to unlocking career potential and achieving personal goals.
          </p>

          {/* <Link
            to="/about"
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Learn More
          </Link> */}


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