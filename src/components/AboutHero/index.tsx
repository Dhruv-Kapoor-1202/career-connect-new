import Pic from "@/assets/ContactUs.jpg"

export const AboutHero = () => {
  return (
    <header className="container py-24 sm:py-32 flex flex-col justify-start items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-[30ch]">
        Empowering Your{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Career Journey{" "}
        </span>
        with{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Career Connect
        </span>
      </h2>
      <div className="text-center mb-8 relative overflow-hidden w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center rounded-[30px]">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Career{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Connect
          </span>
        </h3>
        <p className="text-white mx-auto max-w-[700px] sm:text-xl">Where Ambition meets endless possibilities.</p>
        <img
          src={Pic}
          alt="CareerConnect - Education Platform"
          className="object-cover h-[450px] w-full  md:h-[600px] lg:h-[600px]  shrink shadow-md absolute inset-0 -z-10 blur-sm brightness-[0.6]  dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      {/* <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center"> */}

      {/* <img
        src={Pic}
        alt="CareerConnect - Education Platform"
        className="object-cover h-[450px] w-full  md:h-[600px] lg:h-[600px] rounded-[30px] shrink shadow-md absolute inset-0"
      /> */}
      {/* </div> */}
    </header>
  )
};
