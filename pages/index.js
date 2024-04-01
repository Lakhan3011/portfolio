import Contact from "./Contact";
import Experience from "./Experience";
import Homepage from "./Homepage";
import { useState } from "react";
import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}  scroll-auto`}>
      <Homepage darkMode={darkMode} setDarkMode={setDarkMode} />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}
