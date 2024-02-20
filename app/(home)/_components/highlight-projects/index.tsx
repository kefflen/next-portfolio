import { HorizontalDevider } from "@/app/components/devider"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowRight } from "react-icons/hi"
import { ProjectCard } from "./project-card"

const MockProjects = [
  {
    title: "Flashcards App",
    slug: "flashcard-app",
    description:
      "O projeto consiste em desenvolver um sistema de flash cards online que possa ser usado por educadores e estudantes para facilitar a memorização de conteúdos diversos. O sistema permite a criação de grupos de flash cards, que são cartões com uma pergunta e uma resposta, que devem ser revisados periodicamente. O sistema pode ser aplicado em diferentes áreas de conhecimento, como línguas estrangeiras, concursos públicos, entre outras. O objetivo do projeto é aproveitar as vantagens da tecnologia para tornar o processo de ensino e aprendizagem mais dinâmico e eficaz.",
    thumbnailUrl: "/projects/flashcard/Thumbnail.png",
    techs: [
      "React",
      "Express",
      "Styled Components",
      "Typescript",
      "Node",
      "Prisma",
    ],
  },
]

export const HighlightProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaque" />
      <HorizontalDevider className="mb-16" />
      <div>
        {MockProjects.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              title={project.title}
              slug={project.slug}
              description={project.description}
              thumbnailUrl={project.thumbnailUrl}
              techs={project.techs}
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
