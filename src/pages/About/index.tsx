import { AboutCta } from '@/components/AboutCta';
import { AboutHero } from '@/components/AboutHero';
import { AboutStory } from '@/components/AboutStory';
import { AboutVision } from '@/components/AboutVision';
import { Testimonials } from '@/components/Testimonials';

const About = () => {
  return (
    <>
      {/* Header Section */}
      <AboutHero />

      {/* Story Section */}
      <AboutStory />

      {/* Primary CTA */}
      <AboutCta />

      {/* Testimonials */}
      <Testimonials />



      {/* Secondary CTA */}
      {/* <div className="text-center py-8">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
          Get Started Today
        </button>
      </div> */}

      {/* Vision Section */}
      <AboutVision />
    </>
  )
};

export default About;