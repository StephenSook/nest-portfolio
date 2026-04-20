import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Tech } from "@/components/sections/tech";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Team />
      <FeaturedProject />
      <Tech />
      <Contact />
    </main>
  );
}
