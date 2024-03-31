import Contact from "./Contact";
import Experience from "./Experience";
import Homepage from "./Homepage";

import Portfolio from "./Portfolio";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}
