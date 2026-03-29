import { createContext, useReducer } from "react";
export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "login":
      return { ...state, user: payload };
    case "logout":
      return { ...state, user: null };
    case "authReady":
      return { ...state, authReady: true };
    case "logout":
      return { ...state, user: false };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, {
    user: false,
    authReady: false,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
