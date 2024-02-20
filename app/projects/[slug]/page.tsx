'use client'
import { mockProjects } from "@/app/mocks/projects"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { ProjectDetails } from "./_components/project-details"
import { ProjectSections } from "./_components/project-sections"

export default function ProjectPage() {
  const { slug } = useParams()
  const router = useRouter()

  const project = mockProjects.find((project) => project.slug === slug)

  if (!project) {
    router.push("/")
    return null
  }

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections}/>
    </>
  )
}
