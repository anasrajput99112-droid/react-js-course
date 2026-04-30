import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className="nav2">
      <h4>home</h4>
      <h4>about</h4>
      <h4>contact</h4>
      <h4>service</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Nav2;
