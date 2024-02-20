import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex flex-col gap-10 md:gap-4 md:flex-row lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiência profissional"
          subtitle="experiências"
        />
        <p className="text-gray-400 mt-6">
          Trabalho com desenvolvimento web há mais de 5 anos, e ao longo desse
          tempo tive a oportunidade de trabalhar em projetos incríveis, com
          pessoas incríveis.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  )
}
