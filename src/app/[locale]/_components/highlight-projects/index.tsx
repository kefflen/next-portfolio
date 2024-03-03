import { HorizontalDevider } from '@/app/components/devider'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { fetchProjects } from '@/app/utils/fetch-projects'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { ProjectCard } from './project-card'

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

type hightlightProjectsProps = {
  texts: {
    title: string
    subtitle: string
    goToProject: string
    wantToSeeMore: string
  }
}
export const HighlightProjects = async ({ texts }: hightlightProjectsProps) => {
  const { title, subtitle, goToProject, wantToSeeMore } = texts
  const projects = await fetchProjects()

  return (
    <section className="container py-16">
      <SectionTitle title={title} subtitle={subtitle} />
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
          <span className="text-gray-400">{wantToSeeMore}</span>
          <Link href="/projects" className="">
            {goToProject}
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
