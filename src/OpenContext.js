import { createContext, useContext } from "react";

const OpenContext = createContext({
  open: false,
  setOpen: () => {},
});

export const useOpen = () => useContext(OpenContext);
