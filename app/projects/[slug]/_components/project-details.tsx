"use client"
import { Button } from "@/app/components/Button"
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/Project"
import { motion } from "framer-motion"
import { FiGlobe } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"

const MOCK_TECHS = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "nodejs",
  "express",
  "mongodb",
]

type ProjectDetailsProps = {
  project: Project
}
//TODO: Fix background image not showing
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-pattern.svg) no-repeat cemter/cover, url(${project.thumbnail.url}) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
      >
        {project.description}
      </motion.p>
      <div className="flex w-full flex-wrap gap-2 items-center justify-center max-w-[350px]">
        {project.techs.map((tech, index) => (
          <TechBadge
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            tech={tech.name}
          />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://www.github.com" target="_blank">
          <Button className="min-w-[180px]" disabled={!project.githubUrl}>
            <TbBrandGithub />
            Repositorio
          </Button>
        </a>
        <a href="https://www.github.com" target="_blank">
          <Button className="min-w-[180px]" disabled={!project.liveUrl}>
            <FiGlobe />
            Site online
          </Button>
        </a>
      </div>
      <Link href={"/projects"}>
        <HiArrowNarrowLeft size={20} className="text-emerald-500" />
        Voltar para projetos
      </Link>
    </section>
  )
}
