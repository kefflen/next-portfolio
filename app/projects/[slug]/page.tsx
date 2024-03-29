import NotFound from "@/app/not-found"
import { fetchProjects } from "@/app/utils/fetch-projects"
import { ProjectDetails } from "./_components/project-details"
import { ProjectSections } from "./_components/project-sections"
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query"

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  const projects = await fetchProjects()
  const project = projects.find((project) => project.slug === slug)
  if (!project) return NotFound()

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}
export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}
