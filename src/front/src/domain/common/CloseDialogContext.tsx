import { createContext, useContext } from "react";

export const CloseDialogContext = createContext<() => void>(() => {});

export const useCloseDialog = () => useContext(CloseDialogContext);
