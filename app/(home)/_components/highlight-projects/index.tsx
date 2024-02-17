import { HorizontalDevider } from "@/app/components/devider"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowRight } from "react-icons/hi"
import { ProjectCard } from "./project-card"

export const HighlightProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaque" />
      <HorizontalDevider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDevider className="my-16" />
        <ProjectCard />
        <HorizontalDevider className="my-16" />
        <ProjectCard />
        <HorizontalDevider className="my-16" />
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="">
            Ver todos os projetos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
