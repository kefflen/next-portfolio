import { unstable_setRequestLocale } from "next-intl/server"
import { PageIntroduction } from "./_components/page-introduction"
import { ProjectsList } from "./_components/projects-list"

type ProjectsProps = {
  params: {
    locale: string
  }
}
export default function Projects({ params: { locale } }: ProjectsProps) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}
