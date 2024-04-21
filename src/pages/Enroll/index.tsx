import { Link } from "react-router-dom";
import QR from "../../assets/QR-GPay.jpg"
import { buttonVariants } from "@/components/ui/button";

const Enroll = () => {
  return (
    <>
      <section className='w-full flex flex-col gap-11  md:flex-row container '>
        {/* content */}
        <div className="w-full  flex flex-col justify-start items-center md:items-start pb-0 md:pb-11 py-11 ">
          <div className=' flex flex-col justify-start gap-7'>
            {/* Heading */}
            <div className="text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Career Accelerator Program
              </h1>
            </div>
            <div>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>You will get access to the live classes for this course</p>
              {/* <p className='leading-7 [&:not(:first-child)]:mt-6 '>You will get access to the live classes for this course</p> */}

            </div>

            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Average Delivery Time
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6  ">
                It may take anywhere between 6 to 24 hours for confirming your subscription to the course
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0  ">
                Contact Us
              </h2>
              <div className="flex flex-col gap-2">
                <div className='flex justify-start  items-center gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>

                  <p className="text-sm font-medium leading-none">
                    8826 738 755
                  </p>
                </div>
                <div className='flex justify-start  items-center gap-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>

                  <p className="text-sm font-medium leading-none">
                    jshubhangi.official@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* image */}
        <div className='w-full md:w-[60%] flex flex-col justify-start items-center bg-secondary p-11'>
          <img src={QR} alt="" className='animate-none w-[300px]   md:w-full  lg:h-[500px] lg:w-[350px] object-cover rounded-[30px] border border-slate-300 ' />

          <div className='flex flex-col gap-4 py-8'>
            <p className="leading-7 [&:not(:first-child)]:mt-6">After Doing the payment, please fill this form</p>
            {/* <a href="" target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center bg-blue-500 hover:bg-blue-600 hover:shadow-blue-300 duration-300 shadow-md p-4 text-lg text-white font-medium rounded-lg '>Register</a> */}
            <Link to="/" className={`${buttonVariants({ variant: "default" })}`}>Register</Link>

          </div>
        </div>
      </section>
    </>
  )
};

export default Enroll;