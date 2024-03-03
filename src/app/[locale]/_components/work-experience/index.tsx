import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

type WorkExperienceProps = {
  texts: {
    title: string
    subtitle: string
    text: string
  }
}
export const WorkExperience = ({texts}: WorkExperienceProps) => {
  const { title, subtitle, text } = texts

  return (
    <section className="container py-16 flex flex-col gap-10 md:gap-4 md:flex-row lg:gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />
        <p className="text-gray-400 mt-6">
          {text}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  )
}
