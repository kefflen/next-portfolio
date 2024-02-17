import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

type ExperienceItemProps = {}
export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={"/images/icons/project-title-icon.svg"}
            alt={"Icone de experiência"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/chbsw/"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ CHB Sistemas
          </a>
          <h4 className="text-gray-300">Estagiario de desenvolvimento</h4>
          <span>Entrou 2021 - Saiu 2022 - (1 ano)</span>
          <p className="text-gray-400">
            Desenvolvimento e manutenção de interfaces e rotinas utilizando
            Genexus. Enquanto estagiário, tive a oportunidade de trabalhar em
            novas funcionalides e trabalhar em uma otima equipe.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge tech="Genexus" />
          <TechBadge tech="C#" />
          <TechBadge tech="SQL" />
        </div>
      </div>
    </div>
  )
}
