
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"

import Pic from "../../assets/pics/Pic-12.jpg"


export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl max-w-[15ch] font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
              Holding Your Hand From Preparation To Placement
            </h1>
            {/* <p className="mx-auto max-w-[700px] text-gray-50 md:text-xl dark:text-gray-400"> */}
            <p className="mx-auto max-w-[700px] sm:text-xl dark:text-gray-400">
              Learn the latest technologies and frameworks to build stunning web applications. Enroll in our
              comprehensive course today.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/enroll"
              className={`${buttonVariants({ variant: "default", size: 'lg' })}`}
            >
              Enroll Now
            </Link>
            <Link
              to="/about"
              className={`${buttonVariants({ variant: "outline", size: 'lg' })}`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="hidden bg-muted sm:block absolute inset-0 -z-10 overflow-hidden"> */}
      <div className=" bg-muted block absolute inset-0 -z-10 overflow-hidden">
        <img
          src={Pic}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover blur-sm opacity-45 dark:opacity-100  dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  )
}