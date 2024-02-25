import { HorizontalDevider } from "@/app/components/devider"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { Project } from "@/app/types/Project"
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query"
import { HiArrowNarrowRight } from "react-icons/hi"
import { ProjectCard } from "./project-card"
import { fetchProjects } from "@/app/utils/fetch-projects"

const query = `
query MyQuery {
  projects {
    id
    slug
    summary
    techs {
      name
    }
    title
    thumbnail {
      url
    }
  }
}
`

export const HighlightProjects = async () => {
  const projects = await fetchProjects()

  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaque" />
      <HorizontalDevider className="mb-16" />
      <div>
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              title={project.title}
              slug={project.slug}
              description={project.summary}
              thumbnailUrl={project.thumbnail.url}
              techs={project.techs.map((tech) => tech.name)}
            />
            <HorizontalDevider className="my-16" />
          </div>
        ))}
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
