import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import DC from "../../assets/testimonials/DC.png";
import DJ from "../../assets/testimonials/DC.jpg";
import DB1 from "../../assets/testimonials/DBJ1.jpg";
import DB2 from "../../assets/testimonials/DBJ2.jpg";
import RK from "../../assets/testimonials/RK.jpg";
import JN from "../../assets/testimonials/DBJ3.jpg";
import NP from "../../assets/testimonials/pic2.jpg";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  img: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "RK",
    name: "Rushikesh Kalane",
    userName: "@rushi_kalane2",
    comment:
      "Journey from the basics of communication to personal interview and GD all you covered was fantastic. I really enjoyed your sessions. What impressed me the most was your willingness to help the students.",
    img: RK,
  },
  {
    image: "DB",
    name: "Diotima Bose",
    userName: "@Diotima_Bose3",
    comment: "",
    img: DB1,
  },
  {
    image: "DB",
    name: "Diotima Bose",
    userName: "@Diotima_Bose3",
    comment: "",
    img: DB2,
  },
  {
    image: "DJ",
    name: "Er. Dikshant V. Jagtap",
    userName: "@dikshant.jagtap",
    comment:
      "I would like to thank the wonderful faculty for guiding us on communication skills behavioural skills and many more things. It made such a difference in my attitude.",
    img: DJ,
  },

  {
    image: "NP",
    name: "Naila Parween",
    userName: "@pnaila",
    comment:
      "Learning communication skills from the mentor was a pleasent and favourable experience for me. One thing I want to mention here is that earlier I used to think that since I have no professional experience, I can never convince my recruiter on certain things but you Instilled the confidence in me to use my academic achievments to better present my capabilities.",
    img: NP,
  },
  {
    image: "JN",
    name: "Jasleen",
    userName: "@jasleen_4",
    comment:
      "Thankyou so much for giving guidance to me because of you only I got such good results in IELTS.. Thankyou so much ma'am.",
    img: JN,
  },
  {
    image: "DC",
    name: "Dinesh Choudhary",
    userName: "@dinesh_choudhary",
    comment:
      "We learned something new in every lecture. The passion for teaching and expertise in the subject made it easy for us to understand the subject.",
    img: DC,
  },
];
// "Thankyou soo much ma'am for giving me the appropriate guidance since the begining till my exams <3",

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      {/* <h2 className="text-3xl md:text-4xl font-bold"> */}
      <h2 className="text-3xl md:text-4xl font-bold pb-8">
        Discover What
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Are Saying{" "}
        </span>
      </h2>

      {/* <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment, img }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden hover:bg-secondary/50 duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>{image}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <span className="sr-only hidden">{comment}</span>
                <img
                  src={img}
                  alt="testimonial image"
                  className="rounded-sm border border-border mt-2"
                />
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

{
  /* <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">What people are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="border rounded-md px-6 py-4">
            "CareerConnect helped me develop the skills I needed to land my dream job. The courses were well-structured and the instructors were very knowledgeable."
            <br />
            <span className="text-gray-600 font-bold block mt-2">- John Doe, Marketing Specialist</span>
          </blockquote>
          <blockquote className="border rounded-md px-6 py-4">
            "I was impressed by the variety of courses offered on CareerConnect. I was able to find exactly what I was looking for to advance my career."
            <br />
            <span className="text-gray-600 font-bold block mt-2">- Jane Smith, Software Engineer</span>
          </blockquote>
        </div>
      </section> */
}
