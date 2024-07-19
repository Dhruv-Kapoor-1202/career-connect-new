import { AboutCC } from "@/components/AboutCC";
// import { AboutWebsite } from "@/components/AboutWebsite";
import { Blueprint } from "@/components/Blueprint";
import { CtaOne } from "@/components/CtaOne";
import { EightSteps } from "@/components/EightSteps";
import { FAQ } from "@/components/FAQ";
import Hero from "@/components/Hero";
import { MeetYourCaptain } from "@/components/MeetYourCaptain";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutWebsite /> */}
      <Blueprint />
      <AboutCC />
      <CtaOne />
      <EightSteps />
      <MeetYourCaptain />
      <FAQ />
    </>
  );
};

export default Home;
