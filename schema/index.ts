import { z } from "zod";

const schema = {
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    })
    .min(1, { message: "Name cannot be empty." })
    .max(25, { message: "Name exceeds limit." }),
  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Invalid email address." }),
  subject: z
    .string({
      required_error: "Subject is required.",
      invalid_type_error: "Subject must be a string.",
    })
    .min(1, { message: "Subject cannot be empty." })
    .max(40, { message: "Subject exceeds limit." }),
  message: z
    .string({
      required_error: "Subject is required.",
      invalid_type_error: "Subject must be a string.",
    })
    .min(1, { message: "Message cannot be empty." })
    .max(500, { message: "Message exceeds limit." }),
};

export default schema;
