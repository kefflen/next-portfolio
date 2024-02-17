import { SectionTitle } from "@/app/components/section-title"
import { TbBrandNextjs } from "react-icons/tb"
import { KnowTech } from "./know-tech"

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="competências" subtitle="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2022",
            }}
          />
        ))}
      </div>
    </section>
  )
}
