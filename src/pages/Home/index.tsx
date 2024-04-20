import { AboutCC } from "@/components/AboutCC";
import { Blueprint } from "@/components/Blueprint";
import { CtaOne } from "@/components/CtaOne";
import Hero from "@/components/Hero";
import { MeetYourCaptain } from "@/components/MeetYourCaptain";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCC />
      <Blueprint />
      <MeetYourCaptain />
      <CtaOne />
    </>
  )
};

export default Home;