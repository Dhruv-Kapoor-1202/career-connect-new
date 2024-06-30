import { AboutCC } from "@/components/AboutCC";
// import { AboutWebsite } from "@/components/AboutWebsite";
import { Blueprint } from "@/components/Blueprint";
import { CtaOne } from "@/components/CtaOne";
import { EightSteps } from "@/components/EightSteps";
import Hero from "@/components/Hero";
import { MeetYourCaptain } from "@/components/MeetYourCaptain";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutWebsite /> */}
      <AboutCC />
      <Blueprint />
      <CtaOne />
      <EightSteps />
      <MeetYourCaptain />
    </>
  );
};

export default Home;
