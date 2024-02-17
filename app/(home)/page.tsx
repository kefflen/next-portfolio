import { Header } from "../components/header"
import { HeroSection } from "./_components/hero-section"
import { HighlightProjects } from "./_components/highlight-projects"
import { KnowTechs } from "./_components/know-techs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <KnowTechs />
      <HighlightProjects />
    </main>
  )
}
