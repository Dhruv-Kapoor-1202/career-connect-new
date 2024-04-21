import { Link } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import Pic from "@/assets/CourseImg.png";

const CourseHeader = () => {

  return (
    <section className='container text-center py-24'>

      <header className="bg-gradient-to-br from-primary/70 via-primary/90 to-primary/75  flex flex-col-reverse md:flex-row items-start justify-start md:items-center md:justify-between rounded-[30px] w-full overflow-hidden">
        {/* Main Content Container */}
        <div className="flex items-start justify-start py-11 px-7 sm:px-11 w-full">
          <div className="text-white text-start text-lg space-y-2 flex flex-col gap-6 justify-start items-start">
            {/* Course Details */}
            <h1 className="text-3xl md:text-4xl font-bold text-start">Career Accelerator Program</h1>

            <div className='flex flex-col gap-4 justify-start items-start'>
              <p className='text-lg md:text-xl'>Duration: 12 Weeks</p>
              <p className='text-lg md:text-xl'>Availability: Starts May 1st</p>
              <p className='text-lg md:text-xl'>Price: $499</p>
            </div>

            <Link
              to="/enroll"
              className={`${buttonVariants({ variant: "secondary", size: 'lg' })}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
        <img src={Pic} alt="Career Accelerator Program" className="object-cover w-full max-h-[500px] lg:max-h-[450px]" />
      </header>
    </section>
  );
};

export default CourseHeader;