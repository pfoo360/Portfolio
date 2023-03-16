import { procedure } from "@/trpc/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import schema from "@/schema/";

const send = procedure
  .input(
    z.object({
      name: schema.name,
      email: schema.email,
      subject: schema.subject,
      message: schema.message,
    })
  )
  .mutation(
    async ({ ctx: { req, res }, input: { name, email, subject, message } }) => {
      try {
        //throw new TRPCError({ code: "FORBIDDEN", message: "test" });
        console.log(name, email, subject, message);
        return "nicwqe";
      } catch (error) {
        if (error instanceof TRPCError) {
          throw new TRPCError({ code: error.code, message: error.message });
        } else {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred, please try again later.",
          });
        }
      }
    }
  );

export default send;
