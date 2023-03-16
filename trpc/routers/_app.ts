import { router } from "@/trpc/trpc";
import emailRouter from "@/trpc/routers/email/";

export const appRouter = router({
  email: emailRouter,
});

export type AppRouter = typeof appRouter;
