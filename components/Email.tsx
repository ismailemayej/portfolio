"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

type Inputs = {
  email: string;
  name: string;
  message: string;
  subject: string;
};

const Email = () => {
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
        <Input
          isRequired
          type="text"
          label="Your full name"
          className="max-w-full mb-3"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Name is required</span>}

        <Input
          isRequired
          type="email"
          label="Email"
          className="max-w-full mb-3"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}

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
          type="text"
          className="max-w-full mb-3"
          label="Your Message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>Message is required</span>}

        <span className="flex justify-center items-center">
          <Button color="primary" className="mx-auto w-2/4" type="submit">
            Send
          </Button>
        </span>
      </form>
    </div>
  );
};

export default Email;
