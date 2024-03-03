import Image from "next/image"

type ProjectCardProps = {
  name: string
  summary: string
  techs: string[]
  thumbnailUrl: string
}
export const ProjectCard = ({
  name,
  summary,
  techs,
  thumbnailUrl,
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          alt="Projeto"
          width={380}
          height={200}
          unoptimized
          src={thumbnailUrl}
          className="w-full h-full object-cover duration-500 group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500">
          {name}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">{summary}</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {techs.join(", ")}
        </span>
      </div>
    </div>
  )
}
