import { CreateNextContextOptions } from "@trpc/server/adapters/next";

const createContext = ({ req, res }: CreateNextContextOptions) => ({
  req,
  res,
});

export default createContext;
