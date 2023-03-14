import { createContext, useContext, FC } from "react";

const CardContext = createContext<null | { image: any; info: string }>(null);

export const useCardContext = () => {
  const cardContext = useContext(CardContext);
  if (!cardContext)
    throw new Error("Component must be used inside Card Component");

  return cardContext;
};

export default CardContext;
