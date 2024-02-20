import { Link } from "@/app/components/link"
import { mockProjects } from "@/app/mocks/projects"
import { ProjectCard } from "./project-card"

export const ProjectsList = () => {
  const projects = mockProjects
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <ProjectCard
            key={project.slug}
            name={project.title}
            summary={project.summary}
            techs={project.techs}
            thumbnailUrl={project.thumbnailUrl}
          />
        </Link>
      ))}
    </section>
  )
}
