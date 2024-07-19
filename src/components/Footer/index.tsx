import { Link } from "react-router-dom";
import Logo from "../../assets/CareerConnect.svg";
import LogoLight from "../../assets/cc-logo-text.jpg";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-background">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          {/* <Link to="/" className="font-bold text-xl flex">
            CareerConnect
          </Link> */}
          <Link to="/" className="font-bold text-xl flex  gap-1">
            <img src={Logo} className="h-14 dark:hidden" />
            <img src={LogoLight} className="h-14 dark:hidden" />
            <span className="hidden dark:block">CareerConnect</span>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              href="https://www.linkedin.com/in/shubhangi-jha935/"
              className="opacity-60 hover:opacity-100">
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/careerconnectofficial?igsh=MnVrdXZtNWE3OGhu"
              className="opacity-60 hover:opacity-100">
              Instagram
            </a>
          </div>

          {/* <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div> */}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              CareerConnect
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Other
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          {/* <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Features
            </a>
          </div> */}

          <div>
            <Link to="/course" className="opacity-60 hover:opacity-100">
              Course
            </Link>
          </div>

          <div>
            <Link to="/enroll" className="opacity-60 hover:opacity-100">
              Pricing
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Legal</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Terms & Conditions
            </a>
          </div>
        </div>
      </section>

      <hr className="w-11/12 mx-auto" />

      <section className="container py-7 text-center flex flex-col sm:flex-row gap-4 justify-between items-center">
        <h3>
          &copy; 2024 CareerConnect™. All Rights Reserved
          {/* <a
            target="_blank"
            href="
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            CareerConnect
          </a> */}
        </h3>

        <div className="flex justify-center items-center gap-2">
          <a
            href="https://www.instagram.com/careerconnectofficial?igsh=MnVrdXZtNWE3OGhu"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white  rounded-[50%] p-1 hover:scale-105 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50">
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhangi-jha935/"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white rounded-[50%] p-1 hover:scale-105 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
        </div>
      </section>
    </footer>
  );
};
