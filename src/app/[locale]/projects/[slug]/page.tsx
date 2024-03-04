import NotFound from '@/app/[locale]/not-found'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
import { fetchProjects } from '@/app/utils/fetch-projects'
import { ProjectDetails } from './_components/project-details'
import { ProjectSections } from './_components/project-sections'
import { unstable_setRequestLocale } from 'next-intl/server'

type ProjectPageProps = {
  params: {
    slug: string,
    locale: string
  }
}

export default async function ProjectPage({
  params: { slug, locale },
}: ProjectPageProps) {
  unstable_setRequestLocale(locale)
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
