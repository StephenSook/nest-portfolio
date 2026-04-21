import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Tech } from "@/components/sections/tech";
import { Contact } from "@/components/sections/contact";

const KSU_ID = "https://ccse.kennesaw.edu/#ccse";

const teamJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollegeOrUniversity",
      "@id": KSU_ID,
      name: "Kennesaw State University",
      department: "College of Computing and Software Engineering",
      url: "https://ccse.kennesaw.edu/",
    },
    {
      "@type": "Person",
      "@id": "https://stephensookra.com/#stephen-sookra",
      name: "Stephen Sookra",
      url: "https://stephensookra.com",
      sameAs: [
        "https://www.linkedin.com/in/stephen-sookra-633682339/",
        "https://github.com/StephenSook",
      ],
      jobTitle: "Computer Science student",
      affiliation: { "@id": KSU_ID },
      knowsAbout: [
        "Frontend engineering",
        "React",
        "TypeScript",
        "Next.js",
        "Accessibility",
        "Design systems",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://tylindelaney.dev/#tylin-delaney",
      name: "Tylin Delaney",
      url: "https://tylindelaney.dev",
      sameAs: [
        "https://www.linkedin.com/in/tylin-delaney/",
        "https://github.com/tylinndd",
      ],
      jobTitle: "Computer Science student",
      affiliation: { "@id": KSU_ID },
      knowsAbout: [
        "Backend engineering",
        "Python",
        "FastAPI",
        "Retrieval-Augmented Generation",
        "LangChain",
        "ChromaDB",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.linkedin.com/in/brenden-bryant-422464329/#brenden-bryant",
      name: "Brenden Bryant",
      sameAs: [
        "https://www.linkedin.com/in/brenden-bryant-422464329/",
      ],
      jobTitle: "Computer Science student",
      affiliation: { "@id": KSU_ID },
      knowsAbout: ["Design direction", "Typography", "Brand identity"],
    },
  ],
};

export default function Home() {
  return (
    <main id="main">
      <script type="application/ld+json">{JSON.stringify(teamJsonLd)}</script>
      <Hero />
      <About />
      <Team />
      <FeaturedProject />
      <Tech />
      <Contact />
    </main>
  );
}
