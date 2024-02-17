import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {}
export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src={"/images/placeholder-project.png"}
          alt={"Thumbnail do projeto"}
          width={420}
          height={304}
          className="object-cover rounded-lg w-full h-[200px] lg:min-h-full sm:h-[300px] lg:w-[420px]"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            src={"/images/icons/project-title-icon.svg"}
            width={20}
            height={20}
            alt={""}
          />
          Nome do projeto
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
          numquam in suscipit. Rem nihil saepe quos omnis est! Ab asperiores,
          amet vel magnam dicta nihil itaque corporis perferendis placeat.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge tech="React" />
          <TechBadge tech="React" />
          <TechBadge tech="React" />
          <TechBadge tech="React" />
          <TechBadge tech="React" />
          <TechBadge tech="React" />
        </div>

        <Link href="/" className="">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
