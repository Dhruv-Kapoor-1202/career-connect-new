import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Pic from "@/assets/ContactUs.jpg";
import emailjs from "emailjs-com";
import { toast } from "sonner";

type FormDataProps = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const SERVICE_ID = "service_60gqiic";
  const TEMPLATE_ID = "template_rddx17e";
  const PUBLIC_KEY = "vUP-o23g4yv-jDkMT";

  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Replace placeholders with your actual EmailJS service ID, template ID, and user ID
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        // formRef.current,
        event.currentTarget,
        PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
        // setSuccess(true);
        toast("Message Sent");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        // setError(true);
        toast.error("Error. Could Not Send Message.");
      });
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="container flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-balance text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="m@example.com"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[100px]"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          alt="Contact Us"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          height="1080"
          src={Pic}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920"
        />
      </div>
    </div>
  );
}
