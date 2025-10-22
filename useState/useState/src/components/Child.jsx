import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const Child = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1>{theme}</h1>
    </>
  );
};
