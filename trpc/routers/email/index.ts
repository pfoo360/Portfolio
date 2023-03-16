import { router } from "@/trpc/trpc";
import send from "@/trpc/routers/email/procedures/send";

const emailRouter = router({ send });

export default emailRouter;
