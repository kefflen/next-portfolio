import { Header } from "../components/header"
import { HeroSection } from "./_components/hero-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
    </main>
  )
}
