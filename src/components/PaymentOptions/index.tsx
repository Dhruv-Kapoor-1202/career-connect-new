import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const PaymentOptions = () => {

  return (
    <section
      className="container text-center py-16 "
    >
      <div className="bg-muted/50 border rounded-lg py-12 text-start p-8 flex flex-col gap-8">
        {/* Heading with blue color and bold font */}
        <h2 className="text-3xl md:text-4xl font-bold">Can I make a{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Bank Transfer{" "}or UPI payment?</span>
        </h2>

        <p className="text-xl text-muted-foreground">
        Yes, Sure, you can do a bank transfer or UPI payment for India only using the Pay button provided below. After successful payment, you have to send a request through email at jshubhangi.official@gmail.com. 

Make sure to mention the course name in the email subject and attach a screenshot of thepayment with the transaction ID. This mode of payment generally takes 24 hours to process.
        </p>

        {/* Second Paragraph with Light Gray Background */}
        <div
          className="  rounded-md flex"
        >
          {/* <p className="text-xl text-gray-700">
            In the meantime, if you have any questions about payment options, please don't hesitate to contact our support team. We're always happy to help!
          </p> */}
          <Link to="/enroll" className={`${buttonVariants({ variant: "default", size: "lg" })}`}>
            Pay Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;