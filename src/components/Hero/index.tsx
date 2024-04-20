
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl max-w-[15ch] font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Holding Your Hand From Preparation To Placement
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Learn the latest technologies and frameworks to build stunning web applications. Enroll in our
              comprehensive course today.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className={`${buttonVariants({ variant: "default" })}`}
            >
              Enroll Now
            </Link>
            <Link
              to="/"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}