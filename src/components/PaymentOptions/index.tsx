import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const PaymentOptions = () => {

  return (
    <section
      className="container text-center py-16 "
    >
      <div className="bg-muted/50 border rounded-lg py-12 text-start p-8 flex flex-col gap-8">
        {/* Heading with blue color and bold font */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Can I make a Bank Transfer or UPI payment?</h2>

        <p className="text-xl text-muted-foreground">
          Currently, we only accept payments through credit/debit cards. However, we are actively working on adding support for bank transfers and UPI payments in the near future. Stay tuned for updates!
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