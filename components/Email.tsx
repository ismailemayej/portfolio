"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

type Inputs = {
  first_name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
};

const Email = () => {
  const handleToast = () => {
    toast.success("Message sent successfully");
  };
  const form = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_eugtszt",
          "template_z6jw98r",
          form.current,
          "vUC2eoeH4DgDlVEI3"
        )
        .then(
          () => {
            console.log(form.current);
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="w-full">
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <div className="lg:flex gap-2">
          <Input
            isRequired
            color="warning"
            type="text"
            label="Your first name"
            className="max-w-full mb-3"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && <span>first Name is required</span>}
          <Input
            color="warning"
            type="text"
            label="Your last name"
            className="max-w-full mb-3"
            {...register("lastname", { required: true })}
          />
        </div>

        <div className="lg:flex gap-2">
          <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-full mb-3"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email is required</span>}
          <Input
            type="text"
            label="phone"
            className="max-w-full mb-3"
            {...register("phone", { required: true })}
          />
        </div>

        <Input
          isRequired
          type="text"
          label="Subject"
          className="max-w-full mb-3"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>Subject is required</span>}

        <Textarea
          isRequired
          color="secondary"
          type="text"
          className="max-w-full mb-3"
          label="Your Message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>Message is required</span>}

        <span className="flex justify-center items-center">
          <Button
            onClick={handleToast}
            color="primary"
            className="mx-auto w-1/4"
            type="submit"
          >
            Send
          </Button>
        </span>
      </form>
    </div>
  );
};

export default Email;
