import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {
  title: string
  slug: string
  description: string
  thumbnailUrl: string
  techs: string[]
}

export const ProjectCard = async ({
  title,
  slug,
  description,
  thumbnailUrl,
  techs,
}: ProjectCardProps) => {
  const t = await getTranslations()
  
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          src={thumbnailUrl}
          alt={"Thumbnail do projeto"}
          width={420}
          height={304}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            unoptimized
            src={"/images/icons/project-title-icon.svg"}
            width={20}
            height={20}
            alt={""}
          />
          {title}
        </h3>
        <p className="text-gray-400 my-6">{description}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {techs.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        <Link href={`/projects/${slug}`} className="">
          {t('home.highlightProjects.components.projectCard.seeMore')}
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
