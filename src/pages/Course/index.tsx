import AboutCourse from "@/components/AboutCourse";
import CourseHeader from "@/components/CourseHeader";
import PaymentOptions from "@/components/PaymentOptions";
import WhyThisCourse from "@/components/WhyThisCourse";

const Course = () => {
  return (
    <>
      {/* <section className="container text-center py-24 "> */}
      <CourseHeader />
      <AboutCourse />
      <WhyThisCourse />
      <PaymentOptions />
      {/* </section> */}
    </>
  )
};

export default Course;