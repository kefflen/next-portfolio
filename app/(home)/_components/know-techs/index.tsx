import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./know-tech"

type KnowTechsProps = {
  techs: {
    icon: JSX.Element
    name: string
    startDate: string
  }[]
}

export const KnowTechs = ({
  techs
}: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="competências" subtitle="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs.map((tech, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: tech.icon,
              name: tech.name,
              startDate: tech.startDate}
            }
          />
        ))}
      </div>
    </section>
  )
}
